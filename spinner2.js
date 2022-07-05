const spins = ['|', '/', '-', '\\'];
let time = 100;
for (let i = 0; i < 9; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${spins[(i % 4)]}   `);
  }, time);
  time += 200;
}