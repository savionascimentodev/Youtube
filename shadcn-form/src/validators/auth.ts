import { z } from "zod"

export const registerSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Seu nome deve ter no mínimo 3 caracteres." })
    .max(255),
  email: z.string().email({ message: "Insira um e-mail válido." }),
  year: z.string(),
  password: z
    .string()
    .min(6, { message: "Sua senha deve ter no mínimo 6 caracteres." })
    .max(20),
  confirmPassword: z
    .string()
    .min(6, { message: "Sua senha deve ter no mínimo 6 caracteres." })
    .max(20)
})
