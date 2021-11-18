// 6) absolute values sum minimization
function absoluteValuesSumMinimization(a) {
    const  isEven = a.length % 2 === 0;
    //console.log('cons: ' + a[a.length / 2 - 3]) // returns position in array
    return isEven ? a[a.length / 2 - 1] : a[Math.floor(a.length / 2)];
}

// console.log(absoluteValuesSumMinimization([2,4,7])); // 4
// console.log(absoluteValuesSumMinimization([2,4,7,6])); // 4
// console.log(absoluteValuesSumMinimization([2,4,7,6,6])); // 7
// console.log(absoluteValuesSumMinimization([2,4,7,6,6,8])); // 7


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 7) Add
function add(...arg) {
    // using foreach
    //let total = 0;
    //arg.forEach(num => total += num);
    //return total;

    // using reduce
    return arg.reduce((total, num) => total + num);
}

 // console.log(add(1,2));
 // console.log(add(3,2));


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 8) Add Border
function addBorder(picture) {
    const wall = '*'.repeat(picture[0].length + 2);

    picture.unshift(wall);
    picture.push(wall);

    for (let i = 1; i < picture.length - 1; i++){
        picture[i] = '*'.concat(picture[i], '*');
    }
    return picture;
}

//console.log(addBorder(["abc", "cde"]));


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 9) Add two digits
function addTwoDigits(n) {
    const nums = n.toString().split('');
    return nums.reduce((a, b) => parseInt(a) + parseInt(b), 0);
}

// console.log(addTwoDigits(29))


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 10) Adjacent Elements Product
function adjacentElementsProduct(inpArray) {
    let  largestProduct = inpArray[0] * inpArray[1];

    for(let i = 1; i < inpArray.length - 1; i++){
        const  product = inpArray[i] * inpArray[i + 1];
        largestProduct = largestProduct < product ? product : largestProduct;
    }

    return largestProduct;
}

//console.log(adjacentElementsProduct([3,6,-2,-5,7,3]))


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 11) All longest String
function allLongestString(inpArray) {
    let longestLength = 0;
    const longestWords = [];

    inpArray.forEach(word => {
       longestLength = longestLength < word.length ? word.length : longestLength;
    });

    inpArray.forEach(word => {
        if(word.length === longestLength){
            longestWords.push(word);
        }
    })

    return longestWords;
}

//console.log(allLongestString(['asd', 'as', 'asdas', 'zxczx', 'qwe', 'ert']))


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 12) Almost Increasing Sequence
function almostIncreasingSequence(sequence) {
    let count = 0;

    for (let i = 0; i < sequence.length; i++){
        if(sequence[i] <= sequence[i - 1]){
            count++;
            if(sequence[i] <= sequence[i - 2] && sequence[i + 1] < sequence[i - 1]){
                return false;
            }
        }
    }

    return count <= 1;
}

// console.log(almostIncreasingSequence([1,3,2,5])) // true
// console.log(almostIncreasingSequence([1,3,2,1])) // false
// console.log(almostIncreasingSequence([1,3,2])) // true


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 13) Alphabetic Shift
function alphabeticShift(inputString) {
    // fastest way to solve this problem is to create object - {'a': 'b', 'b': 'c', 'c': 'd',......}
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let inputShifted = inputString.split('');

    for (let i = 0; i < inputShifted.length; i++){
        let index = 0;

        if(inputShifted[i] !== 'z'){
            index = alphabet.indexOf(inputShifted[i]) + 1;
        }

        inputShifted[i] = alphabet[index];
    }

    return inputShifted.join('');
}

//console.log(alphabeticShift('crazy'))


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 14) Alphabet Sub Sequence
function alphabetSubSequence(str) {
    const chars = str.split('');
    const charValues = [];

    chars.forEach(char => charValues.push(char.charCodeAt(0)));
    //console.log(new Set(charValues)); returns unique values. removes duplicates
    if(new Set(charValues).size !== charValues.length){
        return false;
    }
    for(let i = 0; i < charValues.length - 1; i++){
        if(charValues[i] >= charValues[i + 1]){
            return false;
        }
    }
    return true;
}

// console.log(alphabetSubSequence('effg')); // false
// console.log(alphabetSubSequence('cdce')); // false
// console.log(alphabetSubSequence('ace')); // true
// console.log(alphabetSubSequence('bxz')); // true


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 15) Alternating Sums
function alternatingSums(arr) {
    let evenSum = 0;
    let oddSum = 0;
    arr.forEach((element, index) => {
        index % 2 === 0 ? evenSum += element : oddSum += element;
    })

    return [evenSum, oddSum];
}

//console.log(alternatingSums([50,60,60,45,70]));


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 16) Are Equally Strong
function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    const yourWeakest = yourLeft <= yourRight ? yourLeft : yourRight;
    const yourStrongest = yourLeft >= yourRight ? yourLeft : yourRight;
    const friendsWeakest = friendsLeft <= friendsRight ? friendsLeft : friendsRight;
    const friendsStrongest = friendsLeft >= friendsRight ? friendsLeft : friendsRight;

    return yourStrongest === friendsStrongest && yourWeakest === friendsWeakest;
}

// console.log(areEquallyStrong(10,15,15,10)); // true
// console.log(areEquallyStrong(15,10,15,10)); // true
// console.log(areEquallyStrong(15,10,15,9)); // false


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 17) Are Similar
function areSimilar(a, b) {
    const c = [];
    let d = [];

    if(a.toString() === b.toString()){
        return true;
    }

    for (let i = 0; i < a.length; i++){
        if(a[i] !== b[i]){
            c.push(a[i]);
            d.push(b[i]);
        }
    }

    d = d.reverse();

    if(c.length == 2 && (c.toString() === d.toString())){
        return true;
    }
    return false;
}

// console.log(areSimilar([1,2,3], [1,2,3])); // true
// console.log(areSimilar([1,2,3], [2,1,3])); // true
// console.log(areSimilar([1,2,2], [2,1,1])); // false


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 18) Array Change
// find the minimal number of moves to obtain a strictly increasing sequence from the input. example: [1,1,1] should be 3
function arrayChange(inputArray) {
    let count = 0;

    for(let i = 0; i < inputArray.length; i++){
        if(inputArray[i] >= inputArray[i + 1]){
            const difference = (inputArray[i] + 1) - inputArray[i + 1];
            console.log(difference)
            inputArray[i + 1] = inputArray[i] + 1;
            count += difference;
        }
    }

    return count;
}

//console.log(arrayChange([1,1,1])); // 3


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 19) Array Conversion
// Perform the operations until the array contains only one element. ex: [1,2,3,4,5,6,7,8] should be 186
function arrayConversion(inputArray) {
    let isOdd = true;

    while (inputArray.length !== 1){
        inputArray = sumProduct(inputArray, isOdd)
        isOdd = !isOdd;
    }

    return inputArray[0];
}

function sumProduct(nums, isOdd) {
    const someProducts = [];
    if(isOdd){
        for (let i = 0; i < nums.length; i += 2){
            someProducts.push(nums[i] + nums[i + 1])
        }
    }else{
        for (let i = 0; i < nums.length; i += 2){
            someProducts.push(nums[i] * nums[i + 1])
        }
    }

    return someProducts;
}

// console.log(arrayConversion([1,2,3,4,5,6,7,8])); // 186


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 20) Array Max Consecutive Sum
// Given array of integers. Find maximal possible sum of some its k consecutive elements. ex: [2,3,5,1,6],2 should be 8
function arrayMaxConsecutiveSum(inputArray, k) {
    let sum = 0;
    let maxConsecutiveSum = 0;

    for(let i = 0; i < k; i++){
        sum += inputArray[i];
    }

    maxConsecutiveSum = sum;

    for (let i = k; i < inputArray.length; i++){
        sum -= inputArray[i - k];
        sum += inputArray[i];

        if(sum > maxConsecutiveSum){
            maxConsecutiveSum = sum;
        }
    }

    return maxConsecutiveSum;
}

//console.log(arrayMaxConsecutiveSum([2,3,5,1,6], 2));


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 21) Array Maximal Adjacent Difference
// Given an array of integers. FInd the maximal absolute difference between any of its adjacent elements. ex: [2,4,1,0] should be 3
function arrayMaximalAdjacentDifference(inputArray) {
    let maxDiff = Math.abs(inputArray[0] - inputArray[1]);

    for(let i = 0; i < inputArray.length; i++){
        let absoluteDiff = Math.abs(inputArray[i - 1] - inputArray[i]);
        if(absoluteDiff > maxDiff){
            maxDiff = absoluteDiff;
        }
    }

    return maxDiff;
}

//console.log(arrayMaximalAdjacentDifference([2,4,1,0])); // 3


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 22) Array Previous Less
// Given array of integers, for each position i, search among the previous positions for the last (from the left) position
// that contains a smaller value. Store this value at position i in the answer. If no such value can be found, store -1 instead.
// ex: For items = [3, 5, 2, 4, 5], the output should be arrayPreviousLess(items) = [-1, 3, -1, 2, 4].
function arrayPreviousLess(items) {
    const lessThanList = [];

    for (let i = items.length - 1; i >= 0; i--){
        for(let j = i; j >= 0; j--){
            if(items[i] > items[j]){
                console.log('items i: '+ items[i] + ', items j: '+ items[j])
                lessThanList.unshift(items[j]);
                break;
            }else if(j === 0){
                lessThanList.unshift(-1);
            }
        }
    }

    return lessThanList;
}

//console.log(arrayPreviousLess([3, 5, 2, 4, 5])); // [ -1, 3, -1, 2, 4 ]


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 23) Array Replace
// Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem. ex: For inputArray = [1, 2, 1],
// elemToReplace = 1 and substitutionElem = 3, the output should be arrayReplace(inputArray, elemToReplace, substitutionElem) = [3, 2, 3].
function arrayReplace(inputArray, elemToReplace, substitutionElem) {
    inputArray.forEach((element, index) => {
        if(element === elemToReplace){
            inputArray[index] = substitutionElem;
        }
    });

    return inputArray;
}

//console.log(arrayReplace([1, 2, 1],1,3)); // [ 3, 2, 3 ]


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 24) Avoid Obstacles
// You are given an array of integers representing coordinates of obstacles situated on a straight line.
// Assume that you are jumping from the point with coordinate 0 to the right. You are allowed only to make jumps of the same length represented by some integer.
// Find the minimal length of the jump enough to avoid all the obstacles. ex: For inputArray = [5, 3, 6, 7, 9], the output should be avoidObstacles(inputArray) = 4.
function avoidObstacles(inputArray) {
    inputArray = inputArray.sort((a, b) => a - b);
    const largestArrayVal = inputArray[inputArray.length - 1];

    for(let i = 1; i <= largestArrayVal + 1; i++){
        if(inputArray.every((element) => element % i !== 0)){
            return i;
        }
    }
}

