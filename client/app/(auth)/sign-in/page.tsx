import { GalleryVerticalEnd } from "lucide-react";

import LoginForm from "@/components/LoginForm";
import Link from "next/link";
import AuthImage from "@/components/AuthImage";

export default function SigninPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link href="/" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-4" />
            </div>
            Horizon
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full">
            <LoginForm />
          </div>
        </div>
      </div>
      <AuthImage />
    </div>
  );
}
