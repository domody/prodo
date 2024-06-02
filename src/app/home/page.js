import SkinnySidebar from "./components/skinnySidebar";

export default function Home() {
  return (
    <main className="flex w-screen items-start justify-start text-balance bg-dark-900">
      <SkinnySidebar />
      <div className="flex h-screen w-96 flex-col items-start justify-start border-r border-dark-500">
        <div className="h-20 w-full border-b border-dark-500"></div>
        <div className="flex h-[calc(100vh-5rem)] w-full flex-col items-start justify-start px-6 py-8">
        </div>
      </div>
      <div className="flex min-h-screen w-full items-start justify-start">
        <div className="flex min-h-screen w-full flex-col items-start justify-start">
          <div className="h-20 w-full border-b border-dark-500"></div>
        </div>
        <div className="min-h-screen w-96 border-l border-dark-500 bg-black/5"></div>
      </div>
    </main>
  );
}
