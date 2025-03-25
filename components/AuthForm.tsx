"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation"; // ✅ Correct import for App Router
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {Form} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import FormField from "./FormField";


const AuthFormSchema =(type : FormType) => {
    
    return z.object({
        name:type === 'sign-up' ? z.string().min(2).max(50) : z.string().optional(),
        email: z.string().email(),
        password: z.string().min(3),
    })
}

interface AuthFormProps {
  type: "sign-in" | "sign-up";
}

const AuthForm: React.FC<AuthFormProps> = ({ type }) => { 
    const formSchema = AuthFormSchema(type);  
  const router = useRouter(); 

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email:"",
      password: ""
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
     try {

        if(type === 'sign-up')
        {
           toast.success('Account created successfully.Please sign in');
           router.push('/sign-in');
        }
        else
        {
          toast.success('signed in successfully');
            router.push('/');
        }
     } catch (error) {
            console.error(error);
            toast.error(`An error occurred :${error}`);
        
     }
  }

  const isSignIn = type === "sign-in";

  const switchAuthMode = () => {
    router.push(isSignIn ? "/sign-up" : "/sign-in");
  };

  return (
    <div className="card-border lg:min-w-[566px]">
      <div className="flex flex-col gap-6 card py-14 px-10">
        <div className="flex flex-row gap-2 justify-center">
          <Image src="/logo.svg" alt="logo" height={32} width={38} />
          <h2 className="text-primary-100">PrepWise</h2>
        </div>
        <h3>Practice job interviews with AI</h3>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 mt-4 form">
                <FormField 
                control={form.control} 
                name="name" 
                label="Name" 
                placeholder="Your Name" 
                />

                <FormField 
                control={form.control} 
                name="email" 
                label="email" 
                placeholder="Enter your password"
                type="email" 
                />

                <FormField 
                control={form.control} 
                name="password" 
                label="password" 
                placeholder="password" 
                />
        
            <div className="btn flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 text-white px-8 py-2 rounded w-full text-center flex justify-center items-center"
              >
                {isSignIn ? "Sign in" : "Create an Account"}
              </button>
            </div>
          </form>
        </Form>

        <p className="text-center">
          {isSignIn ? "Don't have an account?" : "Already have an account?"}
          <button onClick={switchAuthMode} className="font-bold text-user-primary ml-1">
            {!isSignIn ? "Sign in" : "Sign up"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
