import './App.css'

function App() {


  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-slate-900 flex flex-col items-center justify-center p-4 text-white">
      <div className="max-w-4xl mx-auto text-center space-y-2">
        {/* Logo/Brand */}
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter">
          the website co
          <span className="text-emerald-400">.</span>
        </h1>

        {/* Main Content */}
        <h2 className="text-emerald-400 text-2xl md:text-3xl font-bold font-montserrat">
          coming soon
        </h2>

        {/* Footer */}
        <div className="mt-16 text-slate-400">
          <p className="mt-8 text-sm">
            © 2024 The Website Co. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
