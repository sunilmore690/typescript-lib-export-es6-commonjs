/**
 * Formats a date into a string using the specified format string.
 * @param date The date to format.
 * @param format The format string to use. Supported tokens: yyyy, MM, dd.
 * @returns A formatted string representation of the date.
 */
export declare function formatDate(date: Date, format: string): string;
/**
 * Checks if two dates are the same day.
 * @param date1 The first date to compare.
 * @param date2 The second date to compare.
 * @returns True if the dates are the same day, false otherwise.
 */
export declare function isSameDay(date1: Date, date2: Date): boolean;
/**
 * Returns the number of days in the specified month and year.
 * @param year The year of the month.
 * @param month The month (0-based index).
 * @returns The number of days in the specified month.
 */
export declare function getDaysInMonth(year: number, month: number): number;
/**
 * Adds a specified number of days to a date and returns the resulting date.
 * @param date The starting date.
 * @param days The number of days to add.
 * @returns A new Date object with the specified number of days added.
 */
export declare function addDays(date: Date, days: number): Date;
/**
 * Returns the week number of the specified date.
 * @param date The date to get the week number for.
 * @returns The week number (a number between 1 and 52 or 53).
 */
export declare function getWeekNumber(date: Date): number;
