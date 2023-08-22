import Ask from "https://deno.land/x/ask@1.0.6/mod.ts";
const ask = new Ask();

  const answers = await ask.prompt([
    {
        name: "range",
        type: "number",
        message: "Range of encryption (between 0 & 26):",
    },
    {
        name: "text",
        type: "input",
        message: "type text to encrypt:",
    },
    ]);

const msg = (answers.text).toLowerCase();
const convertedMsg = [...msg];
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let num = Number(answers.range);
let copy = [...letters];
let myObj = {};
let result = [];
let resultStr;

for(let i = 1;i<=num;i++) {
    let lastEl = letters[letters.length-1];
    letters.unshift(lastEl);
    letters.pop();
}

for (let x = 0;x<copy.length-1;x++) {
    myObj[copy[x]] = letters[x];
}

function translate() {
    // console.log(myObj);
    for(let ms of convertedMsg) {
        if (ms == ' ') {
            result.push(' ');
        } else {
            result.push(myObj[ms]);
        }
    }
    resultStr = result.join("");
    console.log(resultStr);
    
}

translate();