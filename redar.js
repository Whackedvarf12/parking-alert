// Entity class: Redar
class Redar {
    #redarID;               // private int
    #trenutnaLokacija;      // private string
  
    constructor(redarID) {
      this.#redarID = redarID;
      this.#trenutnaLokacija = ""; // default to empty location

        let redarji = [];

        const cookies = document.cookie.split("; ");
        for (let i = 0; i < cookies.length; i++) {
            const [key, value] = cookies[i].split("=");
            if (key === "Redarji") {
                redarji = JSON.parse(decodeURIComponent(value));
            }
        }

        redarji = redarji.concat([{id: redarID, longitute: 0, latitude: 0, expected: {longitude: 0, latitude: 0}}]);

        const expires = new Date();
        expires.setFullYear(expires.getFullYear() + 100);
        document.cookie = "Redarji" + "=" + encodeURIComponent(JSON.stringify(redarji)) + "; expires=" + expires.toUTCString() + "; path=/";
    }
  
    // Method to enter a new location (initial input)
    vnesiLokacijo(latitude, longitude) {
      let expected = new PredpostavljenaLokacijaRedarja(this.#trenutnaLokacija, longitude, latitude);
      this.#trenutnaLokacija = `Lat: ${latitude}, Lon: ${longitude}`;
      console.log(`Lokacija vnesena: ${this.#trenutnaLokacija}`);

        let redarji = [];

        const cookies = document.cookie.split("; ");
        for (let i = 0; i < cookies.length; i++) {
            const [key, value] = cookies[i].split("=");
            if (key === "Redarji") {
                redarji = JSON.parse(decodeURIComponent(value));
            }
        }

        redarji = redarji.map((x) => x.id === this.#redarID ? (x.longitude = longitude, x.latitude = latitude, x.expected = expected.predpostaviLokacijo()) : x)

        const expires = new Date();
        expires.setFullYear(expires.getFullYear() + 100);
        document.cookie = "Redarji" + "=" + encodeURIComponent(JSON.stringify(redarji)) + "; expires=" + expires.toUTCString() + "; path=/";
    }
  
    // Method to update the existing location
    posodobiLokacijo(latitude, longitude) {
      let expected = new PredpostavljenaLokacijaRedarja(this.#trenutnaLokacija, longitude, latitude);
      this.#trenutnaLokacija = `Lat: ${latitude}, Lon: ${longitude}`;
      console.log(`Lokacija posodobljena: ${this.#trenutnaLokacija}`);

        let redarji = [];

        const cookies = document.cookie.split("; ");
        for (let i = 0; i < cookies.length; i++) {
            const [key, value] = cookies[i].split("=");
            if (key === "Redarji") {
                redarji = JSON.parse(decodeURIComponent(value));
            }
        }

        redarji = redarji.map((x) => x.id === this.#redarID ? (x.longitude = longitude, x.latitude = latitude, x.expected = expected.predpostaviLokacijo()) : x)

        const expires = new Date();
        expires.setFullYear(expires.getFullYear() + 100);
        document.cookie = "Redarji" + "=" + encodeURIComponent(JSON.stringify(redarji)) + "; expires=" + expires.toUTCString() + "; path=/";
    }
  
    // Optional getter to access redarID or location outside class
    getRedarID() {
      return this.#redarID;
    }
  
    getTrenutnaLokacija() {
      return this.#trenutnaLokacija;
    }

}