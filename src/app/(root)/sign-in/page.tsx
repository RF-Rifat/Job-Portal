"use client";

import Link from "next/link";
import JPForm from "@/shared/form/JPForm";
import JPInput from "@/shared/form/JPInput";
import { useState } from "react";
import SigninVector from "./_components/SigninVector";
import { Eye, EyeClosed } from "lucide-react";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="mt-11 md:mt-0 md:flex justify-center h-screen items-center gap-6 overflow-hidden">
      <SigninVector />
      <div className="flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
          <div className="mb-6 space-y-1">
            <h1 className="text-4xl font-bold text-gray-700 pb-1">
              Welcome back
            </h1>
            <p className="text-gray-500 text-lg">
              Sign in to your account to access job opportunities
            </p>
          </div>
          <div className="w-full">
            <JPForm onSubmit={onSubmit} className="spay6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <JPInput
                    className="rounded-full"
                    name="email"
                    label="Email"
                    placeholder="Enter your email"
                    type="email"
                  />
                </div>
                <div className="space-y-2">
                  <div className="relative">
                    <JPInput
                      className="rounded-full"
                      name="password"
                      label="Password"
                      placeholder="Enter your password"
                      type={showPassword ? "text" : "password"}
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                    >
                      {showPassword ? (
                        <Eye className="text-gray-500" size={18} />
                      ) : (
                        <EyeClosed className="text-gray-500" size={18} />
                      )}
                    </button>
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
                      className="text-primary hover:underline"
                    >
                      T&C
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/privacy"
                      className="text-primary hover:underline"
                    >
                      Privacy Policy
                    </Link>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
                >
                  Sign In
                </button>
              </div>
            </JPForm>
            <div className="mt-4 text-center text-sm text-gray-500">
              Don&apos;t have an account?{" "}
              <Link href="/sign-up" className="text-primary hover:underline">
                Create one now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
