/**
 * Project: CBT System
 * File: warship.js
 * Description: catalogue.
 * Author: Aditya Choudhary(Computer Science Graduate | Developer | Lifelong Learner)
 * GitHub: https://github.com/adiityachoudhary
 * Created: 12-Nov-2025
 * Last Modified: 02-Dec-2025 (updated navigation & layout)
 * Version: 1.0.2
 * License: MIT
 * Signature: © 2025 Aditya Choudhary | All Rights Reserved
 *
 * Change log:
 *  - 02-Dec-2025: Fixed image count labeling and removed image container from the details slide
 *  - 10-Dec-2025: (this file) Show description only on last page, remove search bar,
 *                dynamic button labels, no circular navigation, one-button last slide.
 */


const topics = [
  // (unchanged data) ... paste your full topics array exactly as before
  {
 id: 'Zulfikar class',
    title: 'Zulfikar class',
    images: ['src/pk/1.jpg'],
    description: 'The Zulfiquar-class frigate also known as F-22P or Sword class, is a class of multi-mission guided missile frigates. The class is based on an updated model of the Chinese Type 053H3 ( Jiangwei Class) The frigates perform missions including air defense, enemy interdiction, extraction and regularly carry out patrolling in the economic exclusive zone (EEZ). Only 02 ships of Pakistan that have kniferest – Zulfiquar and Tughril EW suite made by India to counter this radar is Shakti, being fitted in all capital ships when they are going into MLU, pressently in INS Satpura, Vishakhapatnam class, Nilgiri Class and INS Vikrant  ',
    details: {
      'WEAPONS': '',
      'SSM': '08 x C 802 , 120 KM',
      'SAM': 'HHQ 7 , 13 KM',
      'GUN': 'AK-176M; 76 mm , 16 KM',
      'CIWS': 'Type 730; 30 mm , 1.5 KM',
      '': '',
      'SENSORS': '',
      'AIR SURV': 'TYPE 517 KNIFEREST, A',
      'SURF SURV': 'TYPE 363 SEAGULL, E/F',
      'AIR/SURF': 'TYPE 364 SEAGULL C, G',
      'FCR (SAM)': 'Type 345, I',
      'FCR (SSM)': 'Type 343 G, I',
      'FCR (MR GUN)': 'Type 343 G, I',
      'FCR (CIWS)': 'Type 347 G, I',
    }
  },

  {
    id: 'Azmat',
    title: 'Azmat',
    images: ['src/pk/2.jpg'],
    description: ' The Azmat-class stealth fast attack craft is a class of missile-bearing fast attack craft, currently in service with the Pakistan Navy. The Azmat-class is based on the Chinese design, Houjian class. The Pakistani Azmat-class is the modernized version according to the requirements of Pakistan Navy. Spd – 30 kts ',

    details: {
 'WEAPONS': '',
      'SSM (AZMAT, DEHSAT)': '08 x C 802 , 180 KM',
      'SSM(HIMMAT, HAIBAT)': '08 x HARBAH , 280 KM',
      'GUN': '02 X 25 mm , 16 KM',
      'CIWS': 'Type 730; 30 mm , 1.5 KM',
      '': '',
      'SENSORS': '',
      'SURF SURV': 'SR 47BG, I',
      'FCR (SSM)': 'Type 343 G, I',
        }
  },
  {
    id: 'Yarmuk',
    title: 'Yarmuk',
    images: ['src/pk/3.jpg'],
    description: ' This class is primarily based on Damen Group\'s Offshore Patrol Vessel (OPV). This class of ships are made by the Damen group in Romania. These ships are primarily used for offshore patrolling and safety within Pakistan EEZ ',
    details: {
       'WEAPONS': '',
      'GUN': 'SMASH remote weapon system, 16 KM',
      'CIWS': 'Type 730; 30 mm , 1.5 KM',
      '': '',
      'SENSORS': '',
      'SURF SURV': 'MR 36A, I',
    }
  },
  {
    id: 'Tughril',
    title: 'Tughril',
    images: ['src/pk/4.jpg'],
    description: ' The Tughril-class frigates, formally classified as the Type 054A/P (Jiangkai II) frigates, are a series of modified guided-missile frigates built by China for the Pakistan Navy. The Type 054A frigate was specifically customized to meet the operational requirements of the Pakistan Navy; the class features several capabilities - including anti-surface warfare (ASuW), anti-air warfare (AAW), anti-submarine warfare (ASW) and low radar observability. 04 Ships ',
    details: {
       'WEAPONS': '',
      'SSM': 'CM 302 , 300 KM',
      'SAM': 'HQ 16 , 40 KM',
      'GUN': '01 x H/PJ-26; 76 mm , 16 KM',
      'CIWS': '02 x Type 1130; 30 mm , 1.5 KM',
      '': '',
      'SENSORS': '',
      'AIR SURV': 'TYPE 517 KNIFEREST, A',
      'SURF SURV': 'SR 2410C, E/F',
      'AIR/SURF': 'TYPE 364 SEAGULL C, G',
      'FCR (SAM)': 'OREKH FRONT DOME, H/I',
      'FCR (SSM)': ' MINERAL ME BAND STAND, I',
      'FCR (MR GUN)': 'Type 344, I',
      'FCR (CIWS)': 'Type 347 G, I',
    }
  },
  {
    id: 'Babur',
    title: 'Babur',
    images: ['src/pk/5.jpg'],
    description: ' The Babur-class corvette, also known as the PN MILGEM class, is a class of four heavy corvettes. As of DEC 24 Babur is commissioned and the rest 03 ships are in various stages of sea trials. This class is a subclass of the Turkish MILGEM project. The corvette class is heavier and larger than the Turkish Ada-class corvette and are also equipped with VLS for ssm and sam. SMART - Signal muti beam acquisition radar for tracking Band – S band ( 2- 4 Ghz) ',
    details: {
       'WEAPONS': '',
      'SSM ': 'HARBAH, 280 KM',
      'SAM': 'ALBATROSS, 45 KM',
      'GUN': 'OTOMELARA , 16 KM',
      'CIWS': 'ASELSAN; 35mm, 4 KM',
      '': '',
      'SENSORS': '',
      'AIR/SURF': 'SMART-S MK 2 3D, E/F',
      'FCR (SSM)': 'AKR-D BLOCK B-1/2',
      
    }
  },


 
];

