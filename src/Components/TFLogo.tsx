import tflogo from "@/assets/Logo.png";
import Image from "next/image";
import Link from "next/link";

const TFLogo = ({ classname }: { classname: string }) => {
  return (
    <Link href="/">
      <Image
        width={1000}
        height={100}
        src={tflogo}
        alt="TF Logo"
        className={classname}
      />
    </Link>
  );
};

export default TFLogo;
