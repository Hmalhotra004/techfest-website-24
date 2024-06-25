"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const TFLogo = ({ classname }: { classname: string }) => {
  return (
    <Link href="/">
      <motion.img
        src="/Logo.png"
        alt="TF Logo"
        className={classname}
      />
    </Link>
  );
};

export default TFLogo;
