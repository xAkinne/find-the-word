// 20 x 32 - default

// parameters
let rows = 32; // rows
let cols = 20; // columns
let word = "cow"; // 3 letter word (letters must be different!)



let cows = 0;
let tab = [];
let err = false;

// func - write contet to html file
function writeTable(x){
    document.write("<table>");
    document.write(`<tr><th id="teh" colspan='${cols}'>Find the "${word}": ${cows}</th></tr>`);
    if(word.length != 3){
        document.write(`<tr><td colspan='${cols}'>the chosen word "${word}" is not a three-letter word!</td></tr>`);
        err = true;
    } else if(word[0] === word[1] || word[0] === word[2] || word[1] === word[2]){
        document.write(`<tr><td colspan='${cols}'>In the word "${word}", the letters are repeated!</td></tr>`);
        err = true;
    } else{
        for (let i = 0; i < rows; i++) {
            document.write("<tr>");
            for (let j = 0; j < cols; j++) {
                document.write(`<td>${x[i][j]}</td>`);
            }
            document.write("</tr>");
        }
    }
    document.write("</table>");
}


// func - counts the number of occurrences of the selected word
function cowCounter(x) {
    let count = 0;

    const direct = [
        [0, 1],   // right
        [0, -1],  // left
        [1, 0],   // down
        [-1, 0],  // up
        [1, 1],   // down-right
        [1, -1],  // down-left
        [-1, 1],  // up-right
        [-1, -1]  // up-left
    ];

    // go throug whole table
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            // if find index 0 in word
            if (x[i][j] === word[0]) {
                // check for all directions
                for (const [dx, dy] of direct) {
                    let valid = true;
                    // continue checking
                    for (let k = 0; k < word.length; k++) {
                        let newRow = i + dx * k;
                        let newCol = j + dy * k;
                        // if next pos is out of table, or letter dosn't match - break loop'
                        if (newRow < 0 || newRow >= rows || newCol < 0 || newCol >= cols || x[newRow][newCol] !== word[k]) {
                            valid = false;
                            break;
                        }
                    }
                    // if valid - add to count
                    if (valid) {
                        count++;
                    }
                }
            }
        }
    }
    // assigns the final number of words found
    cows = count;
}


//random generate letter from variable "word" into 2d matrix
function randCow(){
    let out;
    let numb = (Math.floor(Math.random() * 3) + 1);
    switch (numb) {
        case 1:
            out = word[0];
            break;
        case 2:
            out = word[1];
            break;
        case 3:
            out = word[2];
            break;
    
        default:
            console.log("something went wrong in generating random number!");
    }
    return out;
}

// fill 2d matrix with letters
for (let i = 0; i < rows; i++) {
  tab[i] = [];
  for (let j = 0; j < cols; j++) {
    tab[i][j] = randCow();
  }
}

cowCounter(tab);  // counts the number of occurrences of the selected word
writeTable(tab);  // writes table into html
if(err){document.getElementById('teh').innerHTML = `Find the "${word}": None`;} // if error occured - disable counter
document.title = `Find the ${word}!`; // dynamic html title

