export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-black">
      <main className="flex flex-col items-center gap-6 text-center px-8">
        <h1 className="text-5xl font-bold tracking-tight text-black dark:text-white">
          Coming Soon
        </h1>
        <p className="max-w-md text-lg text-zinc-500 dark:text-zinc-400">
          We're working on something great. Check back soon.
        </p>
      </main>
    </div>
  );
}
