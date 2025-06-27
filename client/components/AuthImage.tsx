import React from "react";
import Image from "next/image";

const AuthImage = () => {
  return (
    <div className="bg-muted relative hidden lg:block">
      <Image
        src="/assets/images/auth-pic.jpg"
        alt="Auth Image"
        className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        width={2000}
        height={2000}
        property
      />
    </div>
  );
};

export default AuthImage;
