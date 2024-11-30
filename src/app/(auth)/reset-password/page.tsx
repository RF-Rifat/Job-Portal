"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import JPForm from "@/shared/form/JPForm";
import JPInput from "@/shared/form/JPInput";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import PrimaryButton from "@/shared/ui/PrimaryButton";

const emailSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

const otpSchema = z.object({
  otp: z.string().length(6, "OTP must be 6 digits"),
});

const passwordSchema = z
  .object({
    newPassword: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

const ResetPassword = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otpValue, setOtpValue] = useState("");

  console.log(newPassword, confirmPassword, otpValue);

  const onSubmitEmail = async (data: any) => {
    console.log("Email submitted:", data.email);
    setEmail(data.email);
    // Here you would typically make an API call to send the OTP
    setStep(2);
  };

  const onSubmitOtp = async () => {
    console.log("OTP submitted:", otp);

    setStep(3);
  };

  useEffect(() => {
    const otpNumber = Number(otp);
    
    console.log(otpNumber)

  }, [otp]);

  
  const onSubmitNewPassword = async (data: any) => {
    console.log("New password submitted:", {
      email,
      otp,
      newPassword: data.newPassword,
    });
    // Here you would typically make an API call to update the password
  };

  return (
    <div className="flex min-h-screen">
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">
              {step === 1 && "Reset your password"}
              {step === 2 && "Enter verification code"}
              {step === 3 && "Create new password"}
            </h1>
            <p className="text-gray-500">
              {step === 1 && "Enter your email to receive a verification code"}
              {step === 2 && `Enter the 6-digit code sent to ${email}`}
              {step === 3 && "Choose a strong password for your account"}
            </p>
          </div>

          {step === 1 && (
            <JPForm
              onSubmit={onSubmitEmail}
              resolver={zodResolver(emailSchema)}
              className="space-y-6"
            >
              <JPInput
                name="email"
                type="email"
                placeholder="Enter your email"
                onChange={setEmail}
              />
              <PrimaryButton text="Send verification code" type="submit" />
            </JPForm>
          )}

          {step === 2 && (
            <InputOTP
              className="flex justify-center w-full"
              maxLength={6}
              pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
              onChange={(otp: string) => {
                setOtpValue(otp);
                console.log("Current OTP value:", otp);
              }}
            >
              <InputOTPGroup>
                <InputOTPSlot className="ml-4" index={0} />
                <InputOTPSlot className="ml-4" index={1} />
                <InputOTPSlot className="ml-4" index={2} />
                <InputOTPSlot className="ml-4" index={3} />
                <InputOTPSlot className="ml-4" index={4} />
                <InputOTPSlot className="ml-4" index={5} />
              </InputOTPGroup>
            </InputOTP>
          )}

          {step === 3 && (
            <JPForm
              onSubmit={onSubmitNewPassword}
              resolver={zodResolver(passwordSchema)}
              className="space-y-6"
            >
              <div className="space-y-4">
                <JPInput
                  name="newPassword"
                  type="password"
                  placeholder="New password"
                  onChange={setNewPassword}
                />
                <JPInput
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm password"
                  onChange={setConfirmPassword}
                />
              </div>
              <PrimaryButton text="Reset password" type="submit" />
            </JPForm>
          )}
        </div>
      </div>

      <div className="hidden lg:flex flex-1 items-center justify-center bg-gray-50">
        <Image
          src="/auth/reset-password.svg"
          alt="Reset password illustration"
          width={500}
          height={500}
          className="max-w-md"
        />
      </div>
    </div>
  );
};

export default ResetPassword;
