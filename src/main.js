let app = new Vue({
	el: "main",
	data: {
		projects: {
			"Plant World Generator" : {
				name: "Plant World Generator",
				description: `An interactive media experience which generates a world of 
							  user-designed computer-generated flowers.`,
				img: "plant-world.png",
				link: "https://people.rit.edu/lep2738/330/projects/project-1/index.html",
				download: "",
				code: "https://github.com/FeniulaPyra/330-project-1"
			},
			"Audio Visualizer" : {
				name: "Audio Visualizer",
				description: `A site that visualizes a user-selected or preset song in a 
								pixelated witch hut using bitmap effects and audio effects. 
								Uses JS and the WebAudio API.`,
				img: "visualizer.png",
				link: "https://people.rit.edu/lep2738/330/projects/project-2/index.html",
				download: "",
				code: "https://github.com/FeniulaPyra/330-project-2"
			},
			"RPS: The Odyssey" : {
				name: "RPS: The Odyssey",
				description: `A platformer where the main form of combat is 
								rock-paper-scissors-lizard-spock. Made with a group. Written
								in C# and uses monogame.`,
				img: "rps-the-odyssey.png",
				link: "",
				download: "files/rps-the-odyssey.zip",
				code: ""
			},
			"Homework Tool" : {
				name: "Homework Tool",
				description: `A simple Homework Planner site I made for myself. It uses the 
								Google Sheets API to help me track my homework. Functional, 
								but the UI is still WIP.`,
				img: "homework-tool.PNG",
				link: "",
				download: "",
				code: ""
			},
			"Disney Tsum Tsum Search" : {
				name: "Disney Tsum Tsum Search",
				description: `A website that finds characters from the mobile game, 
								<em>Disney Tsum Tsum</em>, using tags picked by the user. Uses Ajax 
								HTML requests paired with the CORS-Anywhere and Wikia API.`,
				img: "disney-tsum-tsum-pic.PNG",
				link: "https://people.rit.edu/lep2738/tsum-searcher/index.html",
				download: "",
				code: ""
			},
			"Alien Cereal" : {
				name: "Alien Cereal",
				description: `A game where you drop colored bubbles into a bowl to match and clear 
								bubbles. Written in JavaScript, uses PixiJS and Matter.JS apis.`,
				img: "aliencereal.png",
				link: "https://people.rit.edu/lep2738/235/project-3/game/game.html",
				download: "",
				code: ""
			},
			"That's The Tea" : {
				name: "That's The Tea",
				description: `A work in progress social card game where players must make the best 
							 tea out of the strangest ingredients.`,
				img: "thats-the-tea.png",
				link: "",
				download: "files/thats-the-tea.zip",
				code: ""
			}
			
		},
		selected: "Plant World Generator"
	},
	methods: {
		getBG(projectImg) {
			return "background-image: url(imgs/" + projectImg + ")";
		}
	}
});

function init() {
	
}
export{init};