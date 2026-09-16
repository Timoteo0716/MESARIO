/* =========================================
   ELEMENTOS
========================================= */

const intro =
    document.getElementById("intro");

const mainContent =
    document.getElementById("mainContent");

const startBtn =
    document.getElementById("startBtn");

const musicBtn =
    document.getElementById("musicBtn");

const musicStatus =
    document.getElementById("musicStatus");

const backgroundMusic =
    document.getElementById("backgroundMusic");

const secretBtn =
    document.getElementById("secretBtn");

const secretContent =
    document.getElementById("secretContent");

const lock =
    document.getElementById("lock");


/* =========================================
   ABRIR UNIVERSO
========================================= */

startBtn.addEventListener(
    "click",
    () => {

        intro.style.transition =
            "opacity 1s ease, transform 1s ease";

        intro.style.opacity = "0";

        intro.style.transform =
            "scale(1.05)";

        setTimeout(
            () => {

                intro.classList.add("hidden");

                mainContent.classList.remove("hidden");

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

                startMusic();

            },
            1000
        );

    }
);


/* =========================================
   MÚSICA
========================================= */

let musicPlaying = false;


function startMusic() {

    backgroundMusic.volume =
        0.35;


    backgroundMusic.play()
        .then(
            () => {

                musicPlaying = true;

                musicBtn.textContent =
                    "❚❚";

                musicStatus.textContent =
                    "Reproduciendo nuestra canción 🎵";

            }
        )
        .catch(
            () => {

                musicStatus.textContent =
                    "Presiona play para escuchar 🎵";

            }
        );

}


musicBtn.addEventListener(
    "click",
    () => {

        if (musicPlaying) {

            backgroundMusic.pause();

            musicPlaying = false;

            musicBtn.textContent =
                "▶";

            musicStatus.textContent =
                "Música pausada";

        }

        else {

            backgroundMusic.play()
                .then(
                    () => {

                        musicPlaying = true;

                        musicBtn.textContent =
                            "❚❚";

                        musicStatus.textContent =
                            "Reproduciendo nuestra canción 🎵";

                    }
                );

        }

    }
);


/* =========================================
   SECRETO
========================================= */

secretBtn.addEventListener(
    "click",
    () => {

        secretContent.classList.remove(
            "hidden"
        );


        lock.style.transform =
            "scale(1.3) rotate(10deg)";


        secretBtn.textContent =
            "❤️ Lo encontraste ❤️";


        secretBtn.disabled =
            true;


        createHearts();

    }
);


/* =========================================
   CORAZONES
========================================= */

function createHearts() {

    for (
        let i = 0;
        i < 25;
        i++
    ) {

        const heart =
            document.createElement("span");


        heart.textContent =
            Math.random() > .5
                ? "♥"
                : "✦";


        heart.style.position =
            "fixed";


        heart.style.left =
            `${40 + Math.random() * 20}%`;


        heart.style.top =
            `${45 + Math.random() * 10}%`;


        heart.style.fontSize =
            `${12 + Math.random() * 20}px`;


        heart.style.color =
            "#ff789e";


        heart.style.pointerEvents =
            "none";


        heart.style.zIndex =
            "9999";


        document.body.appendChild(
            heart
        );


        const x =
            (Math.random() - .5) *
            500;


        const y =
            -150 -
            Math.random() *
            400;


        heart.animate(
            [

                {
                    transform:
                        "translate(0,0) scale(.5)",

                    opacity: 0
                },

                {
                    transform:
                        `translate(${x * .4}px, ${y * .4}px) scale(1)`,

                    opacity: 1
                },

                {
                    transform:
                        `translate(${x}px, ${y}px) scale(.7)`,

                    opacity: 0
                }

            ],
            {

                duration:
                    1800 +
                    Math.random() * 1000,

                easing:
                    "ease-out"

            }
        )
        .onfinish =
            () => {

                heart.remove();

            };

    }

}