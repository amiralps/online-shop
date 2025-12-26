import {useEffect, useState} from "react";

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

export const resizer = (maxWidth = 900) => {
  const [result, setResult] = useState(window.innerWidth <= maxWidth)
  const resize = () => {
    const width = window.innerWidth;
    setResult(width <= maxWidth)
  }
  useEffect(() => {
    window.addEventListener("resize", () => {
      resize()
    })
    window.removeEventListener("resize", () => {
      resize()
    })
  },[])
  return result
}