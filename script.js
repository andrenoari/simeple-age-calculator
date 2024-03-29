function numberToWords(num) {
    const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (num < 10) return ones[num];
    if (num >= 11 && num < 20) return teens[num - 11];
    if (num < 100) {
        return tens[Math.floor(num / 10)] + (num % 10 ? '-' + ones[num % 10] : '');
    }
    if (num < 1000) {
        return ones[Math.floor(num / 100)] + ' hundred' + (num % 100 ? ' ' + numberToWords(num % 100) : '');
    }
    return num.toString(); // Beyond the scope, return the number as a string.
}

function calculateAge() {
    var birthdate = document.getElementById('birthdate').valueAsDate;
    var todate = document.getElementById('todate').valueAsDate;

    if (!birthdate || !todate) {
        document.getElementById('result').innerHTML = 'Please enter both dates.';
        return;
    }

    if (todate < birthdate) {
        document.getElementById('result').innerHTML = 'The "Calculate age until" date must be after the birthdate.';
        return;
    }

    var diff = todate - birthdate;
    var ageDate = new Date(diff);
    var years = ageDate.getUTCFullYear() - 1970;
    var months = ageDate.getUTCMonth();
    var days = ageDate.getUTCDate() - 1;

    var yearsInWords = numberToWords(years);
    var monthsInWords = numberToWords(months);
    var daysInWords = numberToWords(days);

    document.getElementById('result').innerHTML = `${years} (${yearsInWords}) years, ${months} (${monthsInWords}) months, and ${days} (${daysInWords})`;
}
