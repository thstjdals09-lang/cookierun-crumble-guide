/* ---------- Utilities ---------- */
const $ = (sel, el = document) => el.querySelector(sel);
const $$ = (sel, el = document) => Array.from(el.querySelectorAll(sel));

const GRADE_LABEL = {
  common: "커먼", rare: "레어", epic: "에픽", special: "스페셜",
  legendary: "레전더리", ancient: "에인션트", dragon: "드래곤"
};
const GRADE_CLASS = {
  common: "grade-common", rare: "grade-rare", epic: "grade-epic",
  special: "grade-special", legendary: "grade-legendary",
  ancient: "grade-ancient", dragon: "grade-dragon"
};

function synTag(id) {
  const s = SYNERGIES[id];
  if (!s) return "";
  return `<span class="syn-tag" style="background:${s.color}">${s.name}</span>`;
}

/* ---------- Tabs ---------- */
function initTabs() {
  $$(".tabs button").forEach(btn => {
    btn.addEventListener("click", () => {
      $$(".tabs button").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      $$(".view").forEach(v => v.classList.remove("active"));
      $(`#view-${btn.dataset.view}`).classList.add("active");
    });
  });
}

/* ---------- Dex (쿠키 도감) ---------- */
let dexFilter = { grade: "all", synergy: "all", query: "" };

function cookieCardHtml(c) {
  const give = c.gives.map(synTag).join("");
  return `
  <div class="cookie-card" data-id="${c.id}">
    <span class="grade-badge ${GRADE_CLASS[c.grade]}">${GRADE_LABEL[c.grade]}</span>
    <p class="cookie-name">${c.name_kr}</p>
    <p class="cookie-role">${c.role || ""}</p>
    <div class="syn-tags">${give}</div>
  </div>`;
}

function renderDex() {
  const grid = $("#dex-grid");
  const q = dexFilter.query.trim().toLowerCase();
  const list = COOKIES.filter(c => {
    if (dexFilter.grade !== "all" && c.grade !== dexFilter.grade) return false;
    if (dexFilter.synergy !== "all" && !c.gives.includes(dexFilter.synergy)) return false;
    if (q && !(c.name_kr.toLowerCase().includes(q) || (c.name_en || "").toLowerCase().includes(q))) return false;
    return true;
  });
  grid.innerHTML = list.length
    ? list.map(cookieCardHtml).join("")
    : `<p class="empty-hint">조건에 맞는 쿠키가 없습니다.</p>`;
  $("#dex-count").textContent = `${list.length}종`;
  $$(".cookie-card", grid).forEach(card => {
    card.addEventListener("click", () => openCookieModal(card.dataset.id));
  });
}

function initDex() {
  const gradeSel = $("#dex-grade-filter");
  Object.keys(GRADE_LABEL).forEach(g => {
    const opt = document.createElement("option");
    opt.value = g; opt.textContent = GRADE_LABEL[g];
    gradeSel.appendChild(opt);
  });
  gradeSel.addEventListener("change", () => { dexFilter.grade = gradeSel.value; renderDex(); });

  const synWrap = $("#dex-syn-filter");
  Object.entries(SYNERGIES).forEach(([id, s]) => {
    const chip = document.createElement("button");
    chip.className = "chip-btn";
    chip.textContent = s.name;
    chip.dataset.id = id;
    chip.addEventListener("click", () => {
      dexFilter.synergy = dexFilter.synergy === id ? "all" : id;
      $$(".chip-btn", synWrap).forEach(c => c.classList.toggle("active", c.dataset.id === dexFilter.synergy));
      renderDex();
    });
    synWrap.appendChild(chip);
  });

  $("#dex-search").addEventListener("input", e => { dexFilter.query = e.target.value; renderDex(); });
  renderDex();
}

