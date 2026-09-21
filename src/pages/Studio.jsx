import { CheckCircle2 } from 'lucide-react';

export default function Studio() {
  return (
    <div>
      {/* HEADER SECTION */}
      <section className="w-full bg-cyan-400 text-indigo-950 py-16 border-b-4 border-indigo-950">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight">STUDIO SPECS</h1>
          <p className="text-lg font-bold text-indigo-900 mt-2">Broadcast-quality hardware and low noise floor environment.</p>
        </div>
      </section>

      {/* SPECS & SAMPLES SECTION */}
      <section className="w-full bg-indigo-950 py-20 border-b-4 border-indigo-900">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-8">
          
          <div className="bg-indigo-900 p-8 rounded-2xl border-4 border-yellow-400 shadow-[6px_6px_0px_0px_rgba(250,204,21,1)] space-y-4">
            <h2 className="font-heading text-xl text-yellow-400">EQUIPMENT LIST</h2>
            <ul className="space-y-3 font-bold text-indigo-100">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="text-pink-400 w-5 h-5" /> Rode NT-1
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="text-pink-400 w-5 h-5" /> Focusrite Scarlett Solo Interface
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="text-pink-400 w-5 h-5" /> Custom Vocal Booth (-60dB floor)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="text-pink-400 w-5 h-5" /> Reaper DAW
              </li>
            </ul>
          </div>

          <div className="bg-indigo-900 p-8 rounded-2xl border-4 border-indigo-800 lg:col-span-2 space-y-6">
            <h2 className="font-heading text-xl text-white">RAW VS PROCESSED AUDIO</h2>
            <div>
              <span className="text-xs font-black text-yellow-400 uppercase tracking-widest block mb-2">Raw Unprocessed Room Sample</span>
              <audio controls className="w-full accent-yellow-400">
                <source src="/samples/raw-sample.wav" type="audio/wav" />
                Your browser does not support the audio element.
              </audio>
            </div>
            <div>
              <span className="text-xs font-black text-cyan-400 uppercase tracking-widest block mb-2">Mastered / Production-Ready Sample</span>
              <audio controls class="w-full accent-cyan-400">
                <source src="/samples/processed-sample.wav" type="audio/wav" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}