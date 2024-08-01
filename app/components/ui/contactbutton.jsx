"use client";

import { useRouter } from "next/navigation";
import React from "react";

const ContactButton = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/contact");
  };
  return <button onClick={handleClick}>ContactButton</button>;
};

export default ContactButton;
