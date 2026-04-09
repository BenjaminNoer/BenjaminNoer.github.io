const projects = [
  {
    name: "State of Decay 2 Skill Reroll",
    url: "https://github.com/BenjaminNoer/SoD2-Skill-Reroll",
    image: "images/sod2skillreroll.png"
  },
  {
    name: "Borderlands 3 Mayhem",
    url: "https://github.com/BenjaminNoer/Borderlands-3-Mayhem",
    image: "images/bo3mayhem.png"
  },
  {
    name: "Game of Life",
    url: "https://github.com/BenjaminNoer/GameOfLife",
    image: "images/gameoflife.png"
  },
  {
    name: "Image to Text",
    url: "https://github.com/BenjaminNoer/Image-to-Text",
    image: "images/imagetotext.png"
  }
];

const projectList = document.getElementById("project-list");

projects.forEach(project => {
  const projectDiv = document.createElement("div");
  projectDiv.classList.add("project");
  projectDiv.innerHTML = `
    <img src="${project.image}" alt="${project.name}">
    <h3>${project.name}</h3>
    <a href="${project.url}" target="_blank">View on GitHub</a>
  `;
  projectList.appendChild(projectDiv);
});
