# Fullstack frontend

This repo is supposed to provide as a boilerplate for setting up routing, authentication and interaction with an api.

The code for the backend api can be found here: https://github.com/behu-kea/tomas-order-site

It is hosted at Heroku at this url: https://tomas-order-site.herokuapp.com/

## Running the project

First make sure that [the project shown above](https://github.com/behu-kea/tomas-order-site) is running locally

Now make sure that whereever you will be running your frontend app is added to `allowedOrigins` in `src/main/java/swc3/demowebshop/config/WebConfig.java`. This will give the frontend access to the rest api.

In the `settings.js`

- Update the variable `localApiUrl` to be the url for where the project mentioned above is running locally
- Update the variable `prodApiUrl` to be the url for where the project mentioned above is running in production

To run the project locally open `index.html` with Liver Server

## Deploying

To deploy this projet use https://surge.sh/. There is a super nice video that shows how this is done!
