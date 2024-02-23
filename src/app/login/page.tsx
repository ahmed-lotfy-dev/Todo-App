"use client";

import { login } from "@/src/actions/authActions";
import FormSubmit from "@/src/components/formSubmitBtn";
import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import Link from "next/link";
import { useFormState } from "react-dom";
import { toast } from "sonner";
type Props = {};

const Login = (props: Props) => {
  const [state, formAction] = useFormState(login, null);
  // if (state?.success) toast(state.message);
  console.log(state);
  return (
    <div>
      <div className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden">
        <div className="w-full m-auto bg-white lg:max-w-lg">
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center">Sign in</CardTitle>
              <CardDescription className="text-center">
                Enter your email and password to login
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <form action={formAction}>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" name="email" placeholder="" />
                  {/* <p className="text-red-400">
                    {state?.error?.email && state?.error?.email?._errors[0]}
                  </p> */}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" name="password" />
                  {/* <p className="text-red-400">
                    {state?.error?.password &&
                      state?.error?.password?._errors[0]}
                  </p> */}
                </div>
                <FormSubmit btnText="Login" />
              </form>
            </CardContent>
            <CardFooter className="flex flex-col">
              <p className="mt-2 text-xs text-center text-gray-700">
                Don't have an account?
                <Link href="/signup" className=" text-blue-600 hover:underline">
                  Sign Up
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
