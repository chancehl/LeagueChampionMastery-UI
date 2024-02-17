/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/vdESQtaRy8h
 */
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { UniqueSummoners } from "@/components/unique-summoners";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-16 w-full flex justify-center items-center">
        <nav className="ml-auto flex gap-6 sm:gap-12 w-full justify-center items-center">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/top-summoners"
          >
            Leaderboard
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-8"
            href="/faq"
          >
            FAQ
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/contact"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <div className="w-full py-12 md:py-24 lg:py-32 flex-1 ">
          <div className="container flex flex-col items-center justify-center space-y-4 px-4 md:px-6">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Champion Mastery Lookup
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Enter a summoner name to check their champion mastery or search
                for a champion to view the summoners with the most mastery
                points.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Input
                className="max-w-xl lg:min-w-96 flex-1"
                placeholder="Enter a summoner or champion name"
              />
              <Button type="submit">Search</Button>
            </div>
            <UniqueSummoners />
          </div>
        </div>
      </main>
      <footer className="flex flex-col flex-grow-0 justify-center items-center gap-2 sm:flex-row py-6 w-full shrink-0 px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Shamelessly made with AI labor 🦾🤖
        </p>
      </footer>
    </div>
  );
}
