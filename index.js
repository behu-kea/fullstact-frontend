import renderMain from "./pages/main/main.js";
import renderAbout from "./pages/about/about.js";
import renderUser from "./pages/user/user.js";

const githubRepoName = "/frontend-structure";
const isLocalhost =
  window.location.host.indexOf("127.0.0.1") != -1 ||
  window.location.host.indexOf("localhost") != -1;
const root = isLocalhost ? "/" : githubRepoName;
const router = new Navigo(root, { hash: true });

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
    "/user/:id/": ({ data, params }) => {
      renderUser(data.id);
    },
  })
  .resolve();

fetch("http://localhost:5552/api/hello")
  .then((response) => response.text())
  .then((data) => console.log(data));

/*
fetch("http://localhost:5552/", {
  method: "POST",
  mode: "cors", // no-cors, *cors, same-origin
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    username: "pesekt",
    password: "12345678",
  }),
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
*/
