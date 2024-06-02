import Footer from "../components/footer";

export default function Integrations() {
  return (
    <main className="flex w-screen flex-col items-center justify-center text-balance">
      <div className="relative flex min-h-screen w-full max-w-container flex-col items-center justify-start pt-52">
        <div className="hidden">
          <div className="absolute left-0 top-0 -z-10 h-full w-1/5 border-x border-dashed dark:border-neutral-950"></div>
          <div className="absolute left-[40%] top-0 -z-10 h-full w-1/5 border-x border-dashed dark:border-neutral-950"></div>
          <div className="absolute left-[80%] top-0 -z-10 h-full w-1/5 border-x border-dashed dark:border-neutral-950"></div>
        </div>
        {/*  */}

        {/* Hero Section */}
        <div className="w-full space-y-4 text-balance px-8 text-center">
          <p className="text-sm tracking-widest">INTEGRATIONS</p>
          <h1 className="text-5xl font-bold">
            Seamlessly Connect Your Favorite Tools
          </h1>
          <p className="max-w-4xl mx-auto text-dark-200 font-medium">
            Boost your workflow by linking TeamWorkspace with your favorite
            tools. Enjoy smooth collaboration and enhanced productivity with our
            wide range of integrations.
          </p>
        </div>

        <div className="flex w-full divide-x divide-dark-800 py-40"></div>
      </div>

      <Footer />
    </main>
  );
}
