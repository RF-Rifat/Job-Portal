/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import JPForm from "@/shared/form/JPForm";
import JPInput from "@/shared/form/JPInput";
import Image from "next/image";
import { useState } from "react";

const ResetPassword = () => {
  const [step, setStep] = useState(1); // Step 1: Email, Step 2: OTP, Step 3: New Password
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSubmitEmail = (data: any) => {
    console.log({data});
    console.log({email,otp,newPassword, confirmPassword});
    // Simulate checking if the email is valid
    setStep(2);
    // Send OTP email (Mocked)
    console.log("OTP sent to", data.email);
  };

  const onSubmitOtp = (data: any) => {
    console.log(data);
    // Validate OTP and move to next step
    setStep(3);
  };

  const onSubmitNewPassword = (data: any) => {
    console.log(data);
    if (data.newPassword === data.confirmPassword) {
      // Proceed with password reset logic
      console.log("Password reset successfully");
    } else {
      console.error("Passwords do not match!");
    }
  };

  return (
    <div className="flex justify-center">
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
          <div className="mb-6 space-y-1">
            <h1 className="text-4xl font-bold text-gray-900">
              {step === 1 && "Enter your Email"}
              {step === 2 && "Enter OTP"}
              {step === 3 && "Set a New Password"}
            </h1>
            <p className="text-gray-500 text-lg">
              {step === 1 &&
                "We will send a one-time password (OTP) to your email to verify your identity."}
              {step === 2 && "Enter the OTP sent to your email."}
              {step === 3 && "Set your new password and confirm it."}
            </p>
          </div>
          <div className="w-full">
            <JPForm
              onSubmit={
                step === 1
                  ? onSubmitEmail
                  : step === 2
                  ? onSubmitOtp
                  : onSubmitNewPassword
              }
            >
              <div className="space-y-4">
                {step === 1 && (
                  <div className="space-y-2">
                    <JPInput
                      name="email"
                      label="Email"
                      placeholder="Enter your email"
                      type="email"
                      onChange={setEmail}
                    />
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-2">
                    <JPInput
                      name="otp"
                      label="OTP"
                      placeholder="Enter OTP"
                      type="text"
                      onChange={setOtp}
                    />
                  </div>
                )}

                {step === 3 && (
                  <>
                    <div className="space-y-2">
                      <JPInput
                        name="newPassword"
                        label="New Password"
                        placeholder="Enter your new password"
                        type="password"
                        onChange={setNewPassword}
                      />
                    </div>
                    <div className="space-y-2">
                      <JPInput
                        name="confirmPassword"
                        label="Confirm Password"
                        placeholder="Confirm your new password"
                        type="password"
                        onChange={setConfirmPassword}
                      />
                    </div>
                  </>
                )}

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
                >
                  {step === 1 && "Send OTP"}
                  {step === 2 && "Verify OTP"}
                  {step === 3 && "Reset Password"}
                </button>
              </div>
            </JPForm>
          </div>
        </div>
      </div>
      <div>
        <Image
          width={500}
          height={500}
          alt="reset password"
          src={"/auth/reset-password.svg"}
          className="hidden md:block"
        />
      </div>
    </div>
  );
};

export default ResetPassword;
