import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("container max-w-4xl mx-auto px-6", className)}>
      {children}
    </div>
  );
}
