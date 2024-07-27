'use client';
import Image from "next/image";
import React from "react";

export default function Home() {

  function check(formData) {
    const query = formData.get("query");
    alert(`You searched for '${query}'`);
  }

  return (
    <main >
    <form className="flex flex-col items-center justify-center bg-black h-screen gap-14" onSubmit={check}>
    <h3 className="text-white text-3xl">Enter text to area to check wether if the text is Turkish or not.</h3>
    <div className="relative">
      <div className="absolute inset-0 shadow-white shadow-2xl animate-pulse"></div>
      <textarea name="query" type="text" className="border p-2 w-[20cm] h-[4cm] relative z-10" />
    </div>
    <button type="submit" className="border p-2 text-white rounded-md ">Check</button>
    </form>
    </main>
  );
}

