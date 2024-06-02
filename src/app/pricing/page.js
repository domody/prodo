import Footer from "../components/footer";

export default function Pricing() {
  return (
    <main className="flex w-screen flex-col items-center justify-center text-balance">
      <div className="relative flex min-h-screen w-full max-w-container flex-col items-center justify-start pt-64">
        <div className="">
          <div className="absolute left-0 top-0 -z-10 h-full w-1/5 border-x border-dashed dark:border-neutral-950"></div>
          <div className="absolute left-[40%] top-0 -z-10 h-full w-1/5 border-x border-dashed dark:border-neutral-950"></div>
          <div className="absolute left-[80%] top-0 -z-10 h-full w-1/5 border-x border-dashed dark:border-neutral-950"></div>
        </div>
        {/*  */}

        {/* Hero Section */}
        <div className="w-full space-y-4 text-balance px-8 text-center">
          <div className="flex items-center justify-center"></div>
          <h1 className="text-5xl font-medium">Pricing</h1>
          <p className="text-lg">
            Choose a plan that fits your team’s needs and budget. Whether you’re
            just starting out or scaling up, our flexible pricing options are
            designed to grow with you.
          </p>
        </div>

        <div className="w-full divide-x divide-dark-800 flex py-40">
          
        </div>
      </div>

      <div className="w-screen min-h-screen bg-white grid grid-cols-11 gap-4 p-8">
        <div className="w-full aspect-square rounded-lg bg-de-50"></div>
        <div className="w-full aspect-square rounded-lg bg-de-100"></div>
        <div className="w-full aspect-square rounded-lg bg-de-200"></div>
        <div className="w-full aspect-square rounded-lg bg-de-300"></div>
        <div className="w-full aspect-square rounded-lg bg-de-400"></div>
        <div className="w-full aspect-square rounded-lg bg-de-500"></div>
        <div className="w-full aspect-square rounded-lg bg-de-600"></div>
        <div className="w-full aspect-square rounded-lg bg-de-700"></div>
        <div className="w-full aspect-square rounded-lg bg-de-800"></div>
        <div className="w-full aspect-square rounded-lg bg-de-900"></div>
        <div className="w-full aspect-square rounded-lg bg-de-950"></div>

        <div className="w-full aspect-square rounded-lg bg-mauve-50"></div>
        <div className="w-full aspect-square rounded-lg bg-mauve-100"></div>
        <div className="w-full aspect-square rounded-lg bg-mauve-200"></div>
        <div className="w-full aspect-square rounded-lg bg-mauve-300"></div>
        <div className="w-full aspect-square rounded-lg bg-mauve-400"></div>
        <div className="w-full aspect-square rounded-lg bg-mauve-500"></div>
        <div className="w-full aspect-square rounded-lg bg-mauve-600"></div>
        <div className="w-full aspect-square rounded-lg bg-mauve-700"></div>
        <div className="w-full aspect-square rounded-lg bg-mauve-800"></div>
        <div className="w-full aspect-square rounded-lg bg-mauve-900"></div>
        <div className="w-full aspect-square rounded-lg bg-mauve-950"></div>

        <div className="w-full aspect-square rounded-lg bg-wool-50"></div>
        <div className="w-full aspect-square rounded-lg bg-wool-100"></div>
        <div className="w-full aspect-square rounded-lg bg-wool-200"></div>
        <div className="w-full aspect-square rounded-lg bg-wool-300"></div>
        <div className="w-full aspect-square rounded-lg bg-wool-400"></div>
        <div className="w-full aspect-square rounded-lg bg-wool-500"></div>
        <div className="w-full aspect-square rounded-lg bg-wool-600"></div>
        <div className="w-full aspect-square rounded-lg bg-wool-700"></div>
        <div className="w-full aspect-square rounded-lg bg-wool-800"></div>
        <div className="w-full aspect-square rounded-lg bg-wool-900"></div>
        <div className="w-full aspect-square rounded-lg bg-wool-950"></div>
      </div>
      {/* <Footer /> */}
    </main>
  );
}
