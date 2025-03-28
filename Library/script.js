class Media {
    constructor (title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [] ;
    }

    get title() {
        return this._title;
      }
    
    get isCheckedOut() {
        return this._isCheckedOut;
      }
    
    get ratings() {
        return this._ratings
      }

    set isCheckedOut(value) {
        this._isCheckedOut = value;
    }

    toggleCheckOutStatus() {
        this.isCheckedOut = !this.isCheckedOut;  
    }

    getAverageRating() {
        const sum = this.ratings.reduce((acc, curr) => acc + curr);
        const average = sum / this.ratings.length;
        return average;
      }

    addRating(rating) {
        if (rating >= 1 && rating <= 5) {
          this._ratings.push(rating);
        } else {
          console.log('Rating fuera de rango. Solo se permiten números del 1 al 5.');
        }
    }
  };

  class Book extends Media {
    constructor (author, title, pages) {
      super (title);
      this._author = author;
      this._pages = pages;
    }

    get author() {
        return this._author;
      }
  
      get pages() {
        return this._pages;
      }
  };

  class Movie extends Media {
    constructor (director, title, runTime) {
      super (title);
      this._director = director;
      this._runTime = runTime;
    }

    get director() {
        return this._director;
      }
  
      get runTime() {
        return this._runTime;
      }
  };

  class CD extends Media {
    constructor (artist, title, songs) {
      super (title);
      this._artist = artist;
      this._songs = songs;
    }

    get artist() {
        return this._artist;
      }
  
      get songs() {
        return this._songs;
      }

      shuffle() {
        const shuffled = this._songs.slice();
        shuffled.sort(() => Math.random() - 0.5);
        return shuffled;
      }
  };

  class Catalog {
    constructor () {
      this._items = [];
    }

    get items() {
      return this._items;
    }

    addItem(mediaItem) {
      this._items.push(mediaItem);
    }
  };

  const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);

  historyOfEverything.toggleCheckOutStatus();
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);

  const speed = new Movie('Jan de Bont', 'Speed', 116);
  
  speed.toggleCheckOutStatus();
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);

  const myCatalog = new Catalog();
  const book1 = new Book('George Orwell', '1984', 328);
  const movie1 = new Movie('Christopher Nolan', 'Inception', 148);
  
  myCatalog.addItem(book1);
  myCatalog.addItem(movie1);

  console.log(myCatalog.items);
