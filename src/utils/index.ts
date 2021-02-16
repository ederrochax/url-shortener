    /**
     * Retorna letras e numeros entre 10 e 5 caracteres
     */
    export const generateHash = ():String => {
      let shortenHash = "";
      let string = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

      let random = Math.floor(Math.random() * (10 - 5) + 5);
      for (var i = 0; i < random; i++) {
        shortenHash += string[Math.floor(Math.random() * string.length)];
      }
  
      return shortenHash;
    }

    export const incrementDaysInDate = (days: number):Date => {
        let date = new Date();
        date.setDate(date.getDate() + days);

        return date;
    }