export const formatDate = (date: Date): string => {
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const labelsDate = `${hour}:${minutes < 10 ? `0${minutes}` : minutes}`

  return labelsDate;
}