let up = document.querySelector("#first");
window.onscroll = function () {
  if (window.scrollY >= 2666) {
    up.style.display = "flex";
  } else up.style.display = "none";
};
up.onclick = function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
