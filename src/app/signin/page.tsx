"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { FcGoogle } from "react-icons/fc";
import Link from "next/link"

const FormSchema = z.object({
  email: z.string().min(2, {
    message: "Email must be at least 2 characters.",
  }),
  password: z.string().min(4, {
    message: "Password must be at least 4 characters.",
  }),
})

export default function Signin() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
    console.log(data)
  }

  return (
    <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800 my-5 ">
      <h1 className="text-2xl font-bold text-center">Signin</h1>
      <p className="text-sm text-gray-600 text-center">Sign in to access your account</p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col justify-between">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-gray-600 mb-2">Email</FormLabel>
                <FormControl>
                  <Input placeholder="leroy@jenkins.com" {...field} className="" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="mt-2">
                <FormLabel className="block text-gray-600 mb-2">Password</FormLabel>
                <FormControl>
                  <Input placeholder="*****" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="mt-3">Sign In</Button>
          <p className="text-sm text-center text-gray-600 mt-2">Don't have account?
            <Link href="#" rel="noopener noreferrer" className="focus:underline hover:underline hover:text-rose-500"> Sign up here</Link>
          </p>
          <div className="flex items-center w-full my-4">
            <hr className="w-full text-gray-600" />
            <p className="px-3 text-gray-600">OR</p>
            <hr className="w-full text-gray-600" />
          </div>
          
        </form>
        <Button variant={"outline"} className="w-full">
          <FcGoogle className="mr-2 h-4 w-4" /> Sign in with Google
        </Button>
      </Form>
    </div>
  )
}
