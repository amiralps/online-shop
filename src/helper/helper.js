export const changeTitle = (str = "") => {
  document.title = str;
};

export const priceFormat = (price = "1") => {
  return `${price}000`
    .split("")
    .reverse()
    .join("")
    .match(/.{1,3}/g)
    .reverse()
    .map((i) => i.split("").reverse().join(""))
    .join(",");
};
