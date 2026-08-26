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
        text: "AIWAAAAAAAAAAAA"
    },

    {
        photo: "photos/photo12.jpeg",
        text: "BEST ONE SO FARR FOR ME JKNSNDFJHFL"
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
