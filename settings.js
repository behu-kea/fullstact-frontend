export default function () {
  const githubRepoName = "/fullstact-frontend";
  const isLocalhost =
    window.location.host.indexOf("127.0.0.1") != -1 ||
    window.location.host.indexOf("localhost") != -1;

  const localApiUrl = "http://localhost:5552/api/hello";
  const prodApiUrl = "https://tomas-order-site.herokuapp.com";

  window.apiUrl = isLocalhost ? localApiUrl : prodApiUrl;
  window.root = isLocalhost ? "/" : githubRepoName;
}
