import viteLogo from '/vite.svg'
import './App.css'
import { franc } from 'franc';
import { useState } from 'react';

function App() {


  const [languageState, setLanguageState] = useState("Undetermined")

  function check(event) {
    event.preventDefault(); // Prevent the default form submission
    const textarea = event.target.querySelector('textarea[name="query"]');
    const enteredText = textarea.value;
    if (enteredText.length < 18) {
      alert("Not enough characters to analyze language. Please enter at least 18 characters.");
    } else {
      const tur = "tur";
      if (franc(enteredText) !== tur) {
        setLanguageState("Not Turkish!");
      } else {
        setLanguageState("Turkish.");
      }
    }
  }

  

  return (
    < >
    <form className="flex flex-col items-center justify-center bg-black h-screen w-screen gap-8" onSubmit={check}>
    <h3 className="text-white text-3xl">Enter text to area to check wether if the text is Turkish or not.</h3>
    <h3 className="text-white text-3xl">Text language: {languageState}</h3>
    <div className="relative">
      <div className="absolute inset-0 shadow-white shadow-2xl animate-pulse"></div>
      <textarea name="query" type="text" className="border p-2 w-[48rem] h-[12rem] relative z-10" />
    </div>
    <button type="submit" className="border p-2 text-white rounded-md z-10">Check</button>
    </form>
    </>
  )
}

export default App
