import viteLogo from '/vite.svg'
import './App.css'

function App() {
  function check(formData) {
    const query = formData.get("query");
    alert(`You searched for '${query}'`);
  }

  return (
    < >
    <form className="flex flex-col items-center justify-center bg-black h-screen w-screen gap-8" onSubmit={check}>
    <h3 className="text-white text-3xl">Enter text to area to check wether if the text is Turkish or not.</h3>
    <h3 className="text-white text-3xl">Text language: fizbuzz</h3>
    <div className="relative">
      <div className="absolute inset-0 shadow-white shadow-2xl animate-pulse"></div>
      <textarea name="query" type="text" className="border p-2 w-[20cm] h-[4cm] relative z-10" />
    </div>
    <button type="submit" className="border p-2 text-white rounded-md z-10">Check</button>
    </form>
    </>
  )
}

export default App
