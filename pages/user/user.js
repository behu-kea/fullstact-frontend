export default (userId) => {
  const userJWTToken = JSON.parse(localStorage.getItem("user"));
  if (userJWTToken) {
    const content = document.querySelector(".content");

    fetch("./pages/user/user.html")
      .then((response) => response.text())
      .then((aboutHtml) => {
        content.innerHTML = aboutHtml;

        const h1 = document.querySelector("h1");
        h1.innerText = `${userId}'s user page`;

        fetch(window.apiUrl, {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            // attaching the JWT token to the request
            Authorization: "Bearer " + userJWTToken.accessToken,
          },
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
          });
      });
  } else {
    alert("Please login to access this site");
  }
};
