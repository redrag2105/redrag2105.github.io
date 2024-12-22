/* 

 ███████████            ██████████                               
░░███░░░░░███          ░░███░░░░███                              
 ░███    ░███   ██████  ░███   ░░███ ████████   ██████    ███████
 ░██████████   ███░░███ ░███    ░███░░███░░███ ░░░░░███  ███░░███
 ░███░░░░░███ ░███████  ░███    ░███ ░███ ░░░   ███████ ░███ ░███
 ░███    ░███ ░███░░░   ░███    ███  ░███      ███░░███ ░███ ░███
 █████   █████░░██████  ██████████   █████    ░░████████░░███████
░░░░░   ░░░░░  ░░░░░░  ░░░░░░░░░░   ░░░░░      ░░░░░░░░  ░░░░░███
                                                         ███ ░███
                                                        ░░██████ 
                                                         ░░░░░░  */
<<<<<<< HEAD

import { initiallizeBlog } from "./blog.js";

// ===================== 1. Settings =====================
function toggleClasses(elements, classList) {
  elements.forEach((el, index) => {
    el.classList.toggle(classList[index]);
  });
}

function settingtoggle() {
  toggleClasses(
    [
      document.getElementById("setting-container"),
      document.getElementById("visualmodetogglebuttoncontainer"),
      document.getElementById("soundtogglebuttoncontainer"),
      document.getElementById("cursortogglebuttoncontainer"),
    ],
    ["settingactivate", "visualmodeshow", "soundmodeshow", "cursormodeshow"]
  );
}
document.getElementById("switchforsetting").addEventListener("click", settingtoggle);

function playpause() {
  const switchForSound = document.getElementById("switchforsound");
  switchForSound.checked ? audio.play() : audio.pause();
}
document.getElementById("switchforsound").addEventListener("click", playpause);

const cursorInner = document.getElementById("cursor-inner");
const cursorOuter = document.getElementById("cursor-outer");
function cursortoggle() {
  const displayStyle = document.getElementById("switchforcursor").checked
    ? "none"
    : "block";
  cursorInner.style.display = displayStyle;
  cursorOuter.style.display = displayStyle;
}
document.getElementById("switchforcursor").addEventListener("click", cursortoggle);

function visualmode() {
  document.body.classList.toggle("light-mode");
  document
    .querySelectorAll(".needtobeinvert")
    .forEach((e) => e.classList.toggle("invertapplied"));
}
document.getElementById("switchforvisualmode").addEventListener("click", visualmode);

// ===================== 2. Menu =====================
function hamburgerMenu() {
  toggleClasses(
    [
      document.body,
      document.getElementById("mobiletogglemenu"),
      document.getElementById("burger-bar1"),
      document.getElementById("burger-bar2"),
      document.getElementById("burger-bar3"),
    ],
    [
      "stopscrolling",
      "show-toggle-menu",
      "hamburger-animation1",
      "hamburger-animation2",
      "hamburger-animation3",
    ]
  );
}
document.getElementById("hamburger-button").addEventListener("click", hamburgerMenu);

function hidemenubyli() {
  document.body.classList.toggle("stopscrolling");
  const menu = document.getElementById("mobiletogglemenu");
  if (menu) menu.classList.remove("show-toggle-menu");
  ["burger-bar1", "burger-bar2", "burger-bar3"].forEach((id, index) => {
    const burger = document.getElementById(id);
    if (burger) burger.classList.remove(`hamburger-animation${index + 1}`);
  });
}
document.querySelectorAll('.mobile-navbar-tabs-li').forEach(item => {
  item.addEventListener("click", hidemenubyli);
});

// ===================== 1. Preloader =====================
const audio = document.getElementById("audioPlayer"),
      loader = document.getElementById("preloader");

window.addEventListener("load", () => {
  setTimeout(() => {
    loader.style.display = "none";
    cursorInner.style.display = "block";
    cursorOuter.style.display = "block";
    document.body.classList.add("loaded");
    document.querySelector(".testfool").classList.add("magictime", "foolishIn");
    document.querySelector(".hey").classList.add("popup");
  }, 5);
});


