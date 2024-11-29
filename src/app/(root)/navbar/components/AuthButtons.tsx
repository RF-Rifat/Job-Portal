import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function AuthButtons() {
  const user = true;
  const router = useRouter();

  return (
    <div className="flex items-center gap-2">
      {/* Sign In Button */}
      {user ? (
        <Button
          onClick={() => router.push("/sign-in")}
          variant="ghost"
          size="sm"
          className="text-white hover:bg-primary/90 hover:text-[white]  dark:hover:text-white bg-primary rounded-full p-5 px-6"
        >
          Sign In
        </Button>
      ) : (
        <Button
          onClick={() => router.push("/sign-up")}
          variant="outline"
          size="sm"
          className="text-white hover:bg-primary/90 hover:text-neutral-900  dark:hover:text-white bg-primary rounded-full p-5 px-6"
        >
          Sign Up
        </Button>
      )}
    </div>
  );
}
