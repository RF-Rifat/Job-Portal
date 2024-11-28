"use client";

import Link from "next/link";
import JPForm from "@/shared/form/JPForm";
import JPInput from "@/shared/form/JPInput";
import Image from "next/image";

const SignIn = () => {
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center">
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
          <div className=" mb-6 space-y-1">
            <h1 className="text-4xl font-bold text-gray-900">Welcome back</h1>
            <p className="text-gray-500 text-lg">
              Sign in to your account to access job opportunities
            </p>
          </div>
          <div className="w-full">
            <JPForm onSubmit={onSubmit} className="spay6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <JPInput
                    name="email"
                    label="Email"
                    placeholder="Enter your email"
                    type="email"
                  />
                </div>
                <div className="space-y-2">
                  <div className="items-center justify-between">
                    <JPInput
                      name="password"
                      label="Password"
                      placeholder="Enter your password"
                      type="password"
                    />
                  </div>
                </div>
                <div className="flex justify-end">
                  <Link
                    href="/reset-password"
                    className="text-primary hover:underline"
                  >
                    Forgot password
                  </Link>
                </div>
                <div className="flex items-center space-x-2">
                  <JPInput type="checkbox" name="terms" />
                  <label htmlFor="terms" className="text-sm text-gray-500">
                    I agree to the{" "}
                    <Link
                      href="/terms"
                      className="text-blue-600 hover:underline"
                    >
                      T&C
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/privacy"
                      className="text-blue-600 hover:underline"
                    >
                      Privacy Policy
                    </Link>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
                >
                  Sign In
                </button>
              </div>
            </JPForm>
            <div className="mt-4 text-center text-sm text-gray-500">
              Don&apos;t have an account?{" "}
              <Link href="/sign-up" className="text-blue-600 hover:underline">
                Create one now
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Image
          width={500}
          height={500}
          alt="sign in"
          src={"/auth/sign-in.svg"}
          className="hidden md:block"
        />
      </div>
    </div>
  );
};

export default SignIn;
