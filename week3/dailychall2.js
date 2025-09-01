
let stars = '';
for (let i = 1; i <= 6; i++) {
  stars += '* ';
  console.log(stars.trim());
}

for (let i = 1; i <= 6; i++) {
  let line = '';
  for (let j = 1; j <= i; j++) {
    line += '* ';
  }
  console.log(line.trim());
}