// DOM roots
const topicsEl = document.getElementById('topics');
const detailEl = document.getElementById('detail');
// removed searchEl - search bar removed per request

let currentIndex = null;      // index in original topics[]
let visibleIndexes = [];      // indexes currently rendered in sidebar (after filtering)

// per-ship subslide index. 0 = display_image (placeholder), 1..M = images, M+1 = details
let currentSubslide = 0;

// Tailwind classes used when an item is active.
const ACTIVE_OUTER = ['bg-indigo-600', 'text-white'];
const ACTIVE_AVATAR = ['from-indigo-700', 'to-indigo-500'];

/**
 * Helper: placeholder display image src for ship index (1-based in path).
 * As requested: "src/disp/1.jpg", "src/disp/2.jpg", ...
 */
function displayImageSrcForShipIndex(idx) {
  return `src/pk/dp/${idx + 1}.jpg`;
}

// create a sidebar item with SERIAL NUMBER
function makeItem(t, idx) {
  const el = document.createElement('div');
  el.className = 'topic-item p-3 rounded-lg bg-white border border-gray-100 flex items-center gap-3 cursor-pointer';
  el.setAttribute('data-idx', idx);

  // SERIAL NUMBER (idx+1)
  const serialNumber = idx + 1;

  el.innerHTML = `
    <div class="avatar w-12 h-12 rounded-md bg-gradient-to-br from-indigo-400 to-sky-300
                flex items-center justify-center text-white font-semibold">
      ${serialNumber}
    </div>

    <div class="flex-1">
      <div class="font-medium title">
        ${serialNumber}. ${t.title}
      </div>
      <div class="text-xs subtitle text-gray-400">Click to view</div>
    </div>

    <div class="text-xs text-gray-300">›</div>
  `;

  el.addEventListener('click', () => {
    const i = Number(el.getAttribute('data-idx'));
    // When selecting a ship via sidebar, select that ship and reset subslide to 0 (display image)
    showDetail(i, /* resetSubslide = */ true);
  });

  return el;
}


