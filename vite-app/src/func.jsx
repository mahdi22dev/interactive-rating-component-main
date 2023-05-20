let number = 1;
let indexs;

export const bringindex = (index) => {
  indexs = index;
};
export const newkey = () => {
  return <>You selected {indexs + 1} out of 5</>;
};
