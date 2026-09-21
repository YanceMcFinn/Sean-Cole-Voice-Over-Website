export default function VideoCard({ 
  title, 
  characterRole, 
  youtubeEmbedUrl, 
  borderColor = "border-pink-500", 
  shadowColor = "rgba(236,72,153,1)", 
  tagBg = "bg-pink-500" 
}) {
  return (
    <div className={`bg-indigo-900 rounded-2xl border-4 ${borderColor} shadow-[6px_6px_0px_0px_${shadowColor}] overflow-hidden flex flex-col`}>
      {/* Responsive Aspect Ratio Video Container */}
      <div className="relative w-full aspect-video bg-black">
        <iframe
          src={youtubeEmbedUrl}
          title={title}
          className="absolute top-0 left-0 w-full h-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Video Details */}
      <div className="p-6 flex-grow flex flex-col justify-between space-y-3">
        <div>
          <span className={`inline-block text-xs font-black uppercase text-indigo-950 px-3 py-1 rounded-md ${tagBg} mb-2`}>
            {characterRole}
          </span>
          <h3 className="font-heading text-lg text-white font-bold leading-snug">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
}