// render sidebar based on optional filter string (search removed; still supports optional filter param)
function renderSidebar(filter = '') {
  topicsEl.innerHTML = '';
  visibleIndexes = [];

  const q = (filter || '').toLowerCase().trim();
  topics.forEach((t, i) => {
    if (!q || t.title.toLowerCase().includes(q) || (t.description || '').toLowerCase().includes(q)) {
      topicsEl.appendChild(makeItem(t, i));
      visibleIndexes.push(i);
    }
  });

  if (visibleIndexes.length === 0) {
    topicsEl.innerHTML = '<div class="text-gray-400 p-2 text-sm">No topics found</div>';
  }

  // apply active styles if currentIndex is visible
  updateActiveSidebar();
}

// apply / remove active styles on sidebar items based on currentIndex
function updateActiveSidebar() {
  const items = topicsEl.querySelectorAll('[data-idx]');
  items.forEach(el => {
    const idx = Number(el.getAttribute('data-idx'));
    const avatar = el.querySelector('.avatar');
    const subtitle = el.querySelector('.subtitle');

if (idx === currentIndex) {
  // outer
  el.classList.remove('bg-white');       
  ACTIVE_OUTER.forEach(c => el.classList.add(c));
  el.style.borderColor = '#4338ca'; // indigo-700 tint for border
      // avatar: replace gradient to indigo shades for contrast
      if (avatar) {
        avatar.classList.remove('from-indigo-400', 'to-sky-300');
        ACTIVE_AVATAR.forEach(c => avatar.classList.add(c));
      }
      // subtitle color
      if (subtitle) subtitle.classList.remove('text-gray-400'), subtitle.classList.add('text-white/80');
    } else {
  ACTIVE_OUTER.forEach(c => el.classList.remove(c));
  el.classList.add('bg-white');              // restore base bg
  el.style.borderColor = '';

      if (avatar) {
        avatar.classList.remove(...ACTIVE_AVATAR);
        avatar.classList.add('from-indigo-400', 'to-sky-300');
      }
      if (subtitle) subtitle.classList.remove('text-white/80'), subtitle.classList.add('text-gray-400');
    }
  });
}

