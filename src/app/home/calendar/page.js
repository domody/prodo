/* 

********************************************************

THIS IS WORK IN PROGRESS

IM TRYNA FIGURE OUT HOW TO MAKE IT LOOK GOOD

HAVE A GO IF YOU LIKE

FULL CAPS LOOKS COOL

********************************************************

*/
"use client";

import React, { useState } from "react";
import SkinnySidebar from "../components/skinnySidebar";
import LargeSidebar from "../components/largeSidebar";

import Calendar from "./components/Calendar"

export default function Home() {
  return (
    <main className="flex h-screen w-screen items-start justify-start !overflow-hidden text-balance bg-dark-900">

      <SkinnySidebar />
      <LargeSidebar />
      <div className="flex h-screen w-full items-start justify-start">
        <div className="flex min-h-screen w-full flex-col items-start justify-start overflow-x-hidden">
          <div className="h-20 w-full border-b border-dark-500"></div>
          <div className="flex h-[calc(100vh-5rem)] w-full flex-col items-start justify-start overflow-x-hidden">
            <Calendar />
          </div>
        </div>
      </div>
    </main>
  );
}
