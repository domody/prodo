// import Footer from "./components/footer";
// import Navbar from "./components/navbar";

// export default function Home() {
//   return (
//     <main className="flex w-screen flex-col items-center justify-center text-balance">
//       <div className="absolute top-0 -z-50 mx-auto aspect-[2/1] w-[36rem] rounded-b-full bg-[#181933] blur-[150px]"></div>
//       {/* Page Start */}
//       <Navbar />

//       <div className="container mx-auto mt-24 flex flex-col items-center justify-start">
//         <div className="flex flex-col items-center justify-start">
//           <div className="flex items-center justify-center rounded-full border border-pink-200/30 bg-gradient-to-b from-pink-300/[0.02] to-pink-300/15 px-5 py-1.5 text-sm">
//             <div className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-200 bg-clip-text text-transparent">
//               New: Mobile v1.0
//             </div>
//           </div>
//           <h1 className="mt-4 bg-gradient-to-b from-light to-[#bbbbbb] bg-clip-text text-center text-7xl font-semibold text-transparent">
//             Seamless Collaboration for <br />
//             Modern Teams
//           </h1>
//           <p className="mt-8 max-w-4xl text-center text-lg font-medium text-dark-200">
//             Designed for efficiency and clarity, ProDo helps your team stay in
//             sync and focused on what matters.
//           </p>
//         </div>

//         <div className="blur-backdrop-sm relative mt-32 aspect-video w-full rounded-xl bg-slate-950"></div>

//         <div className="flex flex-col items-center justify-start py-40">
//           <h1 className="mt-4 bg-gradient-to-r from-light to-[#bbbbbb] bg-clip-text text-center text-6xl font-medium leading-relaxed text-transparent">
//             Everything Your Team Needs in One Place
//           </h1>
//         </div>
//       </div>
//       <Footer />
//     </main>
//   );
// }

"use client";

import AddItem from "./components/AddItem";
import ListItems from "./components/ListItem";

export default function Home() {
  return (
    <div className="flex h-screen container w-screen items-center justify-center">
      <div className="flex w-1/2 flex-col items-center justify-center space-y-4">
        <h1>Welcome to My Next.js App</h1>
        <AddItem />
      </div>
      <div className="flex w-1/2 flex-col items-center justify-center space-y-4">
        <ListItems />
      </div>
    </div>
  );
}
