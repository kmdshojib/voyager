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
import { Loader2 } from "lucide-react"
import { useCallback } from "react"
import { useSignUpUserMutation } from "@/lib/services/authServices"
import { useRouter } from "next/navigation"
const FormSchema = z.object({
  email: z.string().min(2, {
    message: "Email must be at least 4 characters.",
  }),
  password: z.string().min(4, {
    message: "Password must be at least 4 characters.",
  }),
  name: z.string().min(4, {
    message: "Name must be at least 4 characters.",
  }),
})

export default function SignUp() {
  const [signUpUserMutation, { isLoading }] = useSignUpUserMutation()
  const router = useRouter()
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
      name: ""
    },
  })

  const onSubmit = useCallback(async (data: z.infer<typeof FormSchema>) => {
    try {
      const result = await signUpUserMutation(data).unwrap();
      if (result.status === 200) {
        const { user, message } = result;
        console.log({ message, user });
        toast({
          title: message,
          variant: "default",
          className: "bg-green-500 text-white", 
          duration: 3000, 
        });
        setTimeout(() => {
          router.push("/signin")
        }, 500);

      }
    } catch (err) {
      console.error(err);
    }
  }, [router,signUpUserMutation]);


  return (
    <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800 my-5 ">
      <h1 className="text-2xl font-bold text-center">SignUp</h1>
      <p className="text-sm text-gray-600 text-center">Sign up to create your account</p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col justify-between">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-gray-600 mb-2">Name</FormLabel>
                <FormControl>
                  <Input placeholder="Full Name" {...field} className="" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-gray-600 mb-2 mt-2">Email</FormLabel>
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
          {
            isLoading ? (
              <Button type="submit" className="mt-3" disabled>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              </Button>
            ) : (
              <Button type="submit" className="mt-3">Sign Up</Button>
            )
          }
          <p className="text-sm text-center text-gray-600 mt-2">Have an account?
            <Link href="/signin" rel="noopener noreferrer" className="focus:underline hover:underline hover:text-rose-500"> Sign In</Link>
          </p>
          <div className="flex items-center w-full my-4">
            <hr className="w-full text-gray-600" />
            <p className="px-3 text-gray-600">OR</p>
            <hr className="w-full text-gray-600" />
          </div>

        </form>
        <Button variant={"outline"} className="w-full">
          <FcGoogle className="mr-2 h-4 w-4" /> Sign up with Google
        </Button>
      </Form>
    </div>
  )
}
