import getElement from "./src/getElement.js";
import createPersonData from "./src/createPerson.js";
import displayUser from "./displayUser.js";

const btn = getElement(".btn");

const api = "https://randomuser.me/api/";

async function fetchUser() {
  const response = await fetch(api);
  const data = await response.json();
  return data;
}

async function showUser() {
  try {
    const data = await fetchUser();
    const person = createPersonData(data);
    displayUser(person);
  } catch (error) {
    console.log(error);
  }
}
btn.addEventListener("click", showUser);
window.addEventListener("DOMContentLoaded", showUser);
