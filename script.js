const projects = [
  {
    name: "Project One",
    url: "https://github.com/yourusername/project-one",
    image: "images/project1.png"
  },
  {
    name: "Project Two",
    url: "https://github.com/yourusername/project-two",
    image: "images/project2.png"
  },
  {
    name: "Project Three",
    url: "https://github.com/yourusername/project-three",
    image: "images/project3.png"
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
