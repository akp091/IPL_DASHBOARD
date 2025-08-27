const MONTHS_MAP = {
  JAN: "01",
  FEB: "02",
  MAR: "03",
  APR: "04",
  MAY: "05",
  JUN: "06",
  JUL: "07",
  AUG: "08",
  SEP: "09",
  OCT: "10",
  NOV: "11",
  DEC: "12",
};

export const formatDateToValidString = (dateString: string): string => {
  const [MONTH, DATE, TIME] = dateString.split(",");
  const day = DATE.trim().split(" ")[1];
  const month = MONTH.trim();
  const time = TIME.trim();
  let [hour, minute]: any = time.replace("PM", "").replace("AM", "").split(":");
  hour = parseInt(hour, 10);

  if (time.includes("PM") && hour !== 12) hour += 12;
  if (time.includes("AM") && hour === 12) hour = 0;
  const currentYear = new Date().getFullYear();
  const formatted = `${currentYear}-${MONTHS_MAP[month]}-${day.padStart(
    2,
    "0"
  )}T${hour.toString().padStart(2, "0")}:${minute}:00.000+05:30`;
  return formatted;
};

export const compareDateTime = (dateTime: string): boolean => {
  let dateInput: any = formatDateToValidString(dateTime);
  dateInput = new Date(dateInput).valueOf();
  const currentDateTime = Date.now();
  if (currentDateTime > dateInput) {
    return true;
  } else {
    return false;
  }
};
