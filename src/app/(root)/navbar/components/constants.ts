import { User, Briefcase, Settings, LogOut, DollarSign, Clipboard, Shield, UploadIcon, HelpCircle } from "lucide-react";

type MenuItem = {
  label: string;
  icon: React.ElementType;
  link:string;
  action?: () => void;
};

export const menuConfig: Record<string, MenuItem[]> = {
  "job-seeker": [
    { label: "My Profile", icon: User, link:"/profile/job-seeker" },
    { label: "Verify Id", icon: Briefcase, link:"/profile/job-seeker/verify-id" },
    { label: "Account Settings", icon: Settings, link:"/profile/job-seeker/account-setting" },
    { label: "Logout", icon: LogOut, link:"" },
  ],
  company: [
    { label: "Employer Free", icon: DollarSign,link:"" },
    { label: "Need Help Hiring?", icon: HelpCircle,link:"" },
    { label: "Job Posts", icon: Clipboard,link:"" },
    { label: "Pinned Workers", icon: Shield,link:"" },
    { label: "Account Settings", icon: Settings,link:"" },
    { label: "Timeproof", icon: Shield,link:"" },
    { label: "Billing", icon: DollarSign,link:"" },
    { label: "Upgrade", icon: UploadIcon,link:"" },
    { label: "Logout", icon: LogOut,link:"" },
  ],
};



