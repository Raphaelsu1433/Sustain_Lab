/* =========================================================
 * 3D 列印參數資料（由「AI_UI介面開發所需_02.xlsx」轉出）
 * 要新增或修改資料，直接編輯這個檔案即可。
 * ---------------------------------------------------------
 * MATERIALS : 材料清單（value 要和 RECORDS 的 material 一致）
 * MACHINES  : 機器清單與圖片路徑
 * RECORDS   : 每一列 = 材料 × 機器 × 任務需求 的建議參數
 *             值寫 "default" 會顯示成「機器預設值」
 * NOTES     : 第三格「優化說明／備註」的內容（見檔案最下方）
 * ========================================================= */

const MATERIALS = [
  { value: "PLA",   label: "PLA" },
  { value: "rPLA",  label: "rPLA（回收 PLA）" },
  { value: "rPETG", label: "rPETG（回收 PETG）" },
  { value: "rABS",  label: "rABS（回收 ABS）" },
];

const MACHINES = {
  "delta-type":    { label: "delta-type",    image: "delta-type.jpg" },
  "Prusa i3 MK3S": { label: "Prusa i3 MK3S", image: "prusa-i3-mk3s.jpg" },
};

const RECORDS = [
  {"material": "PLA", "machine": "delta-type", "type": "單目標", "task": "尺寸精度：W", "weight": "100%", "nozzle": "190°C", "speed": "20 mm/s", "layer": "0.3 mm", "bed": "30°C", "fan": "100%"},
  {"material": "PLA", "machine": "delta-type", "type": "單目標", "task": "尺寸精度：OW", "weight": "100%", "nozzle": "190°C", "speed": "20 mm/s", "layer": "0.3 mm", "bed": "30°C", "fan": "100%"},
  {"material": "PLA", "machine": "delta-type", "type": "單目標", "task": "尺寸精度：OL", "weight": "100%", "nozzle": "190°C", "speed": "20 mm/s", "layer": "0.1 mm", "bed": "30°C", "fan": "100%"},
  {"material": "PLA", "machine": "delta-type", "type": "單目標", "task": "尺寸精度：T", "weight": "100%", "nozzle": "210°C", "speed": "20 mm/s", "layer": "0.1 mm", "bed": "60°C", "fan": "50%"},
  {"material": "PLA", "machine": "delta-type", "type": "單目標", "task": "CO₂ 排放", "weight": "100%", "nozzle": "190°C", "speed": "30 mm/s", "layer": "0.3 mm", "bed": "15°C", "fan": "100%"},
  {"material": "PLA", "machine": "delta-type", "type": "單目標", "task": "成本-電費", "weight": "100%", "nozzle": "200°C", "speed": "25 mm/s", "layer": "0.3 mm", "bed": "30 或 15°C", "fan": "50%"},
  {"material": "PLA", "machine": "delta-type", "type": "單目標", "task": "成本-材料", "weight": "100%", "nozzle": "200°C", "speed": "30 mm/s", "layer": "0.3 mm", "bed": "30°C", "fan": "50%"},
  {"material": "PLA", "machine": "delta-type", "type": "單目標", "task": "成本-人工", "weight": "100%", "nozzle": "190°C", "speed": "30 mm/s", "layer": "0.3 mm", "bed": "15°C", "fan": "100%"},
  {"material": "PLA", "machine": "delta-type", "type": "多目標", "task": "尺寸精度（W、OW、OL、T）", "weight": "各 25%", "nozzle": "210°C", "speed": "20 mm/s", "layer": "0.1 mm", "bed": "60°C", "fan": "100%"},
  {"material": "PLA", "machine": "delta-type", "type": "多目標", "task": "尺寸精度 + CO₂", "weight": "1:9～9:1（結果相同）", "nozzle": "210°C", "speed": "20 mm/s", "layer": "0.2 mm", "bed": "30°C", "fan": "100%"},
  {"material": "PLA", "machine": "delta-type", "type": "多目標", "task": "三項成本(電費、材料、人工)", "weight": "各 33.3%", "nozzle": "200°C", "speed": "25 mm/s", "layer": "0.3 mm", "bed": "15°C", "fan": "50%"},
  {"material": "PLA", "machine": "delta-type", "type": "多目標", "task": "尺寸精度 + 三項成本(電費、材料、人工)", "weight": "1:9～9:1（結果相同）", "nozzle": "210°C", "speed": "20 mm/s", "layer": "0.2 mm", "bed": "60°C", "fan": "50%"},
  {"material": "PLA", "machine": "delta-type", "type": "多目標", "task": "尺寸精度 + CO₂ + 三項成本(電費、材料、人工)", "weight": "均分（各 33.3%）", "nozzle": "210°C", "speed": "20 mm/s", "layer": "0.2 mm", "bed": "30°C", "fan": "100%"},
  {"material": "rPLA", "machine": "Prusa i3 MK3S", "type": "單目標", "task": "尺寸精度：W", "weight": "100%", "nozzle": "195°C", "speed": "10 mm/s", "layer": "0.1 mm", "bed": "25°C", "fan": "100%"},
  {"material": "rPLA", "machine": "Prusa i3 MK3S", "type": "單目標", "task": "尺寸精度：OW", "weight": "100%", "nozzle": "205°C", "speed": "40 mm/s", "layer": "0.2 mm", "bed": "25°C", "fan": "100%"},
  {"material": "rPLA", "machine": "Prusa i3 MK3S", "type": "單目標", "task": "尺寸精度：OL", "weight": "100%", "nozzle": "195°C", "speed": "40 mm/s", "layer": "0.2 mm", "bed": "50°C", "fan": "0%"},
  {"material": "rPLA", "machine": "Prusa i3 MK3S", "type": "單目標", "task": "尺寸精度：T", "weight": "100%", "nozzle": "195°C", "speed": "40 mm/s", "layer": "0.1 mm", "bed": "25°C", "fan": "100%"},
  {"material": "rPLA", "machine": "Prusa i3 MK3S", "type": "單目標", "task": "表面粗糙度 Ra", "weight": "100%", "nozzle": "205°C", "speed": "40 mm/s", "layer": "0.1 mm", "bed": "50°C", "fan": "100%"},
  {"material": "rPLA", "machine": "Prusa i3 MK3S", "type": "單目標", "task": "碳價", "weight": "100%", "nozzle": "185°C", "speed": "20 mm/s", "layer": "0.3 mm", "bed": "25°C", "fan": "0%"},
  {"material": "rPLA", "machine": "Prusa i3 MK3S", "type": "多目標", "task": "尺寸精度（W、OW、OL、T）", "weight": "各 25%", "nozzle": "195°C", "speed": "40 mm/s", "layer": "0.1 mm", "bed": "25°C", "fan": "100%"},
  {"material": "rPLA", "machine": "Prusa i3 MK3S", "type": "多目標", "task": "尺寸精度 + 表面粗糙度Ra", "weight": "五項各 20%", "nozzle": "195°C", "speed": "40 mm/s", "layer": "0.2 mm", "bed": "25°C", "fan": "0%"},
  {"material": "rPLA", "machine": "Prusa i3 MK3S", "type": "多目標", "task": "尺寸精度 + 表面粗糙度Ra +碳價", "weight": "六項各約 16.7%", "nozzle": "195°C", "speed": "40 mm/s", "layer": "0.2 mm", "bed": "25°C", "fan": "100%"},
  {"material": "rPETG", "machine": "delta-type", "type": "單目標", "task": "尺寸精度：W", "weight": "100%", "nozzle": "default", "speed": "default", "layer": "default", "bed": "default", "fan": "default"},
  {"material": "rPETG", "machine": "delta-type", "type": "單目標", "task": "尺寸精度：OW", "weight": "100%", "nozzle": "default", "speed": "default", "layer": "default", "bed": "default", "fan": "default"},
  {"material": "rPETG", "machine": "delta-type", "type": "單目標", "task": "尺寸精度：OL", "weight": "100%", "nozzle": "default", "speed": "default", "layer": "default", "bed": "default", "fan": "default"},
  {"material": "rPETG", "machine": "delta-type", "type": "單目標", "task": "尺寸精度：T", "weight": "100%", "nozzle": "default", "speed": "default", "layer": "default", "bed": "default", "fan": "default"},
  {"material": "rPETG", "machine": "delta-type", "type": "單目標", "task": "表面粗糙度 Ra", "weight": "100%", "nozzle": "default", "speed": "default", "layer": "default", "bed": "default", "fan": "default"},
  {"material": "rPETG", "machine": "delta-type", "type": "單目標", "task": "PM2.5", "weight": "100%", "nozzle": "default", "speed": "default", "layer": "default", "bed": "default", "fan": "default"},
  {"material": "rPETG", "machine": "delta-type", "type": "單目標", "task": "VOCs", "weight": "100%", "nozzle": "default", "speed": "default", "layer": "default", "bed": "default", "fan": "default"},
  {"material": "rPETG", "machine": "delta-type", "type": "單目標", "task": "能耗", "weight": "100%", "nozzle": "default", "speed": "default", "layer": "default", "bed": "default", "fan": "default"},
  {"material": "rPETG", "machine": "delta-type", "type": "多目標", "task": "尺寸精度（W、OW、OL、T）", "weight": "各 25%", "nozzle": "240°C", "speed": "80 mm/s", "layer": "0.13 mm", "bed": "default", "fan": "default"},
  {"material": "rPETG", "machine": "delta-type", "type": "多目標", "task": "機械性質(尺寸精度 + 表面粗糙度 Ra)", "weight": "五項各 20%", "nozzle": "240°C", "speed": "80 mm/s", "layer": "0.10 mm", "bed": "default", "fan": "default"},
  {"material": "rPETG", "machine": "delta-type", "type": "多目標", "task": "環境 (PM2.5+VOCs+能耗)", "weight": "各33.3%", "nozzle": "259°C", "speed": "80 mm/s", "layer": "0.30 mm", "bed": "default", "fan": "default"},
  {"material": "rPETG", "machine": "delta-type", "type": "多目標", "task": "機械性質+環境", "weight": "各12.5%", "nozzle": "259°C", "speed": "70 mm/s", "layer": "0.26 mm", "bed": "default", "fan": "default"},
  {"material": "rABS", "machine": "delta-type", "type": "單目標", "task": "尺寸精度：W", "weight": "100%", "nozzle": "253°C", "speed": "78 mm/s", "layer": "0.2 mm", "bed": "default", "fan": "default"},
  {"material": "rABS", "machine": "delta-type", "type": "單目標", "task": "尺寸精度：OW", "weight": "100%", "nozzle": "260°C", "speed": "20 mm/s", "layer": "0.1 mm", "bed": "default", "fan": "default"},
  {"material": "rABS", "machine": "delta-type", "type": "單目標", "task": "尺寸精度：OL", "weight": "100%", "nozzle": "259°C", "speed": "51 mm/s", "layer": "0.3 mm", "bed": "default", "fan": "default"},
  {"material": "rABS", "machine": "delta-type", "type": "單目標", "task": "尺寸精度：T", "weight": "100%", "nozzle": "257°C", "speed": "44 mm/s", "layer": "0.2 mm", "bed": "default", "fan": "default"},
  {"material": "rABS", "machine": "delta-type", "type": "單目標", "task": "表面粗糙度 Ra", "weight": "100%", "nozzle": "241°C", "speed": "39 mm/s", "layer": "0.1 mm", "bed": "default", "fan": "default"},
  {"material": "rABS", "machine": "delta-type", "type": "單目標", "task": "PM2.5", "weight": "100%", "nozzle": "260°C", "speed": "80 mm/s", "layer": "0.3 mm", "bed": "default", "fan": "default"},
  {"material": "rABS", "machine": "delta-type", "type": "單目標", "task": "VOCs", "weight": "100%", "nozzle": "260°C", "speed": "80 mm/s", "layer": "0.3 mm", "bed": "default", "fan": "default"},
  {"material": "rABS", "machine": "delta-type", "type": "單目標", "task": "能耗", "weight": "100%", "nozzle": "260°C", "speed": "79 mm/s", "layer": "0.3 mm", "bed": "default", "fan": "default"},
  {"material": "rABS", "machine": "delta-type", "type": "多目標", "task": "空氣品質(PM2.5+VOCs)", "weight": "各 50%", "nozzle": "260°C", "speed": "80 mm/s", "layer": "0.2 mm", "bed": "default", "fan": "default"},
  {"material": "rABS", "machine": "delta-type", "type": "多目標", "task": "環境 (PM2.5+VOCs+能耗)", "weight": "各33.3%", "nozzle": "260°C", "speed": "80 mm/s", "layer": "0.2 mm", "bed": "default", "fan": "default"},
  {"material": "rABS", "machine": "delta-type", "type": "多目標", "task": "機械性質+環境", "weight": "各12.5%", "nozzle": "252°C", "speed": "79 mm/s", "layer": "0.2 mm", "bed": "default", "fan": "default"},
];

/* ---------------------------------------------------------
 * NOTES：第三格要顯示的說明。
 * 查找順序（越具體越優先）：
 *   "材料|機器|任務"  →  "材料|機器"  →  "材料"  →  "*"
 * 例："PLA|delta-type|尺寸精度：W"、"rABS|delta-type"、"rPETG"
 * 內容可以寫 HTML（<p>、<ul><li>、<strong> 等）。
 * --------------------------------------------------------- */
const NOTES = {
  "*": "<p>（說明內容待補）這裡會顯示採用建議參數前，務必閱讀的注意事項。</p>",
};
