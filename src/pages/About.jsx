import { Link } from "react-router-dom";

function About() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans selection:bg-emerald-500 selection:text-white">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* 1. Header & Intro Section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider border border-emerald-200">
            🏢 Abo Turi Bo — Tout Y Est Ltd
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Iduka rya Mbere ry'Ibyuma n'Ibikoresho by'Ubwubatsi <span className="text-emerald-600">i Kigali</span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
            <strong className="text-slate-900 font-bold">Quincaillerie Tout y Est Ltd</strong> ni iduka riranguza kandi rikaguza ibikoresho by'ubuziranenge buhanitse by'ubwubatsi, amashanyarazi, amazi (Plomberie), ububaji, n'ubuhinzi mu Rwanda. Dukorera mu Mujyi wa Kigali, Isoko rya Nyarugenge (Umuryango No. B2-56).
          </p>
        </div>

        {/* 2. Hero Poster Image / Banner */}
        <div className="relative w-full max-w-4xl mx-auto bg-slate-900 border border-slate-800 p-2 rounded-3xl shadow-2xl overflow-hidden group">
          <div className="overflow-hidden rounded-2xl w-full">
            <img
              src="/mm.jpeg"
              alt="Quincaillerie Tout Y Est Ltd Storefront"
              className="w-full h-auto max-h-[360px] object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
          <div className="absolute bottom-4 left-4 right-4 bg-slate-950/85 backdrop-blur-md p-4 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-white shadow-lg">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📍</span>
              <div>
                <h3 className="font-extrabold text-sm sm:text-base text-emerald-400">Quincaillerie Tout Y Est Ltd</h3>
                <p className="text-xs text-slate-300">Isoko rya Nyarugenge, Umuryango No. B2-56 • Kigali</p>
              </div>
            </div>
            <a
              href="tel:+250788803391"
              className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl transition-all shadow-md shrink-0 flex items-center gap-2"
            >
              <span>📞</span> 0788 803 391
            </a>
          </div>
        </div>

        {/* 3. KEY STATS BANNER */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
          <div className="space-y-1">
            <h4 className="text-3xl sm:text-4xl font-black text-emerald-600">100%</h4>
            <p className="text-xs font-bold text-slate-600 uppercase tracking-wider">Ubuziranenge (Original)</p>
          </div>
          <div className="space-y-1 md:border-l md:border-slate-100">
            <h4 className="text-3xl sm:text-4xl font-black text-emerald-600">5+</h4>
            <p className="text-xs font-bold text-slate-600 uppercase tracking-wider">Amashami y'Ibicuruzwa</p>
          </div>
          <div className="space-y-1 md:border-l md:border-slate-100">
            <h4 className="text-3xl sm:text-4xl font-black text-emerald-600">1000+</h4>
            <p className="text-xs font-bold text-slate-600 uppercase tracking-wider">Abakiriya Bizeye</p>
          </div>
          <div className="space-y-1 md:border-l md:border-slate-100">
            <h4 className="text-3xl sm:text-4xl font-black text-emerald-600">24/7</h4>
            <p className="text-xs font-bold text-slate-600 uppercase tracking-wider">Ubufasha kuri WhatsApp</p>
          </div>
        </div>

        {/* 4. Company Vision, Mission & Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Mission */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-3">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center text-2xl font-bold">
              🎯
            </div>
            <h3 className="text-lg font-bold text-slate-900">Intego Yacu (Mission)</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Kugeza ku baguzi n'abubatsi ibikoresho by'ubwubatsi n'ibyo mu nzu by'ubuziranenge bwo ku rwego rwo hejuru, ku giciro cyoroheye buri wese.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-3">
            <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center text-2xl font-bold">
              👁️
            </div>
            <h3 className="text-lg font-bold text-slate-900">Icyerekezo (Vision)</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Kuba umunyamuryango n'iduka rya mbere ryizewe mu Rwanda no mu karere mu kurangura no gukwirakwiza ibikoresho byose by'ubwubatsi n'inganda.
            </p>
          </div>

          {/* Core Values */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-3">
            <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center text-2xl font-bold">
              ⭐
            </div>
            <h3 className="text-lg font-bold text-slate-900">Indangagaciro (Values)</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Ubwizerane, Ubuziranenge (Quality Original Products), gukorera mu mucyo, no gukorana neza n'abakiriya mu buryo bw'umwimerere.
            </p>
          </div>

        </div>

        {/* 5. Showcase y'Amashami 5 (Our 5 Core Departments) */}
        <div className="space-y-8 pt-4">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <span className="text-emerald-700 font-extrabold text-xs uppercase tracking-wider bg-emerald-100 px-3.5 py-1 rounded-full border border-emerald-200">
              Amashami Yacu Y'Ibanze
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Ibyo Dukora & Amashami Yacu</h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Mu iduka ryacu rya Tout Y Est Ltd, wahasanga ibikoresho byose bijyanye n'amashami ateguye mu buryo bukurikira:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            
            {/* 1. Ubwubatsi */}
            <div className="bg-white p-4 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all space-y-3 flex flex-col justify-between group">
              <div>
                <div className="relative h-32 w-full overflow-hidden rounded-2xl bg-slate-100">
                  <img src="/ed (40).jpeg" alt="Ubwubatsi" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <span className="absolute top-2 left-2 bg-slate-900/80 backdrop-blur-md text-emerald-400 text-[10px] font-bold px-2.5 py-1 rounded-lg">
                    🧱 Construction
                  </span>
                </div>
                <h4 className="font-bold text-slate-900 text-sm pt-3">1. Ubwubatsi</h4>
                <p className="text-xs text-slate-500 pt-1 leading-relaxed">
                  Rhodius cutting discs, serire za Leon, poignées z'inzugi, na gilet de sécurité.
                </p>
              </div>
            </div>

            {/* 2. Amashanyarazi */}
            <div className="bg-white p-4 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all space-y-3 flex flex-col justify-between group">
              <div>
                <div className="relative h-32 w-full overflow-hidden rounded-2xl bg-slate-100">
                  <img src="/ed (1).jpeg" alt="Amashanyarazi" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <span className="absolute top-2 left-2 bg-slate-900/80 backdrop-blur-md text-amber-400 text-[10px] font-bold px-2.5 py-1 rounded-lg">
                    ⚡ Electricity
                  </span>
                </div>
                <h4 className="font-bold text-slate-900 text-sm pt-3">2. Amashanyarazi</h4>
                <p className="text-xs text-slate-500 pt-1 leading-relaxed">
                  Insinga za Alfa Cables (1.5mm, 2.5mm), amasockets, n'amaswitch z'ubuziranenge.
                </p>
              </div>
            </div>

            {/* 3. Amazi */}
            <div className="bg-white p-4 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all space-y-3 flex flex-col justify-between group">
              <div>
                <div className="relative h-32 w-full overflow-hidden rounded-2xl bg-slate-100">
                  <img src="/ed (9).jpeg" alt="Amazi Plumbing" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <span className="absolute top-2 left-2 bg-slate-900/80 backdrop-blur-md text-teal-400 text-[10px] font-bold px-2.5 py-1 rounded-lg">
                    🚰 Plumbing
                  </span>
                </div>
                <h4 className="font-bold text-slate-900 text-sm pt-3">3. Amazi (Plomberie)</h4>
                <p className="text-xs text-slate-500 pt-1 leading-relaxed">
                  Robine za Milano, amatiyo ya IFAN, Tangit glue, na shower sets.
                </p>
              </div>
            </div>

            {/* 4. Ububaji */}
            <div className="bg-white p-4 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all space-y-3 flex flex-col justify-between group">
              <div>
                <div className="relative h-32 w-full overflow-hidden rounded-2xl bg-slate-100">
                  <img src="/ed (42).jpeg" alt="Ububaji Carpentry" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <span className="absolute top-2 left-2 bg-slate-900/80 backdrop-blur-md text-amber-300 text-[10px] font-bold px-2.5 py-1 rounded-lg">
                    🪚 Carpentry
                  </span>
                </div>
                <h4 className="font-bold text-slate-900 text-sm pt-3">4. Ububaji</h4>
                <p className="text-xs text-slate-500 pt-1 leading-relaxed">
                  Fevicol PUR wood glue, vis z'imbaho, metre zo gupima, n'amagants yo kwirinda.
                </p>
              </div>
            </div>

            {/* 5. Ubuhinzi */}
            <div className="bg-white p-4 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all space-y-3 flex flex-col justify-between group">
              <div>
                <div className="relative h-32 w-full overflow-hidden rounded-2xl bg-slate-100">
                  <img src="/ed (19).jpeg" alt="Ubuhinzi Farming" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <span className="absolute top-2 left-2 bg-slate-900/80 backdrop-blur-md text-green-400 text-[10px] font-bold px-2.5 py-1 rounded-lg">
                    🌾 Farming
                  </span>
                </div>
                <h4 className="font-bold text-slate-900 text-sm pt-3">5. Ubuhinzi & Ubworozi</h4>
                <p className="text-xs text-slate-500 pt-1 leading-relaxed">
                  Amasuka ya magembe, ipiki, majagu, n'imipira y'amazi y'ubuhinzi.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* 6. Why Choose Us Section */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 space-y-8 shadow-xl">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-4xl font-black text-emerald-400">Kuki Wahitamo Tout Y Est Ltd?</h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-lg mx-auto">
              Ibyo tubandikira bituma abakiriya n'ibigo by'ubwubatsi batugana buri munsi:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800/70 p-6 rounded-2xl border border-slate-700/60 space-y-2">
              <span className="text-3xl">🥇</span>
              <h4 className="font-bold text-white text-base">Ubumwe bw'Ibicuruzwa</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Dukorana n'inganda zikomeye nka Milano, IFAN, Sola, na Rhodius zizewe.</p>
            </div>

            <div className="bg-slate-800/70 p-6 rounded-2xl border border-slate-700/60 space-y-2">
              <span className="text-3xl">🏷️</span>
              <h4 className="font-bold text-white text-base">Igiciro Cyiza Cyane</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Turanguza kandi tugacuruza ku giciro cyiza kitagora abubatsi mu Rwanda.</p>
            </div>

            <div className="bg-slate-800/70 p-6 rounded-2xl border border-slate-700/60 space-y-2">
              <span className="text-3xl">🚚</span>
              <h4 className="font-bold text-white text-base">Kugeza Ibintu ku Mukiriya</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Twagukorera livraison ku murimo cyangwa ku nzu yawe vuba cyane.</p>
            </div>

            <div className="bg-slate-800/70 p-6 rounded-2xl border border-slate-700/60 space-y-2">
              <span className="text-3xl">🤝</span>
              <h4 className="font-bold text-white text-base">Serivisi Izewe</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Abakozi bazi neza ibikoresho bakuyobora neza mu byo ukeneye ku gihe.</p>
            </div>
          </div>
        </div>

        {/* 7. Call to Action (CTA) Banner */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 sm:p-12 text-white text-center space-y-6 shadow-xl shadow-emerald-600/20">
          <h2 className="text-2xl sm:text-4xl font-black">Ufite Umushinga W'Ubwubatsi Cyangwa Ushaka Kurangura?</h2>
          <p className="text-emerald-100 text-xs sm:text-base max-w-2xl mx-auto font-medium leading-relaxed">
            Tugane uyu munsi i Nyarugenge B2-56 cyangwa uvugane n'ikipe yacu kuri WhatsApp / Telefone tukufashe neza!
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              to="/products"
              className="bg-slate-900 hover:bg-slate-800 text-white font-extrabold px-8 py-3.5 rounded-2xl text-xs sm:text-sm transition-all duration-300 hover:scale-105 shadow-md"
            >
              Reba Ibicuruzwa Byose 🛒
            </Link>
            <Link
              to="/contact"
              className="bg-white hover:bg-emerald-50 text-emerald-900 font-extrabold px-8 py-3.5 rounded-2xl text-xs sm:text-sm transition-all duration-300 hover:scale-105 shadow-md"
            >
              Vugana Natwe Kuri WhatsApp 💬
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;