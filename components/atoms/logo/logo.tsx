import Image from "next/image";
import Link from "next/link";
import logo from "@assets/png/logo-placeholder.png";

interface DashboardLogoProps {
  className: string;
  imageSrc: string;
}

const Logo = ({ className, imageSrc }: DashboardLogoProps) => {
  return (
    <Link href="/">
      <Image
        src={
          typeof imageSrc !== "undefined"
            ? `${process.env.NEXT_PUBLIC_PHOTO_URL}${imageSrc}`
            : logo.src
        }
        alt="org-logo"
        className={`cursor-pointer object-cover ${className}`}
        height="27"
        width="27"
      />
    </Link>
  );
};

export default Logo;
