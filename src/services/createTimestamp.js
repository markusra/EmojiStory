export function createTimestamp() {
  const dateTime = Date.now();
  return Math.floor(dateTime / 100);
}