// console.log(avoidObstacles([5, 3, 6, 7, 9])); // 4
// console.log(avoidObstacles([5, 3, 6, 7, 9, 12])); // 8
// console.log(avoidObstacles([5, 3, 6, 7, 9, 12, 16])); // 10


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 25)  Bishop And Pawn
// Given the positions of a white bishop and a black pawn on the standard chess board, determine whether the bishop can capture the pawn in one move.
// The bishop has no restrictions in distance for each move, but is limited to diagonal movement. Check out the example below to see how it can move:
// ex: For bishop = "a1" and pawn = "c3", the output should be bishopAndPawn(bishop, pawn) = true.
function  bishopAndPawn(bishop, pawn) {
    const board = {
        "a": 1,
        "b": 2,
        "c": 3,
        "d": 4,
        "e": 5,
        "f": 6,
        "g": 7,
        "h": 8
    };

    const bishopX = board[bishop[0]];
    const bishopY = parseInt(bishop[1]);
    const pawnX = board[pawn[0]];
    const pawnY = parseInt(pawn[1]);

    console.log(pawnX + bishopY)

    if(bishopX + bishopY === pawnY + pawnX || bishopX + pawnY === pawnX + bishopY){
        return true;
    }

    return false;
}

// console.log(bishopAndPawn('a1', 'c3'));


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 26)  Box Blur
// Blur content of picture. each pixel x in the resulting image has a value equal to the average value of the input image pixels'
// values from the 3 × 3 square with the center at x. All pixels at the edges are cropped.
// As pixel's value is an integer, all fractions should be rounded down.
// ex: image = [[1, 1, 1],
//             [1, 7, 1],
//             [1, 1, 1]] - output should be - [ [ 1 ] ]
function boxBlur(image) {
    const res = [];

    for (let i = 0; i < image.length - 2; i++){
        const line = [];
        for (let x = 0; x < image[i].length - 2; x++){
            let sum = 0;
            let count = 0;
            for (let a = i; a < i + 3; a++){
                for (let b = x; b < x + 3; b++){
                    sum += image[a][b];
                    count++;
                }
            }
            line.push(Math.floor(sum / count));
        }
        res.push(line);
    }

    return res;
}

//console.log(boxBlur([[1, 1, 1],[1, 7, 1],[1, 1, 1]])); // [ [ 1 ] ]



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 27)  Candies
// n children have got m pieces of candy. They want to eat as much candy as they can, but each child must eat exactly the
// same amount of candy as any other child. Determine how many pieces of candy will be eaten by all the children together. Individual pieces of candy cannot be split.
// ex: For n = 3 and m = 10, the output should be candies(n, m) = 9. Each child will eat 3 pieces. So the answer is 9.
function candies(n, m) {
    const candy = Math.floor(m / 3);

    return candy * n;
}

// console.log(candies(3, 10));



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 28)  Case Insensitive Palindrome
// Given a string, check if it can become a palindrome through a case change of some (possibly, none) letters.
// ex: For inputString = "AaBaa", the output should be isCaseInsensitivePalindrome(inputString) = true.
// "aabaa" is a palindrome as well as "AABAA", "aaBaa", etc
// For inputString = "abac", the output should be isCaseInsensitivePalindrome(inputString) = false.
// All the strings which can be obtained via changing case of some group of letters, i.e. "abac", "Abac", "aBAc" and 13 more, are not palindromes.
function caseInsensitivePalindrome(inputString) {
    const originalLowerCase = inputString.toLowerCase();
    const reversedWord = inputString.toLowerCase()
        .split('')
        .reverse()
        .join('');

    return originalLowerCase === reversedWord;
}

// console.log(caseInsensitivePalindrome('AaBaa')); // true
// console.log(caseInsensitivePalindrome('abac'));  // false



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 29)  Century From Year
// Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100,
// the second - from the year 101 up to and including the year 200, etc.
// Ex: For year = 1905, the output should be centuryFromYear(year) = 20;
// For year = 1700, the output should be centuryFromYear(year) = 17.
function centuryFromYear(year) {
    const century = year / 100;
    if(year % 100 === 0){
        return century;
    }

    return Math.floor(century) + 1;
}

 // console.log(centuryFromYear(1905)); // 20
 // console.log(centuryFromYear(1700)); // 17
 // console.log(centuryFromYear(1701)); // 18



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 30)  Character Parity
//Given a character, check if it represents an odd digit, an even digit or not a digit at all.
// Ex: For symbol = '5', the output should be characterParity(symbol) = "odd";
// For symbol = '8', the output should be characterParity(symbol) = "even";
// For symbol = 'q', the output should be characterParity(symbol) = "not a digit".
function characterParity(symbol) {
    const result = parseInt(symbol);
    return isNaN(result) ? "not a digit" : result % 2 === 0 ? "even" : "odd";
}

 // console.log(characterParity('5')); // odd
 // console.log(characterParity('8')); // even
 // console.log(characterParity('q')); // not a digit



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 31)  Check Palindrome
// Given the string, check if it is a palindrome.
// Ex: For inputString = "aabaa", the output should be checkPalindrome(inputString) = true;
// For inputString = "abac", the output should be checkPalindrome(inputString) = false;
// For inputString = "a", the output should be checkPalindrome(inputString) = true.
function checkPalindrome(inputString) {
    if(!isNaN(inputString)){
        return "not a string";
    }
    const originalLowerCase = inputString.toLowerCase();
    const reversedWord = inputString.toLowerCase()
        .split('')
        .reverse()
        .join('');

    return originalLowerCase === reversedWord;
}

// console.log(checkPalindrome('aabaa')); // true
// console.log(checkPalindrome('abac')); // false
// console.log(checkPalindrome('a')); // true
// console.log(checkPalindrome(9)); // not a string



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 32)  Chess Board Cell Color
// Given two cells on the standard chess board, determine whether they have the same color or not.
// Ex: For cell1 = "A1" and cell2 = "C3", the output should be chessBoardCellColor(cell1, cell2) = true.
// For cell1 = "A1" and cell2 = "H3", the output should be chessBoardCellColor(cell1, cell2) = false.
function chessBoardCellColor(cell1, cell2) {
    cell1 = cell1.toLowerCase();
    cell2 = cell2.toLowerCase();
    const board = {
        "a": 1,
        "b": 2,
        "c": 3,
        "d": 4,
        "e": 5,
        "f": 6,
        "g": 7,
        "h": 8
    };

    const total1 = (board[cell1[0]] + parseInt(cell1[1])) % 2;
    const total2 = (board[cell2[0]] + parseInt(cell2[1])) % 2;

    return total1 === total2;
}

// console.log(chessBoardCellColor('A1', 'C3')); // true
// console.log(chessBoardCellColor('A1', 'H3')); // false



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 33)  Chunky Monkey
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
// Ex: chunkyMonkey(["a", "b", "c", "d"], 2) should return [ ["a", "b"], ["c", "d"] ].
// chunkyMonkey([0, 1, 2, 3, 4, 5], 4) should return [ [0, 1, 2, 3], [4, 5]].
function chunkyMonkey(arr, size) {
    const chunkedArr = [];
    let count = 0;

    while (count < arr.length){
        chunkedArr.push(arr.slice(count, count += size));
    }

    return chunkedArr;
}

// console.log(chunkyMonkey(["a", "b", "c", "d"], 2)); // [ [ 'a', 'b' ], [ 'c', 'd' ] ]
// console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4)); // [ [ 0, 1, 2, 3 ], [ 4, 5 ] ]



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 34)  Circle of Numbers
// Consider integer numbers from 0 to n - 1 written down along the circle in such a way that the distance between any
// two neighbouring numbers is equal (note that 0 and n - 1 are neighbouring, too).
// Given n and firstNumber, find the number which is written in the radially opposite position to firstNumber.
// Ex: For n = 10 and firstNumber = 2, the output should be circleOfNumbers(n, firstNumber) = 7.
function circleOfNumbers(n, firstNumber) {
    const numArray = [];
    const halfWay = n / 2;

    for (let i = 0; i < n; i++){
        numArray.push(i);
    }

    if (firstNumber < halfWay){
        return numArray[firstNumber + halfWay];
    }

    return numArray[firstNumber - halfWay];
}

// console.log(circleOfNumbers(10, 2)); // 7
// console.log(circleOfNumbers(12, 4)); // 10
// console.log(circleOfNumbers(4, 3)); // 1


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 35)  Common Character Count
// Given two strings, find the number of common characters between them.
// Ex: For s1 = "aabcc" and s2 = "adcaa", the output should be commonCharacterCount(s1, s2) = 3.
// Strings have 3 common characters - 2 "a"s and 1 "c".
function commonCharacterCount(s1, s2) {
    const s1Chars = s1.split('');
    const s2Chars = s2.split('');
    const s1CharCount = getCharList(s1Chars);
    const s2CharCount = getCharList(s2Chars);
    let total = 0;

    for (const prop in s1CharCount){
        if(s2CharCount.hasOwnProperty(prop)){
            if(s2CharCount[prop] < s1CharCount[prop]){
                total += s2CharCount[prop];
            }else {
                total += s1CharCount[prop];
            }
        }
    }
    return total;
}

function getCharList(chars){
    const wordCount = {};
    for (let i = 0; i < chars.length; i++){
        if(wordCount.hasOwnProperty(chars[i])){
            wordCount[chars[i]]++;
        }else{
            wordCount[chars[i]] = 1;
        }
    }
    console.log(wordCount)
    return wordCount;
}

// console.log(commonCharacterCount('aabcc', 'adcaa')); // 3



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 36)  Company Bot Strategy
// All four trainers have solved the task correctly, so the answer is (3 + 6 + 4 + 5) / 4 = 4.5. Each CodeFights Company
// Bot is trained by engineers from that specific company. The way it works is that a representative group of engineers from
// each company is identified as trainers before the bot goes live, and they CodeFight against the bot during a training phase.
// The current training algorithm is definitely more complex, but let's assume it works this way:
// For each trainer we collect two pieces of information per task [answerTime, correctness], where correctness is 1 if the
// answer was correct, -1 if the answer was wrong, and 0 if no answer was given. In this case, the bot's correct answer time
// for a given task would be the average of the answer times from the trainers who answered correctly. Given all of the
// training information for a specific task, calculate the bot's answer time.
// Example
// For
// trainingData = [ [3, 1], [6, 1], [4, 1], [5, 1]] the output should be companyBotStrategy(trainingData) = 4.5.
// For
// trainingData = [ [4, 1], [4, -1], [0, 0], [6, 1]] the output should be companyBotStrategy(trainingData) = 5.0.
// Only the 1st and the 4th trainers (1-based) submitted correct solutions, so the answer is (4 + 6) / 2 = 5.0.
// For
// trainingData = [ [4, -1], [0, 0], [5, -1]] the output should be companyBotStrategy(trainingData) = 0.0.
// No correct answers were given for the task.
function companyBotStrategy(trainingData) {
    let time = 0;
    let correctness = 0;

    trainingData.forEach(data => {
        if(data[1] === 1){
            time += data[0];
            correctness += data[1];
        }
    });

    return time / correctness || 0;
}

// console.log(companyBotStrategy([[3, 1], [6, 1], [4, 1], [5, 1]])); // 4.5
// console.log(companyBotStrategy([[4, 1], [4, -1], [0, 0], [6, 1]])); // 5
// console.log(companyBotStrategy( [[4, -1], [0, 0], [5, -1]])); // 0



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 37)  Compare Integers
// Compare two integers given as strings.
// Example
// For a = "12" and b = "13", the output should be compareIntegers(a, b) = "less";
// For a = "875" and b = "799", the output should be compareIntegers(a, b) = "greater";
// For a = "1000" and b = "1000", the output should be compareIntegers(a, b) = "equal".
function compareIntegers(a, b) {
    return parseInt(a) > parseInt(b) ? "greater" : parseInt(a) < parseInt(b) ? "less" : "equal";
}

