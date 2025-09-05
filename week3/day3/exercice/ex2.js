const form = document.querySelector('form');
console.log(form);

const inputByIdFname = document.getElementById('fname');
const inputByIdLname = document.getElementById('lname');
console.log(inputByIdFname, inputByIdLname);

const inputByNameFname = document.getElementsByName('firstname')[0];
const inputByNameLname = document.getElementsByName('lastname')[0];
console.log(inputByNameFname, inputByNameLname);

form.addEventListener('submit', function(event) {
  event.preventDefault(); 
  const firstName = inputByIdFname.value.trim();
  const lastName = inputByIdLname.value.trim();

  if (firstName === '' || lastName === '') {
    alert('Please fill in both fields.');
    return;
  }

  const ul = document.querySelector('.usersAnswer');
  ul.innerHTML = ''; 

  const li1 = document.createElement('li');
  li1.textContent = firstName;

  const li2 = document.createElement('li');
  li2.textContent = lastName;

  ul.appendChild(li1);
  ul.appendChild(li2);
});