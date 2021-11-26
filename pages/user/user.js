export default (userId) => {
  const userJWTToken = JSON.parse(localStorage.getItem("user"));
  if (userJWTToken) {
    const content = document.querySelector(".content");

    fetch("./pages/user/user.html")
      .then((response) => response.text())
      .then((userHtml) => {
        content.innerHTML = userHtml;

        const h2 = document.querySelector("h2");
        h2.innerText = `${userId}'s user page`;

        fetch(`${window.apiUrl}/api/orders`, {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            // attaching the JWT token to the request
            Authorization: "Bearer " + userJWTToken.accessToken,
          },
        })
          .then((response) => response.json())
          // Yes we can do like this. The data from the api is the argument to renderOrders!
          .then(renderOrders);
      });
  } else {
    alert("Please login to access this site");
  }
};

function renderOrders(orders) {
  let ulHtml = "";
  orders.forEach((order) => {
    ulHtml += `<li>
      <div>Id: ${order.customerId}</div>
      <div>Comments: ${order.comments}</div>
    </li>`;
  });
  document.querySelector("ul.orders").innerHTML = ulHtml;
}
