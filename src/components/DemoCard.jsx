import { Download } from 'lucide-react';

export default function DemoCard({ 
  title, 
  description, 
  audioSrc, 
  borderColor = "border-yellow-400", 
  shadowColor = "rgba(250,204,21,1)", 
  titleColor = "text-yellow-400" 
}) {
  return (
    <div className={`bg-indigo-900 p-8 rounded-2xl border-4 ${borderColor} shadow-[6px_6px_0px_0px_${shadowColor}] space-y-4`}>
      <div className="flex justify-between items-center">
        <h3 className={`font-heading text-xl ${titleColor}`}>{title}</h3>
        <a href={audioSrc} download className="bg-pink-500 hover:bg-pink-400 text-white font-bold text-xs px-3 py-2 rounded-lg flex items-center gap-1">
          <Download className="w-4 h-4" /> MP3
        </a>
      </div>
      {description && <p className="text-sm text-indigo-200">{description}</p>}
      <audio controls className="w-full accent-pink-500">
        <source src={audioSrc} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}