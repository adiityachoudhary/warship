// warship.js — polished: natural-size image, indigo active item, prev/next nav, search-friendly

const topics = [
  {
    id: 'achelous',
    title: 'Achelous Class',
    images: ['src/1.jpg'],
    description: 'Landing craft repair ships used by the U.S. Navy during World War II for amphibious support and on-site repairs.',
    details: {
      'Category': 'Amphibious Warfare Ship',
      'Displacement': '4,100 tons (full load)',
      'Length': '328 feet',
      'Speed': '12 knots',
      'Range': '7,000 nautical miles',
      'Armament': 'Light anti-aircraft guns',
      'Radar': 'Basic surface search radar',
      'Crew': '250 personnel'
    }
  },
  {
    id: 'anwei',
    title: 'Anwei Type 920 ',
    images: ['src/2.jpg'],
    description: 'Designed for dynamic operations and logistics — modular, flexible ships used for mid-sea refueling and supply transport.',
    details: {
      'Category': 'Support Ship',
      'Displacement': '8,000 tons',
      'Speed': '16 knots',
      'Range': '10,000 nautical miles',
      'Capacity': 'Large storage and refueling capability',
      'Crew': '180 personnel'
    }
  },
  {
    id: 'CAC J-7E. ',
    title: 'CAC J-7E. ',
    images:[ 'src/3.jpg'],
    description: 'A fast-attack destroyer optimized for anti-submarine and air defense operations in escort missions.',
    details: {
      'Category': 'Destroyer',
      'Displacement': '1,500 tons',
      'Speed': '35 knots',
      'Range': '6,000 nautical miles',
      'Armament': 'Torpedoes, anti-aircraft guns, missiles',
      'Radar': 'AN/SPS-49 Air-search radar',
      'Sonar': 'AN/SQS-56 hull-mounted sonar',
      'Crew': '210 personnel'
    }
  },
  {
    id: 'CAIG Z-8 Super-Frelon. ',
    title: 'CAIG Z-8 Super-Frelon. ',
    images:[ 'src/4.jpg'],
    description: 'A fast-attack destroyer optimized for anti-submarine and air defense operations in escort missions.',
    details: {
      'Category': 'Destroyer',
      'Displacement': '1,500 tons',
      'Speed': '35 knots',
      'Range': '6,000 nautical miles',
      'Armament': 'Torpedoes, anti-aircraft guns, missiles',
      'Radar': 'AN/SPS-49 Air-search radar',
      'Sonar': 'AN/SQS-56 hull-mounted sonar',
      'Crew': '210 personnel'
    }
  },
  {
    id: 'Coastal Patrol Craft ',
    title: 'Coastal Patrol Craft ',
    images:[ 'src/7.jpg'],

    description: 'A fast-attack destroyer optimized for anti-submarine and air defense operations in escort missions.',
    details: {
      'Category': 'Destroyer',
      'Displacement': '1,500 tons',
      'Speed': '35 knots',
      'Range': '6,000 nautical miles',
      'Armament': 'Torpedoes, anti-aircraft guns, missiles',
      'Radar': 'AN/SPS-49 Air-search radar',
      'Sonar': 'AN/SQS-56 hull-mounted sonar',
      'Crew': '210 personnel'
    }
  },
  {
    id: 'GONG BIAN 1301',
    title: 'GONG BIAN 1301',
    images:[ 'src/9.jpg'],
    description: 'A fast-attack destroyer optimized for anti-submarine and air defense operations in escort missions.',
    details: {
      'Category': 'Destroyer',
      'Displacement': '1,500 tons',
      'Speed': '35 knots',
      'Range': '6,000 nautical miles',
      'Armament': 'Torpedoes, anti-aircraft guns, missiles',
      'Radar': 'AN/SPS-49 Air-search radar',
      'Sonar': 'AN/SQS-56 hull-mounted sonar',
      'Crew': '210 personnel'
    }
  },
  {
    id: 'Combatboat 90E',
    title: 'Combatboat 90E',
    images:[ 'src/12.jpg','src/13.jpg','src/14.jpg','src/15.jpg','src/16.jpg'],
    description: 'A fast-attack destroyer optimized for anti-submarine and air defense operations in escort missions.',
    details: {
      'Category': 'Destroyer',
      'Displacement': '1,500 tons',
      'Speed': '35 knots',
      'Range': '6,000 nautical miles',
      'Armament': 'Torpedoes, anti-aircraft guns, missiles',
      'Radar': 'AN/SPS-49 Air-search radar',
      'Sonar': 'AN/SQS-56 hull-mounted sonar',
      'Crew': '210 personnel'
    }
  }
];

const topicsEl = document.getElementById('topics');
const detailEl = document.getElementById('detail');
const searchEl = document.getElementById('search');

