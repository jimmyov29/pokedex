import React from "react";

export default function MainLayout({children}: {children: React.ReactNode}) {
    return ( 
        <div className=" flex flex-col h-screen bg-slate-50">
        <main className=" w-full snap-y snap-mandatory overflow-y-auto scroll-smooth">
            {children}
        </main>

        </div>
     );
}
