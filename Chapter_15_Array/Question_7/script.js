let arr7 = [10, 20, 30, 40, 50];
let searchNum = parseInt(prompt("Enter number to search"));
let found = false;
for (let i = 0; i < arr7.length; i++) {
    if (arr7[i] === searchNum) {
        found = true;
        break;
    }
}
alert(found ? searchNum + " found in array" : searchNum + " not found");
