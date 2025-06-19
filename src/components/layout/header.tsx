"use client";

import Image from "next/image";
import { Container } from "./container";
import Magnetic from "../magnetic";
import Link from "next/link";
import { Button } from "../ui/button";
import { Send } from "lucide-react";
import { Hello } from "../hello";
import { motion } from "motion/react";
import { Icons } from "../iocns";

export function Header() {
  return (
    <motion.header
      initial={{
        opacity: 0,
        y: -25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1.5,
        },
      }}
      className="pb-6 pt-10"
    >
      <Container className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Magnetic>
            <Link href="/">
              <Image src="/logo.png" height={48} width={36} alt="Cat" />
            </Link>
          </Magnetic>
          <Hello />
        </div>

        <div className="flex items-center gap-2">
          <Magnetic>
            <Button variant="ghost" size="icon" asChild>
              <Link href="/">
                <Icons.github className="size-5" />
              </Link>
            </Button>
          </Magnetic>
          <Magnetic>
            <Button variant="outline" asChild>
              <Link href="#">
                Email
                <Send />
              </Link>
            </Button>
          </Magnetic>
        </div>
      </Container>
    </motion.header>
  );
}
