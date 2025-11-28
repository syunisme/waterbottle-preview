// 取得 canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// ============================
//  1. 圓角瓶蓋（曲線版）
// ============================
function drawCap() {
  ctx.beginPath();
  ctx.moveTo(160, 120);                               // 左上開始
  ctx.quadraticCurveTo(250, 40, 340, 120);            // 上方大弧線
  ctx.lineTo(340, 170);
  ctx.quadraticCurveTo(250, 120, 160, 170);           // 下方連回來
  ctx.closePath();

  ctx.fillStyle = "#dddddd";
  ctx.fill();
  ctx.stroke();
}

// ============================
//  2. 圓弧瓶身（有腰線）
// ============================
function drawBody() {
  ctx.beginPath();

  ctx.moveTo(160, 170);
  ctx.quadraticCurveTo(120, 400, 160, 720);    // 左邊大曲線
  ctx.lineTo(340, 720);
  ctx.quadraticCurveTo(380, 400, 340, 170);    // 右邊大曲線

  ctx.closePath();

  ctx.fillStyle = "#ffffff";
  ctx.fill();
  ctx.stroke();
}

// ============================
//  3. 提帶（圓環 + S形線）
// ============================
function drawStrap() {
  // 提帶環（圓環）
  ctx.beginPath();
  ctx.arc(350, 260, 40, 0, Math.PI * 2);
  ctx.stroke();

  // 提帶本體（曲線）
  ctx.beginPath();
  ctx.moveTo(380, 260);
  ctx.quadraticCurveTo(430, 420, 350, 580);
  ctx.quadraticCurveTo(270, 420, 320, 260);
  ctx.stroke();
}

// ============================
//  初始化繪圖
// ============================
function drawAll() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawCap();
  drawBody();
  drawStrap();
}

drawAll();
