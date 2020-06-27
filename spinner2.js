let i = 0;

while (i !== 1600) {
  setTimeout(() => {
    process.stdout.write('\r|   ');
  }, 100 + i);
  
  setTimeout(() => {
    process.stdout.write('\r/   ');
  }, 300 + i);
  
  setTimeout(() => {
    process.stdout.write('\r-   ');
  }, 500 + i);
  
  setTimeout(() => {
    // Need to escape the backslash since it's a special character.
    process.stdout.write('\r\\   '); 
  }, 700 + i);

  i += 800;
}

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\n'); 
}, 1700);