export default function About() {
  return (
    <div>
      {/* HEADER SECTION */}
      <section className="w-full bg-pink-500 text-white py-16 border-b-4 border-indigo-950">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight">BEHIND THE MIC</h1>
          <p class="text-lg font-bold text-pink-100 mt-2">Actor, gamer, and professional noise-maker.</p>
        </div>
      </section>

      {/* ABOUT CONTENT SECTION */}
      <section className="w-full bg-indigo-950 py-20 border-b-4 border-indigo-900">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6 space-y-6">
            <h2 className="text-3xl font-black text-yellow-400">I GIVE VOICES TO IMAGINARY WORLDS.</h2>
            <p className="text-indigo-200 text-lg leading-relaxed">
              I'm Sean — a voice actor specializing in character animation, indie video games, and dubbing. I spend my days in a soundproof box making monster noises, screaming battle cries, and breathing life into quirky animated heroes.
            </p>
            <p className="text-indigo-200 text-lg leading-relaxed">
              With a background in improv comedy and theater, I love taking direction on the fly and pitching fun character variations to directors.
            </p>
          </div>

          {/* Headshot / Cutout Box */}
          <div className="md:col-span-6 flex justify-center">
            <div className="relative w-full max-w-md aspect-square bg-gradient-to-tr from-cyan-400 to-yellow-400 rounded-3xl border-4 border-indigo-950 shadow-[8px_8px_0px_0px_rgba(236,72,153,1)] overflow-hidden flex items-center justify-center p-6">
              <img 
                src="/hero-pose.png" 
                alt="Alex VO Headshot" 
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}