// ===================== 4. Highlight Section =====================
let isAutoScrolling = false;
const sections = document.querySelectorAll("section, header");
const navItems = [
  ...document.querySelectorAll(".navbar-tabs-ul li"),
  ...document.querySelectorAll(".mobile-navbar-tabs-ul li"),
];
let lastScrollY = 0;
window.addEventListener("scroll", () => {
  if (isAutoScrolling) return;
  const currentScrollY = window.scrollY;
  if (Math.abs(currentScrollY - lastScrollY) > 50) {
    lastScrollY = currentScrollY;
    updateActiveSection();
  }
});

function updateActiveSection() {
  let activeSection = "";

  if (window.scrollY < 200) {
    activeSection = "home";
  } else {
    sections.forEach((section) => {
      if (window.scrollY >= section.offsetTop - 200) {
        activeSection = section.id;
      }
    });
  }
  navItems.forEach((li) => {
    const isActive = li.classList.contains(activeSection);
    li.classList.toggle("activeThistab", isActive);
    li.classList.toggle("activeThismobiletab", isActive);
  });
}

navItems.forEach((li) => {
  const link = li.querySelector("a");
  link.addEventListener("click", () => {
    isAutoScrolling = true;
    setTimeout(() => {
      isAutoScrolling = false;
      updateActiveSection();
    }, 577);
  });
});

console.log(
  "%c Designed & Developed by ReDrag ",
  "background-image: linear-gradient(90deg,#8000ff,#6bc5f8); color: white;font-weight:900;font-size:1rem; padding:20px;"
);

// ===================== 5. Back to Top=====================
const mybutton = document.getElementById("backtotopbutton");
function toggleScrollButton() {
  mybutton.style.display = window.scrollY > 400 ? "block" : "none";
}
function scrolltoTop() {
  window.scrollTo({ top: 0 });
}
window.addEventListener("scroll", toggleScrollButton);
mybutton.addEventListener("click", scrolltoTop);

// ===================== 1. Right Click Prohibited =====================
document.addEventListener(
  "contextmenu",
  (e) => {
    if (e.target.nodeName === "IMG") e.preventDefault();
  },
  false
);

// ===================== 6. Skills & Tools =====================
const skillLogos = [
  { icon: "./assets/svg/skills/file-type-html.svg", text: "HTML<br>✅" },
  { icon: "./assets/svg/skills/css-color.svg", text: "CSS<br>✅" },
  { icon: "./assets/svg/skills/javascript-fill.svg", text: "Javascript<br>✅" },
  { icon: "./assets/svg/skills/react-dark.svg", text: "React<br>✅" },
  { icon: "./assets/svg/skills/sass.svg", text: "Sass<br>✅" },
  {
    icon: "./assets/svg/skills/styledcomponents.svg",
    text: "Styled<br>Components<br>✅",
  },
  { icon: "./assets/svg/skills/nodejs-dark.svg", text: "Node.js<br>🌱" },
  { icon: "./assets/svg/skills/wordpress-icon.svg", text: "Wordpress<br>✅" },
  { icon: "./assets/svg/skills/npm-wordmark.svg", text: "npm<br>✅" },
];

const toolLogos = [
  { icon: "./assets/svg/tools/git.svg", text: "Git<br>✅" },
  { icon: "./assets/svg/tools/docker.svg", text: "Docker<br>🌱" },
  { icon: "./assets/svg/tools/figma.svg", text: "Figma<br>✅" },
  { icon: "./assets/svg/tools/ai.svg", text: "Adobe<br>Illustrator<br>✅" },
  { icon: "./assets/svg/tools/intellij.svg", text: "IntelliJ IDEA<br>✅" },
  { icon: "./assets/svg/tools/ubuntu.svg", text: "Ubuntu<br>✅" },
  { icon: "./assets/svg/tools/premiere.svg", text: "Adobe<br>Premiere<br>✅" },
  { icon: "./assets/svg/tools/notion.svg", text: "Notion<br>✅" },
  { icon: "./assets/svg/tools/slack.svg", text: "Slack<br>✅" },
];

let slideCounter = 1;

