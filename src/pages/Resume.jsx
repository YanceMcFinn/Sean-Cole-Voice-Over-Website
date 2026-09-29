import { Download, Gamepad2, Tv, GraduationCap, Award } from 'lucide-react';

// DATA STRUCTURES
const GAME_CREDITS = [
  {
    title: "CYBER-STRIKE RPG",
    role: "Dr. Vane",
    roleNote: "(Lead Villain)",
    roleColor: "text-pink-400",
    studio: "Indie Interactive Studios",
    year: "2025"
  },
  {
    title: "NEON LEGENDS: BRAWL",
    role: "Blitz & Commander Jax",
    roleNote: "(Playable Fighters)",
    roleColor: "text-cyan-400",
    studio: "Apex Games",
    year: "2024"
  },
  {
    title: "DUNGEON DELVERS",
    role: "Goblin Trader & Orc Berserker",
    roleNote: "(NPCs / Battle Sounds)",
    roleColor: "text-yellow-400",
    studio: "Mythic Quest Labs",
    year: "2023"
  }
];

const ANIMATION_CREDITS = [
  {
    title: "STARLIGHT QUEST",
    role: "Gimble",
    roleNote: "(Series Regular)",
    roleColor: "text-pink-400",
    studio: "Web Animation Series",
    year: "2024–Present"
  },
  {
    title: "MECHA GUARDIANS (ANIME DUB)",
    role: "Kenji",
    roleNote: "(Supporting / ADR Sync)",
    roleColor: "text-cyan-400",
    studio: "Global Dubbing Network",
    year: "2024"
  }
];

const TRAINING_DATA = [
  {
    course: "Character Voice Acting Masterclass",
    highlightColor: "text-yellow-400",
    school: "Voice Masters Academy",
    instructor: "Instructor: Jane Doe"
  },
  {
    course: "Video Game & ADR Dubbing Intensive",
    highlightColor: "text-pink-400",
    school: "Edge Studio NYC",
    instructor: "Instructor: John Smith"
  },
  {
    course: "Improv & Character Creation",
    highlightColor: "text-cyan-400",
    school: "Upright Citizens Brigade (UCB)",
    instructor: "Core Program"
  }
];

const SKILLS_DATA = [
  { label: "Vocal Range", color: "text-yellow-400", detail: "Tenor / Baritone (Youthful to Gravelly Villain)" },
  { label: "Performance", color: "text-pink-400", detail: "Creature Sounds, Death Screams, Battle Cries, Fast Lip-Sync / ADR Matching" },
  { label: "Dialects", color: "text-cyan-400", detail: "Standard American, UK Received Pronunciation, Transatlantic, Southern US" }
];

export default function Resume() {
  return (
    <div>
      {/* HEADER SECTION */}
      <section className="w-full bg-indigo-900 text-white py-16 border-b-4 border-indigo-950">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight">RESUME & CREDITS</h1>
            <p className="text-lg font-bold text-indigo-200 mt-2">
              Selected video game, animation, anime dubbing, and commercial credits.
            </p>
          </div>
          <a 
            href="/resume.pdf" 
            download 
            className="bg-yellow-400 hover:bg-yellow-300 text-indigo-950 font-black px-6 py-3.5 rounded-xl border-2 border-indigo-950 shadow-[4px_4px_0px_0px_rgba(236,72,153,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all flex items-center gap-2.5 shrink-0"
          >
            <Download className="w-5 h-5 stroke-[3]" /> DOWNLOAD FULL RESUME (PDF)
          </a>
        </div>
      </section>

      {/* LIST RESUME CONTENT */}
      <section className="w-full bg-indigo-950 py-16 border-b-4 border-indigo-900">
        <div className="max-w-5xl mx-auto px-6 space-y-16">
          
          {/* CATEGORY 1: VIDEO GAMES */}
          <div>
            <div className="flex items-center gap-3 border-b-4 border-yellow-400 pb-3 mb-6">
              <Gamepad2 className="w-8 h-8 text-yellow-400" />
              <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">
                VIDEO GAMES
              </h2>
            </div>

            <ul className="divide-y-2 divide-indigo-900/80 text-indigo-100 font-sans">
              {GAME_CREDITS.map((item, idx) => (
                <li key={idx} className="py-4 flex flex-col md:flex-row md:items-center justify-between gap-2 hover:bg-indigo-900/30 px-3 rounded-lg transition-colors">
                  <div>
                    <span className="font-heading font-black text-lg text-white">{item.title}</span>
                    <span className="mx-2 text-indigo-500 hidden md:inline">•</span>
                    <span className={`font-bold ${item.roleColor} block md:inline`}>
                      Role: {item.role} <span className="text-indigo-300 font-normal">{item.roleNote}</span>
                    </span>
                  </div>
                  <div className="text-xs font-bold text-indigo-400 uppercase tracking-wider shrink-0">
                    {item.studio} <span className="text-yellow-400 font-black ml-2">{item.year}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* CATEGORY 2: ANIMATION & DUBBING */}
          <div>
            <div className="flex items-center gap-3 border-b-4 border-pink-500 pb-3 mb-6">
              <Tv className="w-8 h-8 text-pink-500" />
              <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">
                ANIMATION & DUBBING
              </h2>
            </div>

            <ul className="divide-y-2 divide-indigo-900/80 text-indigo-100 font-sans">
              {ANIMATION_CREDITS.map((item, idx) => (
                <li key={idx} className="py-4 flex flex-col md:flex-row md:items-center justify-between gap-2 hover:bg-indigo-900/30 px-3 rounded-lg transition-colors">
                  <div>
                    <span className="font-heading font-black text-lg text-white">{item.title}</span>
                    <span className="mx-2 text-indigo-500 hidden md:inline">•</span>
                    <span className={`font-bold ${item.roleColor} block md:inline`}>
                      Role: {item.role} <span className="text-indigo-300 font-normal">{item.roleNote}</span>
                    </span>
                  </div>
                  <div className="text-xs font-bold text-indigo-400 uppercase tracking-wider shrink-0">
                    {item.studio} <span className="text-yellow-400 font-black ml-2">{item.year}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* CATEGORY 3: TRAINING & EDUCATION */}
          <div>
            <div className="flex items-center gap-3 border-b-4 border-cyan-400 pb-3 mb-6">
              <GraduationCap className="w-8 h-8 text-cyan-400" />
              <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">
                TRAINING & COACHING
              </h2>
            </div>

            <ul className="divide-y-2 divide-indigo-900/80 text-indigo-100 font-sans">
              {TRAINING_DATA.map((item, idx) => (
                <li key={idx} className="py-3.5 flex flex-col md:flex-row md:items-center justify-between gap-1 hover:bg-indigo-900/30 px-3 rounded-lg transition-colors">
                  <span className="font-bold text-white text-base">
                    <span className={`${item.highlightColor} font-black`}>{item.course}</span> — {item.school}
                  </span>
                  <span className="text-xs font-bold text-indigo-400 uppercase">{item.instructor}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CATEGORY 4: SPECIAL SKILLS & ACCENTS */}
          <div>
            <div className="flex items-center gap-3 border-b-4 border-indigo-700 pb-3 mb-6">
              <Award className="w-8 h-8 text-indigo-300" />
              <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">
                SPECIAL SKILLS
              </h2>
            </div>

            <div className="bg-indigo-900/40 p-6 rounded-xl border-2 border-indigo-800/80 text-sm font-bold leading-relaxed space-y-2">
              {SKILLS_DATA.map((item, idx) => (
                <p key={idx}>
                  <strong className={`${item.color} font-heading`}>{item.label}:</strong> {item.detail}
                </p>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}