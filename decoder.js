const MorseCode = str => {

    var dictionary = {


        "x": "a",
        "y": "b",
        "z": "c",
        "a": "d",
        "b": "e",
        "c": "f",
        "d": "g",
        "e": "h",
        "f": "i",
        "g": "j",
        "h": "k",
        "i": "l",
        "j": "m",
        "k": "n",
        "l": "o",
        "m": "p",
        "n": "q",
        "o": "r",
        "p": "s",
        "q": "t",
        "r": "u",
        "s": "v",
        "t": "w",
        "u": "x",
        "v": "y",
        "w": "z",
    };   
    var words = ''
    str.split(" ").forEach(cur => {
        if(cur === ""){
            words += " "
        }else{
            if(dictionary[cur]){
                words += dictionary[cur]
            }
        } 
    });
    return (words.split("  ")).join(" ")
}

const getPhrase = MorseCode("prompt")


console.log(getPhrase);