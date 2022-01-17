const myTitle = document.getElementById("myTitle");
const myImage = document.getElementById("myImage");
const myInput = document.getElementById("myInput");

let locaties = [
    {
        "titel":"plaats 0",
        "image":"assets/img/0.jpg"
    },
    {
        "titel":"plaats 1",
        "image":"assets/img/1.jpg"
    },
    {
        "titel":"plaats 2",
        "image":"assets/img/2.jpg"
    },
    {
        "titel":"plaats 3",
        "image":"assets/img/3.jpg"
    },
    {
        "titel":"plaats 4",
        "image":"assets/img/4.jpg"
    },
    {
        "titel":"plaats 5",
        "image":"assets/img/5.jpg"
    },
    {
        "titel":"plaats 6",
        "image":"assets/img/6.jpg"
    },
    {
        "titel":"plaats 7",
        "image":"assets/img/7.jpg"
    },
    {
        "titel":"plaats 8",
        "image":"assets/img/8.jpg"
    },
    {
        "titel":"plaats 9",
        "image":"assets/img/9.jpg"
    },
    {
        "titel":"plaats 10",
        "image":"assets/img/10.jpg"
    },
    {
        "titel":"plaats 11",
        "image":"assets/img/11.jpg"
    }
];

function show(index){
    myTitle.innerHTML = locaties[index].titel;
    myImage.src = locaties[index].image;
}

function getInput(){
    show(myInput.value);
    // console.log(myInput.value)
    myInput.value = "";
    myInput.focus();
}

