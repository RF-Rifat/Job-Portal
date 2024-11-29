"use client";

import Link from "next/link";
import JPForm from "@/shared/form/JPForm";
import JPInput from "@/shared/form/JPInput";
import Checkbox from "@/shared/form-fields/Checkbox";
import SignupVector from "./_components/SignupVector";
import { useState } from "react";
import { Eye, EyeClosed } from "lucide-react";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const onSubmit = (data: any) => {
    // Check if passwords match
    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (!termsChecked) {
      alert("You must agree to the terms and conditions to sign up.");
      return;
    }
    delete data.confirmPassword;
    console.log(data);
  };

  return (
    <div className="md:flex justify-center">
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
          <div className="mb-6 space-y-1">
            <h1 className=" text-3xl md:text-4xl font-bold text-gray-700 pb-1">
              Create an Account
            </h1>
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
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <JPInput
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

                <div className="space-y-2">
                  <div className="relative">
                    <JPInput
                      className="rounded-full"
                      name="confirmPassword"
                      label="Confirm Password"
                      placeholder="Confirm your password"
                      type={showConfirmPassword ? "text" : "password"}
                    />
                    <button
                      type="button"
                      onClick={toggleConfirmPasswordVisibility}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                    >
                      {showConfirmPassword ? (
                        <Eye size={20} />
                      ) : (
                        <EyeClosed size={20} />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    name="terms"
                    label="I agree to the Terms of Service and Privacy Policy"
                    checked={termsChecked}
                    onChange={(e) => setTermsChecked(e.target.checked)}
                  />
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
      <SignupVector />
    </div>
  );
};

export default SignUp;
