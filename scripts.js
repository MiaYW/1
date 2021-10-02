console.log("To infinity and beyond.");
// write your JavaScript here
var button = document.getElementById("button");
var input = document.getElementById("textarea");
var comment = document.getElementById("comment");
button.addEventListener("click", function () {
  comment.innerHTML = "you said it was: " + input.value + "!";
  input.value = "";
});
