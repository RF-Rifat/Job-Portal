"use client";

import Link from "next/link";
import { useState } from "react";
import JPForm from "@/shared/form/JPForm";
import Checkbox from "@/shared/form-fields/Checkbox";
import SignupVector from "./_components/SignupVector";

import PasswordToggle from "../shared/PasswordToggle";
import JPInput from "@/shared/form/JPInput";
import PrimaryButton from "@/shared/ui/PrimaryButton";
import AuthFormHeader from "../shared/AuthFormHeader";
import AuthRedirect from "../shared/AuthRedirect";

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
          <AuthFormHeader
            title="Create an Account"
            description="Sign up to start accessing job opportunities"
          />

          <div className="w-full">
            <JPForm onSubmit={onSubmit} className="spay6">
              <div className="space-y-4">
                <JPInput
                  name="fullname"
                  label="Full Name"
                  placeholder="Enter your full name"
                  type="text"
                />
                <JPInput
                  name="email"
                  label="Email"
                  placeholder="Enter your email"
                  type="email"
                />

                {/* Password Field */}
                <div className="relative">
                  <JPInput
                    name="password"
                    label="Password"
                    placeholder="Enter your password"
                    type={showPassword ? "text" : "password"}
                  />
                  <PasswordToggle
                    showPassword={showPassword}
                    togglePassword={togglePasswordVisibility}
                  />
                </div>

                {/* Confirm Password Field */}
                <div className="relative">
                  <JPInput
                    name="confirmPassword"
                    label="Confirm Password"
                    placeholder="Confirm your password"
                    type={showConfirmPassword ? "text" : "password"}
                  />
                  <PasswordToggle
                    showPassword={showConfirmPassword}
                    togglePassword={toggleConfirmPasswordVisibility}
                  />
                </div>

                {/* Terms Checkbox */}
                <div className="flex items-center space-x-2">
                  <Checkbox
                    name="terms"
                    checked={termsChecked}
                    onChange={(e) => setTermsChecked(e.target.checked)}
                  >
                    I agree to the{" "}
                    <Link className="text-primary" href={"/terms"}>
                      T&C
                    </Link>
                    and
                    <Link className="text-primary" href={"/privacy"}>
                      Privacy Policy
                    </Link>
                  </Checkbox>
                </div>
                {/* Submit the form */}
                <PrimaryButton type="submit" text="Sign up" />
              </div>
            </JPForm>
            <AuthRedirect
              message="Already have an account?"
              linkText="Sign in now"
              href="/sign-in"
            />
          </div>
        </div>
      </div>
      <SignupVector />
    </div>
  );
};

export default SignUp;
