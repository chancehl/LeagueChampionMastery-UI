export default function TopSummonersPage() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container flex flex-col items-center justify-center space-y-4 px-4 md:px-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Top Summoners
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Enter a summoner name to check their champion mastery or search for
            a champion to view the summoners with the most mastery points.
          </p>
        </div>
        <div className="grid w-full max-w-lg grid-cols-2 gap-4 md:grid-cols-3">
          <div className="flex flex-col items-center gap-1">
            <img
              alt="Image"
              className="aspect-[1/1] rounded-lg object-cover object-center"
              height="150"
              src="/placeholder.svg"
              width="150"
            />
            <div className="grid gap-1 text-center">
              <h3 className="text-sm font-medium">Yasuo</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Mastery Level: 7
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <img
              alt="Image"
              className="aspect-[1/1] rounded-lg object-cover object-center"
              height="150"
              src="/placeholder.svg"
              width="150"
            />
            <div className="grid gap-1 text-center">
              <h3 className="text-sm font-medium">Yasuo</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Mastery Level: 7
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <img
              alt="Image"
              className="aspect-[1/1] rounded-lg object-cover object-center"
              height="150"
              src="/placeholder.svg"
              width="150"
            />
            <div className="grid gap-1 text-center">
              <h3 className="text-sm font-medium">Yasuo</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Mastery Level: 7
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <img
              alt="Image"
              className="aspect-[1/1] rounded-lg object-cover object-center"
              height="150"
              src="/placeholder.svg"
              width="150"
            />
            <div className="grid gap-1 text-center">
              <h3 className="text-sm font-medium">Yasuo</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Mastery Level: 7
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <img
              alt="Image"
              className="aspect-[1/1] rounded-lg object-cover object-center"
              height="150"
              src="/placeholder.svg"
              width="150"
            />
            <div className="grid gap-1 text-center">
              <h3 className="text-sm font-medium">Yasuo</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Mastery Level: 7
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <img
              alt="Image"
              className="aspect-[1/1] rounded-lg object-cover object-center"
              height="150"
              src="/placeholder.svg"
              width="150"
            />
            <div className="grid gap-1 text-center">
              <h3 className="text-sm font-medium">Yasuo</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Mastery Level: 7
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
