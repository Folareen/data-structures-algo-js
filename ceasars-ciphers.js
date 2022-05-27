function rot13(str) {
    const ALPHABETS = [
      "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
    ]
    let rotatedString = "";
  
    for (let i = 0; i < str.length ; i++){
      let currChar = str[i]
      if(ALPHABETS.includes(currChar)){
        let index = ALPHABETS.indexOf(currChar);
        rotatedString += index < 13 ? ALPHABETS[index + 13] : ALPHABETS[index - 13]
      }else{
        rotatedString += currChar
      }
    }
  
    return rotatedString;
}
  
rot13("SERR PBQR PNZC");