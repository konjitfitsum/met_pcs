// builds.js
document.addEventListener("DOMContentLoaded", () => {
  // Sample guides list — replace videoId with real YouTube video IDs
  const guides = [
    {
      id: 1,
      title: "How to Build a Gaming PC (Beginner Friendly)",
      desc: "Step-by-step PC build for first-timers: parts, assembly, BIOS, and first boot.",
      difficulty: "beginner",
      videoId: "PP-BVM-GRp0",
    },
    {
      id: 2,
      title: "CPU & Motherboard Installation Guide",
      desc: "Install CPU, cooler, and motherboard safely and correctly.",
      difficulty: "beginner",
      videoId: "ExOPdpnjpQk",
    },
    {
      id: 3,
      title: "Cable Management & Airflow Tips",
      desc: "Neat cable routing and airflow setup for better temps and looks.",
      difficulty: "intermediate",
      videoId: "IWYLdQDwYZM",
    },
    {
      id: 4,
      title: "Overclocking Basics for Ryzen/Intel",
      desc: "Safe overclocking techniques and stability testing.",
      difficulty: "advanced",
      videoId: "vHmr5HYxgK4",
    },
    {
      id: 5,
      title: "Water Cooling Installation (AIO & Custom Loop)",
      desc: "Mounting radiators and routing for optimal cooling.",
      difficulty: "advanced",
      videoId: "a6Xn4TR0WDk",
    },
    {
      id: 6,
      title: "Choosing the Right GPU & PSU",
      desc: "How to pick a GPU and power supply for your build.",
      difficulty: "intermediate",
      videoId: "8hyWXJe_wts",
    },
  ];

  const grid = document.getElementById("guides-grid");
  const search = document.getElementById("search");
  const filter = document.getElementById("filter");
  const modal = document.getElementById("video-modal");
  const videoWrapper = document.getElementById("video-wrapper");
  const modalClose = document.getElementById("modal-close");

  function render(list) {
    grid.innerHTML = "";
    if (!list.length) {
      grid.innerHTML = `<p style="color:#666">No guides found.</p>`;
      return;
    }

    list.forEach((g) => {
      // build thumbnail URL from YouTube id
      const thumb = `https://img.youtube.com/vi/${g.videoId}/hqdefault.jpg`;

      const a = document.createElement("div");
      a.className = "guide-card";
      a.tabIndex = 0;
      a.setAttribute("role", "button");
      a.innerHTML = `
        <div class="guide-thumb" style="background-image:url('${thumb}')"></div>
        <div class="guide-body">
          <div class="guide-meta">
            <h3 class="guide-title">${escapeHtml(g.title)}</h3>
            <p class="guide-desc">${escapeHtml(g.desc)}</p>
          </div>

          <div class="guide-aside">
            <div class="badge">${capitalize(g.difficulty)}</div>
            <div class="play-dot">▶</div>
          </div>
        </div>
      `;

      // click / keyboard activation opens modal
      a.addEventListener("click", () => openModal(g.videoId));
      a.addEventListener("keypress", (e) => {
        if (e.key === "Enter") openModal(g.videoId);
      });

      grid.appendChild(a);
    });
  }

  function openModal(videoId) {
    // create iframe with autoplay; modestbranding to reduce YouTube chrome
    videoWrapper.innerHTML = `<iframe
      src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1"
      title="Video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      ></iframe>`;

    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden"; // prevent background scroll
  }

  function closeModal() {
    modal.setAttribute("aria-hidden", "true");
    videoWrapper.innerHTML = ""; // remove iframe to stop playback
    document.body.style.overflow = "";
  }

  modalClose.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal(); // click outside to close
  });

  // search + filter
  function applyFilters() {
    const q = (search.value || "").trim().toLowerCase();
    const f = filter.value;
    const filtered = guides.filter((g) => {
      const matchQ =
        !q ||
        (g.title + " " + g.desc + " " + g.difficulty).toLowerCase().includes(q);
      const matchF = f === "all" ? true : g.difficulty === f;
      return matchQ && matchF;
    });
    render(filtered);
  }

  search.addEventListener("input", applyFilters);
  filter.addEventListener("change", applyFilters);

  // helper: escape HTML (basic)
  function escapeHtml(s) {
    return String(s).replace(
      /[&<>"']/g,
      (m) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        }[m])
    );
  }
  function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  // initial render
  render(guides);
});
