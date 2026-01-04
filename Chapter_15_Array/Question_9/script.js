let arr9 = [1, 2, 2, 3, 3, 4];
let unique = [];
for (let i = 0; i < arr9.length; i++) {
    if (!unique.includes(arr9[i])) unique.push(arr9[i]);
}
alert("Unique Array: " + unique.join(", "));
