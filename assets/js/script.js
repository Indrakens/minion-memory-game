let section = document.querySelector("section");
let playerLivesCount = document.querySelector("span");
let playerLives = 8;

//Text link
playerLivesCount.textContent = playerLives;

//Image data
let getData = () => [
    {imgSrc: "./assets/images/minion1.png", name: "minion1"},
    {imgSrc: "./assets/images/minion2.png", name: "minion2"},
    {imgSrc: "./assets/images/minion3.png", name: "minion3"},
    {imgSrc: "./assets/images/minion4.png", name: "minion4"},
    {imgSrc: "./assets/images/minion5.png", name: "minion5"},
    {imgSrc: "./assets/images/minion6.png", name: "minion6"},
    {imgSrc: "./assets/images/minion7.png", name: "minion7"},
    {imgSrc: "./assets/images/minion8.png", name: "minion8"},
    {imgSrc: "./assets/images/minion9.png", name: "minion9"},
    {imgSrc: "./assets/images/minion10.png", name: "minion10"},
    {imgSrc: "./assets/images/minion1.png", name: "minion1"},
    {imgSrc: "./assets/images/minion2.png", name: "minion2"},
    {imgSrc: "./assets/images/minion3.png", name: "minion3"},
    {imgSrc: "./assets/images/minion4.png", name: "minion4"},
    {imgSrc: "./assets/images/minion5.png", name: "minion5"},
    {imgSrc: "./assets/images/minion6.png", name: "minion6"},
    {imgSrc: "./assets/images/minion7.png", name: "minion7"},
    {imgSrc: "./assets/images/minion8.png", name: "minion8"},
    {imgSrc: "./assets/images/minion9.png", name: "minion9"},
    {imgSrc: "./assets/images/minion10.png", name: "minion10"},
]

//Randomize function
let randomize = () => {
    let cardData = getData();
    cardData.sort( () => Math.random() -0.5);
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
    //Attached cards to section
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back); 

    card.addEventListener("click", (e) =>  {
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
    
    if (flippedCards.length === 2) {
       if (flippedCards[0].getAttribute("name") === 
       flippedCards[1].getAttribute("name")
       ) {
        console.log("match");
       } else {
        console.log("wrong");
       }
    }
};



cardGenerator();