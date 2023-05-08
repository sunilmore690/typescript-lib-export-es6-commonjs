"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWeekNumber = exports.addDays = exports.getDaysInMonth = exports.isSameDay = exports.formatDate = void 0;
/**
 * Formats a date into a string using the specified format string.
 * @param date The date to format.
 * @param format The format string to use. Supported tokens: yyyy, MM, dd.
 * @returns A formatted string representation of the date.
 */
function formatDate(date, format) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return format.replace('yyyy', year.toString())
        .replace('MM', month.toString().padStart(2, '0'))
        .replace('dd', day.toString().padStart(2, '0'));
}
exports.formatDate = formatDate;
/**
 * Checks if two dates are the same day.
 * @param date1 The first date to compare.
 * @param date2 The second date to compare.
 * @returns True if the dates are the same day, false otherwise.
 */
function isSameDay(date1, date2) {
    return date1.getFullYear() === date2.getFullYear()
        && date1.getMonth() === date2.getMonth()
        && date1.getDate() === date2.getDate();
}
exports.isSameDay = isSameDay;
/**
 * Returns the number of days in the specified month and year.
 * @param year The year of the month.
 * @param month The month (0-based index).
 * @returns The number of days in the specified month.
 */
function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}
exports.getDaysInMonth = getDaysInMonth;
/**
 * Adds a specified number of days to a date and returns the resulting date.
 * @param date The starting date.
 * @param days The number of days to add.
 * @returns A new Date object with the specified number of days added.
 */
function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}
exports.addDays = addDays;
/**
 * Returns the week number of the specified date.
 * @param date The date to get the week number for.
 * @returns The week number (a number between 1 and 52 or 53).
 */
function getWeekNumber(date) {
    const startOfYear = new Date(date.getFullYear(), 0, 1);
    const weekNum = Math.ceil((((date.getTime() - startOfYear.getTime()) / 86400000) + startOfYear.getDay() + 1) / 7);
    return weekNum;
}
exports.getWeekNumber = getWeekNumber;
//# sourceMappingURL=date.js.map