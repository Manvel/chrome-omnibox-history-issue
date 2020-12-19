document.querySelector("button").addEventListener("click", () =>
{
  chrome.browsingData.removeHistory({}, () =>
  {
    document.querySelector("span").textContent = "History is deleted";
  });
});