import { useState } from "react";

const faqsData = [
  {
    q: "Ni gute nagura cyangwa narangura ibicuruzwa kuri Tout y Est Ltd?",
    a: "Ushobora kudusura ku iduka ryacu imbona nkubone i Nyarugenge (B2-56), cyangwa ukaduhamagara/ukandikira kuri WhatsApp kuri 0788 803 391 tukagutegurira ivatiri cyangwa komande yawe.",
    category: "Gutumiza"
  },
  {
    q: "Mwaragaza ibicuruzwa mu ntara no mu byaro?",
    a: "Yego, dutanga serivisi zo kugeza ibikoresho byose by'ubwubatsi, amashanyarazi, n'amazi ku mukiriya (Livraison) mu Mujyi wa Kigali no mu Ntara zose z'u Rwanda.",
    category: "Kugeza ku mukiriya"
  },
  {
    q: "Uburyo bw'ubwishyu mwakira ni ubuhe?",
    a: "Twakira ubwishyu bwa Mobile Money (MTN / Airtel), Kwishyura unyuze muri Banki (Bank Transfer), MoMo Pay ku iduka, hamwe n'inoti (Cash).",
    category: "Ubwishyu"
  },
  {
    q: "Ni hehe iduka ryanyu riherereye neza?",
    a: "Tuherereye i Kigali, mu Karere ka Nyarugenge, Isoko rya Nyarugenge mu muryango No. B2-56.",
    category: "Aho duherereye"
  },
  {
    q: "Ese mufite ibikoresho by'amashanyarazi nka Alfa Cables n'amasockets?",
    a: "Yego! Duha abakiriya insinga z'amashanyarazi za Alfa Cables z'umwimerere (1.5mm, 2.5mm...), amasockets, switches, hamwe n meza z'amashanyarazi.",
    category: "Gutumiza"
  },
  {
    q: "Ese Robine na Fittings mufite ni izihe inganda zizikora?",
    a: "Dufite Robine na Shower sets z'ubuziranenge buhanitse za Milano & Rayol, amatiyo n'amafittings za PPR/PVC za IFAN na Tangit Cement Glue.",
    category: "Gutumiza"
  }
];

const categories = ["All", "Gutumiza", "Kugeza ku mukiriya", "Ubwishyu", "Aho duherereye"];