// console.log(compareIntegers('12', '13')); // less
// console.log(compareIntegers('875', '799')); // greater
// console.log(compareIntegers('1000', '1000')); // equal



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 38)  Compose Ranges
// Given a sorted integer array that does not contain any duplicates, return a summary of the number ranges it contains.
// Ex: For nums = [-1, 0, 1, 2, 6, 7, 9], the output should be composeRanges(nums) = ["-1->2", "6->7", "9"].
function composeRanges(nums) {
    if (nums.length < 1){
        return [];
    }
    const ranges = [{start: nums[0], end: nums[0]}];

    for (let i = 1; i < nums.length; i++){
        if(ranges[ranges.length - 1].end + 1 === nums[i]){
            ranges[ranges.length - 1].end = nums[i];
        }else {
            ranges.push({start: nums[i], end: nums[i]})
        }
    }

    for (let i = 0; i < ranges.length; i++){
        if(ranges[i].start !== ranges[i].end){
            ranges[i] = `${ranges[i].start}->${ranges[i].end}`;
        }else {
            ranges[i] = ranges[i].start.toString();
        }
    }

    return ranges;
}

// console.log(composeRanges([-1, 0, 1, 2, 6, 7, 9])); // [ '-1->2', '6->7', '9' ]



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 39)  Confirm Ending
// Check if a string (first argument, str) ends with the given target string (second argument, target).
// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this
// challenge, we would like you to use one of the JavaScript substring methods instead.
// Remember to use Read-Search-Ask if you get stuck. Write your own code.
// Ex:
// confirmEnding("Abstraction", "action") returns true;
// confirmEnding("Open sesame", "pen") returns false;
function confirmEnding(str, target) {
    const start = str.length - target.length;

    return str.substring(start) === target;
}

//console.log(confirmEnding("Abstraction", "action")); // true
//console.log(confirmEnding("Open sesame", "pen")); // false



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 40)  Contains Close Nums
// Given an array of integers nums and an integer k, determine whether there are two distinct indices i and j in the array
// where nums[i] = nums[j] and the absolute difference between i and j is less than or equal to k.
// Ex:
// For nums = [0, 1, 2, 3, 5, 2] and k = 3, the output should be containsCloseNums(nums, k) = true.
// There are two 2s in nums, and the absolute difference between their positions is exactly 3.
// For nums = [0, 1, 2, 3, 5, 2] and k = 2, the output should be containsCloseNums(nums, k) = false.
// The absolute difference between the positions of the two 2s is 3, which is more than k.
function containsCloseNums(nums, k) {
    for (let i = 0; i < nums.length; i++){
        for (let j = 0; j < nums.length; j++){
            if(i !== j){
                if(nums[i] === nums[j]){
                    if(Math.abs(i - j) <= k){
                        return true;
                    }
                }
            }
        }
    }

    return false;
}

 //console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 3)); // true
 //console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 2)); // false



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 41)  Contains Duplicates
// Given an array of integers, write a function that determines whether the array contains any duplicates. Your function
// should return true if any element appears at least twice in the array, and it should return false if every element is distinct.
// Ex:
// For a = [1, 2, 3, 1], the output should be containsDuplicates(a) = true. There are two 1s in the given array.
// For a = [3, 1], the output should be containsDuplicates(a) = false. The given array contains no duplicates.
function containsDuplicates(a) {
    a = a.sort((a, b) => a - b);

    for (let i = 0; i < a.length; i++){
        if(a[i] === a[i + 1]){
            return true;
        }
    }

    return false;
}

// console.log(containsDuplicates([1, 2, 3, 1])); // true
// console.log(containsDuplicates([3, 1])); // false



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 42)  Convert Celsius to Fahrenheit
// The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.
// You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and
// assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.
// Ex:
// celsiusToFahrenheit(-30) returns -22;
function celsiusToFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
}

// console.log(celsiusToFahrenheit(-30));
// console.log(celsiusToFahrenheit(-10));
// console.log(celsiusToFahrenheit(0));



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 43)  Convert String
// You are given the string s. Your friend just asked you if it's possible to change the string from s to a string t by removing
// some characters from it. You're a pro at programming, so you decided to create a program to determine this.
// Ex:
// For s = "ceoydefthf5iyg5h5yts" and t = "codefights", the output should be convertString(s, t) = true.
// For s = "addbyca" and t = "abcd", the output should be convertString(s, t) = false.
function convertString(s, t) {
    let word = '';
    let tIndex = 0;

    for (let i = 0; i < s.length; i++){
        if(s[i] === t[tIndex]){
            word = word.concat(s[i]);
            tIndex++;

            if(word === t){
                return true;
            }
        }
    }

    return false;
}

// console.log(convertString('ceoydefthf5iyg5h5yts', 'codefights'));  // true
// console.log(convertString('addbyca', 'abcd'));  // false



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 44)  Crossing Sum
// Given a rectangular matrix and integers a and b, consider the union of the ath row and the bth (both 0-based) column of the
// matrix (i.e. all cells that belong either to the a-th row or to the b-th column, or to both). Return sum of all elements of that union.
// Ex:
// For matrix = [ [1, 1, 1, 1], [2, 2, 2, 2], [3, 3, 3, 3]] a = 1 and b = 3, the output should be crossingSum(matrix, a, b) = 12.
// Here (2 + 2 + 2 + 2) + (1 + 3) = 12.
function crossingSum(matrix, a, b) {
    const columnTotal = matrix[a].reduce((total, amount) => total + amount);
    let rowTotal = 0;

    for (let i = 0; i < matrix.length; i++){
        rowTotal += i !== a ? matrix[i][b] : 0;
    }

    return columnTotal + rowTotal;
}

// console.log(crossingSum([[1, 1, 1, 1], [2, 2, 2, 2], [3, 3, 3, 3]], 1, 3)); // (2 + 2 + 2 + 2) + (1 + 3) = 12



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 45)  Deposit Profit
// You have deposited a specific amount of dollars into your bank account. Each year your balance increases at the same growth rate.
// Find out how long it would take for your balance to pass a specific threshold with the assumption that you don't make any additional deposits.
// Ex:
// For deposit = 100, rate = 20 and threshold = 170, the output should be depositProfit(deposit, rate, threshold) = 3.
// Each year the amount of money on your account increases by 20%. It means that throughout the years your balance would be:
// year 0: 100; year 1: 120; year 2: 144; year 3: 172,8.
// Thus, it will take 3 years for your balance to pass the threshold, which is the answer.
function depositProfit(deposit, rate, threshold) {
    let year = 0;

    while (threshold > deposit){
        deposit += deposit * (rate / 100);
        year++;
    }
    return year;
}

// console.log(depositProfit(100, 20, 170)); // 3



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 46)  Different Symbols Naive
// Given a string, find the number of different characters in it.
// Ex:
// For s = "cabca", the output should be differentSymbolsNaive(s) = 3.
// There are 3 different characters a, b and c.
function differentSymbolsNaive(s) {
    s = s.split('').filter((x, i, a) => a.indexOf(x) == i);
    return s.length;
}

// console.log(differentSymbolsNaive('cabca')); // 3



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 47)  Digit Degree
// Let's define digit degree of some positive integer as the number of times we need to replace this number with the sum of its digits until we get to a one digit number.
// Given an integer, find its digit degree.
// Ex:
// For n = 5, the output should be digitDegree(n) = 0;
// For n = 100, the output should be digitDegree(n) = 1. 1 + 0 + 0 = 1.
// For n = 91, the output should be digitDegree(n) = 2. 9 + 1 = 10 -> 1 + 0 = 2.
function digitDegree(n) {
    let count = 0;
    let currentNum = n;

    if (n <= 9) {
        return count;
    } else{
        while (true){
            count++;
            currentNum = getDigit(currentNum);

            if(currentNum <= 9){
                break;
            }
        }
    }

    return count;
}

function getDigit(num){
    const nums = num.toString().split('').map((element) => parseInt(element));
    return nums.reduce((a, b) => a + b);
}

// console.log(digitDegree(5)); // 0
// console.log(digitDegree(10)); // 1
// console.log(digitDegree(91)); // 2



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 48)  Domain Type
// GoDaddy makes a lot of different top-level domains available to its customers. A top-level domain is one that goes directly
// after the last dot ('.') in the domain name, for example .com in example.com. To help the users choose from available domains,
// GoDaddy is introducing a new feature that shows the type of the chosen top-level domain. You have to implement this feature.
// To begin with, you want to write a function that labels the domains as "commercial", "organization", "network" or "information" for
// .com, .org, .net or .info respectively. For the given list of domains return the list of their labels.
// Ex:
// For domains = ["en.wiki.org", "codefights.com", "happy.net", "code.info"], the output should be domainType(domains) = ["organization", "commercial", "network", "information"].
function domainType(domains) {
    const domainType = [];

    for (let tp of domains){
        const domain = tp.split('.');
        const lastDomain = domain[domain.length - 1];

        if(lastDomain === 'org'){
            domainType.push('organization')
        }
        if(lastDomain === 'com'){
            domainType.push('commercial')
        }
        if(lastDomain === 'net'){
            domainType.push('network')
        }
        if(lastDomain === 'info'){
            domainType.push('information')
        }
    }

    return domainType;
}

// console.log(domainType(["en.wiki.org", "codefights.com", "happy.net", "code.info"]));



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 49)  Election Winners
// Given an array of the numbers of votes given to each of the candidates so far, and an integer k equal to the number of voters
// who haven't cast their vote yet, find the number of candidates who still have a chance to win the election.
// The winner of the election must secure strictly more votes than any other candidate. If two or more candidates receive the same (maximum) number of votes, assume there is no winner at all.
// Ex:
// For votes = [2, 3, 5, 2] and k = 3, the output should be electionsWinners(votes, k) = 2.
// The first candidate got 2 votes. Even if all of the remaining 3 candidates vote for him, he will still have only 5 votes, i.e. the same number as the third candidate, so there will be no winner.
// The second candidate can win if all the remaining candidates vote for him (3 + 3 = 6 > 5).
// The third candidate can win even if none of the remaining candidates vote for him. For example, if each of the remaining
// voters cast their votes for each of his opponents, he will still be the winner (the votes array will thus be [3, 4, 5, 3]).
// The last candidate can't win no matter what (for the same reason as the first candidate). Thus, only 2 candidates can win (the second and the third), which is the answer.
function electionsWinners(votes, k) {
    let inTheRunning = 0;
    const mostVotes = Math.max(...votes);
    const sortedVotes = votes.sort((a, b) => b - a);

    if(sortedVotes[0] !== sortedVotes[1] && k === 0){
        return 1;
    }

    votes.forEach(voteCount => {
        if(mostVotes - voteCount < k){
            inTheRunning++;
        }
    });

    return inTheRunning;
}

// console.log(electionsWinners([2, 3, 5, 2], 3)); // 2



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 50)  Enclose in Brackets
// Given a string, enclose it in round brackets.
// Ex:
// For inputString = "abacaba", the output should be encloseInBrackets(inputString) = "(abacaba)".
function encloseInBrackets(inputString) {
    return `(${inputString})`;
}

// console.log(encloseInBrackets('abacaba'));



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 51)  Even Digits Only
// Check if all digits of the given integer are even.
// Ex:
// For n = 248622, the output should be evenDigitsOnly(n) = true;
// For n = 642386, the output should be evenDigitsOnly(n) = false.
function evenDigitsOnly(n) {
    return n.toString()
        .split('')
        .every(digit => parseInt(digit) % 2 === 0);;
}

