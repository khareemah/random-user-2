function getElement(selector) {
  const element = document.querySelector(selector);
  if (element) {
    return element;
  }
  throw new Error(`the ${selector} selector does not exist`);
}
export default getElement;
