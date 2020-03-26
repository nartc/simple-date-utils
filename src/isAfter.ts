export function isAfter(date: Date, dateToCompare: Date): boolean {
  return date.getTime() > dateToCompare.getTime();
}
