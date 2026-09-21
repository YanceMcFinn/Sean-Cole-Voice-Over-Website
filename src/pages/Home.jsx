import { Link } from 'react-router-dom';
import { Play, Gamepad2, Disc } from 'lucide-react';
import DemoCard from '../components/DemoCard';

export default function Home() {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="w-full bg-indigo-950 py-16 md:py-24 relative overflow-hidden border-b-4 border-indigo-900">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
          
          <div className="md:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/20 text-pink-400 border-2 border-pink-500 font-extrabold text-xs uppercase tracking-wider">
              <Gamepad2 className="w-4 h-4" /> Animation & Game Voice Actor
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-none text-white tracking-tight">
              BRINGING <span className="text-yellow-400 underline decoration-pink-500 decoration-wavy decoration-3">WILD</span> CHARACTERS TO LIFE!
            </h1>
            <p className="text-lg md:text-xl text-indigo-200 font-medium max-w-xl">
              From heroic anime leads to unhinged video game villains and quirky cartoon sidekicks. High-energy, versatile voice work delivered from a broadcast booth.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/demos" className="bg-pink-500 hover:bg-pink-400 text-white font-black px-8 py-4 rounded-2xl border-2 border-indigo-950 shadow-[5px_5px_0px_0px_rgba(250,204,21,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all flex items-center gap-3">
                <Play className="w-5 h-5 fill-current" /> HEAR REELS
              </Link>
              <Link to="/contact" className="bg-indigo-900 hover:bg-indigo-800 text-white font-bold px-8 py-4 rounded-2xl border-2 border-indigo-700 transition-all">
                BOOK A SESSION
              </Link>
            </div>
          </div>

          {/* Hero PNG Card */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/5] bg-gradient-to-b from-pink-500 to-purple-600 rounded-3xl border-4 border-yellow-400 shadow-[10px_10px_0px_0px_rgba(250,204,21,1)] flex items-center justify-center p-4 overflow-hidden group">
              <img 
                src="/Me.jpg" 
                alt="Character Voice Actor Portrait" 
                className="absolute inset-0 w-full h-full object-contain object-bottom drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

        </div>
      </section>

      {/* DEMOS PREVIEW */}
      <section className="w-full bg-yellow-400 text-indigo-950 py-20 border-b-4 border-indigo-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight flex items-center gap-3">
              <Disc className="w-10 h-10 stroke-[3]" /> CHARACTER DEMOS
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <DemoCard 
              title="Animation Reel" 
              description="High energy hero and cartoon voices."
              audioSrc="/demos/animation-reel.mp3" 
            />
            <DemoCard 
              title="Gaming Reel" 
              description="Monsters, villains, and tactical leads."
              audioSrc="/demos/gaming-reel.mp3" 
              borderColor="border-cyan-400"
              shadowColor="rgba(34,211,238,1)"
              titleColor="text-cyan-400"
            />
          </div>
        </div>
      </section>
    </div>
  );
}