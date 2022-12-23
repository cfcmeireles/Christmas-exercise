const xmasTree = document.querySelector(".tree");

function christmasTree(height) {
  const star = ["*"];
  for (var i = 0; i < height; i++) {
    const paragraph = document.createElement("p");
    let starString = star.toString();
    const newStar = starString.replaceAll(",", "");
    paragraph.innerHTML = newStar;
    xmasTree.appendChild(paragraph);
    star.push("**");
  }
  if (height > 4) {
    const secondTree = document.querySelector(".tree p:nth-child(4)");
    secondTree.insertAdjacentHTML("beforebegin", "... and a Happy New Year! 🎉");
  }
}

christmasTree(3);
christmasTree(5);
