const toggles = document.querySelectorAll(".toggle");
const good = document.querySelector("#good");
const cheap = document.querySelector("#cheap");
const fast = document.querySelector("#fast");

toggles.forEach((toggle) =>
  toggle.addEventListener("change", (event) => doTheTrick(event.target))
);

function doTheTrick(theClikedOne) {
  if (good.checked && cheap.checked && fast.checked) {
    if (good === theClikedOne) {
      fast.checked = false;
    }
    if (cheap === theClikedOne) {
      good.checked = false;
    }

    if (fast === theClikedOne) {
      cheap.checked = false;
    }
  }
}
