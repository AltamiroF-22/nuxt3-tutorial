export default function () {
  const differenceInDays = ref(0);

  const DaysPassed = (date: Date) => {
    const currentDate = new Date().getTime();
    const differenceInMs = currentDate - date.getTime();

    differenceInDays.value = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));
  };

  return { DaysPassed, differenceInDays };
}
