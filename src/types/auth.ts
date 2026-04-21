export interface SignupData {
    username: string;
    name?: string;
    email: string;
    password: string;
    bio?: string;
    location?: string;
    socialLinks?: {
      github?: string;
      linkedin?: string;
      twitter?: string;
    };
  }
  
export interface AuthResponse {
    user: SignupData;
    token: string;
    message?: string;
}