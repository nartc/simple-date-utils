import { isBefore } from '../src/isBefore';

describe('isBefore', () => {
  it('should return true when date1 < date2', () => {
    const date = new Date('03/26/2020');
    const dateToCompare = new Date('03/27/2020');
    const result = isBefore(date, dateToCompare);
    expect(result).toBe(true);
  });

  it('should return false when date1 > date2', () => {
    const date = new Date('03/26/2020');
    const dateToCompare = new Date('03/25/2020');
    const result = isBefore(date, dateToCompare);
    expect(result).toBe(false);
  });
});