function openCookieModal(id) {
  const c = COOKIES.find(x => x.id === id);
  if (!c) return;
  $("#modal-body").innerHTML = `
    <span class="grade-badge ${GRADE_CLASS[c.grade]}">${GRADE_LABEL[c.grade]}</span>
    <h2 style="margin:8px 0 2px;">${c.name_kr}</h2>
    <p style="color:var(--ink-soft);margin:0 0 12px;">${c.name_en || ""} · ${c.role || ""}</p>
    <p style="margin:0 0 12px;">${c.skill || "스킬 정보 준비 중"}</p>
    <div style="margin-bottom:10px;">
      <strong style="font-size:0.85rem;">주는 시너지</strong>
      <div class="syn-tags" style="margin-top:6px;">${c.gives.map(synTag).join("") || "없음"}</div>
    </div>
    <div>
      <strong style="font-size:0.85rem;">받는 시너지</strong>
      <div class="syn-tags" style="margin-top:6px;">${c.receives.map(synTag).join("") || "없음"}</div>
    </div>
  `;
  $("#modal-backdrop").classList.add("open");
}

function initModal() {
  $("#modal-backdrop").addEventListener("click", e => {
    if (e.target.id === "modal-backdrop") $("#modal-backdrop").classList.remove("open");
  });
  $("#modal-close").addEventListener("click", () => $("#modal-backdrop").classList.remove("open"));
}

/* ---------- Synergy Calculator ---------- */
const MAX_SLOTS = 5;
let selected = [];

function renderPicker() {
  const wrap = $("#picker-grid");
  const q = $("#picker-search").value.trim().toLowerCase();
  const list = COOKIES.filter(c =>
    !q || c.name_kr.toLowerCase().includes(q) || (c.name_en || "").toLowerCase().includes(q)
  );
  wrap.innerHTML = list.map(c => `
    <div class="pick-card ${selected.includes(c.id) ? "selected" : ""}" data-id="${c.id}">
      <span class="mini-grade ${GRADE_CLASS[c.grade]}">${GRADE_LABEL[c.grade]}</span>
      <div>${c.name_kr}</div>
    </div>`).join("");
  $$(".pick-card", wrap).forEach(card => {
    card.addEventListener("click", () => toggleSelect(card.dataset.id));
  });
}

function toggleSelect(id) {
  const idx = selected.indexOf(id);
  if (idx >= 0) {
    selected.splice(idx, 1);
  } else {
    if (selected.length >= MAX_SLOTS) {
      alert(`최대 ${MAX_SLOTS}명까지 선택할 수 있습니다.`);
      return;
    }
    selected.push(id);
  }
  renderPicker();
  renderResult();
}

function renderResult() {
  const slotList = $("#slot-list");
  const team = selected.map(id => COOKIES.find(c => c.id === id));

  slotList.innerHTML = team.length
    ? team.map(c => `
        <div class="slot-item">
          <span>${c.name_kr}</span>
          <button data-id="${c.id}">✕</button>
        </div>`).join("")
    : `<p class="empty-hint">왼쪽에서 쿠키를 선택해 팀을 구성해보세요 (최대 ${MAX_SLOTS}명).</p>`;

  $$("button", slotList).forEach(btn => btn.addEventListener("click", () => toggleSelect(btn.dataset.id)));

  // Count how many selected cookies GIVE each synergy
  const giveCount = {};
  Object.keys(SYNERGIES).forEach(id => giveCount[id] = 0);
  team.forEach(c => c.gives.forEach(g => { giveCount[g] = (giveCount[g] || 0) + 1; }));

  const bars = $("#syn-bars");
  bars.innerHTML = Object.entries(SYNERGIES).map(([id, s]) => {
    const count = giveCount[id] || 0;
    const pct = Math.min(100, (count / MAX_SLOTS) * 100);
    return `
      <div class="syn-bar-row">
        <span class="syn-bar-label" style="color:${s.color}">${s.name}</span>
        <div class="syn-bar-track"><div class="syn-bar-fill" style="width:${pct}%;background:${s.color}"></div></div>
        <span class="syn-bar-count">${count}</span>
      </div>`;
  }).join("");

  // Warnings: duplicate "give" synergy (doesn't stack)
  const dupWarnings = Object.entries(giveCount)
    .filter(([, n]) => n > 1)
    .map(([id, n]) => `<li>${SYNERGIES[id].name} 시너지를 주는 쿠키가 ${n}명 있어요. 시너지는 중첩되지 않으니 다른 시너지로 교체를 고려해보세요.</li>`);

  // Which team members actually receive an active synergy
  const activeGiveIds = new Set(Object.entries(giveCount).filter(([, n]) => n > 0).map(([id]) => id));
  const boosted = team.filter(c => c.receives.some(r => activeGiveIds.has(r)));

  $("#syn-notes").innerHTML = `
    ${dupWarnings.length ? `<ul style="color:#e74c3c;font-size:0.82rem;padding-left:18px;margin:10px 0;">${dupWarnings.join("")}</ul>` : ""}
    ${team.length ? `<p style="font-size:0.82rem;color:var(--ink-soft);margin-top:10px;">
      현재 조합에서 시너지로 강화되는 쿠키: ${boosted.length ? boosted.map(c => c.name_kr).join(", ") : "없음"}
    </p>` : ""}
  `;
}

