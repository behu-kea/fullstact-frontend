import renderMain from "./pages/main/main.js";
import renderAbout from "./pages/about/about.js";
import renderUser from "./pages/user/user.js";
import renderLogin from "./pages/login/login.js";

// "http://localhost:5552/api/hello"

const githubRepoName = "/fullstact-frontend";
const isLocalhost =
  window.location.host.indexOf("127.0.0.1") != -1 ||
  window.location.host.indexOf("localhost") != -1;

const localApiUrl = "http://localhost:5552/api/hello";
const prodApiUrl = "https://tomas-order-site.herokuapp.com";

window.apiUrl = isLocalhost ? localApiUrl : prodApiUrl;
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
