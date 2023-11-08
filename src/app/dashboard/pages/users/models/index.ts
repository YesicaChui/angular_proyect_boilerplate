export interface User {
  id: number
  name: string;
  lastName: string
  email: string
  pais?:string
  tipo?:string
  token: string;
  role?: string;
  password?: string;
}