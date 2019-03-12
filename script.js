// MODEL never communicates with VIEW, only with MANAGER
const model = {
  alphabet: ["A", "E", "I", "O", "U", "B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"],
  challenges: ["escape", "Hollywood", "empire", "trident", "frisbee"],
  sounds: {
    boing: "https://s3.amazonaws.com/freesoundeffects/mp3/mp3_7338.mp3",
    right: "https://s3.amazonaws.com/freesoundeffects/mp3/mp3_456472.mp3",
    winner: "https://s3.amazonaws.com/freesoundeffects/mp3/mp3_482986.mp3"

  }
};


// VIEW never communicates with MODEL, only with MANAGER
const view = {
  init: function() {
    this.alphabetKeys = document.querySelector('#alphabet-keyboard');
    this.letterblanks = document.querySelector('#letterspaces');
    this.ledge = document.querySelector('#top-of-ledge');
    this.renderAlphabet();
    this.renderChallenge();
    this.fingers = 8;
    this.renderFingers();
    this.alphabetKeys.addEventListener('click', this.checkGuess);
  },

  // Builds Alphabet keysboard
  renderAlphabet: function() {
    const arr = manager.getAlphabet();
    arr.map((letter, index) => {
      let htmlpattern = `<div class="letter" id="${letter}">${letter}</div>`;
      this.alphabetKeys.innerHTML += htmlpattern;
    });
  },

   // Builds blank spaces for challenge word
  renderChallenge: function() {
    let word = manager.getChallenge();
    let wordArr = word.toUpperCase().split('');
    wordArr.map((letter) => {
      let blank = `<div class="word-letter" data-value="${letter}"></div>`;
      this.letterblanks.innerHTML += blank;
    });
  },

  renderFingers: function() {
    for (let i = 0; i < this.fingers; i += 1) {
      let fingerHTML = `
        <div class="finger" id="finger${i}">
        <div class="fingernail"></div>
        </div>`;
     this.ledge.innerHTML += fingerHTML;
    }
  },

  checkGuess: function(e) {
    let match = false;
    this.wordletter = document.querySelectorAll('.word-letter');
    // correct guess then show letter(s)
    this.wordletter.forEach(letterDiv => {
      if (e.target.id === letterDiv.dataset.value) {
        letterDiv.innerHTML = e.target.id;
        match = true;
        manager.getRight()
      }
    });
    // incorrect guess remove finger from wall
    if (!match) {
      const ledgefingers = document.querySelector('.finger');
      ledgefingers.parentNode.removeChild(ledgefingers);
      manager.getBoing();
    }
  },

};

// MANAGER - always sits between MODEL and VIEW and delegates info and tasks
const manager = {
  init: () => view.init(),

  getAlphabet: () => model.alphabet,

  getChallenge: () => model.challenges[Math.floor(Math.random() * model.challenges.length)],

  getBoing: () => {
    console.log(model.sounds.boing);
    const fingerGone = new Audio(model.sounds.boing);
    fingerGone.play()
    fingerGone.volume = .2;
  },
  getRight: () => {
    const rightLetter = new Audio(model.sounds.right);
    rightLetter.play()
    rightLetter.volume = .2;
  },
  getWinner: () => {
    console.log(model.sounds.boing);
    const win = new Audio(model.sounds.winner);
    win.play()
    win.volume = .2;
  },

};


manager.init();
