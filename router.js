export default function () {
  window.router = new Navigo(window.root, { hash: true });

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
}
