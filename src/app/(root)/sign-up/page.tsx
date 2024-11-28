"use client";

import Link from "next/link";
import JPForm from "@/shared/form/JPForm";
import JPInput from "@/shared/form/JPInput";
import Image from "next/image";

const SignUp = () => {
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="md:flex justify-center">
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
          <div className="mb-6 space-y-1">
            <h1 className="text-4xl font-bold text-gray-900">Create an Account</h1>
            <p className="text-gray-500 text-lg">
              Sign up to start accessing job opportunities
            </p>
          </div>
          <div className="w-full">
            <JPForm onSubmit={onSubmit} className="spay6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <JPInput
                    name="fullname"
                    label="Full Name"
                    placeholder="Enter your full name"
                    type="email"
                  />
                </div>
                <div className="space-y-2">
                  <JPInput
                    name="email"
                    label="Email"
                    placeholder="Enter your full email"
                    type="email"
                  />
                </div>
                <div className="space-y-2">
                  <JPInput
                    name="password"
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                  />
                </div>
                <div className="space-y-2">
                  <JPInput
                    name="confirmPassword"
                    label="Confirm Password"
                    placeholder="Confirm your password"
                    type="password"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <JPInput type="checkbox" name="terms" />
                  <label htmlFor="terms" className="text-sm text-gray-500">
                    I agree to the{" "}
                    <Link href="/terms" className="text-blue-600 hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-blue-600 hover:underline">
                      Privacy Policy
                    </Link>
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
                >
                  Sign Up
                </button>
              </div>
            </JPForm>
            <div className="mt-4 text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link href="/sign-in" className="text-blue-600 hover:underline">
                Sign in now
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Image width={500} height={500} alt="sign up" src={"/auth/sign-in.svg"} className="md:block hidden"/>
      </div>
    </div>
  );
};

export default SignUp;