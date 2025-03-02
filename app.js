console.log('makeup');

let imageindex = 0;
const thumbnailcontainer = document.getElementById('thumbnailcontainer');
const backgroundimage = document.getElementById('background-image');
const images = [
    {
        src:"./assets/Snapchat-1773800163 (1).jpg",
        alt:"bride photo",
    },
    {
        src:"./assets/Screenshot_20250219_154546_Instagram (1).jpg",
        alt:"bride photo sitting",
    },
    {
        src:"./assets/Screenshot_20250219_154454_Instagram (1).jpg",
        alt:"more bride photo",
    },
    {
        src:"./assets/retouch_2024121023145455 (1).jpg",
        alt:"more bride photo",
    },
    {
        src:"./assets/IMG-20181119-WA0022 (1).jpg",
        alt:"more bride photo"
    },

];
function createThumbnails() {
    console.log ("createThumbnails involked!");
    for (let i = 0; i < images.length; i++) {
        console.log("iteration:", i);
    const imgtag = document.createElement("img");
    console.log(images[i]);
    console.log(images[i].src);
    console.log(images[i].alt);
    imgTag.src = images[i].src;
    imgTag.alt = images[i].alt;
imgTag.addEventListener("click", function () {
    createBackgroundImage(images[i]);
});
thumbnailContainer.appendchild(imgTag);
    }
}