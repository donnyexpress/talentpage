// Editorial Talent & Character Comp-Card Database
// State Management & Data Controller

const INITIAL_TALENT_DATA = [
  {
    id: "TC-101",
    name: "Rin Hoshizaki",
    nativeName: "星崎 凛",
    agency: "Tokyo Runway Lab",
    stature: 174, // cm
    bust: 87,
    waist: 58,
    hips: 89,
    cupSize: "E",
    shoes: 24.5,
    eyeColor: "Obsidian Dark",
    hairColor: "Jet Black / Raven",
    headProportion: 8.3, // head-to-body ratio
    legRatio: "1:1.64",
    aesthetics: ["Avant-Garde", "Cyberpunk Chic", "Runway Tall"],
    craniofacial: {
      faceShape: "Sculpted Oval",
      jawlineAngle: "116° Sharp",
      cheekboneIndex: "0.88 High Splay",
      intercanthalRatio: "1:1.02 Golden",
      canthalTilt: "+4.5° Positive Cat-Eye"
    },
    bio: "Prominent runway vanguard known for dramatic silhouette contrast and architectural presence in haute couture presentations.",
    images: {
      primary: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80",
      profile: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
      fullBody: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80",
      editorial: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80"
    }
  },
  {
    id: "TC-102",
    name: "Aoi Tachibana",
    nativeName: "立花 葵",
    agency: "Atelier Noir Tokyo",
    stature: 171,
    bust: 85,
    waist: 57,
    hips: 86,
    cupSize: "D",
    shoes: 24.0,
    eyeColor: "Deep Amber",
    hairColor: "Sleek Platinum Tint",
    headProportion: 8.1,
    legRatio: "1:1.62",
    aesthetics: ["Minimalist", "Monochrome", "High Fashion"],
    craniofacial: {
      faceShape: "Diamond Symmetrical",
      jawlineAngle: "120° Defined",
      cheekboneIndex: "0.91 Prominent",
      intercanthalRatio: "1:1.00 Balanced",
      canthalTilt: "+3.8° Neutral Upward"
    },
    bio: "Striking editorial muse characterized by razor-sharp facial symmetry, architectural bone structure, and fluid high-fashion posing.",
    images: {
      primary: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80",
      profile: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=900&q=80",
      fullBody: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
      editorial: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&fit=crop&w=900&q=80"
    }
  },
  {
    id: "TC-103",
    name: "Sora Kazami",
    nativeName: "風見 空",
    agency: "Metropolitan Elite",
    stature: 176,
    bust: 88,
    waist: 60,
    hips: 91,
    cupSize: "E",
    shoes: 25.0,
    eyeColor: "Dark Hazel",
    hairColor: "Natural Black Gloss",
    headProportion: 8.5,
    legRatio: "1:1.68",
    aesthetics: ["Runway Tall", "Athletic Haute", "Modernist"],
    craniofacial: {
      faceShape: "High Chiseled Heart",
      jawlineAngle: "114° Tapered",
      cheekboneIndex: "0.87 High Crest",
      intercanthalRatio: "1:1.04 Wide Aesthetic",
      canthalTilt: "+5.0° Feline Contour"
    },
    bio: "Unmatched statured presence with extended limb elongation and commanding physical poise for international haute couture campaigns.",
    images: {
      primary: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=80",
      profile: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=900&q=80",
      fullBody: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
      editorial: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=900&q=80"
    }
  },
  {
    id: "TC-104",
    name: "Rei Asakura",
    nativeName: "朝倉 麗",
    agency: "Apex Talent Collective",
    stature: 168,
    bust: 86,
    waist: 58,
    hips: 87,
    cupSize: "D",
    shoes: 23.5,
    eyeColor: "Espresso Brown",
    hairColor: "Warm Chestnut Balayage",
    headProportion: 8.0,
    legRatio: "1:1.60",
    aesthetics: ["Streetwear", "Cyberpunk Chic", "Avant-Garde"],
    craniofacial: {
      faceShape: "Soft Angular V-Line",
      jawlineAngle: "122° Refined",
      cheekboneIndex: "0.85 Soft Prominence",
      intercanthalRatio: "1:1.01 Symmetrical",
      canthalTilt: "+4.0° Subtle Lift"
    },
    bio: "Dynamic crossover talent bridging high-concept visual storytelling, luxury streetwear editorials, and conceptual virtual fashion plates.",
    images: {
      primary: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=900&q=80",
      profile: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
      fullBody: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80",
      editorial: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=80"
    }
  },
  {
    id: "TC-105",
    name: "Kaede Shirakawa",
    nativeName: "白川 楓",
    agency: "Ginza Fashion Lab",
    stature: 172,
    bust: 89,
    waist: 59,
    hips: 90,
    cupSize: "F",
    shoes: 24.5,
    eyeColor: "Charcoal Grey",
    hairColor: "Ink Black Bob",
    headProportion: 8.2,
    legRatio: "1:1.63",
    aesthetics: ["Monochrome", "High Fashion", "Runway Tall"],
    craniofacial: {
      faceShape: "Architectural Oval",
      jawlineAngle: "118° Defined",
      cheekboneIndex: "0.89 Sculpted",
      intercanthalRatio: "1:1.00 Golden",
      canthalTilt: "+4.2° Almond Contour"
    },
    bio: "Celebrated for dramatic anatomical proportions, photogenic bone structure, and effortless high-contrast editorial range.",
    images: {
      primary: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
      profile: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80",
      fullBody: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=80",
      editorial: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80"
    }
  },
  {
    id: "TC-106",
    name: "Maya Kudou",
    nativeName: "工藤 摩耶",
    agency: "Shibuya Visual Agency",
    stature: 170,
    bust: 84,
    waist: 56,
    hips: 85,
    cupSize: "C",
    shoes: 24.0,
    eyeColor: "Deep Walnut",
    hairColor: "Smoky Espresso",
    headProportion: 8.1,
    legRatio: "1:1.61",
    aesthetics: ["Avant-Garde", "Minimalist", "Cyberpunk Chic"],
    craniofacial: {
      faceShape: "Geometric Heart",
      jawlineAngle: "115° High Taper",
      cheekboneIndex: "0.90 Precision Line",
      intercanthalRatio: "1:1.02 Harmonious",
      canthalTilt: "+4.8° Elegant Lift"
    },
    bio: "Pioneering minimalist muse celebrated for digital character plate modeling, game-engine character reference studies, and campaign lookbooks.",
    images: {
      primary: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&fit=crop&w=900&q=80",
      profile: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80",
      fullBody: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=80",
      editorial: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=80"
    }
  }
];

