function solution(today, terms, privacies) {
  const [todayYear, todayMonth, todayDay] = today.split(".").map(Number);

  const termDurations = {};

  terms.forEach((termString) => {
    const [term, duration] = termString.split(" ");
    termDurations[term] = Number(duration);
  });

  const getExpiredDate = (year, month, day, duration) => {
    month += duration;
    while (month > 12) {
      year++;
      month -= 12;
    }
    return [year, month, day];
  };

  const isBeforeOrEqual = (year1, month1, day1, year2, month2, day2) => {
    if (year1 < year2) return true;
    if (year1 === year2 && month1 < month2) return true;
    if (year1 === year2 && month1 === month2 && day1 <= day2) return true;
    return false;
  };

  const result = [];

  privacies.forEach((privacy, index) => {
    const [date, term] = privacy.split(" ");
    const [year, month, day] = date.split(".").map(Number);

    const [expiredYear, expiredMonth, expiredDay] = getExpiredDate(
      year,
      month,
      day,
      termDurations[term]
    );

    if (
      isBeforeOrEqual(
        expiredYear,
        expiredMonth,
        expiredDay,
        todayYear,
        todayMonth,
        todayDay
      )
    ) {
      result.push(index + 1);
    }
  });

  return result;
}
