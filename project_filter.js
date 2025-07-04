const projects = [
  {
    title: "Shapespeare LSTM",
    description:
      "An Pytorch LSTM trained on Shakespeare plays, improved with the use of BPE and Word2vec",
    image: "project_images/project1.jpg",
    link: "projects/project_LSTM.html",
    type: "ml",
  },
  {
    title: "Vanilla RNN built from scratch",
    description: "A vanilla RNN built from scratch using only Numpy",
    image: "project_images/project2.jpg",
    link: "project2.html",
    type: "ml",
  },
  {
    title: "3D Adventure RPG in Unity",
    description: "A (not finished) Unity powered game",
    image: "project_images/project3.jpg",
    link: "project3.html",
    type: "game",
  },
  {
    title: "Bar2Tender",
    description:
      "React website for cocktail recipes using the TheCocktailDB API.",
    image: "project_images/project5.jpg",
    link: "project5.html",
    type: "web",
  },
  {
    title: "Open Source Python Contribution",
    description: "Contribution to the Beeware Toga repository",
    image: "project_images/project6.jpg",
    link: "project6.html",
    type: "oss",
  },
  {
    title: "Arduino-Powered Game Controller",
    description:
      "Built two controllers using Arduino and a game using Processing.",
    image: "project_images/project4.jpg",
    link: "project4.html",
    type: "embedded",
  },
];

filterProjects([]); // When first opened, the website doesn't render any projects unless this is here.

const checkboxes = document.querySelectorAll(".filter-checkbox");
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    const selectedFilters = Array.from(checkboxes)
      .filter((cb) => cb.checked)
      .map((cb) => cb.value);

    console.log("Selected filters:", selectedFilters);
    filterProjects(selectedFilters);
  });
});

function filterProjects(activeFilters) {
  const container = document.getElementById("projectGrid");
  container.innerHTML = ""; // Clear existing cards

  projects.forEach((project) => {
    if (activeFilters.length === 0 || activeFilters.includes(project.type)) {
      // Create the <a> element that will wrap the entire card
      const link = document.createElement("a");
      link.href = project.link;
      link.className = "project-card"; // Add your card styling here
      link.style.backgroundImage = `url('${project.image}')`;

      // Add the inner content inside the <a>
      link.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
      `;

      // Append the <a> (card) to the container
      container.appendChild(link);
    }
  });
}

// On page load, sync filtering with checked checkboxes
window.addEventListener("load", () => {
  const checkboxes = document.querySelectorAll(".filter-checkbox");
  const selectedFilters = Array.from(checkboxes)
    .filter((cb) => cb.checked)
    .map((cb) => cb.value);

  filterProjects(selectedFilters);
});
