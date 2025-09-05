const form = document.getElementById('libform');
const storySpan = document.getElementById('story');
const shuffleBtn = document.getElementById('shuffle-button');

let userInputs = {};
let storyTemplates = [
  ({ noun, adjective, person, verb, place }) =>
    `${person} took a ${adjective} ${noun} and decided to ${verb} it all the way to ${place}.`,
  ({ noun, adjective, person, verb, place }) =>
    `In ${place}, ${person} found a ${adjective} ${noun} and couldn't resist the urge to ${verb}.`,
  ({ noun, adjective, person, verb, place }) =>
    `Why did ${person} ${verb} the ${adjective} ${noun} in ${place}? No one knows.`,
  ({ noun, adjective, person, verb, place }) =>
    `${person} was walking through ${place} when a ${adjective} ${noun} appeared and said, "Let's ${verb}!"`
];

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const noun = document.getElementById('noun').value.trim();
  const adjective = document.getElementById('adjective').value.trim();
  const person = document.getElementById('person').value.trim();
  const verb = document.getElementById('verb').value.trim();
  const place = document.getElementById('place').value.trim();

  if (!noun || !adjective || !person || !verb || !place) {
    alert('Please fill in all fields.');
    return;
  }

  userInputs = { noun, adjective, person, verb, place };
  displayRandomStory();
});

shuffleBtn.addEventListener('click', function () {
  if (Object.keys(userInputs).length === 0) {
    alert('Please fill out the form first.');
    return;
  }
  displayRandomStory();
});

function displayRandomStory() {
  const randomIndex = Math.floor(Math.random() * storyTemplates.length);
  const story = storyTemplates[randomIndex](userInputs);
  storySpan.textContent = story;
}