function initCalculator() {
  $("#picker-search").addEventListener("input", renderPicker);
  $("#clear-team").addEventListener("click", () => { selected = []; renderPicker(); renderResult(); });
  renderPicker();
  renderResult();
}

/* ---------- Tier List ---------- */
function renderTierList() {
  const wrap = $("#tier-list-wrap");
  const order = ["S", "A", "B", "C"];
  const colorMap = { S: "var(--tier-s)", A: "var(--tier-a)", B: "var(--tier-b)", C: "var(--tier-c)" };
  wrap.innerHTML = order.map(tier => {
    const cookies = COOKIES.filter(c => c.tier === tier);
    if (!cookies.length) return "";
    return `
      <div class="tier-row">
        <div class="tier-label" style="background:${colorMap[tier]}">${tier}</div>
        <div class="tier-cookies">
          ${cookies.map(c => `
            <div class="tier-cookie-chip" data-id="${c.id}">
              <div class="avatar-circle ${GRADE_CLASS[c.grade]}">${c.name_kr[0]}</div>
              <span>${c.name_kr}</span>
            </div>`).join("")}
        </div>
      </div>`;
  }).join("");
  $$(".tier-cookie-chip", wrap).forEach(chip => chip.addEventListener("click", () => openCookieModal(chip.dataset.id)));
}

/* ---------- Guides ---------- */
function renderGuides() {
  const wrap = $("#guide-wrap");
  wrap.innerHTML = GUIDES.map(g => `
    <div class="guide-card">
      <h3>${g.title}</h3>
      <div class="tag-row">${(g.tags || []).map(t => `<span class="small-tag">${t}</span>`).join("")}</div>
      <p>${g.summary}</p>
      ${g.points ? `<ul>${g.points.map(p => `<li>${p}</li>`).join("")}</ul>` : ""}
    </div>`).join("");
}

/* ---------- Synergy System Info ---------- */
function renderSynergyInfo() {
  const wrap = $("#synergy-info-wrap");
  const cards = Object.entries(SYNERGIES).map(([id, s]) => {
    const givers = COOKIES.filter(c => c.gives.includes(id)).map(c => c.name_kr);
    return `
      <div class="guide-card">
        <h3><span class="syn-tag" style="background:${s.color}">${s.name}</span> ${s.name_en || ""}</h3>
        <p>${s.desc}</p>
        <p style="font-size:0.82rem;color:var(--ink-soft);">주는 쿠키: ${givers.length ? givers.join(", ") : "조사 중"}</p>
      </div>`;
  }).join("");

  const notes = (SYNERGY_NOTES || []).map(n => `
    <div class="guide-card">
      <h3>${n.title}</h3>
      <p>${n.body}</p>
    </div>`).join("");

  wrap.innerHTML = `<div class="cookie-grid" style="grid-template-columns:repeat(auto-fill,minmax(260px,1fr));margin-bottom:20px;">${cards}</div>${notes}`;
}

/* ---------- Init ---------- */
document.addEventListener("DOMContentLoaded", () => {
  initTabs();
  initDex();
  initModal();
  initCalculator();
  renderTierList();
  renderGuides();
  renderSynergyInfo();
});