const createSkillSlide = (logos) => {
  const slide = document.createElement("div");
  slide.className = "logos-slide";
  slide.id = `logos-slide-${slideCounter++}`;
  slide.innerHTML = logos
    .map(
      (logo) => `
    <div class="skill-box">
      <div class="skill-border">
        <div class="skill-img">
          <img class="skill-icon" src="${logo.icon}" alt="${logo.text.replace(
        /<.*?>/g,
        ""
      )}">
        </div>
        <div class="skill-text-div">
          <p class="skill-txt skill-txt-head">${logo.text}</p>
        </div>
      </div>
    </div>
  `
    )
    .join("");
  return slide;
};

const containers = document.querySelectorAll(".skill-logos");
containers.forEach((container) => {
  const isToolContainer = container.id === "tool-logos";
  const logos = isToolContainer ? toolLogos : skillLogos;
  const slide = createSkillSlide(logos);
  container.appendChild(slide);

  const clonedSlide = slide.cloneNode(true);
  clonedSlide.id = `logos-slide-${slideCounter++}`;
  container.appendChild(clonedSlide);
});


// ===================== 7. Jello Animation =====================
document.querySelectorAll(".jello-text").forEach((textElement) => {
  const text = textElement.textContent;
  textElement.innerHTML = [...text]
    .map((char) =>
      char === " "
        ? `<p class="jello space">&nbsp;</p>`
        : `<p class="jello">${char}</p>`
    )
    .join("");
});


// ===================== 8. Cursor =====================
let lastMove = 0;
document.addEventListener("mousemove", function (e) {
  const now = Date.now();
  if (now - lastMove < 16) return;
  lastMove = now;

  const posX = e.clientX;
  const posY = e.clientY;

  cursorInner.style.left = `${posX}px`;
  cursorInner.style.top = `${posY}px`;
  cursorOuter.animate(
    {
      left: `${posX}px`,
      top: `${posY}px`,
    },
    { duration: 130, fill: "forwards" }
  );
});

document.body.addEventListener(
  "mouseenter",
  (e) => {
    if (e.target.matches("a, label, button")) {
      cursorInner.classList.add("hover");
      cursorOuter.classList.add("hover");
    }
  },
  true
);

document.body.addEventListener(
  "mouseleave",
  (e) => {
    if (e.target.matches("a, label, button")) {
      cursorInner.classList.remove("hover");
      cursorOuter.classList.remove("hover");
    }
  },
  true
);

// ===================== 9. Blog =====================
initiallizeBlog();
=======
function settingtoggle() {
  document
    .getElementById("setting-container")
    .classList.toggle("settingactivate"),
    document
      .getElementById("visualmodetogglebuttoncontainer")
      .classList.toggle("visualmodeshow"),
    document
      .getElementById("soundtogglebuttoncontainer")
      .classList.toggle("soundmodeshow");
}
function playpause() {
  0 == document.getElementById("switchforsound").checked
    ? audio.pause()
    : audio.play();
}
function visualmode() {
  document.body.classList.toggle("light-mode"),
    document.querySelectorAll(".needtobeinvert").forEach(function (e) {
      e.classList.toggle("invertapplied");
    });
}
function hamburgerMenu() {
  document.body.classList.toggle("stopscrolling"),
    document
      .getElementById("mobiletogglemenu")
      .classList.toggle("show-toggle-menu"),
    document
      .getElementById("burger-bar1")
      .classList.toggle("hamburger-animation1"),
    document
      .getElementById("burger-bar2")
      .classList.toggle("hamburger-animation2"),
    document
      .getElementById("burger-bar3")
      .classList.toggle("hamburger-animation3");
}
function hidemenubyli() {
  document.body.classList.toggle("stopscrolling"),
    document
      .getElementById("mobiletogglemenu")
      .classList.remove("show-toggle-menu"),
    document
      .getElementById("burger-bar1")
      .classList.remove("hamburger-animation1"),
    document
      .getElementById("burger-bar2")
      .classList.remove("hamburger-animation2"),
    document
      .getElementById("burger-bar3")
      .classList.remove("hamburger-animation3");
}
function scrollFunction() {
  document.body.scrollTop > 400 || document.documentElement.scrollTop > 400
    ? (mybutton.style.display = "block")
    : (mybutton.style.display = "none");
}