// console.log(evenDigitsOnly(248622)); // true
// console.log(evenDigitsOnly(642386)); // false



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 52)  Extract Each Kth
// Given array of integers, remove each kth element from it.
// Ex:
// For inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and k = 3, the output should be extractEachKth(inputArray, k) = [1, 2, 4, 5, 7, 8, 10].
function extractEachKth(arr, k) {
    const res = [];
    for (let val of arr){
        if(val % k !== 0){
            res.push(val)
        }
    }
    return res;

    // return arr.filter((el, index) => (index + 1) % k !== 0); // solution 2
}

// console.log(extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)); // [1, 2, 4, 5, 7, 8, 10]



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 53)  Extract Matrix Column
// Given a rectangular matrix and an integer column, return an array containing the elements of the columnth column of
// the given matrix (the leftmost column is the 0th one).
// Ex:
// For matrix = [ [1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]] and column = 2, the output should be extractMatrixColumn(matrix, column) = [1, 0, 3].
function extractMatrixColumn(matrix, column) {
    const res = [];
    for (let val of matrix){
        res.push(val[column])
    }
    return res;

    // matrix.forEach((row) => res.push(row[column])); // solution 2
    // return res;
}

// console.log(extractMatrixColumn([[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]], 2)); // [1, 0, 3]



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 54)  Factorialize A Number
// Return the factorial of the provided integer.
// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
// Factorials are often represented with the shorthand notation n!
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
// Only integers greater than or equal to zero will be supplied to the function.
// Remember to use Read-Search-Ask if you get stuck. Write your own code.
// Ex:
// factorializeANumber(5) returns 120;
// factorializeANumber(10) returns 3628800;
function factorializeANumber(num) {
    let res = 1;
    for (let i  = 1; i <= num; i++){
        res *= i;
    }

    return res;
}

// console.log(factorializeANumber(5)); // 120
// console.log(factorializeANumber(10)); // 3628800



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 55)  Fancy Ride
// Being a new Uber user, you have $20 off your first ride. You want to make the most out of it and drive in the fanciest car you can afford,
// without spending any out-of-pocket money. There are 5 options, from the least to the most expensive: "UberX", "UberXL", "UberPlus", "UberBlack" and "UberSUV".
// You know the length (lng) of your ride in miles and how much one mile costs for each car. Find the best car you can afford.
// Ex:
// For lng = 30 and fares = [0.3, 0.5, 0.7, 1, 1.3], the output should be fancyRide(lng, fares) = "UberXL".
// The cost for the ride in this car would be $15, which you can afford, but "UberPlus" would cost $21, which is too much for you.
function fancyRide(lng, fares) {
    const rides = ["UberX", "UberXL", "UberPlus", "UberBlack", "UberSUV"];

    for (let i = fares.length - 1; i >= 0; i-- ){
        if(fares[i] * lng <= 20){
            return rides[i]
        }
    }
}

// console.log(fancyRide(30, [0.3, 0.5, 0.7, 1, 1.3])); // UberXL



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 56)  Fare Estimator
// Uber is building a Fare Estimator that can tell you how much your ride will cost before you request it. It works by passing approximated ride distance and ride time through this formula:
// (Cost per minute) * (ride time) + (Cost per mile) * (ride distance)
// where Cost per minute and Cost per mile depend on the car type.
// You are one of the engineers building the Fare Estimator, so knowing cost per minute and cost per mile for each car type,
// as well as ride distance and ride time, return the fare estimates for all car types. Example
// For ride_time = 30, ride_distance = 7, cost_per_minute = [0.2, 0.35, 0.4, 0.45] and cost_per_mile = [1.1, 1.8, 2.3, 3.5], the
// output should be fareEstimator(ride_time, ride_distance, cost_per_minute, cost_per_mile) = [13.7, 23.1, 28.1, 38].
// Since: 30 * 0.2 + 7 * 1.1 = 6 + 7.7 = 13.7 30 * 0.35 + 7 * 1.8 = 10.5 + 12.6 = 23.1 30 * 0.4 + 7 * 2.3 = 12 + 16.1 = 28.1 30 * 0.45 + 7 * 3.5 = 13.5 + 24.5 = 38
function fareEstimator(ride_time, ride_distance, cost_per_minute, cost_per_mile) {
    const estimator = [];

    for (let i = 0; i < cost_per_minute.length; i++){
        let res = (cost_per_minute[i] * ride_time) + (cost_per_mile[i] * ride_distance);
        estimator.push(res);
    }

    return estimator;
}

// console.log(fareEstimator(30, 7, [0.2, 0.35, 0.4, 0.45], [1.1, 1.8, 2.3, 3.5]));



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 57)  Fermactor
// Fermat's factorization method is: If a · b = n (where a ≤ b), then there exist some c and d such that n = c^2 - d^2. Your goal
// is to return for given n such c and d as an array. Since we want c and d to be uniquely determined, in all test cases n is a semiprime number.
// Ex:
// For n = 15, the output should be fermactor(n) = [4, 1]. 15 = 4^2 - 1^2.
function fermactor(n) {
    for (let i = 1; i < n; i++){
        for (let j = 1; j < i; j++){
            const total = Math.pow(i, 2) - Math.pow(j, 2); // returns the base to the exponent power, as in base^exponent
            // const total = i ** 2 - j ** 2; // this is same as above line. ES6

            if(total === n){
                return [i, j];
            }
        }
    }
}

// console.log(fermactor(15));



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 58)  Find Closest Pair
// Given an array of integers numbers, we'd like to find the closest pair of elements that add up to sum. Return the distance
// between the closest pair (absolute difference between the two indices). If there isn't a pair that adds up to sum, return -1.
// Ex:
// For numbers = [1, 0, 2, 4, 3, 0] and sum = 5 the output should be findClosestPair(numbers, sum) = 2. 1 and 4 have a sum of 5, but 2 and 3 are closer.
// For numbers = [2, 3, 7] and sum = 8 the output should be findClosestPair(numbers, sum) = -1. There are no pairs that have a sum of 8.
function findClosestPair(numbers, sum) {
    let distance = -1;

    for (let i = 0; i < numbers.length; i++){
        for (let j = 0; j < numbers.length; j++){
            const distanceSum = numbers[i] + numbers[j];
            const absDistance = Math.abs(i - j);

            if(sum === distanceSum){
                if(distance === -1 || absDistance < distance){
                    distance = absDistance;
                }
            }
        }
    }

    return distance;;
}

// console.log(findClosestPair([1, 0, 2, 4, 3, 0], 5)); // 2
// console.log(findClosestPair([2, 3, 7], 8)); // -1



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 59)  Find Email Domain
// An email address such as "John.Smith@example.com" is made up of a local part ("John.Smith"), an "@" symbol, then a domain part ("example.com").
// The domain name part of an email address may only consist of letters, digits, hyphens and dots. The local part, however, also allows a
// lot of different special characters. Here you can look at several examples of correct and incorrect email addresses.
// Given a valid email address, find its domain part.
// Ex:
// For address = "prettyandsimple@example.com", the output should be findEmailDomain(address) = "example.com";
// For address = "<>[]:,;@"!#$%&*+-/=?^_{}| ~.a"@example.org", the output should be findEmailDomain(address) = "example.org".
function findEmailDomain(address) {
    return address.substr(address.lastIndexOf("@") + 1); // my solution
    //return address.slice(address.lastIndexOf("@") + 1, address.length); // tutorial solution
}

// console.log(findEmailDomain('prettyandsimple@example.com')); // example.com
// console.log(findEmailDomain('<>[]:,;@\"!#$%&*+-/=?^_{}| ~.a\"@example.org')); // example.org



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 60)  First Digit
// Find the leftmost digit that occurs in a given string.
// Ex:
// For inputString = "var_1__Int", the output should be firstDigit(inputString) = '1';
// For inputString = "q2q-q", the output should be firstDigit(inputString) = '2';
// For inputString = "0ss", the output should be firstDigit(inputString) = '0'.
function firstDigit(inputString) {
    const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    for (let i = 0; i < inputString.length; i++){
        if(digits.includes(inputString[i])){
            return inputString[i];
        }
    }
}

// console.log(firstDigit('var_1__Int')); // 1
// console.log(firstDigit('q2q-q')); // 2
// console.log(firstDigit('0ss')); // 0



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 61)  First Duplicate
// Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number for which the second
// occurrence has the minimal index. In other words, if there are more than 1 duplicated numbers, return the number for which the
// second occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return -1.
// Ex:
// For a = [2, 1, 3, 5, 3, 2], the output should be firstDuplicate(a) = 3.
// There are 2 duplicates: numbers 2 and 3. The second occurrence of 3 has a smaller index than the second occurrence of 2 does, so the answer is 3.
// For a = [2, 4, 3, 5, 1], the output should be firstDuplicate(a) = -1.
function firstDuplicate(a) {
    const firstDup = {};

    for (let num of a){
        if(firstDup.hasOwnProperty(num)){
            return num;
        }
        firstDup[num] = num;
    }

    return -1;
}

// console.log(firstDuplicate([2, 1, 3, 5, 3, 2])); // 3
// console.log(firstDuplicate([2, 4, 3, 5, 1])); // -2



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 62)  First Not Repeating Character
// Note: Write a solution that only iterates over the string once and uses O(1) additional memory, since this is what you would be asked to do during a real interview.
// Given a string s, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.
// Ex:
// For s = "abacabad", the output should be firstNotRepeatingCharacter(s) = 'c'.
// There are 2 non-repeating characters in the string: 'c' and 'd'. Return c since it appears in the string first.
// For s = "abacabaabacaba", the output should be firstNotRepeatingCharacter(s) = '_'.
// There are no characters in this string that do not repeat.
function firstNotRepeatingCharacter(s) {
    const chars = s.split('');
    let duplicates = {};
    let answer = '_';
    let indexAnswer = Number.MAX_SAFE_INTEGER;

    chars.forEach((element, index) => {
       if(!duplicates.hasOwnProperty(element)){
           duplicates[element] = {
               count: 1,
               index
           };
       }else{
           duplicates[element].count++;
           duplicates[element].index = index;
       }
    });

    for (const key in duplicates){
        if(duplicates[key].count === 1 && duplicates[key].index < indexAnswer){
            answer = key;
            indexAnswer = duplicates[key].index;
        }
    }

    return answer;
}

// console.log(firstNotRepeatingCharacter('abacabad')); // c
// console.log(firstNotRepeatingCharacter('abacabaabacaba')); // _



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 63)  Flatten Array
// Flatten a nested array. You must account for varying levels of nesting.
// Ex:
// steamrollArray([ [ ["a"]], [ ["b"]]]) should return ["a", "b"].
// steamrollArray([1, [2], [3, [ [4]]]]) should return [1, 2, 3, 4]
function flattenArray(arr) {
    //return arr.flat(Infinity); // my solution

    const oneArray = [];

    flatten(arr)

    function flatten(arr) {
        arr.forEach((element) => {
            if(Array.isArray(element)){
                flatten(element);
            }else{
                oneArray.push(element);
            }
        })
    }

    return oneArray;
}

