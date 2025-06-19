import Image from "next/image";
import { Container } from "../layout";
import Link from "next/link";
import { Code, Globe, Mail, MapPin, Phone } from "lucide-react";
import { AnimateSection } from "../animate-section";

const data = {
  title: {
    label: (
      <>
        Junior Software Engineer <Link href="#">@Company</Link>
      </>
    ),
    icon: Code,
  },
  location: { label: "Gujrat, Pakistan", icon: MapPin },
  phone: { label: <Link href="#">+92 300 1234567</Link>, icon: Phone },
  mail: {
    label: <Link href="mailto:email@example.com">email@example.com</Link>,
    icon: Mail,
  },
  web: {
    label: <Link href="https://example.com">example.com</Link>,
    icon: Globe,
  },
};

export function Hero() {
  return (
    <AnimateSection>
      <Container className="relative pt-16 pb-32 text-left">
        <h1 className="text-5xl md:text-7xl mb-4 font-medium tracking-tight">
          Amina Tariq
        </h1>
        <p className="text-xl ml-2 mb-8">
          I am a creative software engineer from Pakistan.
        </p>

        <div className="flex flex-col gap-1.5 [&_a]:hover:underline">
          {Object.entries(data).map(([key, { label, icon: Icon }]) => (
            <div key={key} className="flex items-center gap-2">
              <div className="bg-muted rounded-sm p-1.5">
                <Icon className="size-4 text-muted-foreground" />
              </div>
              <p className="">{label}</p>
            </div>
          ))}
        </div>

        <div className="absolute bottom-0 md:bottom-12 right-0">
          <div className="relative">
            <Image
              className="relative z-[1]"
              src="/images/yellow-colar-resting.png"
              height={160}
              width={220}
              alt="cat resting"
            />
            <span className="border-t-3 w-72 block absolute bottom-10.5 -right-2" />
          </div>
        </div>
      </Container>
    </AnimateSection>
  );
}
