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
 id: 'Zulfikar',
    title: 'Zulfikar',
    images: ['src/pla/44.jpg'],
    description: ' ',
    details: {
      // 'Displacement': '1,625 light; 4,325 full load',
    }
  },

  {
    id: 'Azmat',
    title: 'Azmat',
    images: ['src/pla/45.jpg'],
    description: 'The Shandong-class (Type 002) is China’s first domestically built aircraft carrier, based on the Soviet Kuznetsov design. It features a ski-jump ramp for STOBAR (Short Take-Off But Arrested Recovery) operations, carrying J-15 fighter jets, helicopters, and AEW aircraft. Equipped with Type 1130 CIWS and HQ-10 missiles for self-defense, it has an island superstructure with modern radar. Powered by conventional steam turbines.',
    details: {
      // 'Displacement': '14200 tonnes (13975.7 (uk) t) (15652.8 t (short)) (14200000 kg)',
    }
  },
  {
    id: 'Yarmuk',
    title: 'Yarmuk',
    images: ['src/pla/46.jpg'],
    description: 'The Fujian-class (Type 003) is China’s most advanced aircraft carrier, featuring a CATOBAR (Catapult Assisted Take-Off But Arrested Recovery) system with electromagnetic catapults (EMALS) for launching heavier aircraft. It has a large flight deck, an island superstructure with advanced radar, and can carry a mix of J-35 stealth fighters, J-15B jets, and KJ-600 AEW aircraft. Powered by conventional steam turbines, it is China’s first carrier designed for true blue-water operations. Fujian significantly enhances the PLA Navy’s power projection and carrier strike capabilities. Assembly of the new aircraft carrier,  commenced at Jiangnan shipyard, Changxingdao',
    details: {
      // 'Speed': '1,175 kt (2,175 km/h).',
    }
  },
  {
    id: 'Tughril',
    title: 'Tughril',
    images: ['src/pla/49.jpg'],
    description: 'Renhai class is associated with the Type 055 destroyers. These are large, advanced, and modern vessels used by the PLA Navy. These have a displacement of around 12,000 tons, making them some of the heaviest and most capable destroyers in the Chinese fleet. These ships can be distinguished by their stealth design. The most advanced guided-missile cruiser, featuring a dual-band AES (active electrnic scaaned array)  radar and a 112-cell VLS for HHQ-9 air-defense, YJ-18 anti-ship, CJ-10 land-attack, and Yu-8 ASW missiles. It is armed with a 130mm naval gun, Type 1130 CIWS, HQ-10 SAMs, and torpedoes for multi-role combat. A stealthy design, integrated mast, and advanced sensors enhance survivability. It carries two Z-20 helicopters for ASW and reconnaissance. Powered by gas turbines, it reaches 32 knots, serving as a key blue-water fleet leader.',
    details: {
      // 'Speed': '134 kt (248 km/h)',
    }
  },
  {
    id: 'Babur',
    title: 'Babur',
    images: ['src/pla/50.jpg'],
    description: 'The Luyang III-class destroyers are a class of advanced multi-role warships operated by the PLA NAvy. These ships are also known as Type 052D destroyers. These have a displacement of about 7,500 tons, slightly smaller than Renhai class, making them mid-sized for modern destroyers. It is a highly advanced multi-role destroyer, featuring a phased-array radar and a 64-cell vertical launch system (VLS) for HHQ-9 air-defense, YJ-18 anti-ship, and CJ-10 land-attack missiles. It is equipped with a 130mm naval gun, Type 1130 CIWS, torpedoes, and ASW rockets for comprehensive combat capabilities. A Z-20 or Z-9C helicopter enhances anti-submarine and reconnaissance roles. Powered by gas turbines, it reaches 31 knots. It is the backbone of China’s modern navy, excelling in air defense, strike, and escort missions.',
    details: {
      // 'Full Load': '59 tonnes (65 t (short)) (59000 kg) ',
    }
  },


  // ... (rest of topics unchanged)
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
  return `src/disp/${idx + 1}.jpg`;
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
      // remove
      ACTIVE_OUTER.forEach(c => el.classList.remove(c));
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
  return 'Weapons';
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
