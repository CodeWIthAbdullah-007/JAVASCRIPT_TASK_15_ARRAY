let arr1 = [];
for (let i = 0; i < 5; i++) {
    arr1[i] = parseInt(prompt("Enter number " + (i+1)));
}
alert("Array: " + arr1.join(", "));
