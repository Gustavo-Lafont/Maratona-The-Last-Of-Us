const episodes = [
  {
    img: "./src/img/episodes/episode1.svg",
    title: "When You're Lost in the Darkness - Ep 01",
    description:
    " In 2003, a mass fungal infection of mutated Cordyceps sparks a global pandemic. Joel flees with his daughter, Sarah, and brother, Tommy, from their Texas home; Sarah is killed by asoldier.",
  },
  
  {
    img: "./src/img/episodes/episode2.svg",
    title: "Infected - Ep 02",
    description:
    " Two days before the worldwide outbreak, in Jakarta, Indonesia, the government shows an infected corpse to a mycologist, who tells them there is no cure or vaccine.",
  },
  {
    img: "./src/img/episodes/episode3.svg",
    title: "Long, Long Time - Ep 03",
    description:
    " Joel and Ellie begin the hike to meet with Bill and Frank. Ellie sees evidence of the government's execution of innocents during the early days of the pandemic.",
  },
  {
    img: "./src/img/episodes/episode4.svg",
    title: "Please Hold to My Hand - Ep 04",
    description:
    " Traveling through Missouri, Joel and Ellie are forced to take a detour through Kansas City, where they are ambushed.",
  },
  {
    img: "./src/img/episodes/episode5.svg",
    title: "Endure and Survive - Ep 05",
    description:
    " While attempting to evade the rebels, Joel and Ellie cross paths with the most wanted man in Kansas City, Kathleen continues her hunt.",
  },
  {
    img: "./src/img/episodes/episode6.svg",
    title: "Kin - Ep 06",
    description:
    " After ignoring the advice of locals, Joel and Ellie descend deeper into dangerous territory in search of the Fireflies - and Tommy",
  },
  {
    img: "./src/img/episodes/episode7.svg",
    title: "Left Behind - Ep 07",
    description:
    " As Joel fights to survive, Ellie looks back on the night that changed everything.",
  },
  {
    img: "./src/img/episodes/episode8.svg",
    title: "When We Are in Need - Ep 08",
    description:
    " Ellie crosses paths with a vengeful group of survivors - and draws the attention of its leader. A weakened Joel faces a new threat.",
  },
  {
    img: "./src/img/episodes/episode9.svg",
    title: "Look for the Light - Ep 09",
    description:
    " A pregnant Anna places her trust in a lifelong friend. Later, Joel and Ellie near the end of their journey.",
  },
];

 

//1. acessar a lista de produtos através do DOM
const list = document.querySelector(".episodes-list");

//2. Criar uma função para percorrer todos os meus ep que estão listadas na var episodes

function addCard(episodes) {
  for (let i = 0; i < episodes.length; i++) {
    //3. Criar uma função que renderize epidio a episodia

    renderCard(episodes[i]);
  }
}

addCard(episodes); 

function renderCard(episodio) {
  const listItem = document.createElement("li");
  listItem.classList.add("card");

  listItem.innerHTML = `
  <img
  src=${episodio.img}
  alt=${episodio.title}
/>
<div class="card-text">
  <h4>${episodio.title}</h4>
  <p>
  ${episodio.description}
  </p>
</div>
  `;

  list.appendChild(listItem);
}
