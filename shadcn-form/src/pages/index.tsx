import Image from "next/image"
import { Inter } from "next/font/google"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"

import { useForm } from "react-hook-form"
import { registerSchema } from "@/validators/auth"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Toaster } from "@/components/ui/toaster"

type Input = z.infer<typeof registerSchema>

export default function Home() {
  const form = useForm<Input>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      year: "",
      password: "",
      confirmPassword: ""
    }
  })

  const { toast } = useToast()

  function onSubmit(data: Input) {
    toast({
      title: "Aqui está seu formulário:",
      description: JSON.stringify(data, null, 4)
    })
  }

  return (
    <div>
      <header>
        <h1 className="text-center pt-12 text-4xl">Shadcn Form</h1>
      </header>
      <main className="flex justify-center p-6">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Registre-se</CardTitle>
            <CardDescription>Comece sua jornada hoje</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-3"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome</FormLabel>
                      <FormControl>
                        <Input placeholder="Digite seu nome..." {...field} />
                      </FormControl>
                      <FormDescription>
                        Por favor coloque seu nome completo
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-mail</FormLabel>
                      <FormControl>
                        <Input placeholder="Digite seu e-mail..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="year"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ano</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione um ano" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {[2024, 2023, 2022, 2021].map(year => {
                            return (
                              <SelectItem value={year.toString()} key={year}>
                                {year}
                              </SelectItem>
                            )
                          })}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Senha</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Digite sua senha..."
                          type="password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirme a Senha</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Confirme sua senha..."
                          type="password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Submit</Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </main>

      <Toaster />
    </div>
  )
}