// console.log(flattenArray([[["a"]], [["b"]]])); // [ 'a', 'b' ]
// console.log(flattenArray([1, [2], [3, [[4]]]])); // [ 1, 2, 3, 4 ]



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 64)  Growing Plant
// Each day a plant is growing by upSpeed meters. Each night that plant's height decreases by downSpeed meters due to the lack of sun
// heat. Initially, plant is 0 meters tall. We plant the seed at the beginning of a day. We want to know when the height of the plant will reach a certain level.
// Ex:
// For upSpeed = 100, downSpeed = 10 and desiredHeight = 910, the output should be growingPlant(upSpeed, downSpeed, desiredHeight) = 10.
function growingPlant(upSpeed, downSpeed, desiredHeight) {
    // let dd = desiredHeight / (upSpeed - downSpeed); // My solution
    // return  Math.round(dd);

    let days = 0;
    let totalHeight = 0;

    while (totalHeight < desiredHeight){
        days++;
        totalHeight += upSpeed;

        if(totalHeight < desiredHeight){
            totalHeight -= downSpeed;
        }
    }

    return days;
}

// console.log(growingPlant(100, 10, 910)); // 10



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 65)  House Number Sum
// A boy is walking a long way from school to his home. To make the walk more fun he decides to add up all the numbers of the houses that he passes by during his walk. Unfortunately,
// not all of the houses have numbers written on them, and on top of that the boy is regularly taking turns to change streets, so the numbers don't appear to him in any particular order.
// At some point during the walk the boy encounters a house with number 0 written on it, which surprises him so much that he stops adding numbers to his total right after seeing that house.
// For the given sequence of houses determine the sum that the boy will get. It is guaranteed that there will always be at least one 0 house on the path.
// Ex:
// For inputArray = [5, 1, 2, 3, 0, 1, 5, 0, 2], the output should be houseNumbersSum(inputArray) = 11.
// The answer was obtained as 5 + 1 + 2 + 3 = 11.
function houseNumbersSum(inputArray) {
    let total = 0;

    for (let i = 0; i < inputArray.length; i++){
        if(inputArray[i] === 0){
            return total;
        }

        total += inputArray[i];
    }
}

// console.log(houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2])); // 11



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 66)  House of Cats
// There are some people and cats in a house. You are given the number of legs they have all together. Your task is to return an array containing
// every possible number of people that could be in the house sorted in ascending order. It's guaranteed that each person has 2 legs and each cat has 4 legs.
// Ex:
// For legs = 6, the output should be houseOfCats(legs) = [1, 3].
// There could be either 1 cat and 1 person (4 + 2 = 6) or 3 people (2 * 3 = 6).
// For legs = 2, the output should be houseOfCats(legs) = [1].
// There can be only 1 person.
function houseOfCats(legs) {
    let total = [];

    if(legs === 2){
        return [1];
    }

    while (legs >= 0){
        total.unshift(legs / 2);
        legs -= 4;
    }

    return total;
}

// console.log(houseOfCats(6));
// console.log(houseOfCats(2));



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 67)  HTML End Tag By Start Tag
// You are implementing your own HTML editor. To make it more comfortable for developers you would like to add an auto-completion feature to it.
// Given the starting HTML tag, find the appropriate end tag which your editor should propose.
// If you are not familiar with HTML, consult with this note.
// Ex:
// For startTag = "<button>", the output should be htmlEndTagByStartTag(startTag) = "</button>";
// For startTag = '<i>', the output should be htmlEndTagByStartTag(startTag) = '</i>';
function htmlEndTagByStartTag(startTag) {
    const splitStr = startTag.split(' ');
    const splitTag = splitStr[0].toString().split('');
    let endTag = '</';

    for (let i = 1; i < splitTag.length; i++){
        endTag += splitTag[i];
    }

    endTag = endTag[endTag.length - 1] === '>' ? endTag : endTag += '>';

    return endTag;
}

// console.log(htmlEndTagByStartTag("<button type='button' disabled>")); // </button>
// console.log(htmlEndTagByStartTag('<i>')); // </i>



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 68)  Incorrect Password Attempts
// One Very Important User (VIU) has a Very Confidential Document (VCD) stored on his Dropbox account. He doesn't let anyone see the VCD,
// especially his roommates who often have access to his devices.
// Opening the Dropbox mobile app on the VIU's tablet requires a four-digit passcode. To ensure the confidentiality of the stored information,
// the device is locked out of Dropbox after 10 consecutive failed passcode attempts. We need to implement a function that given an array of
// attempts made throughout the day and the correct passcode checks to see if the device should be locked, i.e. 10 or more consecutive failed passcode attempts were made.
// Ex:
// For passcode = "1111" and
// attempts = ["1111", "4444", "9999", "3333", "8888", "2222", "7777", "0000", "6666", "7285", "5555", "1111"] the output should be incorrectPasscodeAttempts(passcode, attempts) = true.
// The first attempt is correct, so the user must have successfully logged in. However, the next 10 consecutive attempts are incorrect, so the device should be locked. Thus, the output should be true.
function incorrectPasscodeAttempts(passcode, attempts) {
    let failedAttempts = 0;

    for (let attempt of attempts){
        failedAttempts++;
        failedAttempts = attempt === passcode ? 0 : failedAttempts;

        if(failedAttempts === 10){
            return true;
        }
    }

    return false;
}

// console.log(incorrectPasscodeAttempts('1111', ["1111", "4444", "9999", "3333", "8888", "2222", "7777", "0000", "6666", "7285", "5555", "1111"])); // true



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 69)  Integer To String Of Fixed Width
// Given a positive integer number and a certain length, we need to modify the given number to have a specified length. We are allowed to do
// that either by cutting out leading digits (if the number needs to be shortened) or by adding 0s in front of the original number.
// Ex:
// For number = 1234 and width = 2, the output should be integerToStringOfFixedWidth(number, width) = "34";
// For number = 1234 and width = 4, the output should be integerToStringOfFixedWidth(number, width) = "1234";
// For number = 1234 and width = 5, the output should be integerToStringOfFixedWidth(number, width) = "01234".
function integerToStringOfFixedWidth(number, width) {
    let stringifiedNum = number.toString();
    const numberWidth = stringifiedNum.length;
    const withDiff = width - numberWidth;

    if (numberWidth < width){
        let padStart = '';
        for (let i = 0; i < withDiff; i++){
            padStart = padStart.concat('0')
        }

        return padStart.concat(stringifiedNum);
    }

    if (numberWidth > width) {
        let diff = stringifiedNum.length - width;
        return stringifiedNum.substring(diff, stringifiedNum.length);
    }

    return stringifiedNum;
}

// console.log(integerToStringOfFixedWidth(1234, 2)); // 34
// console.log(integerToStringOfFixedWidth(1234, 4)); // 1234
// console.log(integerToStringOfFixedWidth(1234, 5)); // 01234



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 70)  Incremental Backups
// One of the easiest ways to back up files is with an incremental backup. This method only backs up files that have changed since the last backup.
// You are given a list of changes that were made to the files in your database, where for each valid i, changes[i][0] is the timestamp
// of the time the change was made, and changes[i][1] is the file id.
// Knowing the timestamp of the last backup lastBackupTime, your task is to find the files which should be included in the next backup.
// Return the ids of the files that should be backed up as an array sorted in ascending order.
// Ex:
// For lastBackupTime = 461620205 and
// changes = [ [461620203, 1], [461620204, 2], [461620205, 6], [461620206, 5], [461620207, 3], [461620207, 5], [461620208, 1] ]
// the output should be incrementalBackups(lastBackupTime, changes) = [1, 3, 5].
// Here's how the answer is calculated:
// File with id = 1 was changed at 461620203 and 461620208, and since the last backup was at 461620205, it should be included in the next backup.
// File with id = 2 was changed only at 461620204, so there's no need to back it up. File with id = 3 was changed at 461620207,
// so it should be backed up next time. File with id = 5 was changed at 461620206 and 461620207, so it should be included in the new backup as well.
// File with id = 6 was changed at 461620205, so it can be ignored.
function incrementalBackups(lastBackupTime, changes) {
    const fileIds = [];

    for (let change of changes){
        if(change[0] > lastBackupTime){
            if(!fileIds.includes(change[1])){
                fileIds.push(change[1]);
            }
        }
    }

    return fileIds.sort((id1, id2) => id1 - id2);
}

// console.log(incrementalBackups(461620205, [[461620203, 1],[461620204, 2],[461620205, 6],[461620206, 5],[461620207, 3],[461620207, 5],[461620208, 1]])); // [ 1, 3, 5 ]




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 71)  Is Lucky
// Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.
// Given a ticket number n, determine if it's lucky or not.
// Ex:
// For n = 1230, the output should be isLucky(n) = true;
// For n = 239017, the output should be isLucky(n) = false.
function isLucky(n) {
    let numTostring = n.toString();
    const half = Math.ceil(numTostring.length / 2);

    const firstHalf = numTostring.split('').splice(0, half).map(Number).reduce((num1, num2) => num1 + num2);
    const secondHalf = numTostring.split('').splice(-half).map(Number).reduce((num1, num2) => num1 + num2);

    if(firstHalf === secondHalf){
        return true;
    }

    return false;
}

// console.log(isLucky(1230)); // true
// console.log(isLucky(239017)); // false



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 72)  Is Tandem Repeat
// Determine whether the given string can be obtained by one concatenation of some string to itself.
// Ex:
// For inputString = "tandemtandem", the output should be isTandemRepeat(inputString) = true;
// For inputString = "qqq", the output should be isTandemRepeat(inputString) = false;
// For inputString = "2w2ww", the output should be isTandemRepeat(inputString) = false.
function isTandemRepeat(inputString) {
    const half = inputString.length / 2;
    if(half % 2 === 0){
        if(inputString.slice(0, half) === inputString.slice(-half)){
            return true;
        }
    }
    return false;
}

// console.log(isTandemRepeat('tandemtandem')); // true
// console.log(isTandemRepeat('qqq')); // false
// console.log(isTandemRepeat('2w2ww')); // false



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 73)  Largest of Four
// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
// Ex:
// largestOfFour([ [4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) returns [5, 27, 39, 1001];
// largestOfFour([ [4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) returns [9, 35, 97, 1000000];
function largestOfFour(nums) {
    let res = [];

    for (let num of nums){
        res.push(Math.max(...num));
    }

    return res;
}

// console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) ); // [ 5, 27, 39, 1001 ]
// console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]])); // [ 9, 35, 97, 1000000 ]



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 74)  Largest Number
// For n = 2, the output should be largestNumber(n) = 99.
function largestNumber(n) {
    // let largestNum = '';
    // for(let i = 0; i < n; i++){
    //     largestNum = largestNum.concat('9');
    // }
    // return parseInt(largestNum); // my solution

    let word = '9'.repeat(n);
    return parseInt(word);
}

