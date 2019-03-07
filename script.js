const alphabetKeys = document.querySelector('#alphabet-keyboard');
const letterblanks = document.querySelector('#letterspaces');
const alphabet =   ["A", "E", "I", "O", "U", "B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"];



const buildAlphabet = (arr) => {
  // arr.map((letter, index) => {
  //   let htmlpattern = `<div class="letter" id="${letter}">${letter}</div>`;
  //   alphabetKeys.innerHTML += htmlpattern;
  // });
}

// const secretWord = (word) => {
//   let wordArr = word.toUpperCase().split('');
//   console.log(wordArr);
//   wordArr.map((letter) => {
//     let blank = `<div class="word-letter" data-value="${letter}"></div>`;
//     letterblanks.innerHTML += blank;
//   });
// }
//
// alphabetKeys.addEventListener('click', (e) => {
//   const wordletter = document.querySelectorAll('.word-letter');
//   wordletter.forEach(letterhtml => {
//     if (e.target.id === letterhtml.dataset.value) {
//       console.log("YES!");
//       letterhtml.innerHTML = e.target.id;
//     }
//   })
// })

// secretWord("escape");
buildAlphabet(alphabet);

module.exports.buildAlphabet = buildAlphabet;
