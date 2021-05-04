const textAreaElement = document.querySelector("#textarea");
const tagsElement = document.querySelector("#tags");

textAreaElement.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    const textAreaValue = textAreaElement.value;
    let allChoices = textAreaValue.split(",");
    allChoices = allChoices.map((choice) => choice.trim());
    console.log(allChoices);

    const myChoiceIndex = Math.floor(Math.random() * allChoices.length);

    allChoices.forEach((choice, index) => {
      const newTag = document.createElement("div");
      newTag.classList.add("tag");
      if (index === myChoiceIndex) {
        setTimeout(function () {
          newTag.classList.add("highlight");
        }, 2000);
      }
      newTag.innerText = choice;

      tagsElement.appendChild(newTag);
    });
  }
});
