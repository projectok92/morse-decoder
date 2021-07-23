const MORSE_TABLE = {
  '.-':     'a',
  '-...':   'b',
  '-.-.':   'c',
  '-..':    'd',
  '.':      'e',
  '..-.':   'f',
  '--.':    'g',
  '....':   'h',
  '..':     'i',
  '.---':   'j',
  '-.-':    'k',
  '.-..':   'l',
  '--':     'm',
  '-.':     'n',
  '---':    'o',
  '.--.':   'p',
  '--.-':   'q',
  '.-.':    'r',
  '...':    's',
  '-':      't',
  '..-':    'u',
  '...-':   'v',
  '.--':    'w',
  '-..-':   'x',
  '-.--':   'y',
  '--..':   'z',
  '.----':  '1',
  '..---':  '2',
  '...--':  '3',
  '....-':  '4',
  '.....':  '5',
  '-....':  '6',
  '--...':  '7',
  '---..':  '8',
  '----.':  '9',
  '-----':  '0',
};

function decode(expr) {
  let encodedSplitedString = expr.match(/.{1,10}/g);
  encodedSplitedString = encodedSplitedString.map(el => el = el.match(/.{1,2}/g));

  let replacedEncodedChars = encodedSplitedString.map(el => el.filter(el => el !== '00').map(el => el === '10' ? '.' : el === '11' ? '-' : el).join(''));
  
  let decodedChars = replacedEncodedChars.map(el => MORSE_TABLE[el] ? MORSE_TABLE[el] : el.replace('**********', ' ')).join('');

  return decodedChars;
}

module.exports = {
  decode
}