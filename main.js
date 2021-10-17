let sliderImages = document.querySelectorAll(".slide"),
  arrowLeft = document.querySelector("#arrow-left"),
  arrowRight = document.querySelector("#arrow-right"),
  current = 0;

// Clear all images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

// Init slider
function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}

// Show prev
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}

// Show next
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}

// Left arrow click
arrowLeft.addEventListener("click", function () {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

// Right arrow click
arrowRight.addEventListener("click", function () {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();

const skills = [
  { skill: "CSS", progress: "60%", num: 60 },
  { skill: "JavaScript", progress: "40%", num: 40 },
  { skill: "Python", progress: "90%", num: 90 },
];

function clonar(skills) {
  var section = document.getElementById("skill_section");
  var box = document.getElementById("skill_box");

  console.log(skills.length);
  for (let i = 0; i < skills.length; i++) {
    var clon = box.cloneNode("skill_box");
    document.getElementById("circle").style.strokeDashoffset =
      440 - (440 * skills[i].num) / 100;
    document.getElementById("percentage").innerHTML = skills[i].progress;
    document.getElementById("text_progress").innerHTML = skills[i].skill;

    section.appendChild(clon);
  }
}
clonar(skills);
