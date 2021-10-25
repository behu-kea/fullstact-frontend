export default function () {
  const githubRepoName = "/fullstact-frontend";
  const isLocalhost =
    window.location.host.indexOf("127.0.0.1") != -1 ||
    window.location.host.indexOf("localhost") != -1;

  const localApiUrl = "http://localhost:5552";
  const prodApiUrl = "https://tomas-order-site.herokuapp.com";

  // when fetching data from the api we need to know what the url is
  // It is different if you are developing locally or have the site deployed
  window.apiUrl = isLocalhost ? localApiUrl : prodApiUrl;

  // The root is for the navigo router. It need to know the root route
  window.root = isLocalhost ? "/" : githubRepoName;

  if (isLocalhost) {
    const div = document.createElement("div");
    div.innerHTML = `DEVELOPMENT SITE!`;
    document.body.appendChild(div);
    console.log(33);
  }
}
