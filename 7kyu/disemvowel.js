//Disemvowel Trolls
//7 kyu
function disemvowel(str){
    const vowels = {'a': 0, 'e': 0, 'i': 0, 'o': 0, 'u': 0};
    let retStr = "";
    for(let i = 0; i < str.length; i++){
        if(!(str[i].toLowerCase() in vowels)){
            retStr += str[i];
        }
    }
    return retStr;
}

function disemvowelRegex(str){
    return str.replace(/[aeiou]/gi, '');
}

exports.disemvowel = disemvowel;
exports.disemvowelRegex = disemvowelRegex;