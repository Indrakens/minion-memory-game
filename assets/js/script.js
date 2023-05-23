let section = document.querySelector("#card-section");
let playerLivesCount = document.querySelector("span");
let playerLives = 8;

//Text link
playerLivesCount.textContent = playerLives;

//Image data
let getData = () => [{
        imgSrc: "./assets/images/minion1.png",
        name: "minion1",
        alt: "three minions with phone"
    },
    {
        imgSrc: "./assets/images/minion2.png",
        name: "minion2",
        alt: "minion with toy gun"
    },
    {
        imgSrc: "./assets/images/minion3.png",
        name: "minion3",
        alt: "three minions"
    },
    {
        imgSrc: "./assets/images/minion4.png",
        name: "minion4",
        alt: "six minions together"
    },
    {
        imgSrc: "./assets/images/minion5.png",
        name: "minion5",
        alt: "Two serious minions"
    },
    {
        imgSrc: "./assets/images/minion6.png",
        name: "minion6",
        alt: "minion with tedy bear"
    },
    {
        imgSrc: "./assets/images/minion7.png",
        name: "minion7",
        alt: "minion with heart"
    },
    {
        imgSrc: "./assets/images/minion8.png",
        name: "minion8",
        alt: "one happy minion"
    },
    {
        imgSrc: "./assets/images/minion9.png",
        name: "minion9",
        alt: "one silly minion"
    },
    {
        imgSrc: "./assets/images/minion10.png",
        name: "minion10",
        alt: "minion with banana"
    },
    {
        imgSrc: "./assets/images/minion1.png",
        name: "minion1",
        alt: "three minions with phone"
    },
    {
        imgSrc: "./assets/images/minion2.png",
        name: "minion2",
        alt: "minion with toy gun"
    },
    {
        imgSrc: "./assets/images/minion3.png",
        name: "minion3",
        alt: "three minions"
    },
    {
        imgSrc: "./assets/images/minion4.png",
        name: "minion4",
        alt: "six minions together"
    },
    {
        imgSrc: "./assets/images/minion5.png",
        name: "minion5",
        alt: "Two serious minions"
    },
    {
        imgSrc: "./assets/images/minion6.png",
        name: "minion6",
        alt: "minion with tedy bear"
    },
    {
        imgSrc: "./assets/images/minion7.png",
        name: "minion7",
        alt: "minion with heart"
    },
    {
        imgSrc: "./assets/images/minion8.png",
        name: "minion8",
        alt: "one happy minion"
    },
    {
        imgSrc: "./assets/images/minion9.png",
        name: "minion9",
        alt: "one silly minion"
    },
    {
        imgSrc: "./assets/images/minion10.png",
        name: "minion10",
        alt: "minion with banana"
    },
];

//Randomize function
let randomize = () => {
    let cardData = getData();
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
};

//Card function
let cardGenerator = () => {
    let cardData = randomize();

    cardData.forEach((item) => {
        let card = document.createElement("div");
        let face = document.createElement("img");
        let back = document.createElement("div");
        card.classList = "card";
        face.classList = "face";
        back.classList = "back";
        //Attach images for cards
        face.src = item.imgSrc;
        card.setAttribute("name", item.name);
        card.setAttribute("alt", item.alt);
        //Attached cards to section
        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);

        card.addEventListener("click", (e) => {
            card.classList.toggle("toggleCard");
            checkCards(e);
        });
    });
};

//Card check
let checkCards = (e) => {
    console.log(e);
    let clickedCard = e.target;
    clickedCard.classList.add("flipped");
    let flippedCards = document.querySelectorAll(".flipped");
    let toggleCard = document.querySelectorAll(".toggleCard");
    console.log(flippedCards);

    if (flippedCards.length === 2) {
        if (flippedCards[0].getAttribute("name") ===
            flippedCards[1].getAttribute("name")
        ) {
            console.log("match");
            flippedCards.forEach((card) => {
                card.classList.remove("flipped");
                card.style.pointerEvents = "none";
            });
        } else {
            console.log("wrong");
            flippedCards.forEach((card) => {
                card.classList.remove("flipped");
                setTimeout(() => card.classList.remove("toggleCard"), 1000);
            });
            playerLives--;
            playerLivesCount.textContent = playerLives;

            //Alert window if loose the game
            if (playerLives === 0) {
                restart("🥺 Oops! Try again!");
            }
        }
    }

    //Alert window if won the game
    if (toggleCard.length === 20) {
        restart("🤩 You won!");
    }
};

//Restart game
let restart = (text) => {
    let cardData = randomize();
    let faces = document.querySelectorAll(".face");
    let cards = document.querySelectorAll(".card");
    section.style.pointerEvents = "none";
    cardData.forEach((item, index) => {
        cards[index].classList.remove("toggleCard");

        //Randomize cards
        setTimeout(() => {
            cards[index].style.pointerEvents = "all";
            faces[index].src = item.imgSrc;
            cards[index].setAttribute("name", item.name);
            section.style.pointerEvents = "all";
        }, 1000);
    });
    playerLives = 8;
    playerLivesCount.textContent = playerLives;
    setTimeout(() => window.alert(text), 120);
};

cardGenerator();

//Game rules window area
document.getElementById("button").addEventListener("click",
    function () {
        document.querySelector(".modal").style.display = "flex";
    });

document.querySelector(".close").addEventListener("click",
    function () {
        document.querySelector(".modal").style.display = "none";
    });