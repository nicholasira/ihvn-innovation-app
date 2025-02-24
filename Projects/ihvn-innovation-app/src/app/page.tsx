export default function Home() {
  const message = process.env.NEXT_PUBLIC_APP_MESSAGE || "Default Message";

  return (
    <main className="flex h-screen items-center justify-center">
      <h1 className="text-3xl font-bold">{message}</h1>
    </main>
  );
}
