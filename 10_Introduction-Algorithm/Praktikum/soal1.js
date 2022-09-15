const bilanganPrima = (number) => {
  let counter = 0;
  for (index = 1; index <= number; index++) {
    if (number % index == 0) {
      counter++;
    }
  }
  counter === 2
    ? console.log(`${number} Bilangan Prima`)
    : console.log(`${number} Bukan Bilangan Prima`);
};

bilanganPrima(3);
bilanganPrima(7);
bilanganPrima(10);
