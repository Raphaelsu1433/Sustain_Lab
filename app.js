(function () {
  const $ = (id) => document.getElementById(id);
  const matSel = $("material");
  const machSel = $("machine");
  const taskSel = $("task");

  const PARAMS = ["nozzle", "speed", "layer", "bed", "fan"];
  const DEFAULT_TEXT = "機器預設值";

  const unique = (arr) => [...new Set(arr)];

  function fillMaterials() {
    const available = new Set(RECORDS.map((r) => r.material));
    matSel.innerHTML = MATERIALS.filter((m) => available.has(m.value))
      .map((m) => `<option value="${m.value}">${m.label}</option>`)
      .join("");
  }

  // 依材料限縮可選機器
  function fillMachines() {
    const machines = unique(RECORDS.filter((r) => r.material === matSel.value).map((r) => r.machine));
    const prev = machSel.value;
    machSel.innerHTML = machines
      .map((m) => `<option value="${m}">${(MACHINES[m] && MACHINES[m].label) || m}</option>`)
      .join("");
    if (machines.includes(prev)) machSel.value = prev;
    updateMachineImage();
  }

  function updateMachineImage() {
    const m = MACHINES[machSel.value];
    const img = $("machine-img");
    img.src = m ? m.image : "";
    img.alt = machSel.value + " 3D 列印機";
    $("machine-caption").textContent = m ? m.label : machSel.value;
  }

  // 任務需求：分成「單目標 / 多目標」兩組
  function fillTasks() {
    const rows = currentRows();
    const prev = taskSel.value;
    const groups = unique(rows.map((r) => r.type));
    taskSel.innerHTML = groups
      .map((g) => {
        const opts = rows
          .filter((r) => r.type === g)
          .map((r) => `<option value="${escapeAttr(r.task)}">${r.task}</option>`)
          .join("");
        return `<optgroup label="${g}">${opts}</optgroup>`;
      })
      .join("");
    if (rows.some((r) => r.task === prev)) taskSel.value = prev;
  }

  function currentRows() {
    return RECORDS.filter((r) => r.material === matSel.value && r.machine === machSel.value);
  }

  function currentRecord() {
    return currentRows().find((r) => r.task === taskSel.value);
  }

  function setValue(el, v) {
    const isDefault = v === "default";
    el.textContent = isDefault ? DEFAULT_TEXT : v;
    el.classList.toggle("is-default", isDefault);
  }

  function render() {
    const rec = currentRecord();
    if (!rec) return;
    $("weight").textContent = rec.weight;
    PARAMS.forEach((p) => setValue($("p-" + p), rec[p]));
    highlightDims(rec.task);
    $("notes").innerHTML = findNote(rec);
  }

  // 依任務需求標示試片尺寸圖上的對應尺寸
  function highlightDims(task) {
    let active = [];
    const single = task.match(/尺寸精度：(W|OW|OL|T)$/);
    if (single) active = [single[1]];
    else if (task.includes("尺寸精度") || task.includes("機械性質")) active = ["W", "OW", "OL", "T"];
    document.querySelectorAll("#specimen-svg .dim").forEach((g) => {
      g.classList.toggle("active", active.includes(g.dataset.dim));
    });
  }

  function findNote(rec) {
    const keys = [
      `${rec.material}|${rec.machine}|${rec.task}`,
      `${rec.material}|${rec.machine}`,
      rec.material,
      "*",
    ];
    for (const k of keys) if (NOTES[k]) return NOTES[k];
    return "";
  }

  function escapeAttr(s) {
    return s.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
  }

  matSel.addEventListener("change", () => { fillMachines(); fillTasks(); render(); });
  machSel.addEventListener("change", () => { updateMachineImage(); fillTasks(); render(); });
  taskSel.addEventListener("change", render);

  fillMaterials();
  fillMachines();
  fillTasks();
  render();
})();
