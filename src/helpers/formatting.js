function parseDateString(dateString) {
  let timeComponents = dateString.split(/[: T-]/).map(parseFloat);
  timeComponents[1] -= 1;
  return new Date(...timeComponents);
}

export function pad(number) {
  const num = number.toString();
  if (num.length < 2) {
    return `0${num}`;
  }
  return num;
}
export function formatTimeString(dateString) {
  const date = parseDateString(dateString);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${pad(hours)}:${pad(minutes)}`;
}
