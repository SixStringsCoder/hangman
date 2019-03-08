// MODEL never communicates with VIEW, only with MANAGER
const model = {
  alphabet:   ["A", "E", "I", "O", "U", "B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"],
  challenges: ["escape", "Hollywood", "empire", "trident", "frisbee"],
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
    this.alphabetKeys.addEventListener('click', this.renderLetters);
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

  renderLetters: function(e) {
    this.wordletter = document.querySelectorAll('.word-letter');
    this.wordletter.forEach(letterDiv => {
      if (e.target.id === letterDiv.dataset.value) {
        letterDiv.innerHTML = e.target.id;
      }
    });
  },

  renderFingers: function() {

    for (let i = 0; i < this.fingers; i += 1) {
       let fingerHTML = `<div class="finger" id="finger${i}"><div class="fingernail"></div></div>`;
      this.ledge.innerHTML += fingerHTML;
    }
  },
};

// MANAGER - always sits between MODEL and VIEW and delegates info and tasks
const manager = {
  init: () => view.init(),

  getAlphabet: () => model.alphabet,

  getChallenge: () => model.challenges[Math.floor(Math.random() * model.challenges.length)],
};


manager.init();
