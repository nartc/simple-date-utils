export function isBefore(date: Date, dateToCompare: Date): boolean {
  return date.getTime() < dateToCompare.getTime();
}
