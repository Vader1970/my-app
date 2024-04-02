"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps, ReactNode } from "react";

// Nav component renders a navigation bar with children elements inside
export function Nav({ children }: { children: ReactNode }) {
  // Renders a navigation bar with a background color of primary and text color of primary-foreground,
  // and horizontally centers its children with padding on the left and right
  return <nav className='bg-primary text-primary-foreground flex justify-center px-4'>{children}</nav>;
}

// NavLink component renders a link with custom styles based on the current pathname
export function NavLink(props: Omit<ComponentProps<typeof Link>, "className">) {
  // Retrieves the current pathname using the usePathname hook
  const pathname = usePathname();

  // Renders a Link component with additional classes for hover and focus styles
  return (
    <Link
      {...props}
      className={cn(
        "p-4 hover:bg-secondary hover:text-secondary-foreground focus-visible:bg-secondary focus-visible:text-secondary-foreground",
        pathname === props.href && "bg-background text-foreground"
      )}
    />
  );
}
