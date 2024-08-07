// const calculateAverageValue = (numbers: number[]): number => {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   let averageValue = sum / numbers.length;
//   return averageValue;
// };

// console.log(calculateAverageValue([1, 2, 3]));

interface fullName {
  name: string;
  lastName: string;
}

const getFullName = (fullName: fullName): string => {
  return `${fullName.name} ${fullName.lastName}`;
};

const person = {
  name: "John",
  lastName: "Doe",
};

console.log(getFullName(person));
