let arr4 = [5, 12, 7, 20, 3];
let smallest = arr4[0];
for (let i = 1; i < arr4.length; i++) {
    if (arr4[i] < smallest) smallest = arr4[i];
}
alert("Smallest: " + smallest);
