//leap year function
function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            return year % 400 === 0; // Leap year if divisible by 400
        }
        return true; // Leap year
    }
    return false; // Not a leap year
}

// Example usage
const year = parseInt(prompt("Enter a year: "));
if (isLeapYear(year)) {
    console.log(`${year} is a leap year.`);
} else {
    console.log(`${year} is not a leap year.`);
}

//function for ticket price 
function getTicketPrice(age) {
    if (age <= 12) {
        return 10;
    } else if (age >= 13 && age <= 17) {
        return 15;
    } else {
        return 20;
    }
}

// Example usage
const age = parseInt(prompt("Enter your age: "));
const price = getTicketPrice(age);
console.log(`The price of your movie ticket is: $${price}`);


// function for weather
function Weather(temperature, isRaining) {
    let advice = "";
    if (temperature < 60) {
        advice = "Wear a warm coat.";
    } else if (temperature >= 60 && temperature < 75) {
        advice = "A black yeezy sweater would be great.";
    } else {
        advice = "Wear shorts and a t-shirt.";
    }
    
    if (isRaining) {
        advice += " Don't forget an umbrella!";
    }

    return advice;
}

// Example usage
const temperature = parseInt(prompt("Enter the current temperature: "));
const isRaining = prompt("Is it raining? (yes/no): ").toLowerCase() === 'yes';
console.log(Weather(temperature, isRaining));

//function for fibonacci
function fibonacci(n) {
    if (n <= 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Example usage
const n = parseInt(prompt("Enter a number to find the nth Fibonacci number: "));
console.log(`The ${n}th Fibonacci number is: ${fibonacci(n)}`);


// function for power
function power(base, exp) {
    if (exp === 0) {
        return 1;
    } else if (exp < 0) {
        return 1 / power(base, -exp);
    } else {
        return base * power(base, exp - 1);
    }
}

// Example usage
const base = parseInt(prompt("Enter the base: "));
const exp = parseInt(prompt("Enter the exponent: "));
console.log(`${base} raised to the power of ${exp} is: ${power(base, exp)}`);


// function for palindrome
function isPalindrome(s) {
    const cleaned = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase(); // Clean the string
    if (cleaned.length <= 1) {
        return true;
    }
    return cleaned[0] === cleaned[cleaned.length - 1] && isPalindrome(cleaned.slice(1, cleaned.length - 1));
}

// Example usage
const string = prompt("Enter a string to check if it's a palindrome: ");
if (isPalindrome(string)) {
    console.log(`"${string}" is a palindrome.`);
} else {
    console.log(`"${string}" is not a palindrome.`);
}
