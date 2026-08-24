const memories = [

    {
        photo: "photos/photo1.jpg",
        text: "Our first memory goes here ♡"
    },

    {
        photo: "photos/photo2.jpg",
        text: "Write something special about this moment."
    },

    {
        photo: "photos/photo3.jpg",
        text: "A memory that still makes me smile."
    },

    {
        photo: "photos/photo4.jpg",
        text: "One of those moments I'll always remember."
    },

    {
        photo: "photos/photo5.jpg",
        text: "Another little memory ♡"
    },

    {
        photo: "photos/photo6.jpg",
        text: "And this one means a lot to me."
    }

];


const wall = document.getElementById("memory-wall");


memories.forEach(memory => {

    const item = document.createElement("div");

    item.className = "memory";

    item.innerHTML = `

        <div class="string"></div>

        <div class="photo-frame">

            <img
                src="${memory.photo}"
                alt="Memory photo"
            >

        </div>

        <p class="memory-text">
            ${memory.text}
        </p>

    `;

    wall.appendChild(item);

});