// console.log(largestNumber(2)); // 99



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 75)  Late Ride
// One night you go for a ride on your motorcycle. At 00:00 you start your engine, and the built-in timer automatically
// begins counting the length of your ride, in minutes. Off you go to explore the neighborhood.
// When you finally decide to head back, you realize there's a chance the bridges on your route home are up, leaving you stranded!
// Unfortunately, you don't have your watch on you and don't know what time it is. All you know thanks to the bike's timer is that n minutes have passed since 00:00.
// Using the bike's timer, calculate the current time. Return an answer as the sum of digits that the digital timer in the format hh:mm would show.
// Ex:
// For n = 240, the output should be lateRide(n) = 4.
// Since 240 minutes have passed, the current time is 04:00. The digits sum up to 0 + 4 + 0 + 0 = 4, which is the answer.
// For n = 808, the output should be lateRide(n) = 14.
// 808 minutes mean that it's 13:28 now, so the answer should be 1 + 3 + 2 + 8 = 14.
function lateRide(n) {
    //return Math.ceil(n / 60); // my solution

    const hours = Math.floor(n / 60);
    const minutes = n % 60;
    const time = hours.toString().concat(minutes.toString()).split('').map((char) =>
        parseInt(char)
    );

    return time.reduce((a, b) => a + b);
}

// console.log(lateRide(240)); // 4
// console.log(lateRide(808)); // 14



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 76)  Launch Sequence Checker
// The master launch sequence consists of several independent sequences for different systems. Your goal is to verify that all the
// individual system sequences are in strictly increasing order. In other words, for any two elements i and j (i < j) of the master
// launch sequence that belong to the same system (having systemNames[i] = systemNames[j]), their values should be in strictly increasing order (i.e. stepNumbers[i] < stepNumbers[j]).
// Ex:
// For systemNames = ["stage_1", "stage_2", "dragon", "stage_1", "stage_2", "dragon"] and stepNumbers = [1, 10, 11, 2, 12, 111],
// the output should be launchSequenceChecker(systemNames, stepNumbers) = true.
// There are three independent sequences for systems "stage_1", "stage_2", and "dragon". These sequences are [1, 2], [10, 12], and
// [11, 111], respectively. The elements are in strictly increasing order for all three.
//
// For systemNames = ["stage_1", "stage_1", "stage_2", "dragon"] and stepNumbers = [2, 1, 12, 111], the output should be launchSequenceChecker(systemNames, stepNumbers) = false.
// There are three independent sequences for systems "stage_1", "stage_2", and "dragon". These sequences are [2, 1], [12], and [111],
// respectively. In the first sequence, the elements are not ordered properly.
function launchSequenceChecker(systemNames, stepNumbers) {
    const launchCode = {};

    for(let i = 0; i < systemNames.length; i++){
        if(launchCode.hasOwnProperty(systemNames[i])){
            if(launchCode[systemNames[i]] >= stepNumbers[i]){
                return false;
            }
            launchCode[systemNames[i]] = stepNumbers[i];
        }else{
            launchCode[systemNames[i]] = stepNumbers[i];
        }
    }
    return true;
}

// console.log(launchSequenceChecker(["stage_1", "stage_2", "dragon", "stage_1", "stage_2", "dragon"], [1, 10, 11, 2, 12, 111])); // true
// console.log(launchSequenceChecker(["stage_1", "stage_1", "stage_2", "dragon"], [2, 1, 12, 111])); // false



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 77)  Longest Digits Prefix
// Given a string, output its longest prefix which contains only digits.
// Example
// For inputString="123aa1", the output should be longestDigitsPrefix(inputString) = "123".
function longestDigitsPrefix(inputString) {
    // let res = ''
    // for (let i = 0; i < inputString.length; i++){
    //     if(inputString.match(/\d+/)[i] !== undefined){
    //         res = inputString.match(/\d+/)[i];
    //     }
    // }
    // return res; // my solution

    let prefix = '';
    for (let char of inputString){
        const num = parseInt(char);
        if(isNaN(num)){
            break;
        }
        prefix += char;
    }
    return prefix;
}

// console.log(longestDigitsPrefix('123aa1')); // 123



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 78)  Make Array Consecutive 2
// Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size.
// Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the
// previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.
// Ex:
// For statues = [6, 2, 3, 8], the output should be makeArrayConsecutive2(statues) = 3.
// Ratiorg needs statues of sizes 4, 5 and 7.
function makeArrayConsecutive2(statues) {
    let res = 0;
    const sortedStatues = statues.sort();
    const min = sortedStatues[0];
    const max = sortedStatues[statues.length - 1];

    for (let i = min; i < max; i++){
        if(!statues.includes(i) ){
            res++;
        }
    }

    return res;
}

// console.log(makeArrayConsecutive2([6, 2, 3, 8])); // 3



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 79)  Matrix Elements Sum
// After becoming famous, CodeBots decided to move to a new building and live together. The building is represented by a rectangular matrix
// of rooms, each cell containing an integer - the price of the room. Some rooms are free (their cost is 0), but that's probably because
// they are haunted, so all the bots are afraid of them. That is why any room that is free or is located anywhere below a free room in the same column is not considered suitable for the bots.
// Help the bots calculate the total price of all the rooms that are suitable for them.
// Ex:
// For matrix = [[0, 1, 1, 2],[0, 5, 0, 0],[2, 0, 3, 3]] the output should be matrixElementsSum(matrix) = 9.
// Here's the rooms matrix with unsuitable rooms marked with 'x': [[x, 1, 1, 2],[x, 5, x, x],[x, x, x, x]] Thus, the answer is 1 + 5 + 1 + 2 = 9.
function matrixElementsSum(matrix) {
    // let res = []
    // for (let i = 0; i < matrix.length - 1; i++){
    //     res.push(matrix[i]);
    // }
    // return res.flat().reduce((a, b) => a+ b); // my solution

    let priceTotal = 0;
    const bannedIndex = [];
    for(let i = 0; i < matrix.length; i++){
        for (let j = 0; j < matrix[i].length; j++){
            if(matrix[i][j] === 0){
                bannedIndex.push(j);
            }else if(!bannedIndex.includes(j)) {
                priceTotal += matrix[i][j];
            }
        }
    }

    return priceTotal;
}

// console.log(matrixElementsSum([[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]])); // 9



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 80)  Max Multiple
// Given a divisor and a bound, find the largest integer N such that:
// N is divisible by divisor.
// N is less than or equal to bound.
// N is greater than 0.
// It is guaranteed that such a number exists.
// Ex:
// For divisor = 3 and bound = 10, the output should be maxMultiple(divisor, bound) = 9.
// The largest integer divisible by 3 and not larger than 10 is 9.
function maxMultiple(divisor, bound) {
    let remainder = bound % divisor;
    return bound - remainder; // my solution
}

// console.log(maxMultiple(3,10));



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 81)  Missing Letters
// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.
// Ex:
// missingLetters("abce") should return "d".
// missingLetters("abcdefghjklmno") should return "i".
// missingLetters("abcdefghijklmnopqrstuvwxyz") should return undefined.
function missingLetters(str) {
    let compare = str.charCodeAt(0);
    let missing;

    str.split('').map((char, i) => {
        if(str.charCodeAt(i) === compare){
            ++compare;
        }else{
            missing = String.fromCharCode(compare);
        }
    })
    //console.log(String.fromCharCode(65, 66, 67));
    return missing;
}

// console.log(missingLetters("bce")); // d
// console.log(missingLetters("abce")); // d
// console.log(missingLetters("abcdefghjklmno")); // i
// console.log(missingLetters("abcdefghijklmnopqrstuvwxyz")); // undefined



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 82)  New Numeral System
// Your Informatics teacher at school likes coming up with new ways to help you understand the material. When you started studying
// numeral systems, he introduced his own numeral system, which he's convinced will help clarify things. His numeral system has base 26,
// and its digits are represented by English capital letters - A for 0, B for 1, and so on.
// The teacher assigned you the following numeral system exercise: given a one-digit number, you should find all unordered pairs of one-digit numbers whose values add up to the number.
// Ex:
// For number = 'G', the output should be newNumeralSystem(number) = ["A + G", "B + F", "C + E", "D + D"].
// Translating this into the decimal numeral system we get: number = 6, so it is ["0 + 6", "1 + 5", "2 + 4", "3 + 3"].
function newNumeralSystem(number) {
    const numerals = [];
    let startCharCounts = 65;
    let endCharCount = number.charCodeAt(0); // which is 71

    while (startCharCounts <= endCharCount){
        const numeral = `${String.fromCharCode(startCharCounts)} + ${String.fromCharCode(endCharCount)}`;
        numerals.push(numeral);
        startCharCounts++;
        endCharCount--;
    }
    return numerals;
}

// console.log(newNumeralSystem('G')); // [ 'A + G', 'B + F', 'C + E', 'D + D' ]



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 83)  Palindrome Rearranging
// Given a string, find out if its characters can be rearranged to form a palindrome.
// Ex:
// For inputString = "aabb", the output should be palindromeRearranging(inputString) = true.
// We can rearrange "aabb" to make "abba", which is a palindrome.
function palindromeRearranging(inputString) {
    // const chars = inputString.split('');
    // const charCount = {};
    // let oddCount = 0;
    //
    // for(let char of chars){
    //     if(charCount.hasOwnProperty(char)){
    //         charCount[char]++;
    //     }else{
    //         oddCount[char] = 1;
    //     }
    // }
    //
    // for(let key in charCount){
    //     if(charCount[key] % 2 !== 0){
    //         oddCount++;
    //     }
    // }
    //
    // return oddCount > 1 ? false : true;


    let odd = 0;
    let arr = inputString.split('');
    let el;
    let pos;
    while (arr.length) {
        el = arr.pop();
        pos = arr.indexOf(el);
        if (pos < 0) {
            odd++;
        } else {
            arr.splice(pos,1);
        }
    }

    return odd < 2; // my solution. tutorial solution doesn't works
}

 // console.log(palindromeRearranging('aabb')); // true
 // console.log(palindromeRearranging('abs')); // false
 // console.log(palindromeRearranging('abbseee')); // false



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 84)  Pages Numbering with Ink
// You work in a company that prints and publishes books. You are responsible for designing the page numbering mechanism in the printer.
// You know how many digits a printer can print with the leftover ink. Now you want to write a function to determine what the last page of
// the book is that you can number given the current page and numberOfDigits left. A page is considered numbered if it has the full number
// printed on it (e.g. if we are working with page 102 but have ink only for two digits then this page will not be considered numbered).
// It's guaranteed that you can number the current page, and that you can't number the last one in the book.
// Ex:
// For current = 1 and numberOfDigits = 5, the output should be pagesNumberingWithInk(current, numberOfDigits) = 5.
// The following numbers will be printed: 1, 2, 3, 4, 5.
// There are three independent sequences for systems "stage_1", "stage_2", and "dragon". These sequences are [1, 2], [10, 12], and [11, 111],
// respectively. The elements are in strictly increasing order for all three.
// For current = 21 and numberOfDigits = 5, the output should be pagesNumberingWithInk(current, numberOfDigits) = 22.
// The following numbers will be printed: 21, 22.
// For current = 8 and numberOfDigits = 4, the output should be pagesNumberingWithInk(current, numberOfDigits) = 10.
// The following numbers will be printed: 8, 9, 10.
function pagesNumberingWithInk(current, numberOfDigits) {
    while (numberOfDigits >= current.toString().length){
        numberOfDigits -= current.toString().length;

        if(numberOfDigits >= current.toString().length){
            current++;
        }
    }

    return current;
}

