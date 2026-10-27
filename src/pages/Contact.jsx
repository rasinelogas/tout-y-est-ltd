import { useState } from "react";

function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    e.target.reset();
    setTimeout(() => setSent(false), 5000); // Guhisha ubutumwa nyuma y'amasegonda 5
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header Section */}
        <div className="text-center space-y-3">
          <span className="bg-emerald-100 text-emerald-800 text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest border border-emerald-200">
            📞 Vugana Na Tout y Est Ltd
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Twandikire cyangwa <span className="text-emerald-600">Udusure i Nyarugenge</span>
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base font-medium">
            Ufite ikibazo cyangwa ukeneye ibikoresho by'ubwubatsi, amashanyarazi, amazi, ububaji n'ubuhinzi? Turi hano kugira ngo twakire ubutumwa bwawe vuba cyane.
          </p>
        </div>

        {/* Quick Contact Banner */}
        <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <span className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full border border-emerald-500/30 inline-block mb-1">
              🟢 Service Client
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white">Turi Hano Kugira Ngo Tugufashe</h3>
            <p className="text-slate-300 text-xs sm:text-sm">
              Kanda kuri button yo ku ruhande uhite uvugana n'abakozi bacu ku murongo utaziguye!
            </p>
          </div>

          {/* Direct Support Button */}
          <a
            href="https://wa.me/250788803391?text=Mwaramutse!%20Nshaka%20ibindi%20bisobanuro%20kuri%20Quincaillerie%20Tout%20y%20Est%20Ltd."
            target="_blank"
            rel="noreferrer"
            className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs sm:text-sm px-7 py-4 rounded-2xl transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:scale-105 active:scale-95 shrink-0 flex items-center gap-2.5"
          >
            <span className="text-lg">💬</span>
            <span>Twandikire kuri WhatsApp tugufashe</span>
          </a>
        </div>

        {/* Main Grid: Contact Info & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Left Side: Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Phone Card With All Numbers */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center text-xl shrink-0 font-bold">
                  📞
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">Nimero za Telefone</h3>
                  <p className="text-xs text-slate-500">Duhamagare cyangwa uduceho:</p>
                </div>
              </div>
              
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <a href="tel:+250788803391" className="flex items-center justify-between p-2.5 bg-slate-50 hover:bg-emerald-50 rounded-xl transition-all border border-slate-100">
                  <span className="text-xs font-bold text-slate-800">0788 803 391</span>
                  <span className="text-[10px] bg-emerald-600 text-white font-bold px-2 py-0.5 rounded-md">Main</span>
                </a>
                <a href="tel:+250785171995" className="flex items-center justify-between p-2.5 bg-slate-50 hover:bg-emerald-50 rounded-xl transition-all border border-slate-100">
                  <span className="text-xs font-bold text-slate-800">0785 171 995</span>
                  <span className="text-[10px] bg-slate-200 text-slate-700 font-bold px-2 py-0.5 rounded-md">Line 2</span>
                </a>
                <a href="tel:+250788653743" className="flex items-center justify-between p-2.5 bg-slate-50 hover:bg-emerald-50 rounded-xl transition-all border border-slate-100">
                  <span className="text-xs font-bold text-slate-800">0788 653 743</span>
                  <span className="text-[10px] bg-slate-200 text-slate-700 font-bold px-2 py-0.5 rounded-md">Line 3</span>
                </a>
                <a href="tel:+250788666750" className="flex items-center justify-between p-2.5 bg-slate-50 hover:bg-emerald-50 rounded-xl transition-all border border-slate-100">
                  <span className="text-xs font-bold text-slate-800">0788 666 750</span>
                  <span className="text-[10px] bg-slate-200 text-slate-700 font-bold px-2 py-0.5 rounded-md">Line 4</span>
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex items-start gap-4">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center text-xl shrink-0 font-bold">
                📧
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-900 text-base">Aderesi ya Email</h3>
                <p className="text-xs text-slate-500">Twandikire igihe cyose:</p>
                <a href="mailto:info@toutyest.com" className="text-xs font-extrabold text-emerald-600 hover:underline block pt-1">
                  irumvayassin@gmail.com
                </a>
              </div>
            </div>

            {/* Location & Working Hours Card */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex items-start gap-4">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center text-xl shrink-0 font-bold">
                📍
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-900 text-base">Aho Duherereye</h3>
                <p className="text-xs font-bold text-emerald-600">Isoko rya Nyarugenge, Umuryango No. B2-56</p>
                <p className="text-xs text-slate-500">Kigali, Rwanda</p>
                <div className="pt-2">
                  <span className="text-[11px] font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-lg inline-block">
                    🕐 Mbere - Sabato: 8:00 AM - 6:00 PM
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Side: Contact Form */}
          <div className="lg:col-span-2 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="text-2xl font-black text-slate-900 mb-2">Ohereza Ubutumwa Bwawe</h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-6">
              Uzuza uyu mwanya wose hamwe n'ubutumwa bwawe cyangwa ibikoresho ushaka kurangura, tuzagusubiza mu gihe gito cyane.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Amazina yawe</label>
                  <input
                    type="text"
                    placeholder="Urugero: Jean Bosco"
                    required
                    className="w-full bg-slate-50 text-slate-800 text-sm px-4 py-3.5 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Email yawe / Telefone</label>
                  <input
                    type="text"
                    placeholder="Urugero: name@example.com cyangwa 078..."
                    required
                    className="w-full bg-slate-50 text-slate-800 text-sm px-4 py-3.5 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Ubutumwa bwawe</label>
                <textarea
                  placeholder="Andika hano ibicuruzwa ukeneye cyangwa ikibazo ufite..."
                  rows="5"
                  required
                  className="w-full bg-slate-50 text-slate-800 text-sm px-4 py-3.5 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm px-8 py-4 rounded-2xl shadow-lg shadow-emerald-600/30 transition-all duration-300 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
              >
                <span>Ohereza Ubutumwa</span>
                <span>🚀</span>
              </button>

              {sent && (
                <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2 animate-in fade-in duration-300">
                  <span>✅</span>
                  <span>Ubutumwa bwoherejwe neza! Murakoze kwandikira Tout y Est Ltd.</span>
                </div>
              )}

            </form>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Contact;