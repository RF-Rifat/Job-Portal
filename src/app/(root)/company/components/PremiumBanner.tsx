import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Crown, Rocket } from "lucide-react";
import Link from "next/link";

export function PremiumBanner() {
  return (
    <Card className="bg-gradient-to-r from-yellow-50 to-yellow-100 border-yellow-200 mt-10">
      <div className="p-6 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="h-12 w-12 rounded-full bg-yellow-200 flex items-center justify-center">
            <Crown className="h-6 w-6 text-yellow-700" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Upgrade to Premium</h3>
            <p className="text-sm text-muted-foreground">
              Make hiring more efficient with premium features and unlimited job
              posts
            </p>
          </div>
        </div>
        <Link href="/pricing">
          <Button className="bg-yellow-500 hover:bg-yellow-600">
            <Rocket className="mr-2 h-4 w-4" />
            Upgrade Now
          </Button>
        </Link>
      </div>
    </Card>
  );
}
