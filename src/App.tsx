import './App.css'

function App() {

  return (
    <>
    <label className="swap swap-flip text-9xl transition-transform transform active:scale-95 animate-bounce">
  <input type="checkbox" />

  <div className="swap-on">💧</div>
  <div className="swap-off">🔥</div>
</label>
    <h1 className='font-extrabold my-10' >Welcome Qeerser Personal</h1>
       <nav>
            <div className="overflow-x-hidden flex gap-2 xs:gap-4 text-xl text-slate-400 font-medium uppercase tracking-wide justify-center items-center mt-8">
          
            <a className="text-xl font-semibold text-gray-400  hover:scale-105 transition-all duration-400">About</a>
            <span className="h-10 border border-l-gray-400 mx-4"></span>
            <a href='https://resumette-two.vercel.app/' className="text-xl font-semibold text-gray-400  hover:scale-105 transition-all duration-400">Resume</a>
            </div>
        </nav>
    </>
  )
}

export default App
