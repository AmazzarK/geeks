const container = document.getElementById('container');
console.log(container);

const firstUl = document.querySelectorAll('ul.list')[0];
firstUl.children[1].textContent = 'Richard';

const secondUl = document.querySelectorAll('ul.list')[1];
secondUl.removeChild(secondUl.children[1]);

const allUls = document.querySelectorAll('ul.list');
allUls.forEach(ul => {
  ul.children[0].textContent = 'Kaoutar';
});

allUls.forEach(ul => ul.classList.add('student_list'));

firstUl.classList.add('university', 'attendance');

container.style.backgroundColor = 'lightblue';
container.style.padding = '10px';

secondUl.querySelectorAll('li').forEach(li => {
  if (li.textContent === 'Dan') {
    li.style.display = 'none';
  }
});

firstUl.querySelectorAll('li').forEach(li => {
  if (li.textContent === 'Richard') {
    li.style.border = '2px solid black';
  }
});

document.body.style.fontSize = '18px';

if (container.style.backgroundColor === 'lightblue') {
  const users = [...document.querySelectorAll('ul.list li')]
    .map(li => li.textContent)
    .filter(name => name !== 'Dan');
  alert(`Hello ${users[0]} and ${users[1]}`);
}
