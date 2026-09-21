import DemoCard from '../components/DemoCard';
import VideoCard from '../components/VideoCard';
import { Film, Mic } from 'lucide-react';

export default function Demos() {
  return (
    <div>
      {/* HEADER SECTION */}
      <section className="w-full bg-yellow-400 text-indigo-950 py-16 border-b-4 border-indigo-950">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight">DEMOS & FEATURED WORK</h1>
          <p className="text-lg font-bold text-indigo-900 mt-2">Listen to character audio reels or watch featured animation and game clips.</p>
        </div>
      </section>

      {/* AUDIO DEMOS SECTION */}
      <section className="w-full bg-indigo-950 py-16 border-b-4 border-indigo-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10 flex items-center gap-3">
            <Mic className="w-8 h-8 text-yellow-400" />
            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-white">
              AUDIO REELS
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <DemoCard 
              title="ANIMATION & CARTOONS" 
              description="High-energy heroes, quirky sidekicks, and expressive cartoon voices."
              audioSrc="/demos/animation-reel.mp3" 
            />
            <DemoCard 
              title="VIDEO GAMES & CREATURES" 
              description="Dark villains, battle grunts, monsters, and tactical sci-fi leads."
              audioSrc="/demos/gaming-reel.mp3" 
              borderColor="border-cyan-400" 
              shadowColor="rgba(34,211,238,1)" 
            />
          </div>
        </div>
      </section>

      {/* FEATURED VIDEO WORK SECTION */}
      <section className="w-full bg-indigo-900/50 py-16 border-b-4 border-indigo-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10 flex items-center gap-3">
            <Film className="w-8 h-8 text-pink-400" />
            <div>
              <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-white">
                VIDEO SHOWCASE
              </h2>
              <p className="text-indigo-200 font-bold text-sm mt-1">See my vocal performances in action on released projects.</p>
            </div>
          </div>

          {/* Responsive Video Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <VideoCard 
              title="Cyber-Strike RPG Trailer"
              characterRole="Role: Dr. Vane (Lead Villain)"
              youtubeEmbedUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
              borderColor="border-pink-500"
              shadowColor="rgba(236,72,153,1)"
              tagBg="bg-pink-400"
            />

            <VideoCard 
              title="Starlight Quest - Episode 1"
              characterRole="Role: Gimble the Goblin"
              youtubeEmbedUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
              borderColor="border-cyan-400"
              shadowColor="rgba(34,211,238,1)"
              tagBg="bg-cyan-400"
            />

            <VideoCard 
              title="Indie Anime Dub Scene"
              characterRole="Role: Heroic Lead"
              youtubeEmbedUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
              borderColor="border-yellow-400"
              shadowColor="rgba(250,204,21,1)"
              tagBg="bg-yellow-400"
            />
          </div>
        </div>
      </section>
    </div>
  );
}