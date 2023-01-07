const xmasTree = document.querySelector(".tree");


function christmasTree(height) {
  const starIcon = document.createElement("p");
  starIcon.innerHTML = "⭐";
  xmasTree.appendChild(starIcon);
  const star = ["*"];
  for (var i = 0; i < height; i++) {
    const paragraph = document.createElement("p");
    let starString = star.toString();
    const newStar = starString.replaceAll(",", "");
    paragraph.innerHTML = newStar;
    xmasTree.appendChild(paragraph);
    star.push("**");
  }
}

christmasTree(3);
christmasTree(5);