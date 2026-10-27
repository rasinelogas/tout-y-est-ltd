import { useState } from "react";

// Amakuru y'ibicuruzwa n'amafoto yose yavuye mu bubiko bwawe
const productsData = [
  // --- UBWUBATSI (CONSTRUCTION) ---
  {
    id: 1,
    name: "Rhodius Proline Cutting & Grinding Discs",
    category: "Ubwubatsi",
    badge: "Rhodius",
    img: "/ed (4).jpeg",
    description: "Discs z'umwimerere za Rhodius zo gukata ibyuma n'amabuye mu bwubatsi."
  },
  {
    id: 2,
    name: "Sola Spirit Levels (Niveau d'eau)",
    category: "Ubwubatsi",
    badge: "Sola",
    img: "/ed (5).jpeg",
    description: "Niveau d'eau zo gupima kuringaniza urukuta cyangwa amakaro z'inganda za Sola."
  },
  {
    id: 3,
    name: "Leon High Quality Door Lock Set",
    category: "Ubwubatsi",
    badge: "Leon",
    img: "/ed (12).jpeg",
    description: "Ingufuri y'urugi igezweho kandi ikomeye ya Leon."
  },
  {
    id: 4,
    name: "Pipe Clamps / Heavy Duty Brackets",
    category: "Ubwubatsi",
    badge: "Hardware",
    img: "/ed (24).jpeg",
    description: "Ibyuma bifata amatiyo n'insinga ku nkuta cyangwa ku bisenge."
  },
  {
    id: 5,
    name: "Brass Luxury Door Handles (Package)",
    category: "Ubwubatsi",
    badge: "Luxury",
    img: "/ed (38).jpeg",
    description: "Poignées z'inzugi z'icyuma z'umwimerere zo mu nzu."
  },
  {
    id: 6,
    name: "High-Visibility Safety Vest (Gilet de Sécurité)",
    category: "Ubwubatsi",
    badge: "Safety",
    img: "/ed (40).jpeg",
    description: "Gilet zo kwirinda n'ubumudasa mu kigo cy'ubwubatsi."
  },
  {
    id: 7,
    name: "Metallic Sliding Door Bolt (Verrou)",
    category: "Ubwubatsi",
    badge: "Security",
    img: "/ed (29).jpeg",
    description: "Agakoresho gakinga inzugi n'amadirishya k'icyuma."
  },

  // --- AMASHANYARAZI (ELECTRICITY) ---
  {
    id: 8,
    name: "Boîtes & Prises / Interrupteurs (Prises 2P)",
    category: "Amashanyarazi",
    badge: "Switches",
    img: "/ed (1).jpeg",
    description: "Prises n'interrupteurs z'ubuziranenge bwa RS n'amasockets yo ku nkuta."
  },
  {
    id: 9,
    name: "Alfa Cables 1.5mm / 2.5mm Electric Wires",
    category: "Amashanyarazi",
    badge: "Rouleau 90m",
    img: "/ed (23).jpeg",
    description: "Insinga z'amashanyarazi zizewe z'inganda za Alfa Cables mu Rwanda."
  },

  // --- AMAZI (PLUMBING) ---
  {
    id: 10,
    name: "Robine Milano Prato Bath-Basin Mixer",
    category: "Amazi",
    badge: "Milano",
    img: "/ed (14).jpeg",
    description: "Robine y'icyubahiro ya Milano Prato yo mu bwogero n'akarabo k'intoki."
  },
  {
    id: 11,
    name: "Robine Milano Crown Luxury Tap",
    category: "Amazi",
    badge: "Bestseller",
    img: "/ed (15).jpeg",
    description: "Robine y'ubuziranenge buhanitse ya Milano Crown ikoranywe icyuma gihimbaje."
  },
  {
    id: 12,
    name: "Shower Set Milano (With Wall Bracket)",
    category: "Amazi",
    badge: "Milano",
    img: "/ed (3).jpeg",
    description: "Shower set yuzuye ya Milano iherekejwe n'agakoresho ko kuyihobera ku rukuta."
  },
  {
    id: 13,
    name: "VTN Shower Head & Hose Set",
    category: "Amazi",
    badge: "Original",
    img: "/ed (6).jpeg",
    description: "Kit y'ubwogero ya VTN irimo tuyau na pomme y'amazi yo mu bwogero."
  },
  {
    id: 14,
    name: "PPR / PVC Pipe Fittings & Valves Board",
    category: "Amazi",
    badge: "PPR/PVC",
    img: "/ed (7).jpeg",
    description: "Raccords, coudes, na valves zitandukanye z'amazi za PPR."
  },
  {
    id: 15,
    name: "PPR Green Pipe Fittings",
    category: "Amazi",
    badge: "PPR",
    img: "/ed (16).jpeg",
    description: "Ibyuma bya PPR by'icyatsi byo guhuza amatiyo y'amazi meza."
  },
  {
    id: 16,
    name: "Kitchen Stainless Steel Double Sink",
    category: "Amazi",
    badge: "Stainless",
    img: "/ed (18).jpeg",
    description: "Isahani nini yo mu gikoni y'ibyuma bidatsindwa n'amazi ifite inshuro ebyiri."
  },
  {
    id: 17,
    name: "IFAN PPR/PVC Brass Valves",
    category: "Amazi",
    badge: "IFAN",
    img: "/ed (9).jpeg",
    description: "Amakaziye ya valves n'amatyio y'amazi yo mu bwoko bwizewe bwa IFAN."
  },
  {
    id: 18,
    name: "Brass Check Valve (3/4 Inch)",
    category: "Amazi",
    badge: "Brass",
    img: "/ed (25).jpeg",
    description: "Agakoresho kabuza amazi gusubira inyuma k'icya gatatu cy'inch (3/4)."
  },
  {
    id: 19,
    name: "Brass Pressure Relief Valve (3/4 Inch)",
    category: "Amazi",
    badge: "Brass",
    img: "/ed (26).jpeg",
    description: "Valve igenzura igipimo n'umuvuduko w'amazi."
  },
  {
    id: 20,
    name: "PPR Female Threaded Union Fitting",
    category: "Amazi",
    badge: "PPR",
    img: "/ed (27).jpeg",
    description: "Fitting ya PPR ifite umushinga w'icyuma wa pasiteri."
  },
  {
    id: 21,
    name: "Tangit Special PVC-U Cement Glue",
    category: "Amazi",
    badge: "Tangit",
    img: "/ed (46).jpeg",
    description: "Kole ikomeye cyane yo kuhatiriza no guhuza amatiyo ya PVC."
  },

  // --- UBUHINZI N'UBWOROZI (FARMING) ---
  {
    id: 22,
    name: "Cock Brand Hoe (Isuka y'igembe)",
    category: "Ubuhinzi n'Ubworozi",
    badge: "Cock Brand",
    img: "/ed (19).jpeg",
    description: "Amasuka y'agembe akomeye azwi nka Cock Brand yo guhinga."
  },
  {
    id: 23,
    name: "Heavy Duty Pickaxe Head (Ipiki)",
    category: "Ubuhinzi n'Ubworozi",
    badge: "Steel",
    img: "/ed (20).jpeg",
    description: "Ipiki y'icyuma yo gucukura ubutaka bukomeye no gusiza ubutaka n'amabuye."
  },
  {
    id: 24,
    name: "Garden Digging Fork (Majagu)",
    category: "Ubuhinzi n'Ubworozi",
    badge: "Farming",
    img: "/ed (22).jpeg",
    description: "Igikoresho cyo guhinga no gucukura ubutaka mu murima."
  },

  // --- UBUBAJI (CARPENTRY) ---
  {
    id: 25,
    name: "Dingdi Measuring Tape (5 Meters)",
    category: "Ububaji",
    badge: "Dingdi",
    img: "/ed (10).jpeg",
    description: "Metre 5m z'ububaji n'ubwubatsi zikora neza kandi zikomeye."
  },
  {
    id: 26,
    name: "Safety Work Gloves (Heavy Duty)",
    category: "Ububaji",
    badge: "Protection",
    img: "/ed (13).jpeg",
    description: "Ga (gloves) zo kwirinda mu mirimo y'ububaji n'ubwubatsi."
  },
  {
    id: 27,
    name: "Fevicol 1K PUR Wood Adhesive Glue",
    category: "Ububaji",
    badge: "Fevicol",
    img: "/ed (42).jpeg",
    description: "Kole y'ububaji ikora cyane ku mbaho (High Tech Polyurethane Glue)."
  },
  {
    id: 28,
    name: "Wood Screws Set (Imisumari ya Vis)",
    category: "Ububaji",
    badge: "Screws",
    img: "/ed (41).jpeg",
    description: "Imisumari ya vis z'imbaho mu bipimo bitandukanye."
  }
];

