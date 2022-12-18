import getElement from "./src/getElement.js";
const container = getElement(".container-center");

function displayUser(person) {
  const { src, name } = person;
  container.innerHTML = `<img src="${src}" alt="random user" class="user-img" />
                  <p class="user-title">My name is</p>
                  <p class="user-value">${name}</p>
                  <div class="values-list">
                      <!-- single icon -->
                      <button class="icon" data-label="name">
                          <span class="far fa-user"></span>
                      </button>
                      <!-- end of single icon -->
                      <!-- single icon -->
                      <button class="icon" data-label="email">
                          <span class="far fa-envelope-open"></span>
                      </button>
                      <!-- end of single icon -->
                      <!-- single icon -->
                      <button class="icon" data-label="age">
                          <span class="far fa-calendar-times"></span>
                      </button>
                      <!-- end of single icon -->
                      <!-- single icon -->
                      <button class="icon" data-label="street">
                          <span class="far fa-map"></span>
                      </button>
                      <!-- end of single icon -->
                      <!-- single icon -->
                      <button class="icon" data-label="phone">
                          <span class="fas fa-phone"></span>
                      </button>
                      <!-- end of single icon -->
                      <!-- single icon -->
                      <button class="icon" data-label="password">
                          <span class="fas fa-user-lock"></span>
                      </button>
                  </div>`;
  const btns = [...document.querySelectorAll(".icon")];
  btns[0].classList.add("active");
  btns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const key = btn.dataset.label;
      const val = person[key];
      const title = getElement(".user-title");
      const value = getElement(".user-value");
      title.textContent = `my ${key} is`;
      value.textContent = val;
      removeActiveClass(btns);
      btn.classList.add("active");
    });
  });
}

function removeActiveClass(btns) {
  btns.forEach((btn) => btn.classList.remove("active"));
}
export default displayUser;
