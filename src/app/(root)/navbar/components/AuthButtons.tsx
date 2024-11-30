import { Button } from "@/components/ui/button";
import { selectUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hook";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ProfileDropdown } from "./ProfileDropdown";

export function AuthButtons() {
  const user = useAppSelector(selectUser);
  const router = useRouter();

  return (
    <div className="flex items-center gap-2">
      {/* Sign In Button */}
      {user ? (
        <ProfileDropdown
          Trigger={
            <Avatar className="cursor-pointer">
              <AvatarImage
                className="h-7 w-7"
                src="https://github.com/shadcn.png"
              />
              <AvatarFallback className="h-7 w-7 text-xs">JP</AvatarFallback>
            </Avatar>
          }
        ></ProfileDropdown>
      ) : (
        <Button
          onClick={() => router.push("/sign-in")}
          variant="ghost"
          size="default"
          className="text-white hover:bg-primary/90 hover:text-[white]  dark:hover:text-white bg-primary rounded-full p-5 px-6"
        >
          Sign In
        </Button>
      )}
    </div>
  );
}
