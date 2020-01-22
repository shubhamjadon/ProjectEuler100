function isLeap(year) {
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return true;
        }
    }
    else {
        return false;
    }
}
function countingSundays(firstYear, lastYear) {
    let year = 1900, totalDays = 365, totalDaysLeap = 366, day = 1, month, count = 0;
    while (year < firstYear) {
        if (isLeap(year)) {
            day = day + totalDaysLeap - 1;
            day = day % 7;
            day = day + 1;
        }
        else {
            day = day + totalDays - 1;
            day = day % 7;
            day = day + 1;
        }
        year++;
    }
    while (year <= lastYear) {
        month = 1;
        while (month <= 12) {
            if (day == 7 && month == 1) { count++; }
            if (month == 4 || month == 6 || month == 9 || month == 11) {
                day = day + 30 - 1;
                day = day % 7;
                day = day + 1;
            }
            else if (month == 2) {
                if (isLeap(year)) {
                    day = day + 29 - 1;
                    day = day % 7;
                    day = day + 1;
                }
                else {
                    day = day + 28 - 1;
                    day = day % 7;
                    day = day + 1;
                }
            }
            else {
                day = day + 31 - 1;
                day = day % 7;
                day = day + 1;
            }
            if (day == 7 && month != 12) count++;
            month++;
        }
        year++;
    }
    return count;
}