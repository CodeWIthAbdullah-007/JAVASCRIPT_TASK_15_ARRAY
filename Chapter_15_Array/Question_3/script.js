let arr3 = [5, 12, 7, 20, 3];
let largest = arr3[0];
for (let i = 1; i < arr3.length; i++) {
    if (arr3[i] > largest) largest = arr3[i];
}
alert("Largest: " + largest);
