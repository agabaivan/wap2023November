
function printNumbers(from, to) {
    let count = from;
    const result = setInterval(() => {
        console.log(count);
        if (count === to) {
            clearTimeout(result);
        }
        count++;
    }, 1000);
}

printNumbers(1, 10);