function Help() {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCat, setSelectedCat] = useState("All");

  // Interactive Quick Order Estimator State
  const [selectedDept, setSelectedDept] = useState("Ubwubatsi");
  const [itemCount, setItemCount] = useState(1);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = faqsData.filter((f) => {
    const matchesCat = selectedCat === "All" || f.category === selectedCat;
    const matchesSearch =
      f.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* 1. Header Section */}
        <div className="text-center space-y-4">
          <span className="bg-emerald-100 text-emerald-800 text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest border border-emerald-200">
            💬 Help & Support Center — Tout y Est Ltd
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Ibibazo Bikunze Kubazwa <span className="text-emerald-600">(FAQ)</span> & Ubufasha
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base font-medium">
            Shakisha ibisubizo ku bibazo bijyanye n'ibicuruzwa by'ubwubatsi, amashanyarazi, plomberie, kugeza ibintu ku mukiriya no kwishyura.
          </p>

          {/* Live Search Input */}
          <div className="pt-2 max-w-lg mx-auto relative">
            <input
              type="text"
              placeholder="Shakisha ikibazo (Alfa cables, Milano, Nyarugenge, MoMo...)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white text-slate-800 text-sm pl-11 pr-4 py-3.5 rounded-2xl border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
            />
            <span className="absolute left-4 top-4 text-slate-400 text-base">🔍</span>
          </div>
        </div>

        {/* 2. Quick Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all text-center space-y-2">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center text-2xl mx-auto">
              📦
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Gutumiza Vuba</h3>
            <p className="text-[11px] text-slate-500 leading-relaxed">Duhamagare kuri 0788 803 391 udutumize ibikoresho ukeneye.</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all text-center space-y-2">
            <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center text-2xl mx-auto">
              🚚
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Kugezwa ku Mukiriya</h3>
            <p className="text-[11px] text-slate-500 leading-relaxed">Dutanga serivisi zo kugeza ibikoresho mu nzu no mu ntara zose.</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all text-center space-y-2">
            <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center text-2xl mx-auto">
              💳
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Ubwishyu Bworoshe</h3>
            <p className="text-[11px] text-slate-500 leading-relaxed">MoMo Pay, Kwishyura kuri Banki cyangwa Inoti (Cash).</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all text-center space-y-2">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-2xl mx-auto">
              📍
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Aho Dukorera</h3>
            <p className="text-[11px] text-slate-500 leading-relaxed">Isoko rya Nyarugenge, Umuryango No. B2-56 i Kigali.</p>
          </div>
        </div>

        {/* 3. NEW FEATURE: Interactive Order Helper Widget */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <span className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full border border-emerald-500/30 inline-block mb-1">
                ⚡ Agakoresho k'Ubufasha bwa Vuba
              </span>
              <h3 className="text-xl sm:text-2xl font-black">Tegeka Cyangwa Saba Inyandiko y'Igiciro (Devis)</h3>
            </div>
            <p className="text-slate-400 text-xs max-w-xs">
              Hitamo igishami n'ingano y'ibyo ukeneye, uhite ubyoherereza ikipe yacu kuri WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300 uppercase">Igishami wifuza:</label>
              <select
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
                className="w-full bg-slate-800 text-white text-xs font-bold p-3 rounded-xl border border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="Ubwubatsi">🧱 Ubwubatsi (Construction)</option>
                <option value="Amashanyarazi">⚡ Amashanyarazi (Electricity)</option>
                <option value="Plomberie">🚰 Amazi & Plomberie</option>
                <option value="Ububaji">🪚 Ububaji (Carpentry)</option>
                <option value="Ubuhinzi">🌾 Ubuhinzi n'Ubworozi</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300 uppercase">Ingano (Estimates/Types):</label>
              <div className="flex items-center gap-2 bg-slate-800 border border-slate-700 p-1.5 rounded-xl">
                <button
                  type="button"
                  onClick={() => setItemCount(Math.max(1, itemCount - 1))}
                  className="w-8 h-8 bg-slate-700 hover:bg-slate-600 rounded-lg text-white font-bold"
                >
                  -
                </button>
                <span className="flex-1 text-center font-bold text-xs">{itemCount} Ibikoresho/Ibyiciro</span>
                <button
                  type="button"
                  onClick={() => setItemCount(itemCount + 1)}
                  className="w-8 h-8 bg-slate-700 hover:bg-slate-600 rounded-lg text-white font-bold"
                >
                  +
                </button>
              </div>
            </div>

            <div className="pt-4 sm:pt-0">
              <a
                href={`https://wa.me/250788803391?text=${encodeURIComponent(
                  `Mwaramutse! Nshaka kubaza ku ibikoresho bya ${selectedDept} (Bifite ubugari/ingano pfunyika nk'ibintu ${itemCount}). Mwamfasha?`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs py-3.5 px-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <span>Saba Devis Kuri WhatsApp</span>
                <span>💬</span>
              </a>
            </div>
          </div>
        </div>

        {/* 4. FAQ Accordion Section with Category Tabs */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span>❓</span> Ibibazo n'Ibisubizo (FAQ)
            </h2>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCat(cat)}
                  className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all whitespace-nowrap ${
                    selectedCat === cat
                      ? "bg-slate-900 text-white shadow-sm"
                      : "bg-slate-100 text-slate-600 hover:bg-emerald-50 hover:text-emerald-600"
                  }`}
                >
                  {cat === "All" ? "Ibintu Byose" : cat}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {filteredFaqs.map((f, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className="border border-slate-200/80 rounded-2xl overflow-hidden transition-all duration-200"
                >
                  <button
                    className="w-full text-left p-4 sm:p-5 font-bold text-slate-800 bg-slate-50/50 hover:bg-slate-100/80 flex justify-between items-center gap-4 transition-colors"
                    onClick={() => toggleFAQ(i)}
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base flex items-center gap-2">
                      <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-md font-extrabold">
                        {f.category}
                      </span>
                      {f.q}
                    </span>
                    <span className="w-8 h-8 flex items-center justify-center bg-white rounded-xl shadow-sm text-emerald-600 font-extrabold text-lg shrink-0">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="p-4 sm:p-5 text-xs sm:text-sm text-slate-600 bg-white border-t border-slate-100 leading-relaxed animate-in fade-in duration-200">
                      {f.a}
                    </div>
                  )}
                </div>
              );
            })}

            {filteredFaqs.length === 0 && (
              <div className="text-center py-10 text-xs text-slate-500 space-y-2">
                <span className="text-3xl">🔍</span>
                <p>Nta ikibazo gihuye n'ibyo wanditse cyabonetse.</p>
              </div>
            )}
          </div>
        </div>

        {/* 5. Direct Phone Contacts Grid */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <span>📞</span> Vugana n'Abakozi Bacu Kuri Telefone
          </h3>
          <p className="text-xs text-slate-500">
            Ushobora kuduhamagara kuri imwe mu nimero zizewe za Quincaillerie Tout Y Est Ltd:
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <a
              href="tel:+250788803391"
              className="p-3 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl text-center block transition-all"
            >
              <p className="text-[10px] font-bold text-emerald-700 uppercase">Umurongo w'Ibanze</p>
              <p className="text-xs font-black text-slate-900 mt-0.5">0788 803 391</p>
            </a>

            <a
              href="tel:+250785171995"
              className="p-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl text-center block transition-all"
            >
              <p className="text-[10px] font-bold text-slate-500 uppercase">Umurongo No. 2</p>
              <p className="text-xs font-black text-slate-900 mt-0.5">0785 171 995</p>
            </a>

            <a
              href="tel:+250788653743"
              className="p-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl text-center block transition-all"
            >
              <p className="text-[10px] font-bold text-slate-500 uppercase">Umurongo No. 3</p>
              <p className="text-xs font-black text-slate-900 mt-0.5">0788 653 743</p>
            </a>

            <a
              href="tel:+250788666750"
              className="p-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl text-center block transition-all"
            >
              <p className="text-[10px] font-bold text-slate-500 uppercase">Umurongo No. 4</p>
              <p className="text-xs font-black text-slate-900 mt-0.5">0788 666 750</p>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Help;