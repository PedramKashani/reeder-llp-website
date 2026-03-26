export const LIMITS = {
  name: 200,
  email: 320,
  phone: 80,
  messageMin: 3,
  message: 10_000,
} as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(s: string): boolean {
  return EMAIL_RE.test(s);
}
