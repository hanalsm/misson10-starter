"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 max-w-screen-xl items-center px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Layers className="size-5 text-primary" />
          <span>Next Starter</span>
        </Link>

        <nav className="ml-8 hidden items-center gap-6 text-sm md:flex">
          <Link
            href="/"
            className="text-foreground/60 transition-colors hover:text-foreground"
          >
            홈
          </Link>
          <Link
            href="/components"
            className="text-foreground/60 transition-colors hover:text-foreground"
          >
            컴포넌트
          </Link>
          <Link
            href="/about"
            className="text-foreground/60 transition-colors hover:text-foreground"
          >
            소개
          </Link>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="테마 전환"
          >
            <Sun className="size-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute size-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>

          <Button variant="outline" size="sm" render={<Link href="/components" />}>
            시작하기
          </Button>
        </div>
      </div>
    </header>
  );
}
