export function ProjectsCTA() {
  return (
    <div>
      <div className="mx-auto  max-w-7xl py-12 sm:px-6 sm:py-12 lg:px-8">
        <div className="bg-zinc-100/50 relative isolate overflow-hidden rounded-3xl border border-zinc-100 dark:border-zinc-800/50  px-6 py-16 text-center shadow-lg shadow-zinc-800/5   backdrop-blur sm:px-16 dark:bg-zinc-800/50  dark:text-zinc-100/50">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
            View My Recent Projects
          </h2>
          <p className="darl:text-gray-300 mx-auto mt-6 max-w-xl text-lg leading-8">
            Check out some of the projects that I have been working on recently!
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/projects"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-teal-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Projects
            </a>
            <a
              href="/about"
              className="text-sm font-semibold leading-6 hover:text-teal-500 dark:text-white"
            >
              About Me <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
