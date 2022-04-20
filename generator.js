let characters = "~!@jklmnoABCabcdefghiDEFGHIJKLM#$%^&*()_+={[}]NOPQRSTpqrstuvU1234567890VWXYZ|:;'<>?"

// creating and populating the character list
let charactersList = []
for ( let i =0; i<characters.length; i++){
    charactersList.push(characters[i])
}

// returns a random number from zero and inclding the upper limit talking
function randomNumber(upperLimit) {
    return Math.floor(Math.random() *(upperLimit + 1) )
}

//generates a password from the character the length of the input
//once number exceeds dictionary, the function stops at its own max
function generatePassword(number) {
    let passWord = ""
    for (let i = 0; i<charactersList.length; i++) {
        passWord += charactersList[randomNumber(charactersList.length -1)]
        if (passWord.length === number) {
            break;
        }if (passWord.length === charactersList.length){
            break
        }
    }console.log(`This is the ${passWord.length} number password: ${passWord}`)
    
}



// generatePassword(82)