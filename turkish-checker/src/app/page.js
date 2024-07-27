'use client';
import Image from "next/image";
import React from "react";

export default function Home() {

  const check = () => {
    console.log("Check")
  }

  return (
    <main >
    <form className="flex flex-col items-center justify-center bg-black h-screen gap-14" onSubmit={check}>
    <h3 className="text-white text-3xl">Enter text to area to check wether if the text is Turkish or not.</h3>
    <textarea name="query" type="text" className="border p-2 w-[20cm] h-[4cm] shadow-white shadow-2xl" />
    <button type="submit" className="border p-2 text-white">Check</button>
    </form>
    </main>
  );
}

