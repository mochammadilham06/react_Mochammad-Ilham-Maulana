const button = (Number) => {
  let counter = 0;
  for (index = 1; index <= Number; index++) {
    if (Number % index == 0) {
      counter++;
    }
  }
  counter % 2 == 0 ? console.log("Lampu Mati") : console.log("Lampu Menyala");
};

button(5); //Output Lamput Mati
button(4); //Output Lampu Menyala
