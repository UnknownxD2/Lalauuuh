const memories = [

    {
        photo: "photos/photo1.jpeg",
        text: "SHUNRI THANEEEEEEEEEEEEEE"
    },

    {
        photo: "photos/photo2.jpeg",
        text: "Veruthe vidula ;-;"
    },

    {
        photo: "photos/photo3.jpeg",
        text: "AAAAAAAAAAAA VIDDDDDDDDDDD"
    },

    {
        photo: "photos/photo4.jpeg",
        text: "First purath poyi kazhikal :D"
    },

    {
        photo: "photos/photo5.jpeg",
        text: "Sussy laluuuu"
    },

    {
        photo: "photos/photo6.jpeg",
        text: "Camera kandal ann chud ayikolum :/"
    },

    {
        photo: "photos/photo7.jpeg",
        text: "2 shotta shenanigansss"
    },

    {
        photo: "photos/photo8.jpeg",
        text: "Pinneyum camera kand CHUDAYII"
    },

    {
        photo: "photos/photo9.jpeg",
        text: "Jada thendi thane"
    },

    {
        photo: "photos/photo10.jpeg",
        text: "Chiri thanne "
    },

    {
        photo: "photos/photo11.jpeg",
        text: "Tharate ornm ann *pavm jerry"
    },

    {
        photo: "photos/photo12.jpeg",
        text: "njmalan puchandi"
    },

    {
        photo: "photos/photo13.jpeg",
        text: "LALLU THE MOGGER SIGMA ALPHA BETA GURLL"
    },

    {
        photo: "photos/photo14.jpeg",
        text: "Thenga pothikn povuna kattuvasi"
    },

    {
        photo: "photos/photo15.jpeg",
        text: "BLEH"
    },

    {
        photo: "photos/photo16.jpeg",
        text: "AIWAAAAAAAAAAAA"
    },

    {
        photo: "photos/photo17.jpeg",
        text: "FAV SNAP HFXGFHSERSEAFBNUHG"
    }
];


const wall = document.getElementById("memory-wall");


memories.forEach((memory) => {

    const item = document.createElement("div");

    item.className = "memory";

    item.innerHTML = `

        <div class="string"></div>

        <div class="photo-frame">

            <img
                src="${memory.photo}"
                alt="Birthday memory"
            >

        </div>

        <p class="memory-text">
            ${memory.text}
        </p>

    `;

    wall.appendChild(item);

});


/* =========================
   OPEN BUTTON AUTO SCROLL
========================= */

const openButton = document.getElementById("open-button");

openButton.addEventListener("click", () => {

    const target = document.getElementById("memories-section");

    const targetY =
        target.getBoundingClientRect().top +
        window.scrollY;

    const startY = window.scrollY;

    const duration = 6000;
    const startTime = performance.now();


    function easeInOut(t) {
        return t < 0.5
            ? 2 * t * t
            : 1 - Math.pow(-2 * t + 2, 2) / 2;
    }


    function scrollStep(currentTime) {

        const elapsed = currentTime - startTime;

        const progress =
            Math.min(elapsed / duration, 1);

        const easedProgress =
            easeInOut(progress);


        window.scrollTo({
            top: startY +
                (targetY - startY) * easedProgress,
            left: 0,
            behavior: "instant"
        });


        if (progress < 1) {

            requestAnimationFrame(scrollStep);

        }

    }


    requestAnimationFrame(scrollStep);

});