// console.log(pagesNumberingWithInk(1, 5)); // 5
// console.log(pagesNumberingWithInk(21, 5)); // 22
// console.log(pagesNumberingWithInk(8, 4)); // 10



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 85)  Pig Latin
// Translate the provided string to pig latin.
// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
// If a word begins with a vowel you just add "way" to the end.
// Input strings are guaranteed to be English words in all lowercase.
// Ex:
// pigLatin("glove") should return "oveglay".
// pigLatin("eight") should return "eightway".
function pigLatin(str){
    const letters = str.split('');
    const vowelRegex = /[aeiou]/;

    if(vowelRegex.test(str[0])){
        return str + 'way';
    }

    while (true){
        if(!vowelRegex.test(letters[0])){
            letters.push(letters.splice(0, 1)[0]);
        }else{
            break;
        }
    }

    str = letters.join('') + 'ay';

    return str;
}

// console.log(pigLatin("glove")); // oveglay
// console.log(pigLatin("eight")); // eightway



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 86)  Pro Categorization
// Thumbtack helps Professionals (Pros) grow their business by identifying new customers. Upon registering on Thumbtack, a Pro specifies which
// categories of services they provide. To help match customer requests with qualified Pros, Thumbtack maintains a list of Pros grouped by service categories.
// Given a list of pros and their category preferences, return the list of Pros for each category.
// Ex:
// For pros = ["Jack", "Leon", "Maria"] and
// preferences = [ ["Computer repair", "Handyman", "House cleaning"], ["Computer lessons", "Computer repair", "Data recovery service"], ["Computer lessons", "House cleaning"]]
// the output should be
// proCategorization(pros, preferences) = [ [ ["Computer lessons"], ["Leon", "Maria"]], [ ["Computer repair"], ["Jack", "Leon"]], [ ["Data recovery service"],
// ["Leon"]], [ ["Handyman"], ["Jack"]], [ ["House cleaning"], ["Jack", "Maria"]]]
function proCategorization(pros, preferences) {
    let prosPreferences = [];
    let prosPrefs = [];

    for (let i = 0; i < pros.length; i++){
        for (let j = 0; j < preferences[i].length; j++){
            if(prosPreferences.hasOwnProperty(preferences[i][j])){
                prosPreferences[preferences[i][j]].push(pros[i]);
            }else{
                prosPreferences[preferences[i][j]] = [pros[i]]
            }
        }
    }

    for (const prop in prosPreferences){
        prosPrefs.push([[prop], [...prosPreferences[prop]]])
    }

    prosPrefs = prosPrefs.sort((pref1, pref2) => {

        const pref1Lower = pref1[0][0].toLowerCase();
        const pref2Lower = pref2[0][0].toLowerCase();

        if(pref1Lower > pref2Lower){
            return 1;
        }

        if(pref1Lower < pref2Lower){
            return -1;
        }

        return 0;
    })

    return prosPrefs;
}

// console.log(proCategorization(["Jack", "Leon", "Maria"], [["Computer repair", "Handyman", "House cleaning"], ["Computer lessons", "Computer repair", "Data recovery service"],["Computer lessons", "House cleaning"]]));



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 87)  Proper Noun Correction
// Proper nouns always begin with a capital letter, followed by small letters.
// Correct a given proper noun so that it fits this statement.
// Example
// For noun = "pARiS", the output should be properNounCorrection(noun) = "Paris";
// For noun = "John", the output should be properNounCorrection(noun) = "John".
function properNounCorrection(noun) {
    const firstChar = noun[0].toUpperCase();
    const restOfWord = noun.slice(1, noun.length).toLowerCase();

    return firstChar.concat(restOfWord);
}

// console.log(properNounCorrection('pARiS'));
// console.log(properNounCorrection('John'));



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 88)  Rating Threshold
// In Thumbtack, users are able to rate Pros based on their experience working with them. Each rating is an integer ranging from 1 to 5,
// and all ratings are averaged to produce a single number rating for any given Pro. Those Pros who have a rating lower than a specified
// threshold are manually reviewed by Thumbtack staff to ensure high quality of service.
// You're given a list of ratings for some Pros. Find out which Pros should be manually reviewed.
// Ex:
// For threshold = 3.5 and ratings = [ [3, 4], [3, 3, 3, 4], [4]] the output should be ratingThreshold(threshold, ratings) = [1].
// Assume that we have 3 Pros that have received the following ratings: [3, 4], [3, 3, 3, 4] and [4]. Then And if threshold = 3.5
// the answer is ratingThreshold(threshold, ratings) = [1]. The first Pro's rating is 3.5, the second one's is 3.25, and the last one's is 4,
// so only the second Pro should be reviewed manually (the output is their 0-based index).
function ratingThreshold(threshold, ratings) {
    let review = [];

    for (let i = 0; i < ratings.length; i++){
        let totalRating = 0;

        ratings[i].forEach((rating) => {
            totalRating += rating;
        });

        if(totalRating / ratings[i].length < threshold){
            review.push(i);
        }
    }

    return review;
}

// console.log(ratingThreshold(3.5, [[3, 4], [3, 3, 3, 4], [4]])); // [1]



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 89)  Reflect String
// Define an alphabet reflection as follows: a turns into z, b turns into y, c turns into x, ..., n turns into m, m turns into n, ..., z turns into a.
// Define a string reflection as the result of applying the alphabet reflection to each of its characters.
// Reflect the given string.
// Ex:
// For inputString = "name", the output should be reflectString(inputString) = "mznv".
function reflectString(inputString) {
    // const chars = inputString.split('');
    // let abc = "";
    // let zxc = "";
    // let reversedLett = "";
    // let alphabet = {};
    //
    // for (let i = 0; i < 26; i++) {
    //     // printing characters
    //     abc += String.fromCharCode(i + 65).toLowerCase();
    //     zxc += String.fromCharCode(90 - i).toLowerCase();
    //
    //     alphabet[abc[i]] = zxc[i]
    // }
    //
    // chars.forEach((char) => {
    //     reversedLett += alphabet[char];
    // });
    //
    // return reversedLett; // my solution


    const chars = inputString.split('');
    const reflectionLetters = {
        a: 'z', b: 'y', c: 'x', d: 'w',
        e: 'v', f: 'u', g: 't', h: 's',
        i: 'r', j: 'q', k: 'p', l: 'o',
        m: 'n', n: 'm', o: 'l', p: 'k',
        q: 'j', r: 'i', s: 'h', t: 'g',
        u: 'f', v: 'e', w: 'd', x: 'c',
        y: 'b', z: 'a'
    };

    let reflectedWord = '';
    chars.forEach((char) => {
        reflectedWord += reflectionLetters[char];
    });

    return reflectedWord;
}

// console.log(reflectString("name")); // mznv



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 90)  Reverse a String
// Reverse the provided string.
// You may need to turn the string into an array before you can reverse it.
// Your result must be a string.
// Ex:
// reverseAString('hello') returns 'olleh';
// reverseAString('Howdy') returns 'ydwoH';
function reverseAString(str) {
    //return str.split('').reverse().join(''); // my solution

    let reversedWord = '';
    for (let i = str.length - 1; i >= 0; i--){
        reversedWord += str[i];
    }
    return reversedWord;
}

// console.log(reverseAString('hello')); // olleh
// console.log(reverseAString('Howdy')); // ydwoH



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 91)  Seats In Theater
// Your friend advised you to see a new performance in the most popular theater in the city. He knows a lot about art and his advice is usually good,
// but not this time: the performance turned out to be awfully dull. It's so bad you want to sneak out, which is quite simple, especially since the exit
// is located right behind your row to the left. All you need to do is climb over your seat and make your way to the exit.
// The main problem is your shyness: you're afraid that you'll end up blocking the view (even if only for a couple of seconds) of all the people
// who sit behind you and in your column or the columns to your left. To gain some courage, you decide to calculate the number of such people
// and see if you can possibly make it to the exit without disturbing too many people.
// Given the total number of rows and columns in the theater (nRows and nCols, respectively), and the row and column you're sitting in,
// return the number of people who sit strictly behind you and in your column or to the left, assuming all seats are occupied.
// Ex:
// For nCols = 16, nRows = 11, col = 5 and row = 3, the output should be seatsInTheater(nCols, nRows, col, row) = 96.
function seatsInTheater(nCols, nRows, col, row) {
    // return (nCols * (nCols - (col * (row - 1)))); // my solution

    const colDiff = nCols - col + 1;
    const rowDiff = nRows - row;
    return colDiff * rowDiff;
}

// console.log(seatsInTheater(16, 11, 5, 3)); // 96



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 92)  Seek and Destroy
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments.
// Remove all elements from the initial array that are of the same value as these arguments.
// Ex:
// seekAndDestroy([3, 5, 1, 2, 2], [2, 3, 5]) should return [1]
// seekAndDestroy([1, 2, 3, 5, 1, 2, 3], [2, 3]) should return [1, 5, 1]
function seekAndDestroy(arr1, arr2) {
    // let res = [];
    //
    // for (let i = 0; i < arr1.length; i++){
    //     if(!arr2.includes(arr1[i])){
    //         res.push(arr1[i])
    //     }
    // }
    //
    // return res; // my solution

    return arr1.filter((element) => !arr2.includes(element));
}

 // console.log(seekAndDestroy([3, 5, 1, 2, 2], [2, 3, 5])); // [ 1 ]
 // console.log(seekAndDestroy([1, 2, 3, 5, 1, 2, 3], [2, 3])); // [ 1, 5, 1 ]



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 93)  Shape Area
// Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.
// A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained by taking the n - 1-interesting polygon
// and appending 1-interesting polygons to its rim, side by side. You can see the 1-, 2-, 3- and 4-interesting polygons in the picture below.
// Ex:
// For n = 2, the output should be shapeArea(n) = 5;
// For n = 3, the output should be shapeArea(n) = 13.
function shapeArea(n) {
    let area = 1;

    for (let i = 0; i < n; i++){
        area += 4 * i;
    }

    return area;
}

// console.log(shapeArea(2)); // 5
// console.log(shapeArea(3)); // 13



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 94)  Sort By Height
// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people
// by their heights in a non-descending order without moving the trees.
// Ex:
// For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].
function sortByHeight(a) {
    const arr2 = a.filter((element) => {
        if(element !== -1){
            return element;
        }
    }).sort((num1, num2) => num1 - num2);

    let indexVal = 0;

    for (let i = 0; i < a.length; i++){
        if(a[i] !== -1){
            a[i] = arr2[indexVal];
            indexVal++;
        }
    }

    return a;
}

// console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 95)  Sort By Length
// Given an array of strings, sort them in the order of increasing lengths. If two strings have the same length, their relative order must be the same as in the initial array.
// Ex:
// For inputArray = ["abc", "", "aaa", "a", "zz"]
// the output should be sortByLength(inputArray) = ["", "a", "zz", "abc", "aaa"]
function sortByLength(inputArray) {
    return inputArray.sort((str1, str2) => str1.length - str2.length);
}

// console.log(sortByLength(["abc", "", "aaa", "a", "zz"]));



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 96)  Stolen Lunch
// When you recently visited your little nephew, he told you a sad story: there's a bully at school who steals his lunch every day, and locks it away in his locker.
// He also leaves a note with a strange, coded message. Your nephew gave you one of the notes in hope that you can decipher it for him. And you did:
// it looks like all the digits in it are replaced with letters and vice versa. Digit 0 is replaced with 'a', 1 is replaced with 'b' and so on, with digit 9 replaced by 'j'.
// The note is different every day, so you decide to write a function that will decipher it for your nephew on an ongoing basis.
// Example For note = "you'll n4v4r 6u4ss 8t: cdja", the output should be stolenLunch(note) = "you'll never guess it: 2390".
function stolenLunch(note) {
    const chars = note.split('');
    let translatedMessage = '';
    const letters = {
        a: '0', b: '1', c: '2', d: '3', e: '4',
        f: '5', g: '6', h: '7', i: '8', j: '9',
        0: 'a', 1: 'b', 2: 'c', 3: 'd', 4: 'e',
        5: 'f', 6: 'g', 7: 'h', 8: 'i', 9: 'j'
    }
    
    for (let char of chars){
        translatedMessage += letters.hasOwnProperty(char) ? letters[char] : char;
    }

    return translatedMessage;
}

