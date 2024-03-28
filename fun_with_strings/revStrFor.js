someStr = "string";


function reverse(str){
    let revStr = '';
    for (i=1; i <= str.length; i++){
        revStr += str.charAt(str.length - i);

    }
    return revStr
}
console.time('for loop reverse string')
revStrFor(someStr);
console.timeEnd('for loop reverse string')
console.log(reverse(someStr));