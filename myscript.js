let hot = false
let temp = 50


// if (temp > 80) {
//     console.log("The temp is > 80");
// }

if (temp>80) {
    console.log("Hot outside");
}else if (temp <= 80 && temp >= 50) {
    console.log("Average temp outside");
}else if (temp <= 50 && temp >= 32) {
    console.log("It's pretty cold out!");
} else {
    console.log("It is very cold out");
}