// console.log(stolenLunch("you'll n4v4r 6u4ss 8t: cdja"));



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 97)  Strings Construction
// How many strings equal to a can be constructed using letters from the string b? Each letter can be used only once and in one string only.
// Example For a = "abc" and b = "abccba", the output should be stringsConstruction(a, b) = 2.
// We can construct 2 strings a with letters from b.
function stringsConstruction(a, b) {
    const aCount = getAlphabetCount(a);
    const bCount = getAlphabetCount(b);
    const counts = [];

    for(let char in aCount){
        if(bCount.hasOwnProperty(char)){
            counts.push(Math.floor(bCount[char] / aCount[char]));
        }else{
            return 0;
        }
    }
    return Math.min(...counts);


    // let arr = b.split('').map( x => a.split('').filter(y => y === x)).flat()
    // return arr.length / a.length // my solution is best
}

function getAlphabetCount(word){
    const chars = word.split("");
    const alphabetCount = {};

    chars.forEach((char) => {
        if(alphabetCount.hasOwnProperty(char)){
            alphabetCount[char]++;
        }else{
            alphabetCount[char] = 1
        }
    });
    return alphabetCount;
}

// console.log(stringsConstruction('abc', 'abccba'));



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 98)  Sum All Prime Numbers
// Sum all the prime numbers up to and including the provided number.
// A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.
// The provided number may not be a prime.
// Ex:
// sumAllPrimes(10) should return 17
// sumAllPrimes(977) should return 73156
function sumAllPrimes(num) {
    let total = 0;

    for (let i = 2; i < num; i++){
        for (let j = 2; j <= i; j++) {
            if (i === j) {
                total += i;
            }

            if(i % j === 0){
                break;
            }
        }
    }

    return total;
}

// console.log(sumAllPrimes(10));
// console.log(sumAllPrimes(977));



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 99)  Sum Odd Fibonacci Numbers
// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers.
// The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
// Ex:
// sumOddFibonacciNums(10) should return 10
// sumOddFibonacciNums(1000) should return 1785
// sumOddFibonacciNums(4000000) should return 4613732
function sumOddFibonacciNums(num) {
    let res = 0;
    let previous = 0;
    let current = 1;

    while (current <= num){
        if(current % 2 !== 0){
            res += current;
        }

        const newCurrent = current + previous;
        previous = current;
        current = newCurrent;
    }

    return res;
}

// console.log(sumOddFibonacciNums(1000)); // 1785
// console.log(sumOddFibonacciNums(4000000)); // 4613732
// console.log(sumOddFibonacciNums(10)); // 10



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 100)  Square Digits Sequence
// Consider a sequence of numbers a0, a1, ..., an, in which an element is equal to the sum of squared digits of the previous element.
// The sequence ends once an element that has already been in the sequence appears again.
// Given the first element a0, find the length of the sequence.
// Ex:
// For a0 = 16, the output should be squareDigitsSequence(a0) = 9. Here's how elements of the sequence are constructed:
// a0 = 16
// a1 = 1^2 + 6^2 = 37
// a2 = 3^2 + 7^2 = 58
// a3 = 5^2 + 8^2 = 89
// a4 = 8^2 + 9^2 = 145
// a5 = 1^2 + 4^2 + 52 = 42
// a6 = 4^2 + 2^2 = 20
// a7 = 2^2 + 0^2 = 4
// a8 = 4^2 = 1^6, which has already occurred before (a0)
// Thus, there are 9 elements in the sequence. For a0 = 103, the output should be squareDigitsSequence(a0) = 4.
// The sequence goes as follows: 103 -> 10 -> 1 -> 1, 4 elements altogether.
function squareDigitsSequence(a0) {
    let count = 1;
    const uniqueNums = [a0];

    while (true){
        count++;
        a0 = digitPower(a0);

        if(uniqueNums.includes(a0)){
            return count;
        }
        uniqueNums.push(a0);
    }

    return count;
}

function digitPower(num){
    const digits = num.toString().split('').map((element) => parseInt(element) ** 2);
    const sum = digits.reduce((a, b) => a + b);

    return sum;
}


// console.log(squareDigitsSequence(16)); // 9
// console.log(squareDigitsSequence(103)); // 4



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 101)  Switch Lights
// N candles are placed in a row, some of them are initially lit. For each candle from the 1st to the Nth the following algorithm is applied:
// if the observed candle is lit then states of this candle and all candles before it are changed to the opposite. Which candles will remain
// lit after applying the algorithm to all candles in the order they are placed in the line?
// Ex:
// For a = [1, 1, 1, 1, 1], the output should be switchLights(a) = [0, 1, 0, 1, 0].
// Check out the image below for better understanding:
// For a = [0, 0], the output should be switchLights(a) = [0, 0].
// The candles are not initially lit, so their states are not altered by the algorithm.
function switchLights(a) {
    let originalLights = [...a];

    for(let i = 0; i < a.length; i++){
        if(a[i] === 1){
            originalLights = swapLights(originalLights, i)
        }
    }

    return originalLights;
}

function swapLights(lights, currIndex){
    for (let i = 0; i < currIndex; i++){
        lights[i] = lights[i] === 1 ? 0 : 1;
    }
    lights[currIndex] = 0;

    return lights;
}

// console.log(switchLights([1, 1, 1, 1, 1])); // [ 0, 1, 0, 1, 0 ]
// console.log(switchLights([0, 0])); // [ 0, 0 ]



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 102)  Sum of Two
// You have two integer arrays, a and b, and an integer target value v. Determine whether there is a pair of numbers, where one number is taken
// from a and the other from b, that can be added together to get a sum of v. Return true if such a pair exists, otherwise return false.
// Example For a = [1, 2, 3], b = [10, 20, 30, 40], and v = 42, the output should be sumOfTwo(a, b, v) = true.
function sumOfTwo(a, b, v) {
    // let num = []
    // for (let i = 0; i < b.length; i++){
    //     num.push(v - b[i])
    // }
    //
    // let arr = a.concat(num).sort((a, b) => a - b);
    //
    // return arr.some(x => arr.indexOf(x) !== arr.lastIndexOf(x)); // check for duplicates in single array. my solution

    const hashMap = {};
    for (let num of a){
        const diff = v - num;
        hashMap[diff] = diff;
    }

    for (let num of b){
        if(hashMap.hasOwnProperty(num)){
            return true;
        }
    }
    return false
}

// console.log(sumOfTwo([1, 4, 3], [10, 20, 30, 40], 42));



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 103)  Tasks Types
// You have some tasks in your Asana account. For each ith of them you know its deadlines i, which is the last day by which it should be completed.
// As you can see in your calendar, today's date is day. Asana labels each task in accordance with its due date:
// If the task is due today or it's already overdue, it is labeled as Today;
// If the task is due within a week but not today - that is, its deadline is somewhere between day + 1 and day + 7 both inclusive - it is labeled as Upcoming;
// All other tasks are labeled as Later;
// Given an array of deadlines and today's date day, your goal is to find the number of tasks with each label type and return it as an array with the
// format [Today, Upcoming, Later], where Today, Upcoming and Later are the number of tasks that correspond to that label.
// Ex:
// For deadlines = [1, 2, 3, 4, 5] and day = 2, the output should be tasksTypes(deadlines, day) = [2, 3, 0].
// Today is day 2, so tasks with deadlines at 1 and 2 are labeled as Today. The other three tasks should be completed within a week, so they
// should be labeled as Upcoming. There are no tasks labeled as Later.
// For deadlines = [1, 2, 4, 2, 10, 3, 1, 4, 5, 4, 9, 8] and day = 1, the output should be tasksTypes(deadlines, day) = [2, 8, 2].
// Today is day 1, which means that the two tasks with a deadline of 1 are labeled as Today. Tasks with deadlines 10 and 9 are labeled as Later,
// since their deadlines are more than 7 days ahead. The other eight tasks are labeled as Upcoming.
function tasksTypes(deadlines, day) {
    let today = 0, upcoming = 0, later = 0;

    // for (let i = 0; i < deadlines.length; i++){
    //     if(deadlines[i] < 7 && deadlines[i] <= day){
    //         today++;
    //     }else{
    //         upcoming++;
    //     }
    //     if(deadlines[i] > day + 7){
    //         later++;
    //         upcoming--;
    //     }
    // } // my solution

    deadlines.forEach((dedline) => {
        if(dedline <= day){
            today++;
        }else if(dedline >= day + 1 && dedline <= day + 7){
            upcoming++;
        }else {
            later++;
        }
    })

    return [today, upcoming, later];
}

// console.log(tasksTypes([1, 2, 3, 4, 5], 2)); // [ 2, 3, 0 ]
// console.log(tasksTypes([1, 2, 4, 2, 10, 3, 1, 4, 5, 4, 9, 8], 1)); // [ 2, 8, 2 ]



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 104)  Unique Digit Products
// Let's call product(x) the product of x's digits. Given an array of integers a, calculate product(x) for each x in a, and return the number of distinct results you get.
// Ex:
// For a = [2, 8, 121, 42, 222, 23], the output should be uniqueDigitProducts(a) = 3.
// Here are the products of the array's elements:
// 2: product(2) = 2; 8: product(8) = 8; 121: product(121) = 1 * 2 * 1 = 2; 42: product(42) = 4 * 2 = 8; 222: product(222) = 2 * 2 * 2 = 8; 23:
// product(23) = 2 * 3 = 6. As you can see, there are only 3 different products: 2, 6 and 8.
function uniqueDigitProducts(a) {
    const res = [];

    a.forEach((num) => {
        const product = getDigitProd(num);

        if(!res.includes(product)){
            res.push(product)
        }
    })

    return res;
}

function getDigitProd(num){
    const digits = num.toString().split('');
    let product = 1;

    digits.forEach((digit) => {
        product *= parseInt(digit);
    })
    return product;
}

// console.log(uniqueDigitProducts([2, 8, 121, 42, 222, 23])); // [ 2, 8, 6 ]



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 105)  Valid Time
// Check if the given string is a correct time representation of the 24-hour clock.
// Ex:
// For time = "13:58", the output should be validTime(time) = true;
// For time = "25:51", the output should be validTime(time) = false;
// For time = "02:76", the output should be validTime(time) = false.
function validTime(time) {
    // let spl = time.split(':');
    // return parseInt(spl[0]) > 24 || parseInt(spl[1]) > 59 ? false : true; // my solution

    const [hours, minutes] = time.split(':');

    if(parseInt(hours) > 23 || parseInt(hours) < 0){
        return false;
    }
    if(parseInt(minutes) > 59 || parseInt(minutes) < 0){
        return false;
    }
    return true;
}

// console.log(validTime('13:58')); // true
// console.log(validTime('25:51')); // false
// console.log(validTime('02:76')); // false



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 106)  Introduction
