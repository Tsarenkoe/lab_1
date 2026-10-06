// Завдання 1
function calculateProductTotalPrice(price, quantity) {
    return price * quantity;
}


// Завдання 2
function convertMsToTimeSpan(totalMs) {
    let hours, minutes, seconds, milliseconds;

    milliseconds = totalMs % 1000;
    let totalSeconds = Math.floor(totalMs / 1000);
    seconds = totalSeconds % 60;
    let totalMinutes = Math.floor(totalSeconds / 60);
    minutes = totalMinutes % 60;
    hours = Math.floor(totalMinutes / 60);

    return {
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        milliseconds: milliseconds
    };
}

// Завдання 3
function getNumberSignStr(number) {
    if (number > 0) {
        return "+";
    } else if (number < 0) {
        return "-";
    }
    return "";
}

// Завдання 4
function getGradeResult(score) {
    if (score < 0 || score > 100) {
        return "#ERR";
    } else if (score >= 90) {
        return "excellent";
    } else if (score >= 75) {
        return "good";
    } else if (score >= 60) {
        return "satisfactory";
    } else {
        return "unsatisfactory";
    }
}

// Завдання 5
function calculateFactorial(n) {
    if (n < 0) {
        return -1;
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Завдання 6
function calculateCartTotal(cartItems) {
    let total = 0;
    const itemCount = cartItems.length;

    for (let i = 0; i < itemCount; i++) {
        const price = cartItems[i].price;
        const quantity = cartItems[i].quantity;
        total += price * quantity; 
    }

    return total;
}

// Завдання 7

// for, оскільки кількість повторювань відома 
function getBeastNumberSum1() {
    const beastNumber = 666;
    let total = 0;

    for (let i = 1; i <= beastNumber; i++) {
        total += i;
    }

    return total;
}
function getBeastNumberSum2() {
    const beastNumber = 666;
    let total = 0;
    let i = 1;

    while (i <= beastNumber) {
        total += i;
        i++;
    }

    return total;
}
function getBeastNumberSum3() {
    const beastNumber = 666;
    let total = 0;
    let i = 1;

    do {
        total += i;
        i++;
    } while (i <= beastNumber);

    return total;
}









function getBeastNumberSum2_AnotherApproach() {
    const beastNumber = 666;
    let total = 0;
    let i = 1;

    while (true) {
        if (i > beastNumber) {
            break;
        }
        total += i;
        i++;
    }

    return total;
}

// Завдання 8
function getDivisibleNumbers(limit, divisor) {
    const result = [];
    let i = 1;

    while (true) {
        if (i > limit) {
            break;
        }

        if (i % divisor === 0) {
            result.push(i);
        }

        i++;
    }

    return result;
}

// Завдання 9
function getSameDigitNumbers(limit) {
    const results = [];

    for (let i = 1; i < limit; i++) {
        const str = i.toString();
        let allSame = true;
        
        for (let j = 1; j < str.length; j++) {
            if (str[j] !== str[0]) {
                allSame = false;
                break;
            }
        }

        if (allSame) {
            results.push(i);
        }
    }

    return results;
}