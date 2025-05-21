class PredpostavljenaLokacijaRedarja {
    #lokacija;
    #longituda;
    #latituda;
  
    constructor(lokacija, longituda, latituda) {
      this.#lokacija = lokacija;
      this.#longituda = longituda;
      this.#latituda = latituda;
    }
  
    //vrne {longitutde, latitude}
    predpostaviLokacijo() {

      let match = str.match(/Lat:\s*([-+]?\d*\.?\d+)\s*Lon:\s*([-+]?\d*\.?\d+)/);
      let latitude= parseFloat(match[1]);
      let longitude= parseFloat(match[2]);

      // Calculate distance
    let distance = Math.sqrt(Math.pow(this.#longituda- longitude, 2) + Math.pow(this.#latituda - latitude, 2));

    // Calculate direction (angle)
    let angle = Math.atan2(this.#latituda - latitude, this.#longituda - longitude);

    // Estimate next location by projecting forward
    let estimatedX = this.#longituda + distance * Math.cos(angle);
    let estimatedY = this.#latituda + distance * Math.sin(angle);

    
      // Placeholder logic – you can define the real behavior here
      console.log(`Lokacija redarja je predpostavljena kot: ${this.#lokacija} (${this.#latituda}, ${this.#longituda})`);
      return { longitutde: estimatedX, latitude: estimatedY };
    }
  
    // Optional: Getters and setters if you need access outside the class
    get lokacija() {
      return this.#lokacija;
    }
  
    set lokacija(value) {
      this.#lokacija = value;
    }
  
    get longituda() {
      return this.#longituda;
    }
  
    set longituda(value) {
      this.#longituda = value;
    }
  
    get latituda() {
      return this.#latituda;
    }
  
    set latituda(value) {
      this.#latituda = value;
    }
  }
  