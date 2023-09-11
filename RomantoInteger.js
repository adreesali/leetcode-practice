var romanToInt = function(s) {
    let romanNumerals = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let count = 0;
    for (let i = 0; i < s.length; i++) {
        let currentValue = romanNumerals[s[i]];
        let nextValue = romanNumerals[s[i + 1]];

        if (nextValue > currentValue) {
            count -= currentValue;
        } else {
            count += currentValue;
        }
    }
    return count;
}



// 2nd





var romanToInt = function(s) {
    let romanNumerals = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let count = 0;
    for (let i = 0; i < s.length; i++) {
        let currentValue = romanNumerals[s[i]];
        let nextValue = romanNumerals[s[i + 1]];

        if (nextValue > currentValue) {
            count -= currentValue;
        } else {
            count += currentValue;
        }
    }
    return count;
}