const categories = [
  { key: "Ubwubatsi", label: "🧱 Ubwubatsi (Construction)", color: "border-emerald-500 text-emerald-700 bg-emerald-50" },
  { key: "Amashanyarazi", label: "⚡ Amashanyarazi (Electricity)", color: "border-amber-500 text-amber-700 bg-amber-50" },
  { key: "Amazi", label: "🚰 Amazi (Plumbing)", color: "border-teal-500 text-teal-700 bg-teal-50" },
  { key: "Ubuhinzi n'Ubworozi", label: "🌾 Ubuhinzi n'Ubworozi (Farming)", color: "border-green-600 text-green-700 bg-green-50" },
  { key: "Ububaji", label: "🪚 Ububaji (Carpentry)", color: "border-amber-800 text-amber-900 bg-amber-100/60" }
];

function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = productsData.filter((p) => {
    const matchesCategory =
      selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch = p.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Title Section */}
        <div className="text-center space-y-3">
          <span className="bg-emerald-100 text-emerald-800 text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest border border-emerald-200">
            🔨 Quincaillerie Tout y Est Ltd — Catalog
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Ibicuruzwa bya <span className="text-emerald-600">Quincaillerie</span>
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base font-medium">
            Shakisha ibikoresho by'ubwubatsi, Robine za Milano, Plumbing, Ububaji, Ubuhinzi n'Amashanyarazi mu biciro byiza i Kigali.
          </p>
        </div>

        {/* Search & Quick Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-3xl shadow-sm border border-slate-200">
          
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Shakisha (Milano, PPR, Vis, Alfa...)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-100 text-slate-800 text-sm pl-10 pr-4 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
            />
            <span className="absolute left-3.5 top-3.5 text-slate-400 text-sm">🔍</span>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            <button
              onClick={() => setSelectedCategory("All")}
              className={`px-5 py-2.5 text-xs font-bold rounded-2xl whitespace-nowrap transition-all duration-300 ${
                selectedCategory === "All"
                  ? "bg-slate-900 text-white shadow-md scale-105"
                  : "bg-slate-100 text-slate-700 hover:bg-emerald-50 hover:text-emerald-600"
              }`}
            >
              Ibintu Byose
            </button>

            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-5 py-2.5 text-xs font-bold rounded-2xl whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === cat.key
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/30 scale-105"
                    : "bg-slate-100 text-slate-700 hover:bg-emerald-50 hover:text-emerald-600"
                }`}
              >
                {cat.key}
              </button>
            ))}
          </div>

        </div>

        {/* SECTION BY SECTION PRODUCT LISTING */}
        <div className="space-y-16">
          {categories.map((cat) => {
            const categoryProducts = filteredProducts.filter(
              (p) => p.category === cat.key
            );

            if (categoryProducts.length === 0) return null;

            return (
              <section key={cat.key} className="space-y-6">
                
                {/* SECTION HEADER TITLE */}
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div className="flex items-center gap-3">
                    <span className={`text-lg sm:text-2xl font-black px-4 py-2 rounded-2xl border ${cat.color}`}>
                      {cat.label}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-slate-400 bg-slate-200/60 px-3 py-1 rounded-full">
                    {categoryProducts.length} Items
                  </span>
                </div>

                {/* PRODUCT GRID FOR THIS CATEGORY */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {categoryProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200 hover:border-emerald-500/40 transition-all duration-300 group flex flex-col justify-between"
                    >
                      <div>
                        {/* Image & Badge Wrapper */}
                        <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                          <img
                            src={product.img}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <span className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-md text-emerald-400 text-[11px] font-extrabold px-3 py-1 rounded-full border border-slate-700">
                            {product.badge}
                          </span>
                        </div>

                        {/* Product Content */}
                        <div className="p-6 space-y-2">
                          <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-600 transition-colors leading-snug">
                            {product.name}
                          </h3>
                          <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                            {product.description}
                          </p>
                        </div>
                      </div>

                      {/* Action Button */}
                      <div className="p-6 pt-0">
                        <a 
                          href={`https://wa.me/250788803391?text=Mwaramutse!%20Nshaka%20kurangura%20cyangwa%20kugura:%20${encodeURIComponent(product.name)}`}
                          target="_blank"
                          rel="noreferrer"
                          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black py-3 rounded-2xl shadow-md shadow-emerald-600/20 transition-all duration-300 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
                        >
                          <span>Twandikire kuri WhatsApp</span>
                          <span>💬</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

              </section>
            );
          })}
        </div>

        {/* No Products Found Message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200">
            <span className="text-4xl">🔍</span>
            <h3 className="text-lg font-bold text-slate-800 mt-2">Nta gicuruzwa kibonetse</h3>
            <p className="text-xs text-slate-500 mt-1">Geregeza ku buryo bundi cyangwa uhindure ijambo wanditse.</p>
          </div>
        )}

      </div>
    </div>
  );
}

export default Products;