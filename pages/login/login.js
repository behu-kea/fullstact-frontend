export default () => {
  const content = document.querySelector(".content");

  return fetch("./pages/login/login.html")
    .then((response) => response.text())
    .then((mainHtml) => {
      content.innerHTML = mainHtml;

      const form = document.querySelector("form");
      form.addEventListener("click", (event) => {
        event.preventDefault();

        fetch(`${window.apiUrl}/api/auth/signin`, {
          method: "POST",
          mode: "cors", // no-cors, *cors, same-origin
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: document.querySelector("input.username").value,
            password: document.querySelector("input.password").value,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.accessToken) {
              // Saving the JWT to local storage
              localStorage.setItem("user", JSON.stringify(data));
              window.router.navigate(`/user/${data.id}`);
            }
          });
      });
    });
};
