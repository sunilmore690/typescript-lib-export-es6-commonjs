/**
 * Formats a date into a string using the specified format string.
 * @param date The date to format.
 * @param format The format string to use. Supported tokens: yyyy, MM, dd.
 * @returns A formatted string representation of the date.
 */
export function formatDate(date: Date, format: string): string {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
  
    return format.replace('yyyy', year.toString())
                 .replace('MM', month.toString().padStart(2, '0'))
                 .replace('dd', day.toString().padStart(2, '0'));
  }
  
  /**
   * Checks if two dates are the same day.
   * @param date1 The first date to compare.
   * @param date2 The second date to compare.
   * @returns True if the dates are the same day, false otherwise.
   */
  export function isSameDay(date1: Date, date2: Date): boolean {
    return date1.getFullYear() === date2.getFullYear()
        && date1.getMonth() === date2.getMonth()
        && date1.getDate() === date2.getDate();
  }
  
  /**
   * Returns the number of days in the specified month and year.
   * @param year The year of the month.
   * @param month The month (0-based index).
   * @returns The number of days in the specified month.
   */
  export function getDaysInMonth(year: number, month: number): number {
    return new Date(year, month + 1, 0).getDate();
  }
  
  /**
   * Adds a specified number of days to a date and returns the resulting date.
   * @param date The starting date.
   * @param days The number of days to add.
   * @returns A new Date object with the specified number of days added.
   */
  export function addDays(date: Date, days: number): Date {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }
  
  /**
   * Returns the week number of the specified date.
   * @param date The date to get the week number for.
   * @returns The week number (a number between 1 and 52 or 53).
   */
  export function getWeekNumber(date: Date): number {
    const startOfYear = new Date(date.getFullYear(), 0, 1);
    const weekNum = Math.ceil((((date.getTime() - startOfYear.getTime()) / 86400000) + startOfYear.getDay() + 1) / 7);
    return weekNum;
  }
  