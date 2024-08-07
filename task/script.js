// const calculateAverageValue = (numbers: number[]): number => {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   let averageValue = sum / numbers.length;
//   return averageValue;
// };
var getFullName = function (fullName) {
    return "".concat(fullName.name, " ").concat(fullName.lastName);
};
var person = {
    name: "John",
    lastName: "Doe",
};
console.log(getFullName(person));
