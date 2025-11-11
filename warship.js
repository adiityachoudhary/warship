// warship.js — enhanced for wide image + tabular details view

const topics = [
  {
    id: 'achelous',
    title: 'Achelous Class',
    img: 'src/1.jpg',
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
    id: 'linkedlist',
    title: 'Linked List Class Vessel',
    img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1400&auto=format&fit=crop',
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
    id: 'stack',
    title: 'Stack Class Destroyer',
    img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1400&auto=format&fit=crop',
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
    id: 'tree',
    title: 'Tree Class Frigate',
    img: 'https://images.unsplash.com/photo-1527430253228-e93688616381?q=80&w=1400&auto=format&fit=crop',
    description: 'A multi-role frigate for anti-air, anti-submarine, and surface warfare operations, ideal for balanced naval fleets.',
    details: {
      'Category': 'Frigate',
      'Displacement': '4,200 tons',
      'Speed': '28 knots',
      'Range': '8,500 nautical miles',
      'Armament': 'Missiles, torpedoes, CIWS',
      'Radar': '3D phased-array radar',
      'Sonar': 'Towed array sonar',
      'Crew': '185 personnel'
    }
  }
];

const topicsEl = document.getElementById('topics');
const detailEl = document.getElementById('detail');
const searchEl = document.getElementById('search');

// Sidebar item creation
function makeItem(t, i) {
  const el = document.createElement('div');
  el.className = 'topic-item p-3 rounded-lg bg-white border border-gray-100 flex items-center gap-3 cursor-pointer';
  el.innerHTML = `
    <div class="w-12 h-12 rounded-md bg-gradient-to-br from-indigo-400 to-sky-300 flex items-center justify-center text-white font-semibold">
      ${t.title.split(' ').map(s => s[0]).join('')}
    </div>
    <div class="flex-1">
      <div class="font-medium">${t.title}</div>
      <div class="text-xs text-gray-400">Tap to view</div>
    </div>
    <div class="text-xs text-gray-400">›</div>
  `;
  el.addEventListener('click', () => showDetail(i));
  return el;
}

// Dynamic detail section
function showDetail(i) {
  const t = topics[i];

  // Generate dynamic table rows
  const rows = Object.entries(t.details).map(([key, value]) => `
    <tr class="border-b hover:bg-gray-50">
      <td class="p-3 font-semibold bg-gray-50 w-1/3">${key}</td>
      <td class="p-3">${value}</td>
    </tr>
  `).join('');

  detailEl.innerHTML = `
    <div class="fade-up">
      <!-- Wide image -->
      <div class="rounded-2xl overflow-hidden border border-gray-200 shadow-md mb-6">
        <img loading="lazy" class="w-full h-96 object-cover" src="${t.img}" alt="${t.title}">
      </div>

      <!-- Title and description -->
      <h2 class="text-3xl font-semibold mb-3 text-indigo-700">${t.title}</h2>
      <p class="text-gray-700 leading-relaxed mb-6">${t.description}</p>

      <!-- Dynamic table -->
      <table class="w-full border border-gray-300 text-left text-gray-700 rounded-lg overflow-hidden shadow-sm">
        <tbody>${rows}</tbody>
      </table>

      <!-- Buttons -->
      <div class="mt-6 flex gap-4">
        <button onclick="highlightKey()" class="px-5 py-2 rounded-md bg-indigo-500 text-white hover:bg-indigo-600">Highlight</button>
        <button onclick="saveNote('${t.id}')" class="px-5 py-2 rounded-md border border-gray-300 hover:bg-gray-100">Add Note</button>
      </div>
    </div>
  `;
}

// Highlight tip
function highlightKey() {
  alert('Tip: Summarize each ship in 2 lines and recall its key attribute (range, role, or radar).');
}

// Save notes locally
function saveNote(id) {
  const note = prompt('Quick note for topic:');
  if (note !== null) {
    localStorage.setItem('note_' + id, note);
    alert('Saved! Notes are stored in your browser.');
  }
}

// Populate sidebar
topics.forEach((t, i) => topicsEl.appendChild(makeItem(t, i)));

// Search functionality
searchEl.addEventListener('input', () => {
  const q = searchEl.value.toLowerCase().trim();
  topicsEl.innerHTML = '';
  const filtered = topics.filter(t =>
    t.title.toLowerCase().includes(q) ||
    t.description.toLowerCase().includes(q)
  );
  filtered.forEach((t, i) => topicsEl.appendChild(makeItem(t, topics.indexOf(t))));
  if (filtered.length === 0)
    topicsEl.innerHTML = '<div class="text-gray-400 p-2 text-sm">No topics found</div>';
});
