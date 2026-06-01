"use client";

import { useCallback, useEffect, useRef, useState, type RefObject } from "react";
import Image from "next/image";
import { CURSOR_BADGE_IMAGES } from "@/data/cursorBadgeImages";

const OFFSET_X = 20;
const OFFSET_Y = 20;
const ROTATE_MS = 450;
const IDLE_MS = 500;
const IDLE_RESET_MS = 64;
const DESKTOP_MQ = "(min-width: 768px) and (pointer: fine)";

type CursorBadgeTrailProps = {
  rootRef: RefObject<HTMLElement | null>;
};

export function CursorBadgeTrail({ rootRef }: CursorBadgeTrailProps) {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [badgeIdx, setBadgeIdx] = useState(0);

  const shellRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const lastMoveRef = useRef(0);
  const lastIdleScheduleRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const idleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rotateTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const movingRef = useRef(false);

  const stopRotation = useCallback(() => {
    if (rotateTimerRef.current != null) {
      clearInterval(rotateTimerRef.current);
      rotateTimerRef.current = null;
    }
  }, []);

  const startRotation = useCallback(() => {
    if (CURSOR_BADGE_IMAGES.length === 0) return;
    stopRotation();
    rotateTimerRef.current = setInterval(() => {
      setBadgeIdx((i) => (i + 1) % CURSOR_BADGE_IMAGES.length);
    }, ROTATE_MS);
  }, [stopRotation]);

  const clearIdleTimer = useCallback(() => {
    if (idleTimerRef.current != null) {
      clearTimeout(idleTimerRef.current);
      idleTimerRef.current = null;
    }
  }, []);

  const finishIfIdle = useCallback(function finishIfIdleInner() {
    const elapsed = performance.now() - lastMoveRef.current;
    if (elapsed < IDLE_MS) {
      // Use the inner function reference so ESLint doesn't flag self-referencing
      // the outer `finishIfIdle` const during its initializer.
      idleTimerRef.current = setTimeout(
        finishIfIdleInner,
        IDLE_MS - elapsed
      );
      return;
    }
    movingRef.current = false;
    stopRotation();
    setVisible(false);
    idleTimerRef.current = null;
  }, [stopRotation]);

  const scheduleIdleThrottled = useCallback(() => {
    const now = performance.now();
    if (
      now - lastIdleScheduleRef.current < IDLE_RESET_MS &&
      idleTimerRef.current !== null
    ) {
      return;
    }
    lastIdleScheduleRef.current = now;
    clearIdleTimer();
    idleTimerRef.current = setTimeout(finishIfIdle, IDLE_MS);
  }, [clearIdleTimer, finishIfIdle]);

  const armIdleImmediate = useCallback(() => {
    lastIdleScheduleRef.current = performance.now();
    clearIdleTimer();
    idleTimerRef.current = setTimeout(finishIfIdle, IDLE_MS);
  }, [clearIdleTimer, finishIfIdle]);

  const applyPosition = useCallback(() => {
    const el = shellRef.current;
    if (!el) return;
    const { x, y } = posRef.current;
    el.style.transform = `translate3d(${x + OFFSET_X}px, ${y + OFFSET_Y}px, 0)`;
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia(DESKTOP_MQ);
    const sync = () => setEnabled(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!enabled || CURSOR_BADGE_IMAGES.length === 0) return;

    const root = rootRef.current;
    if (!root) return;

    const onPointerMove = (e: PointerEvent) => {
      lastMoveRef.current = performance.now();
      posRef.current = { x: e.clientX, y: e.clientY };
      if (rafRef.current == null) {
        rafRef.current = requestAnimationFrame(() => {
          rafRef.current = null;
          applyPosition();
        });
      }

      if (!movingRef.current) {
        movingRef.current = true;
        setVisible(true);
        startRotation();
        armIdleImmediate();
      } else {
        scheduleIdleThrottled();
      }
    };

    root.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => {
      root.removeEventListener("pointermove", onPointerMove);
      clearIdleTimer();
      stopRotation();
      if (rafRef.current != null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [
    enabled,
    rootRef,
    applyPosition,
    scheduleIdleThrottled,
    armIdleImmediate,
    startRotation,
    stopRotation,
    clearIdleTimer,
  ]);

  useEffect(() => {
    if (!enabled) return;
    for (const src of CURSOR_BADGE_IMAGES) {
      const img = new window.Image();
      img.src = src;
    }
  }, [enabled]);

  if (!enabled || CURSOR_BADGE_IMAGES.length === 0) return null;

  const src = CURSOR_BADGE_IMAGES[badgeIdx]!;
  const scale = visible ? 1 : 0.95;

  return (
    <div
      ref={shellRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[25] max-h-[9.1125rem] max-w-[15.1875rem] will-change-transform"
      style={{ transform: "translate3d(0px, 0px, 0)" }}
    >
      <div
        className={`origin-top-left rounded-md shadow-[0_8px_32px_rgba(0,0,0,0.45),0_0_0_1px_rgba(255,255,255,0.06)] ring-1 ring-white/10 transition-[opacity,transform] duration-500 ease-out ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        style={{ transform: `scale(${scale})` }}
      >
        <Image
          src={src}
          alt=""
          width={243}
          height={146}
          className="h-auto max-h-[9.1125rem] w-auto max-w-[15.1875rem] rounded-md object-contain"
          draggable={false}
          priority={false}
        />
      </div>
    </div>
  );
}
