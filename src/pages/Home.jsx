import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-emerald-500 selection:text-white">
      
      {/* 1. HERO SECTION WITH FEATURED POSTER IMAGE */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white py-12 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Grid Accent */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px]"></div>

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Quincaillerie Y'Ibanze i Kigali • Nyarugenge B2-56
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Ibikoresho Byose by'Ubwubatsi <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">Ahantu Hamwe</span>
            </h1>
            
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Murakaza neza kuri <strong className="text-white font-semibold">Tout Y Est Ltd</strong>. Dukura hanze ibikoresho by'ubwubatsi, amazi, amashanyarazi, ububaji n'ubuhinzi tukabiranguza mu gihugu hose ku giciro cyiza k'ubuziranenge.
            </p>

            {/* Quick Call to Action Bar */}
            <div className="bg-slate-900/80 border border-emerald-500/30 p-4 rounded-2xl space-y-3 backdrop-blur-md shadow-xl">
              <p className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2 justify-center lg:justify-start">
                <span>📞</span> Twandikire cyangwa Uduhamagare :
              </p>
              <div className="grid grid-cols-2 gap-2">
                <a href="tel:+250788803391" className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold py-2.5 px-3 rounded-xl text-center transition-all shadow-md flex items-center justify-center gap-1.5">
                  📱 0788 803 391
                </a>
                <a href="https://wa.me/250788803391" target="_blank" rel="noreferrer" className="bg-slate-800 hover:bg-emerald-600/80 text-slate-200 hover:text-white text-xs sm:text-sm font-bold py-2.5 px-3 rounded-xl text-center border border-slate-700 transition-all flex items-center justify-center gap-1.5">
                  💬 WhatsApp
                </a>
              </div>
            </div>

            {/* Main Action Buttons (Reba Ibicuruzwa / Vugana Natwe) */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4 w-full">
              <Link
                to="/products"
                className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-8 py-4 rounded-2xl shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:scale-105 active:scale-95 text-sm text-center flex items-center justify-center gap-2"
              >
                <span>Reba Ibicuruzwa</span>
                <span>🛒</span>
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-bold px-8 py-4 rounded-2xl backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 text-sm text-center flex items-center justify-center gap-2"
              >
                <span>Vugana Natwe</span>
                <span>📞</span>
              </Link>
            </div>

          </div>

          {/* Hero Right side (Image & Location Badge) */}
          <div className="lg:col-span-6 flex flex-col items-center w-full space-y-4">
            <div className="relative w-full max-w-xl bg-slate-900 border border-slate-800 p-2 rounded-3xl shadow-2xl overflow-hidden group">
              <div className="overflow-hidden rounded-2xl w-full">
                <img src="/mm.jpeg" alt="Quincaillerie Tout Y Est Ltd" className="w-full h-auto object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700 ease-out" />
              </div>
            </div>

            <div className="w-full max-w-xl bg-slate-900/90 border border-slate-800 p-3.5 rounded-2xl shadow-lg flex items-center justify-between backdrop-blur-md">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Aho dukorera</p>
                  <p className="text-xs sm:text-sm font-extrabold text-emerald-400">Isoko rya Nyarugenge, Umuryango No. B2-56</p>
                </div>
              </div>
              <span className="text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-3 py-1.5 rounded-full font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> OPEN
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* Trust Badges / Value Proposition */}
      <section className="bg-white border-b border-slate-200 py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-3">
            <div className="text-2xl mb-1">🏅</div>
            <h4 className="font-bold text-sm text-slate-900">Ubuziranenge</h4>
            <p className="text-xs text-slate-500">Ibicuruzwa by'umwimerere bifite ubuziranenge bwizewe</p>
          </div>
          <div className="p-3">
            <div className="text-2xl mb-1">📦</div>
            <h4 className="font-bold text-sm text-slate-900">Kurangura & Gukuba</h4>
            <p className="text-xs text-slate-500">Ibiciro bya Quincaillerie</p>
          </div>
          <div className="p-3">
            <div className="text-2xl mb-1">🚚</div>
            <h4 className="font-bold text-sm text-slate-900">Tubagezaho</h4>
            <p className="text-xs text-slate-500">Tubagezaho service zacu aho muherereye hose mubice byose byu Rwanda</p>
          </div>
          <div className="p-3">
            <div className="text-2xl mb-1">⚡</div>
            <h4 className="font-bold text-sm text-slate-900">Serivisi zihuse</h4>
            <p className="text-xs text-slate-500">Tugerageza kwita kuba client ndetse nokubaba hafi ndetse tukanita kumizigo yabo mpaka ibagezeho</p>
          </div>
        </div>
      </section>

      {/* 2. DEPARTMENTS & PRODUCTS SHOWCASE */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="bg-emerald-100 text-emerald-800 text-xs font-black uppercase px-4 py-1.5 rounded-full tracking-wider border border-emerald-200">
            Ibyiciro by'Ibicuruzwa
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
            Shakisha amakuru yibyo ducuruza mubyiciro bikurikira
          </h2>
          <p className="text-slate-600 text-base font-medium">
            Ducuruza ibikoresho byujuje ubuziranenge kubiciro byiza.
          </p>
        </div>

        {/* GRID Y'IBYICIRO 5 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* 1. AMASHANYARAZI */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
                <span className="font-bold text-base flex items-center gap-2">⚡ Amashanyarazi</span>
                <span className="text-xs font-bold bg-amber-500/20 text-amber-400 px-2.5 py-1 rounded-full">Electricity</span>
              </div>
              
              <div className="grid grid-cols-2 gap-1.5 p-2 bg-slate-100">
                <img src="/ed (1).jpeg" alt="Sockets & Switches" className="w-full h-36 object-cover rounded-xl border border-slate-200" />
                <img src="/ed (23).jpeg" alt="Alfa Cables" className="w-full h-36 object-cover rounded-xl border border-slate-200" />
              </div>

              <div className="p-6 space-y-2">
                <h3 className="text-lg font-bold text-slate-900">Insinga n'Amasockets</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Insinga za Alfa Cables,legend cables ndetse nibijyana nazo muri installation yinyubako.
                </p>
              </div>
            </div>

            <div className="p-6 pt-0">
              <Link to="/products" className="w-full bg-slate-900 hover:bg-emerald-600 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all text-sm">
                Reba ibya Electricity &rarr;
              </Link>
            </div>
          </div>

          {/* 2. AMAZI (PLUMBING) */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
                <span className="font-bold text-base flex items-center gap-2">🚰 Amazi</span>
                <span className="text-xs font-bold bg-teal-500/20 text-teal-400 px-2.5 py-1 rounded-full">Plumbing</span>
              </div>
              
              <div className="grid grid-cols-3 gap-1.5 p-2 bg-slate-100">
                <img src="/ed (7).jpeg" alt="PPR Fittings" className="w-full h-24 object-cover rounded-xl border border-slate-200" />
                <img src="/ed (16).jpeg" alt="Green Fittings" className="w-full h-24 object-cover rounded-xl border border-slate-200" />
                <img src="/ed (18).jpeg" alt="Kitchen Sink" className="w-full h-24 object-cover rounded-xl border border-slate-200" />
              </div>

              <div className="p-6 space-y-2">
                <h3 className="text-lg font-bold text-slate-900">Plomberie & Robinetterie</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Tangit zituma amatiyo afatana nama coude kuburyo bitava,ama evie bogerezamo ibyombo mubikoni bigezweho, brass check valves, PPR fittings n'amatyio y'amazi meza.
                </p>
              </div>
            </div>

            <div className="p-6 pt-0">
              <Link to="/products" className="w-full bg-slate-900 hover:bg-teal-600 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all text-sm">
                Reba ibya Plumbing &rarr;
              </Link>
            </div>
          </div>

          {/* 3. UBWUBATSI (CONSTRUCTION) */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
                <span className="font-bold text-base flex items-center gap-2">🧱 Ubwubatsi</span>
                <span className="text-xs font-bold bg-emerald-500/20 text-emerald-400 px-2.5 py-1 rounded-full">Building</span>
              </div>
              
              <div className="grid grid-cols-3 gap-1.5 p-2 bg-slate-100">
                <img src="/ed (4).jpeg" alt="Rhodius Discs" className="w-full h-24 object-cover rounded-xl border border-slate-200" />
                <img src="/ed (38).jpeg" alt="Door Handles" className="w-full h-24 object-cover rounded-xl border border-slate-200" />
                <img src="/ed (40).jpeg" alt="Safety Vest" className="w-full h-24 object-cover rounded-xl border border-slate-200" />
              </div>

              <div className="p-6 space-y-2">
                <h3 className="text-lg font-bold text-slate-900">Ibikoresho by'Ubwubatsi</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Gilet zo kwirinda mu kazi (Safety vests),Amacelule ubwoko butandukanye kdi bukomeye , ama disc akata ibyuma,beto ndetse nimbaho n'ibindi.
                </p>
              </div>
            </div>

            <div className="p-6 pt-0">
              <Link to="/products" className="w-full bg-slate-900 hover:bg-emerald-600 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all text-sm">
                Reba ibya Ubwubatsi &rarr;
              </Link>
            </div>
          </div>

          {/* 4. UBUBAJI (CARPENTRY) */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
                <span className="font-bold text-base flex items-center gap-2">🪚 Ububaji</span>
                <span className="text-xs font-bold bg-amber-700/20 text-amber-400 px-2.5 py-1 rounded-full border border-amber-600/30">
                  Carpentry
                </span>
              </div>
              
              <div className="grid grid-cols-3 gap-1.5 p-2 bg-slate-100">
                <img src="/ed (10).jpeg" alt="Mètre zo gupima" className="w-full h-24 object-cover rounded-xl border border-slate-200" />
                <img src="/ed (42).jpeg" alt="Fevicol PUR Wood Glue" className="w-full h-24 object-cover rounded-xl border border-slate-200" />
                <img src="/ed (41).jpeg" alt="Imisumari ya Vis" className="w-full h-24 object-cover rounded-xl border border-slate-200" />
              </div>

              <div className="p-6 space-y-2">
                <h3 className="text-lg font-bold text-slate-900">Ibikoresho by'Ababaji</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  cole zimbaho zizwi nka FEVICOL, imisumari ndetse vis atobora ibyuma nimbaho  mu bipimo bitandukanye, metere zo gupima, n'ibikoresho byose by'ububaji bw'umwimerere.
                </p>
              </div>
            </div>

            <div className="p-6 pt-0">
              <Link to="/products" className="w-full bg-slate-900 hover:bg-amber-700 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all text-sm shadow-md">
                Reba ibya Ububaji &rarr;
              </Link>
            </div>
          </div>

          {/* 5. UBUHINZI N'UBWOROZI (FARMING) */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
                <span className="font-bold text-base flex items-center gap-2">🌾 Ubuhinzi</span>
                <span className="text-xs font-bold bg-emerald-500/20 text-emerald-400 px-2.5 py-1 rounded-full">Farming</span>
              </div>
              
              <div className="grid grid-cols-2 gap-1.5 p-2 bg-slate-100">
                <img src="/ed (20).jpeg" alt="Pickaxe" className="w-full h-24 object-cover rounded-xl border border-slate-200" />
                <img src="/ed (19).jpeg" alt="Cock Brand Hoes" className="w-full h-24 object-cover rounded-xl border border-slate-200" />
              </div>

              <div className="p-6 space-y-2">
                <h3 className="text-lg font-bold text-slate-900">Ibikoresho by'Ubuhinzi</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Amasuka, majagu yubwoko bwinkoko, ipiki,imipira ivomerera  ndetse nibindi bikoresho b ikenerwa mumwuga wubuhinzi.
                </p>
              </div>
            </div>

            <div className="p-6 pt-0">
              <Link to="/products" className="w-full bg-slate-900 hover:bg-emerald-600 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all text-sm">
                Reba ibya Ubuhinzi &rarr;
              </Link>
            </div>
          </div>

        </div>

      </section>

      {/* 3. CONTACT QUICK BANNER */}
      <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-emerald-950 text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <h3 className="text-2xl font-bold">Ufite ikibazo cyangwa ushaka kurangura?</h3>
            <p className="text-slate-300 text-sm">
              Duhamagare ako kanya kuri <span className="text-emerald-400 font-bold">+250 788 803 391</span> cyangwa uzure iduka ryacu i Nyarugenge!
            </p>
          </div>
          <Link to="/contact" className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold px-8 py-3.5 rounded-xl transition-all shadow-lg hover:scale-105 whitespace-nowrap text-sm">
            Twandikire kuri WhatsApp 💬
          </Link>
        </div>
      </section>

    </div>
  );
}

export default Home;