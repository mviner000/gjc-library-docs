import Link from "next/link";
import { Button } from "../ui/button";
import { HomeSection } from "./components/HomeSection";

export function Hero() {
  return (
    <HomeSection>
      <div className="text-center w-full justify-center align-middle pt-8">
        <h1
          className="xxs:text-5xl lg:text-7xl
                      bg-gradient-to-r from-green-500 to-yellow-500 bg-clip-text text-transparent animate-gradient
                      font-bold"
        >
          GJCLibrary DOCS
        </h1>
        <div
          className="
          mt-5 text-4xl font-medium tracking-tight md:text-5xl lg:text-7xl text-balance"
        >
          <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent animate-gradient">
            Access{" "}
          </span>{" "}
          <span className="">our </span>
          <span className="underline decoration-dotted">
            very well, documented
          </span>
          <div className="underline decoration-dotted">
            <p>Library Management System </p>
            <p>
              <span>&nbsp;written in </span>
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent animate-gradient">
                Python Django
              </span>{" "}
              <span className="underline">and Nextjs </span>
              <span className="p-1 pt-0 bg-purple-500 rounded-md">15</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-4 flex-wrap items-center justify-center my-4">
        <Button variant="eyy" size="lg" asChild>
          <Link href="/docs">View docs</Link>
        </Button>
      </div>
    </HomeSection>
  );
}
