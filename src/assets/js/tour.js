const myTitle = document.getElementById("myTitle");
const myImage = document.getElementById("myImage");
const myInput = document.getElementById("myInput");
const myImageButtons = document.getElementById("myImageButtons");

function show(index) {
  myTitle.innerHTML = locaties[index].titel;
  myImage.src = locaties[index].image;
}

function getInput() {
  updateRoom(myInput.value.trim());
}

function updateRoom(inp) {
  let roomIndex = getRoomIndex(inp);
  highlightArea(roomIndex);
  myInput.value = "";
  myInput.focus();
  let loc = maplocs[roomIndex];
  if (loc.title) {
    myTitle.textContent = `${loc.title}`;
  } else {
    myTitle.textContent = `Je bent nu in kamer: ${maplocs[roomIndex].id}`;
  }
  myImageButtons.innerHTML = "";
  if (loc.images.length > 1) {
    for (imgI in loc.images) {
      let img = loc.images[imgI];
      let btn = document.createElement("button");
      btn.dataset.src = img;
      btn.textContent = imgI;
      btn.addEventListener("click", (e) => {
        myImage.setAttribute("src", e.target.dataset.src);
      });
      myImageButtons.appendChild(btn);
    }
  }
  myImage.setAttribute("src", loc.images[0] || "assets/img/placeholder.jpg");
}

updateRoom("1");
