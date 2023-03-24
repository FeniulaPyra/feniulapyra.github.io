let app = new Vue({
  el: "main",
  data: {
    projects: {
      Mushrune: {
        name:"Mushrune",
        description: `A farming simulation game with a unique growth mechanic that allows 
                      crops to spread to other tiles and hybridize with other nearby crops. Made in Unity
                      with a team of 2-4.`,
        img: "mushrune.png",
        link: "https://mushrunegame.itch.io/mushrune",
        download: "mushrune.zip",
        code: "",
        tags: "game"
      },
      "HvZ" : {
        name: "HvZ",
        description: `A simulation in Unity for zombies (cats) chasing and converting humans (ducks) 
                      demonstrating the evasion and pursuit of autonomous agents.`,
        img: "hvz.png",
        link: "",
        download: "files/hvz.zip",
        code: "https://github.com/FeniulaPyra/hvz",
        tags: "simulation"
      },
      "Birds With Wheels" : {
        name:"Birds with Wheels",
        description:`A silly tower defense game where players must place towers (birds with wheels) 
        to defend a giant golden wheel from being stolen from enemies (wheels with birds). Made in Unity with a team of 5 people.`,
        img: "birdswithwheels.png",
        link: "",
        download: "",
        code: "https://github.com/vg1566/birds-with-wheels",
        tags: "game"
      },
      "Highway 115" : {
        name:"Highway115",
        description:`A unique rhythm-rpg set in the world of Birds with Wheels. Made in Unity with a team of 5 people.`,
        img: "highway115.PNG",
        link: "",
        download: "",
        code: "https://github.com/EricDelmonico/Highway115",
        tags: "game"
      },
      "Plant World Generator" : {
        name: "Plant World Generator",
        description: `An interactive media experience which generates a world of 
                      user-designed computer-generated flowers.`,
        img: "plant-world.png",
        link: "https://people.rit.edu/lep2738/330/projects/project-1/index.html",
        download: "",
        code: "https://github.com/FeniulaPyra/330-project-1",
        tags: "simulation web"
      },
      "Audio Visualizer" : {
        name: "Audio Visualizer",
        description: `A site that visualizes a user-selected or preset song in a 
                      pixelated witch hut using bitmap effects and audio effects. 
                      Uses JS and the WebAudio API.`,
        img: "visualizer.png",
        link: "https://people.rit.edu/lep2738/330/projects/project-2/index.html",
        download: "",
        code: "https://github.com/FeniulaPyra/330-project-2",
        tags: "web"
      },
      "Cow-a-bug-a!" : {
        name: "Cow-a-bug-a!",
        description: `A pet simulator game! Create bug cows and make sure to pet them, feed them, 
                      and "milk" them for honey every day! Make sure to buy them cute accessories
                      too! Part of the reason for this project was to learn more about databases,
                      servers, and user logins/password storage.`,
        img: "cow-a-bug-a.png",
        download: "",
        link: "https://lep2738-cow-a-bug-a.herokuapp.com/",
        code: "",
        tags: "game web"
      },
      "RPS: The Odyssey" : {
        name: "RPS: The Odyssey",
        description: `A platformer where the main form of combat is 
                      rock-paper-scissors-lizard-spock. Made with a group of 4 people. Written
                      in C# and uses monogame.`,
        img: "rps-the-odyssey.png",
        link: "",
        download: "files/rps-the-odyssey.zip",
        code: "",
        tags: "game"
      },
      "Homework Tool" : {
        name: "Homework Tool",
        description: `A Homework Todolist tool I created using Vue.js, a DnD api, and
                      the Google Firebase Realtime Database and Authentication API's, 
                      inspired by the website/app Habitica.`,
        img: "homework-tool-new.png",
        link: "https://people.rit.edu/lep2738/330/projects/project-3/index.html",
        download: "",
        code: "https://github.com/FeniulaPyra/homework-todo-list",
        tags: "web"
      },
      "Disney Tsum Tsum Search" : {
        name: "Disney Tsum Tsum Search",
        description: `A website that finds characters from the mobile game, 
                      "Disney Tsum Tsum", using tags picked by the user. Uses Ajax 
                      HTML requests to the Wikia API.`,
        img: "disney-tsum-tsum-pic.PNG",
        link: "https://people.rit.edu/lep2738/tsum-searcher/index.html",
        download: "",
        code: "",
        tags: "web"
      },
      "Alien Cereal" : {
        name: "Alien Cereal",
        description: `A game where you drop colored bubbles into a bowl to match and clear 
                        bubbles. Written in JavaScript, uses PixiJS and Matter.JS apis.`,
        img: "aliencereal.png",
        link: "https://people.rit.edu/lep2738/235/project-3/game/game.html",
        download: "",
        code: "https://github.com/FeniulaPyra/alien-cereal",
        tags: "game web"
      },
      "That's The Tea" : {
        name: "That's The Tea",
        description: `A social card game where players must make the best 
                     tea out of the strangest ingredients. Made in Tabletop Simulator with a team of 6 people.`,
        img: "thats-the-tea.png",
        link: "",
        download: "files/thats-the-tea.zip",
        code: "",
        tags: "game"
      },
      "Portal 2 Levels: Teaching Tractor Beams" : {
        name: "Portal 2 Levels: Teaching Tractor Beams",
        description:"A series of three Portal 2 Levels designed to introduce new Portal 2 players to the tractor beam mechanic.",
        img: "portal.jpg",
        link: "https://steamcommunity.com/sharedfiles/filedetails/?id=2768685940",
        download: "",
        code: "",
        tags: "game"
        
      }
      
    },
    selected: "Mushrune"
  },
  methods: {
    getBG(projectImg) {
      return "background-image: url(imgs/" + projectImg + ")";
    }
  }
});

let Template = {
  name:"",
  description:"",
  img: "",
  link: "",
  download: "",
  code: "",
  tags: "game"
}

function init() {

}
export{init};