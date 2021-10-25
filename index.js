import renderMain from "./pages/main/main.js";
import renderAbout from "./pages/about/about.js";
import renderUser from "./pages/user/user.js";
import renderLogin from "./pages/login/login.js";

const githubRepoName = "/frontend-structure";
const isLocalhost =
  window.location.host.indexOf("127.0.0.1") != -1 ||
  window.location.host.indexOf("localhost") != -1;
const root = isLocalhost ? "/" : githubRepoName;
window.router = new Navigo(root, { hash: true });

router
  .on({
    "/": () => {
      // call updatePageLinks to let navigo handle the links
      // when new links have been inserted into the dom
      renderMain().then(router.updatePageLinks);
    },
    about: () => {
      renderAbout();
    },
    login: () => {
      renderLogin();
    },
    "/user/:id/": ({ data, params }) => {
      renderUser(data.id);
    },
  })
  .resolve();

const userJWTToken = JSON.parse(localStorage.getItem("user"));
if (userJWTToken) {
  fetch("http://localhost:5552/api/hello", {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      // attaching the JWT token to the request
      Authorization: "Bearer " + userJWTToken.accessToken,
    },
  })
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
    });
}
