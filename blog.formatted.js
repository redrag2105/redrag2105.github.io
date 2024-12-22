export function initiallizeBlog() {
  console.log("Blog initialized");
  function toggleViewDisplay(viewToHide, viewToShow) {
    viewToHide.style.display = "none";
    viewToShow.style.display = "block";
  }

  function toggleView() {
    const normalView = document.querySelector(".normal-view");
    const carousel = document.querySelector(".carousel");
    const viewToggleButton = document.querySelector(".view-toggle-btn");

    if (normalView.style.display === "none") {
      toggleViewDisplay(carousel, normalView);
      viewToggleButton.textContent = "Switch to Slider View";
    } else {
      toggleViewDisplay(normalView, carousel);
      viewToggleButton.textContent = "Switch to Normal View";
      if (!isCarouselViewPopulated) { populateCarouselViews(); }
    }
  }

  const viewToggleBtn = document.querySelector(".view-toggle-btn");
  viewToggleBtn.addEventListener("click", toggleView);

  let next = document.querySelector(".next");
  let prev = document.querySelector(".prev");

  next.addEventListener("click", function () {
    let items = document.querySelectorAll(".item");
    document.querySelector(".slide").appendChild(items[0]);
  });

  prev.addEventListener("click", function () {
    let items = document.querySelectorAll(".item");
    document.querySelector(".slide").prepend(items[items.length - 1]);
  });

  const projects = [
    {
      name: "Project 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum enim sunt nobis! Doloremque velit commodi laborum harum cum odio iste. Ex officiis eligendi debitis deleniti corrupti, placeat ullam dolore officia.",
      imageUrl: "assets/webp/page_preview.webp",
      iconUrl: "assets/webp/project1_icon.webp",
      githubLink: "https://github.com/redrag2105/project1",
      liveLink: "https://github.com/redrag2105/project1/",
    },
    {
      name: "Project 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum enim sunt nobis! Doloremque velit commodi laborum harum cum odio iste. Ex officiis eligendi debitis deleniti corrupti, placeat ullam dolore officia.",
      imageUrl: "https://i.ibb.co/jrRb11q/img2.jpg",
      iconUrl: "assets/webp/project1_icon.webp",
      githubLink: "https://github.com/redrag2105/project1",
      liveLink: "https://github.com/redrag2105/project1/",
    },
    {
      name: "Project 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum enim sunt nobis! Doloremque velit commodi laborum harum cum odio iste. Ex officiis eligendi debitis deleniti corrupti, placeat ullam dolore officia.",
      imageUrl: "https://i.ibb.co/NSwVv8D/img3.jpg",
      iconUrl: "assets/webp/project1_icon.webp",
      githubLink: "https://github.com/redrag2105/project1",
      liveLink: "https://github.com/redrag2105/project1/",
    },
    {
      name: "Project 4",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum enim sunt nobis! Doloremque velit commodi laborum harum cum odio iste. Ex officiis eligendi debitis deleniti corrupti, placeat ullam dolore officia.",
      imageUrl: "https://i.ibb.co/Bq4Q0M8/img4.jpg",
      iconUrl: "assets/webp/project1_icon.webp",
      githubLink: "https://github.com/redrag2105/project1",
      liveLink: "https://github.com/redrag2105/project1/",
    },
    {
      name: "Project 5",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum enim sunt nobis! Doloremque velit commodi laborum harum cum odio iste. Ex officiis eligendi debitis deleniti corrupti, placeat ullam dolore officia.",
      imageUrl: "https://i.ibb.co/jTQfmTq/img5.jpg",
      iconUrl: "assets/webp/project1_icon.webp",
      githubLink: "https://github.com/redrag2105/project1",
      liveLink: "https://github.com/redrag2105/project1/",
    },
    {
      name: "Project 6",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum enim sunt nobis! Doloremque velit commodi laborum harum cum odio iste. Ex officiis eligendi debitis deleniti corrupti, placeat ullam dolore officia.",
      imageUrl: "https://i.ibb.co/RNkk6L0/img6.jpg",
      iconUrl: "assets/webp/project1_icon.webp",
      githubLink: "https://github.com/redrag2105/project1",
      liveLink: "https://github.com/redrag2105/project1/",
    },
  ];

  function createProjectNormal(project) {
    return `
      <div data-aos="fade-up" class="project-box-wrapper">
        <div class="project-box">
          <div class="info-div">
            <div class="blog-content">
              <img src="${project.iconUrl}" alt="${project.name} website favicon" class="faviconforProject" loading="lazy" />
              <article class="ProjectHeading">${project.name}</article>
            </div>
            <p class="ProjectDescription">${project.description}</p>
            <div class="project-buttons">
              <a href="${project.githubLink}" target="_blank" class="github" aria-label="Visit ${project.name} on GitHub">
                <img src="assets/svg/github.svg" alt="github redirect button" loading="lazy" />
              </a>
              <a href="${project.liveLink}" target="_blank" class="cta" aria-label="Visit ${project.name} Live">
                <span>Live view</span>
                <svg viewBox="0 0 13 10" height="10px" width="15px">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </a>
            </div>
          </div>
          <div class="image-div">
            <img src="${project.imageUrl}" alt="${project.name} website preview image" loading="lazy" />
          </div>
        </div>
      </div>
    `;
  }

  function createProjectCarousel(project) {
    return `
      <div class="item" style="background-image: url(${project.imageUrl});">
        <div class="content">
          <div class="name">${project.name}</div>
          <div class="des">${project.description}</div>
          <div class="project-buttons">
            <a href="${project.githubLink}" target="_blank" class="github" aria-label="Visit ${project.name} on GitHub">
              <img src="assets/svg/github.svg" alt="github redirect button" loading="lazy" />
            </a>
            <a href="${project.liveLink}" target="_blank" class="cta" aria-label="Visit ${project.name} Live">
              <span>Live view</span>
              <svg viewBox="0 0 13 10" height="10px" width="15px">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>
    `;
  }

  let isNormalViewPopulated = false;
  let isCarouselViewPopulated = false;
  function populateNormalViews() {
    if (isNormalViewPopulated) return;
    isNormalViewPopulated = true;
    const normalViewDiv = document.querySelector(
      ".normal-view .project-boxes-div"
    );
    const fragment = document.createDocumentFragment();

    projects.forEach((project) => {
      const projectHTML = createProjectNormal(project);
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = projectHTML;
      fragment.appendChild(tempDiv.firstElementChild);
    });

    normalViewDiv.innerHTML = "";
    normalViewDiv.appendChild(fragment);
  }

  function populateCarouselViews() {
    isCarouselViewPopulated = true;
    const carouselViewDiv = document.querySelector(".carousel .slide");
    const fragment = document.createDocumentFragment();

    projects.forEach((project) => {
      const projectHTML = createProjectCarousel(project);
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = projectHTML;
      fragment.appendChild(tempDiv.firstElementChild);
    });

    carouselViewDiv.innerHTML = "";
    carouselViewDiv.appendChild(fragment);
  }
  populateNormalViews();
}