let currentIndex = null;      // index in original topics[]
let visibleIndexes = [];      // indexes currently rendered in sidebar (after filtering)

// Tailwind classes used when an item is active.
// We toggle classes on the outer item and on the avatar for clear contrast.
const ACTIVE_OUTER = ['bg-indigo-600', 'text-white'];
const ACTIVE_AVATAR = ['from-indigo-700', 'to-indigo-500'];

// create a sidebar item (idx is index in topics[])
function makeItem(t, idx) {
  const el = document.createElement('div');
  el.className = 'topic-item p-3 rounded-lg bg-white border border-gray-100 flex items-center gap-3 cursor-pointer';
  el.setAttribute('data-idx', idx);

  // inner structure: avatar / text / chevron
  el.innerHTML = `
    <div class="avatar w-12 h-12 rounded-md bg-gradient-to-br from-indigo-400 to-sky-300 flex items-center justify-center text-white font-semibold">
      ${t.title.split(' ').map(s => s[0]).join('')}
    </div>
    <div class="flex-1">
      <div class="font-medium title">${t.title}</div>
      <div class="text-xs subtitle text-gray-400">Click to view</div>
    </div>
    <div class="text-xs text-gray-300">›</div>
  `;

  el.addEventListener('click', () => {
    const i = Number(el.getAttribute('data-idx'));
    showDetail(i); // showDetail will call selectTopic internally
  });

  return el;
}

// render sidebar based on optional filter string
function renderSidebar(filter = '') {
  topicsEl.innerHTML = '';
  visibleIndexes = [];

  const q = (filter || '').toLowerCase().trim();
  topics.forEach((t, i) => {
    if (!q || t.title.toLowerCase().includes(q) || t.description.toLowerCase().includes(q)) {
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

// show detail for topic index i
function showDetail(i) {
  const t = topics[i];
  if (!t) return;

  // build table rows dynamically
  const rows = Object.entries(t.details).map(([k, v]) => `
    <tr class="border-b hover:bg-gray-50">
      <td class="p-3 font-semibold bg-gray-50 w-1/3">${k}</td>
      <td class="p-3">${v}</td>
    </tr>
  `).join('');

  // render detail panel. image uses natural aspect ratio (no forced height)
  detailEl.innerHTML = `
    <div class="fade-up">
     <div class="rounded-2xl overflow-hidden border border-gray-200 shadow-md mb-6 flex justify-center gap-4 flex-wrap">
  ${
    (t.images || [t.img]).map(src => `
      <img loading="lazy" class="max-w-full h-auto object-contain rounded-lg" src="${src}" alt="${t.title}" />
    `).join('')
  }
</div>


      <h2 class="text-3xl font-semibold mb-3 text-indigo-700">${t.title}</h2>
      <p class="text-gray-700 leading-relaxed mb-6">${t.description}</p>

      <table class="w-full border border-gray-300 text-left text-gray-700 rounded-lg overflow-hidden shadow-sm">
        <tbody>${rows}</tbody>
      </table>

      <div class="mt-6 flex items-center gap-4">
        <button id="prevBtn" class="px-4 py-2 rounded-md border bg-indigo-100 hover:bg-gray-100">Previous</button>
        <button id="nextBtn" class="px-4 py-2 rounded-md border bg-indigo-100 hover:bg-gray-100">Next</button>
        <div class="flex-1"></div>
      </div>
    </div>
  `;

  // wire nav buttons (safe: elements are recreated each time)
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  prevBtn && prevBtn.addEventListener('click', navigatePrevious);
  nextBtn && nextBtn.addEventListener('click', navigateNext);

  // update selection highlight
  selectTopic(i);
}

// next/previous navigation (wraps around)
function navigateNext() {
  if (currentIndex === null) return;
  let next = currentIndex + 1;
  if (next >= topics.length) next = 0;
  showDetail(next);
}

function navigatePrevious() {
  if (currentIndex === null) return;
  let prev = currentIndex - 1;
  if (prev < 0) prev = topics.length - 1;
  showDetail(prev);
}

// initial render
renderSidebar('');

// search wiring
searchEl.addEventListener('input', () => {
  renderSidebar(searchEl.value);
});



// Home button functionality — reset to default "empty" view
document.getElementById('homeBtn').addEventListener('click', () => {
  detailEl.innerHTML = `
     <div id="empty" class="text-center text-gray-500">
          <h2 class="text-2xl font-black mb-2">CBT-Sortie</h2>
          <p class="font-sans">INDIAN NAVY</p>
          <br>
          <div class="flex justify-center my-300 pb-7">
            <img src="src/navy.png" alt="navy" class="w-60 h-auto logo">
          </div>
        </div>
  `;
  currentIndex = null;
  updateActiveSidebar(); // remove highlight
});