function scrolltoTopfunction() {
  (document.body.scrollTop = 0), (document.documentElement.scrollTop = 0);
}

var audio = document.getElementById("audioPlayer"),
    loader = document.getElementById("preloader");

window.addEventListener("load", function () {
    setTimeout(function () {
    loader.style.display = "none"; 
    document.body.classList.add('loaded');
    document.querySelector(".hey").classList.add("popup"); 
    }, 300); 
});


// window.addEventListener("load", function () {
//   var script = document.createElement("script");
//   script.src = "https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js";

//   script.onload = function () {
//     var bmc = document.getElementById("bmc-wbtn");
//     if (bmc) {
//       bmc.style.zIndex = -999;
//       document.body.classList.add('stopscrolling');

//       setTimeout(function () {
        
//         bmc.style.zIndex = 999;
//         loader.style.display = "none";
//         document.body.classList.remove('stopscrolling');
//         document.body.classList.add('loaded');
//         document.querySelector(".hey").classList.add("popup");
//       }, 550);
//     }
//   };

//   document.body.appendChild(script);
// });


let emptyArea = document.getElementById("emptyarea"),
  mobileTogglemenu = document.getElementById("mobiletogglemenu");
const sections = document.querySelectorAll("section"),
  navLi = document.querySelectorAll(".navbar .navbar-tabs .navbar-tabs-ul li"),
  mobilenavLi = document.querySelectorAll(
    ".mobiletogglemenu .mobile-navbar-tabs-ul li"
  );


window.addEventListener("scroll", () => {
  let e = "";
  sections.forEach((t) => {
    let o = t.offsetTop;
    t.clientHeight, pageYOffset >= o - 200 && (e = t.getAttribute("id"));
  }),
    mobilenavLi.forEach((t) => {
      t.classList.remove("activeThismobiletab"),
        t.classList.contains(e) && t.classList.add("activeThismobiletab");
    }),
    navLi.forEach((t) => {
      t.classList.remove("activeThistab"),
        t.classList.contains(e) && t.classList.add("activeThistab");
    });
}),

  console.log(
    "%c Designed and Developed by ReDrag ",
    "background-image: linear-gradient(90deg,#8000ff,#6bc5f8); color: white;font-weight:900;font-size:1rem; padding:20px;"
  );


let mybutton = document.getElementById("backtotopbutton");
(window.onscroll = function () {
  scrollFunction();
}),
  document.addEventListener(
    "contextmenu",
    function (e) {
      "IMG" === e.target.nodeName && e.preventDefault();
    },
    !1
  );


let Pupils = document.getElementsByClassName("footer-pupil"),
  pupilsArr = Array.from(Pupils),
  pupilStartPoint = -10,
  pupilRangeX = 20,
  pupilRangeY = 15,
  mouseXStartPoint = 0,
  mouseXEndPoint = window.innerWidth,
  currentXPosition = 0,
  fracXValue = 0,
  mouseYEndPoint = window.innerHeight,
  currentYPosition = 0,
  fracYValue = 0,
  mouseXRange = mouseXEndPoint - mouseXStartPoint;


const mouseMove = (e) => {
    (fracXValue =
      (currentXPosition = e.clientX - mouseXStartPoint) / mouseXRange),
      (fracYValue = (currentYPosition = e.clientY) / mouseYEndPoint);
    let t = pupilStartPoint + fracXValue * pupilRangeX,
      o = pupilStartPoint + fracYValue * pupilRangeY;
    pupilsArr.forEach((e) => {
      e.style.transform = `translate(${t}px, ${o}px)`;
    });
  },

  windowResize = (e) => {
    (mouseXEndPoint = window.innerWidth),
      (mouseYEndPoint = window.innerHeight),
      (mouseXRange = mouseXEndPoint - mouseXStartPoint);
  };


window.addEventListener("mousemove", mouseMove),
window.addEventListener("resize", windowResize);
>>>>>>> c8253af7cca21e228e82405509b3e9bba37ad73b
