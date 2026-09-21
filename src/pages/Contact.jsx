import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', details: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Audition request submitted!');
  };

  return (
    <div>
      {/* HEADER SECTION */}
      <section className="w-full bg-yellow-400 text-indigo-950 py-16 border-b-4 border-indigo-950">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight">LET'S WORK TOGETHER!</h1>
          <p className="text-lg font-bold text-indigo-900 mt-2">Send over a script excerpt for a free custom character audition.</p>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="w-full bg-indigo-950 py-20 border-b-4 border-indigo-900">
        <div className="max-w-3xl mx-auto px-6">
          <form onSubmit={handleSubmit} className="bg-indigo-900 p-8 rounded-3xl border-4 border-yellow-400 shadow-[8px_8px_0px_0px_rgba(236,72,153,1)] space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-black uppercase text-yellow-400 mb-2">Your Name</label>
                <input 
                  type="text" 
                  placeholder="Dev / Director Name" 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-indigo-950 border-2 border-indigo-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-400 font-bold"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-black uppercase text-yellow-400 mb-2">Your Email</label>
                <input 
                  type="email" 
                  placeholder="name@studio.com" 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-indigo-950 border-2 border-indigo-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-400 font-bold"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-black uppercase text-yellow-400 mb-2">Project Type & Details</label>
              <textarea 
                rows="4" 
                placeholder="Tell me about the character, line count, budget, and timeline..." 
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                className="w-full bg-indigo-950 border-2 border-indigo-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-400 font-bold"
                required
              ></textarea>
            </div>
            <button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-300 text-indigo-950 font-black py-4 rounded-xl border-2 border-indigo-950 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
              SEND AUDITION REQUEST
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}