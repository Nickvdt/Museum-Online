const miniMap = document.querySelector("#minimap");
const miniMapImg = document.querySelector("#minimapImg");
const ctx = miniMap.getContext("2d");

miniMap.addEventListener("mousedown", (e) => {
  let rect = miniMap.getBoundingClientRect();
  let x = e.clientX - rect.left;
  let y = e.clientY - rect.top;

  for (locI in maplocs) {
    let loc = maplocs[locI];
    if (x >= loc.x && x <= loc.x + loc.width) {
      if (y >= loc.y && y <= loc.y + loc.height) {
        updateRoom(loc.id);
      }
    }
  }
});

miniMapImg.addEventListener("load", (e) => {
  console.log(e);
  draw();
});

let activeLoc = getRoomIndex("1");
function draw() {
  ctx.globalCompositeOperation = "source-over";
  ctx.drawImage(
    miniMapImg,
    0,
    0,
    miniMapImg.width,
    miniMapImg.height,
    0,
    0,
    400,
    283
  );
  ctx.globalCompositeOperation = "multiply";
  ctx.fillStyle = "rgba(255, 0, 0, 0.5)";
  // for (locI in maplocs) {
  let loc = maplocs[activeLoc];
  // if (locI == maplocs.length - 1) ctx.fillStyle = "rgba(0, 255, 0, 0.5)";
  ctx.fillRect(loc.x, loc.y, loc.width, loc.height);
  // }
}

function getRoomIndex(id) {
  return maplocs.findIndex((e) => e.id === id);
}
function highlightArea(index) {
  activeLoc = index;
  draw();
}
