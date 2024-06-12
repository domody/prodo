import SkinnySidebar from "./components/skinnySidebar";
import LargeSidebar from "./components/largeSidebar";

export default function Home() {
  return (
    <main className="flex w-screen items-start justify-start text-balance bg-dark-900">
      <SkinnySidebar active="dashboard"/>
      <LargeSidebar />
      <div className="flex min-h-screen w-full items-start justify-start">
        <div className="flex min-h-screen w-full flex-col items-start justify-start">
          <div className="h-20 w-full border-b border-dark-500"></div>
        </div>
        <div className="min-h-screen w-96 border-l border-dark-500 bg-black/5"></div>
      </div>
    </main>
  );
}
