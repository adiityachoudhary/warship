    const topics = [
      {
        id:'arrays', title:'Arrays',
        img:'anime-landscape-person-traveling.jpg',
        text:'An array is a contiguous collection of elements of the same type indexed by position. Best for fast random access (O(1)). Typical uses: lookup tables, static lists, and when memory locality matters.'
      },
      {
        id:'linkedlist', title:'Linked List',
        img:'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=2b1f6f6e6c6b6a6d6e6f6a6b6c6d6e6f',
        text:'A linked list stores elements in nodes where each node points to the next. Insertions/removals at known positions are cheap (O(1) with pointer), but random access is O(n). Useful for dynamic structures and low-overhead insertions.'
      },
      {
        id:'stack', title:'Stack',
        img:'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=3d2a4b5a6c7d8e9f0a1b2c3d4e5f6a7b',
        text:'A stack is a Last-In-First-Out structure. Operations: push and pop. Common uses: function call stack (recursion), expression evaluation, and undo systems.'
      },
      {
        id:'tree', title:'Tree',
        img:'https://images.unsplash.com/photo-1527430253228-e93688616381?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=77a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1',
        text:'A tree is an acyclic hierarchical structure of nodes. Binary trees, AVL, and B-trees are used for fast search and ordered data. Traversals: pre/in/post-order for different needs.'
      }
    ];

    const topicsEl = document.getElementById('topics');
    const detailEl = document.getElementById('detail');
    const searchEl = document.getElementById('search');

    function makeItem(t, i){
      const el = document.createElement('div');
      el.className = 'topic-item p-3 rounded-lg bg-white border border-gray-100 flex items-center gap-3 cursor-pointer';
      el.innerHTML = `
        <div class="w-12 h-12 rounded-md bg-gradient-to-br from-indigo-400 to-sky-300 flex items-center justify-center text-white font-semibold">${t.title.split(' ').map(s=>s[0]).join('')}</div>
        <div class="flex-1">
          <div class="font-medium">${t.title}</div>
          <div class="text-xs text-gray-400">Tap to view</div>
        </div>
        <div class="text-xs text-gray-400">›</div>
      `;
      el.addEventListener('click', ()=> showDetail(i));
      return el;
    }

    function showDetail(i){
      const t = topics[i];
      detailEl.innerHTML = `
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h2 class="text-2xl font-semibold mb-3">${t.title}</h2>
            <p class="text-gray-700 leading-relaxed">${t.text}</p>
            <div class="mt-6 flex gap-3">
              <button onclick="highlightKey()" class="px-4 py-2 rounded-md bg-indigo-500 text-white">Highlight</button>
              <button onclick="saveNote('${t.id}')" class="px-4 py-2 rounded-md border">Add note</button>
            </div>
          </div>
          <div>
            <div class="rounded-xl overflow-hidden border border-gray-100 shadow-sm">
              <img loading="lazy" class="topic-img" src="${t.img}" alt="${t.title}" />
            </div>
          </div>
        </div>
      `;
    }

    function highlightKey(){
      alert('Tip: When studying, write a 1-line summary and one question to test recall.');
    }

    function saveNote(id){
      const note = prompt('Quick note for topic:');
      if(note!==null){
        localStorage.setItem('note_'+id, note);
        alert('Saved. Notes are stored in your browser.');
      }
    }

    // populate
    topics.forEach((t,i)=> topicsEl.appendChild(makeItem(t,i)));

    // search
    searchEl.addEventListener('input', ()=>{
      const q = searchEl.value.toLowerCase().trim();
      topicsEl.innerHTML = '';
      const filtered = topics.filter(t=> t.title.toLowerCase().includes(q) || t.text.toLowerCase().includes(q));
      filtered.forEach((t,i)=> topicsEl.appendChild(makeItem(t, topics.indexOf(t))));
      if(filtered.length===0) topicsEl.innerHTML = '<div class="text-gray-400 p-2 text-sm">No topics found</div>';
    });
