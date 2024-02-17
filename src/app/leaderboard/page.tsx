import Image from "next/image";

import { prettyPrintNumber } from "@/lib/format";

async function getTopSummoners() {
  const res = await fetch("http://localhost:8080/summoners/top?page=0&size=10");

  if (!res.ok) {
    throw new Error("Could not fetch top summoners");
  }

  return res.json();
}

export default async function LeaderboardPage() {
  const data = await getTopSummoners();

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container flex flex-col items-center justify-center space-y-4 px-4 md:px-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Leaderboard
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            These are the top summoners ranked by mastery points.
          </p>
        </div>
        <div className="grid w-full max-w-lg grid-cols-2 gap-4 md:grid-cols-3">
          {data.map((summoner: any, index: number) => (
            <div
              key={index}
              className="flex flex-col items-center gap-1 cursor-pointer hover:scale-115 transition duration-250"
            >
              <Image
                alt={summoner.name}
                className="aspect-[1/1] rounded-lg object-cover object-center"
                height="150"
                src={summoner.profileIconUrl}
                width="150"
              />
              <div className="grid gap-1 text-center">
                <h3 className="text-sm font-bold">
                  #{index + 1} {summoner.name}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                  {prettyPrintNumber(summoner.totalChampionPoints)} points
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
