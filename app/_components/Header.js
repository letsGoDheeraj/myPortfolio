"use client";
import { usePathname } from "next/navigation";
import Navigation from "@/app/_components/Navigation";

export default function Page() {
  const pathname = usePathname();

  if (pathname.startsWith("/projects/")) return null;

  return (
    <header className="sticky top-0 z-50 bg-white py-6">
      <div className="container mx-auto">
        <div className="flex items-center w-full">
          <Navigation />
        </div>
      </div>
    </header>
  );
}
