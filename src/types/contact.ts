export type ContactFormFields = {
  name: string;
  email: string;
  phone: string;
  message: string;
  website: string;
};

export type ContactFieldErrors = {
  name?: string;
  email?: string;
  message?: string;
};

export type ContactApiResponse = {
  ok?: boolean;
  error?: string;
  fields?: string[];
};