// mark currentIndex and ensure sidebar scrolls to visible item (if present)
function selectTopic(i) {
  currentIndex = i;
  updateActiveSidebar();
  const item = topicsEl.querySelector(`[data-idx="${i}"]`);
  if (item) item.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

/**
 * Returns total subslides for a topic:
 *  1 (display image placeholder) + images.length + 1 (details)
 * = images.length + 2
 */
function subslideCountForTopic(i) {
  const t = topics[i];
  const imagesCount = Array.isArray(t.images) ? t.images.length : (t.img ? 1 : 0);
  return imagesCount + 2;
}

/**
 * Map a subslide index to a short button label according to rules:
 * - If the subslide is the details slide (imagesCount+1) => "Description"
 * - If subslide === 1 => "Weapon"
 * - Otherwise fallback to "Weapon" (keeps labels consistent for image slides)
 * This follows the user's requirement that first slide's next shows "Weapon" and second shows "Description".
 */
function labelForSubslide(subslide, imagesCount) {
  if (subslide === imagesCount + 1) return 'Sensors';
  if (subslide === 1) return 'Weapons';
  // fallback: for other image slides keep 'Weapon' (or could be Image n)
  return 'Image';
}

/**
 * Render the current topic using currentIndex and currentSubslide.
 * This function replaces the old behavior of rendering all images at once.
 * Adjusted to:
 *  - hide description except on the last (details) subslide
 *  - remove image position label
 *  - dynamic nav button labels and non-circular navigation
 *  - last slide shows only one button
 */
function renderCurrentDetail() {
  if (currentIndex === null || currentIndex === undefined) {
    detailEl.innerHTML = '';
    updateActiveSidebar();
    return;
  }

  const t = topics[currentIndex];
  if (!t) return;

  // rows for details table
  const rows = Object.entries(t.details || {}).map(([k, v]) => `
    <tr class="border-b hover:bg-gray-50">
      <td class="p-3 font-semibold bg-gray-50 w-1/3">${k}</td>
      <td class="p-3">${v}</td>
    </tr>
  `).join('');

  // compute indexes
  const imagesArray = Array.isArray(t.images) ? t.images : (t.img ? [t.img] : []);
  const imagesCount = imagesArray.length;
  const totalSubslides = imagesCount + 2; // images + display + details

  // subslide mapping:
  // 0 => display (placeholder) image path: src/disp/{currentIndex+1}.jpg
  // 1..imagesCount => imagesArray[0..imagesCount-1]
  // imagesCount+1 => details

  // Prepare image HTML (single image element) and details container
  let mediaHtml = '';
  let showMediaArea = false;

  if (currentSubslide === 0) {
    // display placeholder image (distinct src/disp/X.jpg per ship)
    const src = displayImageSrcForShipIndex(currentIndex);
    mediaHtml = `<img id="subslideImg" loading="lazy" class="max-w-full h-auto object-contain rounded-lg" src="${src}" alt="${t.title} — display image" />`;
    showMediaArea = true;
  } else if (currentSubslide >= 1 && currentSubslide <= imagesCount) {
    const imgIndex = currentSubslide - 1;
    const src = imagesArray[imgIndex] || '';
    mediaHtml = `<img id="subslideImg" loading="lazy" class="max-w-full h-auto object-contain rounded-lg" src="${src}" alt="${t.title} — image ${imgIndex + 1}" />`;
    showMediaArea = true;
  } else {
    // details page - do not render/hide media area at all
    mediaHtml = '';
    showMediaArea = false;
  }

  // Render detail panel. Note: hide media container on details slide completely.
  // Removed the positionLabel element entirely (user requested removal of "Image 1 of 2 / Details" labels)
  detailEl.innerHTML = `
    <div class="fade-up">
      ${ showMediaArea ? `
        <div class="rounded-2xl overflow-hidden border border-gray-200 shadow-md mb-4 flex justify-center gap-4">
          <div class="p-4 w-full flex justify-center">
            ${mediaHtml}
          </div>
        </div>
      ` : '' }

      <div class="mb-3 flex items-center justify-between">
        <h2 class="text-3xl font-semibold text-indigo-700">${t.title}</h2>
        <!-- position label removed per request -->
      </div>

      ${ (currentSubslide === imagesCount + 1) ? `<p class="text-gray-700 leading-relaxed mb-6">${t.description}</p>` : '' }

      <table class="w-full border border-gray-300 text-left text-gray-700 rounded-lg overflow-hidden shadow-sm ${ (currentSubslide === imagesCount + 1) ? '' : 'hidden'}">
        <tbody>${rows}</tbody>
      </table>

      <div class="mt-6 flex items-center gap-4" id="navArea">
        <!-- buttons injected below -->
      </div>
    </div>
  `;

  // Build navigation buttons according to currentSubslide and totalSubslides
  const navArea = document.getElementById('navArea');

  // helper to safely create buttons
  function createButton(id, label, classes = '') {
    const btn = document.createElement('button');
    btn.id = id;
    btn.className = `px-4 py-2 rounded-md border bg-indigo-100 hover:bg-gray-100 ${classes}`;
    btn.textContent = label;
    return btn;
  }

  // Determine prev/next indices (no circular navigation)
  const prevIndex = currentSubslide - 1;
  const nextIndex = currentSubslide + 1;
  const isFirst = currentSubslide === 0;
  const isLast = currentSubslide === (totalSubslides - 1); // imagesCount + 1

  // Last slide: show only one button (back to "Weapon" or second slide). This satisfies "only show one button in the last slide dont make it circular"
  if (isLast) {
    const targetBack = Math.max(0, imagesCount >= 1 ? 1 : 0); // if there is at least one image, back goes to slide 1 (weapon); else go to display 0
    const backLabel = labelForSubslide(targetBack, imagesCount) || 'Back';
    const singleBtn = createButton('singleBtn', backLabel, 'ml-auto');
    singleBtn.addEventListener('click', () => {
      currentSubslide = targetBack;
      renderCurrentDetail();
    });
    navArea.appendChild(singleBtn);
  } else {
    // Not last: show Prev (if not first) and Next (always shown unless there are no next - but by logic there is a next)
    if (!isFirst) {
      const prevLabel = labelForSubslide(prevIndex, imagesCount);
      const prevBtn = createButton('prevBtn', prevLabel);
      prevBtn.addEventListener('click', () => {
        goPrevSubslide();
      });
      navArea.appendChild(prevBtn);
    } else {
      // If first slide, we hide Prev (user wanted first slide button will always shows weapon — that'll be the Next button)
      const spacer = document.createElement('div');
      spacer.className = 'flex-1';
      navArea.appendChild(spacer);
    }

    // Next button (present on all non-last slides)
    const nextLabel = labelForSubslide(nextIndex, imagesCount);
    const nextBtn = createButton('nextBtn', nextLabel, 'ml-auto');
    nextBtn.addEventListener('click', () => {
      goNextSubslide();
    });
    navArea.appendChild(nextBtn);
  }

  // update active sidebar
  selectTopic(currentIndex);
}

/**
 * Show detail for topic index i.
 * If resetSubslide is true, set currentSubslide = 0 (display image).
 */
function showDetail(i, resetSubslide = false) {
  if (typeof i !== 'number' || i < 0 || i >= topics.length) return;
  if (resetSubslide) currentSubslide = 0;
  // Set currentIndex and render
  currentIndex = i;
  renderCurrentDetail();
}

// Prev / Next behavior is now per-ship subslides only (does not change ship).
// IMPORTANT: Navigation is NOT circular anymore. We clamp.
function goPrevSubslide() {
  if (currentIndex === null) return;
  const total = subslideCountForTopic(currentIndex); // images + 2
  if (currentSubslide <= 0) {
    // already at first slide: do nothing
    return;
  }
  currentSubslide = currentSubslide - 1;
  if (currentSubslide < 0) currentSubslide = 0;
  renderCurrentDetail();
}

function goNextSubslide() {
  if (currentIndex === null) return;
  const total = subslideCountForTopic(currentIndex);
  if (currentSubslide >= total - 1) {
    // already at last slide: do nothing (no circular)
    return;
  }
  currentSubslide = currentSubslide + 1;
  if (currentSubslide > total - 1) currentSubslide = total - 1;
  renderCurrentDetail();
}

// initial render
renderSidebar('');

// removed search wiring (search bar removed per user request)

// Home button functionality — reset to default "empty" view
const homeBtnEl = document.getElementById('homeBtn');
if (homeBtnEl) {
  homeBtnEl.addEventListener('click', () => {
    window.location.href = "index.html";
    currentIndex = null;
    currentSubslide = 0;
    detailEl.innerHTML = '';
    updateActiveSidebar(); // remove highlight
  });
}

// Provide keyboard shortcuts for subslide navigation (Left/Right) — respect non-circular navigation
document.addEventListener('keydown', (e) => {
  const tag = (document.activeElement && document.activeElement.tagName) || '';
  if (tag === 'INPUT' || tag === 'TEXTAREA') return;
  if (currentIndex === null) return;
  if (e.key === 'ArrowLeft') {
    e.preventDefault();
    goPrevSubslide();
  } else if (e.key === 'ArrowRight') {
    e.preventDefault();
    goNextSubslide();
  }
});

// === Developer Signature ===
console.log("%c🚀 CBT System © 2025 | Designed & Developed by Aditya Choudhary", "color: red; font-weight: bold; font-size: 14px;");
console.log("%c🔗 GitHub: https://github.com/adiityachoudhary", "color: gray; font-size: 12px;");
