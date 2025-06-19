"use client";

import { motion } from "motion/react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Icons } from "../iocns";
import Magnetic from "../magnetic";

const socialLinks = [
  { label: "GitHub", url: "#", icon: Icons.github },
  { label: "Linkedin", url: "#", icon: Icons.linkedin },
  { label: "Calendar", url: "#", icon: Icons.calendar },
];

export function Footer() {
  return (
    <motion.footer className="pt-6 pb-10 w-full">
      <nav className="flex items-center justify-center gap-4 w-full">
        {socialLinks.map((link) => (
          <Magnetic key={link.label}>
            <Button title={link.label} variant="outline" size="icon" asChild>
              <Link href={link.url} target="_blank">
                <link.icon className="size-5" />
              </Link>
            </Button>
          </Magnetic>
        ))}
      </nav>
    </motion.footer>
  );
}
