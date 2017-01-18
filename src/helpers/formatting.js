export function pad(number) {
  const num = number.toString();
  if (num.length < 2) {
    return `0${num}`;
  }
  return num;
}
export function formatTimeString(timeString) {
  const date = new Date(timeString);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  return `${pad(hours)}:${pad(minutes)}`;
}
