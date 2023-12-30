// utils.js
export const getId = (text) => {
  if (!text.id) {
    return;
  }

  const reversedText = text.id.split("").reverse().join("");
  const indexOfDash = reversedText.indexOf("-");
  const slicedNumber = reversedText.slice(0, indexOfDash);
  const extractedNumber = slicedNumber.split("").reverse().join("");

  return parseInt(extractedNumber, 10);
};

export const createSlug = (text) => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
};
