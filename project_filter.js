const projects = [
  {
    title: "EA SEED Project: Hierarchical RL in Games",
    description:
      "A Unity project made for EA SEED, using RL and LLMs for better AI Agents.",
    image: "project_images/EA.jpg",
    link: null,
    types: ["ml", "game"],
    comingSoon: true,
  },
  {
    title: "Shapespeare LSTM",
    description:
      "A Pytorch LSTM trained on Shakespeare plays, improved with the use of BPE and Word2vec.",
    image: "project_images/shakespeare.jpg",
    link: "projects/LSTM.html",
    types: ["ml"],
  },
  {
    title: "Image Classification CNN",
    description:
      "A convolutional neural network for image classification, built from scratch using NumPy.",
    image: "project_images/cnnimage.jpg",
    link: "projects/CNN.html",
    types: ["ml"],
  },
  {
    title: "3D Adventure RPG in Unity",
    description: "A (not finished) Unity powered game.",
    image: "project_images/voxelrpg.jpg",
    link: "projects/VoxelRPG.html",
    types: ["game"],
  },
  {
    title: "Bar2Tender",
    description:
      "A React website for cocktail recipes using the TheCocktailDB API.",
    image: "project_images/bar2tender.jpg",
    link: "projects/Bar2Tender.html",
    types: ["web"],
  },
  {
    title: "BeeWare Contribution (Toga)",
    description: "Contribution to the Beeware Toga repository.",
    image: "project_images/toga.jpg",
    link: "projects/Toga.html",
    types: ["oss"],
  },
  {
    title: "Arduino-Powered Game Controller",
    description:
      "Two Arduino-powered controllers used for a game built with Processing.",
    image: "project_images/arduino.jpg",
    link: "projects/ArduinoController.html",
    types: ["embedded"],
  },
  {
    title: "Hungry Snakes",
    description: "My first object-oriented programming project.",
    image: "project_images/snake.jpg",
    link: "projects/HungrySnakes.html",
    types: ["game"],
  },
  {
    title: "Continous Integration Pipeline",
    description: "A basic CI pipeline to use with Github.",
    image: "project_images/CI.jpg",
    link: "projects/CIService.html",
    types: ["other"],
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
    const matchesFilter =
      activeFilters.length === 0 ||
      project.types.some((t) => activeFilters.includes(t));

    if (matchesFilter) {
      let card;

      if (project.link) {
        card = document.createElement("a");
        card.href = project.link;
      } else {
        card = document.createElement("div");
        card.classList.add("disabled-card");
      }

      card.classList.add("project-card");
      card.style.backgroundImage = `url('${project.image}')`;

      let innerHTML = `
        <div class="card-content">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
        </div>
      `;

      if (project.comingSoon) {
        innerHTML += `<div class="coming-soon-badge">Coming Soon</div>`;
      }

      card.innerHTML = innerHTML;
      container.appendChild(card);
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
