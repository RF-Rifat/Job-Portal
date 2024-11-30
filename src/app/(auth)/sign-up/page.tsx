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
import { useSignupMutation } from "@/redux/features/auth/authApi";



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

  // ---------- API call  --------------
  const [registerUser] = useSignupMutation();

  // ---------- Submit the from --------------
  const onSignupSubmit = async (data: any) => {
    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (!termsChecked) {
      alert("You must agree to the terms and conditions to sign up.");
      return;
    }
    delete data.confirmPassword;
    const res = await registerUser(data);

    console.log(res);

    try {
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div className="lg:flex justify-center items-center relative">
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
          <AuthFormHeader
            title="Create an Account"
            description="Sign up to start accessing job opportunities"
          />

          <div className="w-full">
            <JPForm onSubmit={onSignupSubmit}>
              <div className="space-y-6">
                <JPInput
                  name="name"
                  label="Full Name"
                  placeholder="Enter your name"
                  type="text"
                  className="rounded-full"
                />
                <JPInput
                  name="email"
                  label="Email"
                  placeholder="Enter your email"
                  type="email"
                  className="rounded-full"
                />

                {/* Password Field */}
                <div className="relative">
                  <JPInput
                    name="password"
                    label="Password"
                    placeholder="Enter your password"
                    type={showPassword ? "text" : "password"}
                    className="rounded-full"
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
                    className="rounded-full"
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
                <div>
                  <PrimaryButton
                    type="submit"
                    text="Sign up"
                    className="rounded-full h-11 mt-4"
                  />
                </div>
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
