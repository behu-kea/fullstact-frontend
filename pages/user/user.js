export default (userId) => {
  const content = document.querySelector(".content");

  fetch("./pages/user/user.html")
    .then((response) => response.text())
    .then((aboutHtml) => {
      content.innerHTML = aboutHtml;

      const h1 = document.querySelector("h1");
      h1.innerText = `${userId}'s user page`;
    });
};
