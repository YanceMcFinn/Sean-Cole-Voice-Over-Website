import { Download } from 'lucide-react';

export default function Resume() {
  return (
    <div>
      {/* HEADER SECTION */}
      <section className="w-full bg-indigo-900 text-white py-16 border-b-4 border-indigo-950">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight">RESUME & CREDITS</h1>
            <p className="text-lg font-bold text-indigo-200 mt-2">Recent video game, animation, and dubbing work.</p>
          </div>
          <a href="/resume.pdf" download className="bg-yellow-400 hover:bg-yellow-300 text-indigo-950 font-black px-6 py-3 rounded-xl border-2 border-indigo-950 shadow-[4px_4px_0px_0px_rgba(236,72,153,1)] flex items-center gap-2">
            <Download className="w-5 h-5" /> DOWNLOAD PDF
          </a>
        </div>
      </section>

      {/* RESUME CONTENT */}
      <section className="w-full bg-indigo-950 py-20 border-b-4 border-indigo-900">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          
          <div className="space-y-6">
            <h2 className="text-2xl font-black text-yellow-400 border-b-2 border-indigo-800 pb-2">VIDEO GAMES & ANIMATION</h2>
            <div className="bg-indigo-900 p-6 rounded-xl border-2 border-indigo-800 space-y-1">
              <h3 className="font-bold text-white text-lg">Cyber-Strike RPG</h3>
              <p className="text-sm text-pink-400 font-bold">Role: Lead Villain (Dr. Vane)</p>
              <p className="text-xs text-indigo-300">Indie Interactive Studios • 2025</p>
            </div>
            <div className="bg-indigo-900 p-6 rounded-xl border-2 border-indigo-800 space-y-1">
              <h3 className="font-bold text-white text-lg">Starlight Quest</h3>
              <p className="text-sm text-cyan-400 font-bold">Role: Comedic Companion (Gimble)</p>
              <p className="text-xs text-indigo-300">Animated Web Series • 2024</p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-black text-yellow-400 border-b-2 border-indigo-800 pb-2">TRAINING & WORKSHOPS</h2>
            <div className="bg-indigo-900 p-6 rounded-xl border-2 border-indigo-800 space-y-2">
              <p className="text-sm font-bold text-indigo-100"><strong>Character Voice Acting:</strong> Voice Masters Academy</p>
              <p className="text-sm font-bold text-indigo-100"><strong>Video Game & ADR Dubbing:</strong> Edge Studio NYC</p>
              <p className="text-sm font-bold text-indigo-100"><strong>Improv Comedy Training:</strong> Upright Citizens Brigade</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}