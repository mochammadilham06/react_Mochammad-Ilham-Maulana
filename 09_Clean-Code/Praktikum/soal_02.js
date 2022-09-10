class Kendaraan {
  constructor(totalRoda, kecepatanPerJam) {
    this.totalRoda = totalRoda;
    this.kecepatanPerJam = kecepatanPerJam;
  }
}

class Mobil extends Kendaraan {
  constructor(totalRoda, kecepatanPerJam) {
    super(totalRoda, kecepatanPerJam);
  }

  tambahKecepatan(kecepatanBaru) {
    this.kecepatanPerJam += kecepatanBaru;
  }

  berjalan() {
    this.kecepatanPerJam;
  }
}

let mobilCepat = new Mobil(4, 10);
mobilCepat.tambahKecepatan(15);
mobilCepat.tambahKecepatan(20);
mobilCepat.berjalan();
console.log(`Mobil Cepat = ${mobilCepat.kecepatanPerJam} Km/jam`);

let mobilLamban = new Mobil(4, 10);
mobilLamban.berjalan();
console.log(`Mobil Lambat = ${mobilLamban.kecepatanPerJam} Km/jam`);
