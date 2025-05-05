const MS_IN_SECOND = 1000;
const MS_IN_MINUTE = MS_IN_SECOND * 60;
const MS_IN_HOUR = MS_IN_MINUTE * 60;
const MS_IN_DAY = MS_IN_HOUR * 24;
const MS_IN_MONTH = MS_IN_DAY * 30.44;
const MS_IN_YEAR = MS_IN_DAY * 365.25;

export function format(duration: number) {
  const years = Math.floor(duration / MS_IN_YEAR);
  duration -= years * MS_IN_YEAR;

  const months = Math.floor(duration / MS_IN_MONTH);
  duration -= months * MS_IN_MONTH;

  const days = Math.floor(duration / MS_IN_DAY);
  duration -= days * MS_IN_DAY;

  const hours = Math.floor(duration / MS_IN_HOUR);
  duration -= hours * MS_IN_HOUR;

  const minutes = Math.floor(duration / MS_IN_MINUTE);
  duration -= minutes * MS_IN_MINUTE;

  const seconds = Math.floor(duration / MS_IN_SECOND);

  return { years, months, days, hours, minutes, seconds };
}
