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
    let resultString = '';
    let symbol = '';
    for (let i = 0; i < expr.length; i += 10){
        let string = expr.slice(i, i+10);
        if (string == '**********'){
            resultString = resultString + ' '
            continue
        }

        for (let j = 0; j < 10; j += 2){
            let str = string.slice(j, j+2);
            if (str === '10'){
                symbol = symbol + '.';
            }else if (str === '11'){
                symbol = symbol + '-';
                
            }
        }
        
        resultString = resultString + MORSE_TABLE[symbol]
        symbol = ''
    }
    return resultString
}

module.exports = {
    decode
}