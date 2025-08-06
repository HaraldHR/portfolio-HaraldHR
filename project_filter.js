const projects = [
  {
    title: "Shapespeare LSTM",
    description:
      "A Pytorch LSTM trained on Shakespeare plays, improved with the use of BPE and Word2vec.",
    image: "project_images/shakespeare.jpg",
    link: "projects/LSTM.html",
    type: "ml",
  },
  {
    title: "Image Classification CNN",
    description:
      "A convolutional neural network for image classification, built from scratch using NumPy.",
    image: "project_images/cnnimage.jpg",
    link: "projects/CNN.html",
    type: "ml",
  },
  {
    title: "3D Adventure RPG in Unity",
    description: "A (not finished) Unity powered game.",
    image: "project_images/voxelrpg.jpg",
    link: "projects/VoxelRPG.html",
    type: "game",
  },
  {
    title: "Bar2Tender",
    description:
      "React website for cocktail recipes using the TheCocktailDB API.",
    image: "project_images/bar2tender.jpg",
    link: "projects/Bar2Tender.html",
    type: "web",
  },
  {
    title: "BeeWare Contribution (Toga)",
    description: "Contribution to the Beeware Toga repository.",
    image: "project_images/toga.jpg",
    link: "projects/Toga.html",
    type: "oss",
  },
  {
    title: "Arduino-Powered Game Controller",
    description:
      "Built two controllers using Arduino and a game using Processing.",
    image: "project_images/arduino.jpg",
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
