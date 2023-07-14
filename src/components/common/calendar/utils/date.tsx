export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function getMonthString(month: number, short = false): string {
  if (short) return months[month];
  return months[month];
}

export function convertHour(hour: number) {
  if (hour < 10) return `0${hour}:00`;
  return `${hour}:00`;
}
