import Header from "@/components/Header/Header";
import React from "react";

export default function MainLayout({children}: {children: React.ReactNode}) {
    return (
      <div className=" flex flex-col h-screen bg-slate-50 bg-neutral-200">
        <Header />
        <main className=" w-full grid place-items-center snap-y snap-mandatory overflow-y-auto scroll-smooth">
          {children}
        </main>
      </div>
    );
}
