function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
  const rankedList = document.querySelectorAll(".ranked-list li")
  for (let i = 0; i < rankedList.length; i++) {
    var origin = parseInt(rankedList[i].innerHTML);
    rankedList[i].innerHTML = (origin + n).toString();
  }
}

function deepestChild() {
  var selector = ["div#grand-node"]

  while (document.querySelector(selector.join(" ")).innerHTML.indexOf("div") !== -1) {
    selector.push("div");
    console.log(selector.join(" "));
  }
  return document.querySelector(selector.join(" "))
}
