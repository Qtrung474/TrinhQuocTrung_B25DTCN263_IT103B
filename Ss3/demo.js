// Vòng lặp For
for (let i = 1; i <= 5; i++) {
    console.log(`Lần lặp thứ ${i}`);
    let j = 0


}
// Vòng lặp while
let j = 1
while (j < 5) {
    console.log("Lần lặp thứ", j);
    j++

}

// Vòng lặp do while

let i = 1
do {
    console.log("Lần lặp thứ", i);
    i++

} while (i <= 5);

// Vòng lặp lồng nhau

for(let i = 1 ; 1 < 6; i++){
    console.log(`Lần lặp thứ ${i} của vòng lặp bên ngoài`);
    for(let j = 1; j < 6; j++){
        console.log("Lần lặp thứ", i);
        
    }
    
}

// Một số từ khóa điểu khiển
for(let i =1; i < 6; i++){
    if ( i % 2 === 0){
        continue;
    }
    console.log("Lần nhập thứ", i);
    
}
