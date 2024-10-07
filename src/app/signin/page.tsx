"use client";
import { useEffect } from "react"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useSigninUserMutation } from "@/lib/services/authServices";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { loginUser } from "@/lib/features/authSlice";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { useCallback } from "react";
import { signIn, getSession } from "next-auth/react";

const FormSchema = z.object({
  email: z.string().min(2, {
    message: "Email must be at least 2 characters.",
  }),
  password: z.string().min(4, {
    message: "Password must be at least 4 characters.",
  }),
});

export default function Signin() {
  const [signinMutation, { isLoading }] = useSigninUserMutation();

  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  useEffect(() => {
    const fetchSession = async () => {
      const session = await getSession();

      if (session?.user) {
        const user = {
          name: session.user.name,
          email: session.user.email,
          avatar: session.user.image,
          _id: session.user.id,
          socialAuthentication: true,
        };

        router.push("/"); 
        toast({
          title: `Hello, ${user.name} logged in successfully`,
          variant: "default",
          className: "bg-green-500 text-white",
          duration: 3000,
        });
        dispatch(loginUser(user as any));
      }
    };

    fetchSession();
  }, [dispatch,router]);
  
  // Handling regular sign-in (with email and password)
  const onSubmit = useCallback(
    async (data: z.infer<typeof FormSchema>) => {
      try {
        const result = await signinMutation(data).unwrap();
        if (result.status === 200) {
          const { user, message } = result;
          dispatch(loginUser(user));
          toast({
            title: message,
            variant: "default",
            className: "bg-green-500 text-white",
            duration: 3000,
          });
          setTimeout(() => {
            router.push("/");
          }, 500);
        }
      } catch (err) {
        console.error(err);
      }
    },
    [dispatch, router, signinMutation]
  );
  // Handling Google Sign-In
  const handleGoogleSignIn = async () => {
    try {
      await signIn("google", { redirect: true });
    } catch (error) {
      console.error("Google Sign-In Error:", error);

    }
  };

  return (
    <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800 my-5 ">
      <h1 className="text-2xl font-bold text-center">Signin</h1>
      <p className="text-sm text-gray-600 text-center">
        Sign in to access your account
      </p>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col justify-between"
        >
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
          {isLoading ? (
            <Button type="submit" className="mt-3" disabled>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            </Button>
          ) : (
            <Button type="submit" className="mt-3">
              Sign in
            </Button>
          )}
          <p className="text-sm text-center text-gray-600 mt-2">
            Don&apos;t have an account?
            <Link
              href="/signup"
              rel="noopener noreferrer"
              className="focus:underline hover:underline hover:text-rose-500"
            >
              {" "}
              Sign up
            </Link>
          </p>
          <div className="flex items-center w-full my-4">
            <hr className="w-full text-gray-600" />
            <p className="px-3 text-gray-600">OR</p>
            <hr className="w-full text-gray-600" />
          </div>
        </form>
        <Button onClick={handleGoogleSignIn} variant={"outline"} className="w-full">
          <FcGoogle className="mr-2 h-4 w-4" /> Sign In with Google
        </Button>
      </Form>
    </div>
  );
}
