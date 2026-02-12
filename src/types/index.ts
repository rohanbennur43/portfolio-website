export interface Project {
  id: string;
  title: string;
  description: string;
  demoUrl: string;
  githubUrl: string;
  tags?: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export type FormStatus = "idle" | "submitting" | "success" | "error";