class CompCardApp {
  constructor() {
    this.storageKey = "editorial_compcard_db_v1";
    this.talents = this.loadTalents();
    this.activeFilter = {
      search: "",
      aesthetic: "all",
      minHeight: 165,
      sortBy: "height-desc"
    };
    this.activeView = "catalog"; // "catalog" | "studio" | "spec-sheet"
    this.activeTalent = this.talents[0];
    this.studioSlotImages = {
      front: this.activeTalent.images.primary,
      profile: this.activeTalent.images.profile,
      angle: this.activeTalent.images.editorial,
      full: this.activeTalent.images.fullBody
    };
    this.showGridOverlay = true;

    this.init();
  }

  loadTalents() {
    try {
      const stored = localStorage.getItem(this.storageKey);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.warn("Storage read error, loading default dataset", e);
    }
    return INITIAL_TALENT_DATA;
  }

  saveTalents() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.talents));
    } catch (e) {
      console.error("Storage save failed", e);
    }
  }

  init() {
    this.renderCatalog();
    this.bindEvents();
    this.updateStats();
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  bindEvents() {
    // Search Input
    const searchInput = document.getElementById("search-input");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        this.activeFilter.search = e.target.value.toLowerCase().trim();
        this.renderCatalog();
      });
    }

    // Height Range Slider
    const heightSlider = document.getElementById("height-range");
    const heightDisplay = document.getElementById("height-display");
    if (heightSlider && heightDisplay) {
      heightSlider.addEventListener("input", (e) => {
        const val = parseInt(e.target.value, 10);
        this.activeFilter.minHeight = val;
        heightDisplay.textContent = `≥ ${val} cm`;
        this.renderCatalog();
      });
    }

    // Sort Dropdown
    const sortSelect = document.getElementById("sort-select");
    if (sortSelect) {
      sortSelect.addEventListener("change", (e) => {
        this.activeFilter.sortBy = e.target.value;
        this.renderCatalog();
      });
    }

    // Tab view buttons
    document.querySelectorAll("[data-view-target]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const targetView = btn.getAttribute("data-view-target");
        this.switchView(targetView);
      });
    });

    // Aesthetic Filter Pills
    document.querySelectorAll(".filter-pill").forEach((pill) => {
      pill.addEventListener("click", () => {
        document.querySelectorAll(".filter-pill").forEach((p) => p.classList.remove("active", "bg-rose-600", "text-white"));
        pill.classList.add("active", "bg-rose-600", "text-white");
        this.activeFilter.aesthetic = pill.getAttribute("data-aesthetic");
        this.renderCatalog();
      });
    });

    // Close Modals on click outside or close button
    document.querySelectorAll("[data-close-modal]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const modal = btn.closest(".modal-container");
        if (modal) modal.classList.add("hidden");
      });
    });

    // Studio Grid Overlay Toggle
    const toggleOverlayBtn = document.getElementById("toggle-overlay-btn");
    if (toggleOverlayBtn) {
      toggleOverlayBtn.addEventListener("click", () => {
        this.showGridOverlay = !this.showGridOverlay;
        document.querySelectorAll(".studio-overlay-guide").forEach((el) => {
          el.classList.toggle("hidden", !this.showGridOverlay);
        });
        toggleOverlayBtn.classList.toggle("bg-rose-600", this.showGridOverlay);
        toggleOverlayBtn.classList.toggle("bg-slate-800", !this.showGridOverlay);
      });
    }

    // New Talent Form Submit
    const addTalentForm = document.getElementById("new-talent-form");
    if (addTalentForm) {
      addTalentForm.addEventListener("submit", (e) => {
        e.preventDefault();
        this.handleCreateTalent(new FormData(addTalentForm));
      });
    }

    // Edit Talent Form Submit
    const editTalentForm = document.getElementById("edit-talent-form");
    if (editTalentForm) {
      editTalentForm.addEventListener("submit", (e) => {
        e.preventDefault();
        this.handleUpdateTalent(new FormData(editTalentForm));
      });
    }
  }

  switchView(viewName) {
    this.activeView = viewName;
    document.querySelectorAll(".view-section").forEach((sec) => sec.classList.add("hidden"));
    
    // Highlight active nav item
    document.querySelectorAll("[data-view-target]").forEach((btn) => {
      const isCurrent = btn.getAttribute("data-view-target") === viewName;
      btn.classList.toggle("text-rose-500", isCurrent);
      btn.classList.toggle("border-rose-500", isCurrent);
      btn.classList.toggle("text-slate-400", !isCurrent);
      btn.classList.toggle("border-transparent", !isCurrent);
    });

    if (viewName === "catalog") {
      document.getElementById("catalog-section")?.classList.remove("hidden");
    } else if (viewName === "studio") {
      document.getElementById("studio-section")?.classList.remove("hidden");
      this.renderStudio();
    } else if (viewName === "spec-sheet") {
      document.getElementById("spec-sheet-section")?.classList.remove("hidden");
      this.renderFullSpecSheet();
    }
    if (window.lucide) window.lucide.createIcons();
  }

  getFilteredTalents() {
    return this.talents
      .filter((t) => {
        const matchesSearch =
          !this.activeFilter.search ||
          t.name.toLowerCase().includes(this.activeFilter.search) ||
          t.nativeName.includes(this.activeFilter.search) ||
          t.agency.toLowerCase().includes(this.activeFilter.search);

        const matchesAesthetic =
          this.activeFilter.aesthetic === "all" ||
          t.aesthetics.includes(this.activeFilter.aesthetic);

        const matchesHeight = t.stature >= this.activeFilter.minHeight;

        return matchesSearch && matchesAesthetic && matchesHeight;
      })
      .sort((a, b) => {
        if (this.activeFilter.sortBy === "height-desc") return b.stature - a.stature;
        if (this.activeFilter.sortBy === "height-asc") return a.stature - b.stature;
        if (this.activeFilter.sortBy === "head-ratio-desc") return b.headProportion - a.headProportion;
        if (this.activeFilter.sortBy === "name-asc") return a.name.localeCompare(b.name);
        return 0;
      });
  }

  renderCatalog() {
    const container = document.getElementById("talent-cards-grid");
    if (!container) return;

    const filtered = this.getFilteredTalents();
    document.getElementById("catalog-count").textContent = `${filtered.length} Models & Talents`;

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="col-span-full py-20 text-center">
          <div class="inline-flex p-4 rounded-full bg-slate-800 text-slate-400 mb-4">
            <i data-lucide="search-x" class="w-8 h-8"></i>
          </div>
          <h3 class="text-xl font-bold text-white mb-2 font-editorial">No Models Matched Search Criteria</h3>
          <p class="text-slate-400 text-sm max-w-md mx-auto">Try lowering the stature filter or clearing the aesthetic tags.</p>
        </div>
      `;
      if (window.lucide) window.lucide.createIcons();
      return;
    }

    container.innerHTML = filtered
      .map((item) => {
        const whr = (item.waist / item.hips).toFixed(2);
        return `
        <div class="glass-card rounded-2xl overflow-hidden flex flex-col group border border-slate-800 hover:border-rose-500/40 relative">
          <!-- Top Badge Bar -->
          <div class="relative aspect-compcard w-full overflow-hidden bg-slate-900 cursor-pointer" onclick="window.app.openCompCardModal('${item.id}')">
            <img 
              src="${item.images.primary}" 
              alt="${item.name}" 
              class="w-full h-full object-cover object-top transition duration-700 ease-out group-hover:scale-105 filter group-hover:contrast-105"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

            <!-- Stature Tag -->
            <div class="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-slate-700 text-xs font-mono-code font-bold text-rose-400 flex items-center space-x-1.5 shadow-lg">
              <i data-lucide="ruler" class="w-3.5 h-3.5 text-rose-500"></i>
              <span>${item.stature} cm</span>
            </div>

            <!-- Head Ratio Tag -->
            <div class="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-slate-700 text-xs font-mono-code text-slate-300 flex items-center space-x-1">
              <span>${item.headProportion} Heads</span>
            </div>

            <!-- Quick Info Overlay -->
            <div class="absolute bottom-3 left-3 right-3 text-left">
              <div class="text-xs uppercase tracking-wider text-rose-400 font-mono-code mb-0.5">${item.agency}</div>
              <h3 class="text-2xl font-extrabold text-white font-editorial tracking-tight flex items-baseline justify-between">
                <span>${item.name}</span>
                <span class="text-sm font-normal text-slate-400 font-sans">${item.nativeName}</span>
              </h3>
            </div>
          </div>

          <!-- Physical Metrics Bar -->
          <div class="p-4 bg-slate-950/60 border-t border-slate-800/80 flex-1 flex flex-col justify-between">
            <div class="grid grid-cols-3 gap-2 py-2 mb-3 bg-slate-900/60 rounded-xl px-3 border border-slate-800/60 text-center font-mono-code">
              <div>
                <span class="text-[10px] uppercase text-slate-500 block">Bust</span>
                <span class="text-sm font-bold text-slate-200">${item.bust} <span class="text-xs text-rose-400 font-normal">(${item.cupSize})</span></span>
              </div>
              <div class="border-x border-slate-800">
                <span class="text-[10px] uppercase text-slate-500 block">Waist</span>
                <span class="text-sm font-bold text-slate-200">${item.waist}</span>
              </div>
              <div>
                <span class="text-[10px] uppercase text-slate-500 block">Hips</span>
                <span class="text-sm font-bold text-slate-200">${item.hips}</span>
              </div>
            </div>

            <!-- Aesthetic Pills -->
            <div class="flex flex-wrap gap-1.5 mb-4">
              ${item.aesthetics
                .map(
                  (tag) => `
                <span class="text-[11px] px-2 py-0.5 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/50">
                  ${tag}
                </span>
              `
                )
                .join("")}
            </div>

            <!-- Action Buttons -->
            <div class="grid grid-cols-3 gap-1.5 pt-2 border-t border-slate-800/80">
              <button 
                onclick="window.app.openCompCardModal('${item.id}')"
                class="px-2 py-2 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center justify-center space-x-1 transition"
              >
                <i data-lucide="eye" class="w-3.5 h-3.5"></i>
                <span>View</span>
              </button>
              <button 
                onclick="window.app.sendToStudio('${item.id}')"
                class="px-2 py-2 text-xs font-semibold rounded-lg bg-rose-600/90 hover:bg-rose-600 text-white flex items-center justify-center space-x-1 transition shadow-lg shadow-rose-950/40"
              >
                <i data-lucide="scan" class="w-3.5 h-3.5"></i>
                <span>Blueprint</span>
              </button>
              <button 
                onclick="window.app.openEditModal('${item.id}')"
                class="px-2 py-2 text-xs font-semibold rounded-lg bg-slate-850 hover:bg-amber-600 text-slate-300 hover:text-white border border-slate-800 flex items-center justify-center space-x-1 transition"
                title="Edit Reference Images & Data"
              >
                <i data-lucide="pencil" class="w-3.5 h-3.5"></i>
                <span>Edit</span>
              </button>
            </div>
          </div>
        </div>
      `;
      })
      .join("");

    if (window.lucide) window.lucide.createIcons();
  }

  openCompCardModal(talentId) {
    const talent = this.talents.find((t) => t.id === talentId);
    if (!talent) return;
    this.activeTalent = talent;

    const modal = document.getElementById("compcard-modal");
    if (!modal) return;

    // Fill Modal Content
    document.getElementById("modal-name").textContent = talent.name;
    document.getElementById("modal-native-name").textContent = talent.nativeName;
    document.getElementById("modal-agency").textContent = talent.agency;
    document.getElementById("modal-id").textContent = talent.id;
    document.getElementById("modal-bio").textContent = talent.bio;

    // Set Images
    document.getElementById("modal-img-primary").src = talent.images.primary;
    document.getElementById("modal-img-profile").src = talent.images.profile;
    document.getElementById("modal-img-full").src = talent.images.fullBody;
    document.getElementById("modal-img-editorial").src = talent.images.editorial;

    // Verified specs
    document.getElementById("modal-spec-height").textContent = `${talent.stature} cm`;
    document.getElementById("modal-spec-bwh").textContent = `${talent.bust} - ${talent.waist} - ${talent.hips} cm`;
    document.getElementById("modal-spec-cup").textContent = `${talent.cupSize} Cup`;
    document.getElementById("modal-spec-shoes").textContent = `${talent.shoes} cm (EU)`;
    document.getElementById("modal-spec-proportion").textContent = `${talent.headProportion} Heads`;
    document.getElementById("modal-spec-ratio").textContent = talent.legRatio;

    // Craniofacial Specs
    document.getElementById("modal-cf-faceshape").textContent = talent.craniofacial.faceShape;
    document.getElementById("modal-cf-jawline").textContent = talent.craniofacial.jawlineAngle;
    document.getElementById("modal-cf-cheekbone").textContent = talent.craniofacial.cheekboneIndex;
    document.getElementById("modal-cf-eye").textContent = talent.craniofacial.canthalTilt;

    modal.classList.remove("hidden");
    if (window.lucide) window.lucide.createIcons();
  }

  sendToStudio(talentId) {
    const talent = this.talents.find((t) => t.id === talentId);
    if (!talent) return;
    this.activeTalent = talent;
    this.studioSlotImages = {
      front: talent.images.primary,
      profile: talent.images.profile,
      angle: talent.images.editorial,
      full: talent.images.fullBody
    };
    this.switchView("studio");
  }

  renderStudio() {
    if (!this.activeTalent) return;
    const t = this.activeTalent;

    document.getElementById("studio-talent-title").textContent = `${t.name} (${t.stature} cm) - Reference Board`;
    document.getElementById("studio-slot-front").src = this.studioSlotImages.front;
    document.getElementById("studio-slot-profile").src = this.studioSlotImages.profile;
    document.getElementById("studio-slot-angle").src = this.studioSlotImages.angle;
    document.getElementById("studio-slot-full").src = this.studioSlotImages.full;

    // Update Blueprint Stats
    document.getElementById("studio-bwh-val").textContent = `${t.bust}-${t.waist}-${t.hips}`;
    document.getElementById("studio-head-scale-val").textContent = `${t.headProportion}x`;
    document.getElementById("studio-leg-ratio-val").textContent = t.legRatio;
    document.getElementById("studio-jaw-val").textContent = t.craniofacial.jawlineAngle;

    if (window.lucide) window.lucide.createIcons();
  }

  renderFullSpecSheet() {
    const tableBody = document.getElementById("spec-table-body");
    if (!tableBody) return;

    tableBody.innerHTML = this.talents
      .map(
        (t) => `
        <tr class="border-b border-slate-800/80 hover:bg-slate-900/40 transition">
          <td class="p-4 font-mono-code text-xs text-rose-400 font-bold">${t.id}</td>
          <td class="p-4 flex items-center space-x-3">
            <img src="${t.images.primary}" class="w-10 h-10 rounded-full object-cover border border-slate-700" />
            <div>
              <div class="font-bold text-white font-editorial">${t.name}</div>
              <div class="text-xs text-slate-400">${t.nativeName} · ${t.agency}</div>
            </div>
          </td>
          <td class="p-4 font-mono-code font-bold text-white">${t.stature} cm</td>
          <td class="p-4 font-mono-code text-slate-300">${t.bust} / ${t.waist} / ${t.hips} <span class="text-xs text-rose-400">(${t.cupSize})</span></td>
          <td class="p-4 font-mono-code text-slate-300">${t.headProportion} Heads</td>
          <td class="p-4 font-mono-code text-slate-300">${t.legRatio}</td>
          <td class="p-4 text-xs">
            <div class="flex flex-wrap gap-1">
              ${t.aesthetics.map((a) => `<span class="bg-slate-800 text-slate-300 px-2 py-0.5 rounded">${a}</span>`).join("")}
            </div>
          </td>
          <td class="p-4 text-right">
            <button 
              onclick="window.app.openCompCardModal('${t.id}')"
              class="px-2.5 py-1 text-xs bg-slate-800 hover:bg-slate-700 rounded text-slate-200 mr-1"
            >View Card</button>
          </td>
        </tr>
      `
      )
      .join("");
  }

  openEditModal(talentId) {
    const talent = this.talents.find((t) => t.id === talentId);
    if (!talent) return;

    // Close comp-card view modal if open
    document.getElementById("compcard-modal")?.classList.add("hidden");

    const modal = document.getElementById("edit-talent-modal");
    if (!modal) return;

    document.getElementById("edit-id").value = talent.id;
    document.getElementById("edit-title-name").textContent = `Editing: ${talent.name} (${talent.id})`;
    document.getElementById("edit-name").value = talent.name;
    document.getElementById("edit-nativeName").value = talent.nativeName;
    document.getElementById("edit-agency").value = talent.agency;
    document.getElementById("edit-stature").value = talent.stature;
    document.getElementById("edit-bust").value = talent.bust;
    document.getElementById("edit-waist").value = talent.waist;
    document.getElementById("edit-hips").value = talent.hips;
    document.getElementById("edit-cupSize").value = talent.cupSize;
    document.getElementById("edit-shoes").value = talent.shoes;
    document.getElementById("edit-aesthetics").value = talent.aesthetics.join(", ");
    document.getElementById("edit-bio").value = talent.bio;

    // Image URLs / local paths
    document.getElementById("edit-imgPrimary").value = talent.images.primary || "";
    document.getElementById("edit-imgProfile").value = talent.images.profile || "";
    document.getElementById("edit-imgFull").value = talent.images.fullBody || "";
    document.getElementById("edit-imgEditorial").value = talent.images.editorial || "";

    // Craniofacial specs
    document.getElementById("edit-cf-faceshape").value = talent.craniofacial?.faceShape || "Sculpted Oval";
    document.getElementById("edit-cf-jawline").value = talent.craniofacial?.jawlineAngle || "116° Sharp";
    document.getElementById("edit-cf-cheekbone").value = talent.craniofacial?.cheekboneIndex || "0.88 High";
    document.getElementById("edit-cf-eye").value = talent.craniofacial?.canthalTilt || "+4.5° Positive";

    modal.classList.remove("hidden");
    if (window.lucide) window.lucide.createIcons();
  }

  handleUpdateTalent(formData) {
    const talentId = formData.get("id");
    const talent = this.talents.find((t) => t.id === talentId);
    if (!talent) return;

    const stature = parseInt(formData.get("stature"), 10) || talent.stature;
    talent.name = formData.get("name") || talent.name;
    talent.nativeName = formData.get("nativeName") || talent.nativeName;
    talent.agency = formData.get("agency") || talent.agency;
    talent.stature = stature;
    talent.bust = parseInt(formData.get("bust"), 10) || talent.bust;
    talent.waist = parseInt(formData.get("waist"), 10) || talent.waist;
    talent.hips = parseInt(formData.get("hips"), 10) || talent.hips;
    talent.cupSize = formData.get("cupSize") || talent.cupSize;
    talent.shoes = parseFloat(formData.get("shoes")) || talent.shoes;
    talent.headProportion = parseFloat((stature / 21.2).toFixed(1));
    talent.aesthetics = formData.get("aesthetics") ? formData.get("aesthetics").split(",").map(s => s.trim()) : talent.aesthetics;
    talent.bio = formData.get("bio") || talent.bio;

    talent.images = {
      primary: formData.get("imgPrimary") || talent.images.primary,
      profile: formData.get("imgProfile") || talent.images.profile,
      fullBody: formData.get("imgFull") || talent.images.fullBody,
      editorial: formData.get("imgEditorial") || talent.images.editorial
    };

    talent.craniofacial = {
      faceShape: formData.get("cfFaceShape") || talent.craniofacial.faceShape,
      jawlineAngle: formData.get("cfJawline") || talent.craniofacial.jawlineAngle,
      cheekboneIndex: formData.get("cfCheekbone") || talent.craniofacial.cheekboneIndex,
      intercanthalRatio: talent.craniofacial.intercanthalRatio || "1:1.01",
      canthalTilt: formData.get("cfEye") || talent.craniofacial.canthalTilt
    };

    this.saveTalents();
    this.updateStats();
    this.renderCatalog();
    if (this.activeTalent && this.activeTalent.id === talentId) {
      this.activeTalent = talent;
      this.studioSlotImages = {
        front: talent.images.primary,
        profile: talent.images.profile,
        angle: talent.images.editorial,
        full: talent.images.fullBody
      };
    }

    document.getElementById("edit-talent-modal").classList.add("hidden");
    alert(`Updated ${talent.name}'s profile and images successfully!`);
  }

  deleteTalent(talentId) {
    if (!confirm("Are you sure you want to delete this comp-card profile?")) return;
    this.talents = this.talents.filter(t => t.id !== talentId);
    this.saveTalents();
    this.updateStats();
    this.renderCatalog();
    document.getElementById("compcard-modal")?.classList.add("hidden");
    document.getElementById("edit-talent-modal")?.classList.add("hidden");
  }

  resetAllToOriginalDefaults() {
    if (!confirm("Reset all profiles to initial default dataset? Any manual edits will be reverted.")) return;
    localStorage.removeItem(this.storageKey);
    this.talents = [...INITIAL_TALENT_DATA];
    this.saveTalents();
    this.updateStats();
    this.renderCatalog();
    alert("Reset back to default template dataset.");
  }

  handleCreateTalent(formData) {
    const stature = parseInt(formData.get("stature"), 10) || 170;
    const newEntry = {
      id: `TC-${100 + this.talents.length + 1}`,
      name: formData.get("name") || "Unnamed Talent",
      nativeName: formData.get("nativeName") || "名前なし",
      agency: formData.get("agency") || "Independent",
      stature: stature,
      bust: parseInt(formData.get("bust"), 10) || 86,
      waist: parseInt(formData.get("waist"), 10) || 58,
      hips: parseInt(formData.get("hips"), 10) || 88,
      cupSize: formData.get("cupSize") || "D",
      shoes: parseFloat(formData.get("shoes")) || 24.0,
      eyeColor: formData.get("eyeColor") || "Deep Brown",
      hairColor: formData.get("hairColor") || "Black",
      headProportion: parseFloat((stature / 21.2).toFixed(1)),
      legRatio: "1:1.62",
      aesthetics: formData.get("aesthetics") ? formData.get("aesthetics").split(",").map(s => s.trim()) : ["High Fashion"],
      craniofacial: {
        faceShape: "Sculpted Oval",
        jawlineAngle: "117° Defined",
        cheekboneIndex: "0.88 High",
        intercanthalRatio: "1:1.01",
        canthalTilt: "+4.0°"
      },
      bio: formData.get("bio") || "Newly registered editorial model entry.",
      images: {
        primary: formData.get("imgPrimary") || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80",
        profile: formData.get("imgProfile") || "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
        fullBody: formData.get("imgFull") || "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80",
        editorial: formData.get("imgEditorial") || "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80"
      }
    };

    this.talents.unshift(newEntry);
    this.saveTalents();
    this.updateStats();
    this.renderCatalog();

    document.getElementById("add-talent-modal").classList.add("hidden");
    document.getElementById("new-talent-form").reset();
    alert(`Added ${newEntry.name} successfully to your comp-card database!`);
  }

  updateStats() {
    const totalCount = this.talents.length;
    const avgHeight = Math.round(this.talents.reduce((acc, t) => acc + t.stature, 0) / totalCount);
    const tallest = Math.max(...this.talents.map((t) => t.stature));

    const statCountEl = document.getElementById("stat-total-models");
    const statAvgEl = document.getElementById("stat-avg-height");
    const statTallestEl = document.getElementById("stat-tallest");

    if (statCountEl) statCountEl.textContent = totalCount;
    if (statAvgEl) statAvgEl.textContent = `${avgHeight} cm`;
    if (statTallestEl) statTallestEl.textContent = `${tallest} cm`;
  }
}

// Global initialization
window.addEventListener("DOMContentLoaded", () => {
  window.app = new CompCardApp();
});
