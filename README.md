### About the project

[Link to the figma-design of the project](https://www.figma.com/file/sqnNbWmKBrzElEd9Czr9gC/youtube?type=design&node-id=0%3A1&mode=design&t=m3CtNpk5rGydDPgh-1)

# ITube is a clone of the YouTube application,

which implements basic functions. There is:

- authorization system,
- home page, where video materials are displayed
- sidebar, header, search system
- ability to view the video and channel page
- ability to comment the video.

However, the goal of this project was not only to clone
YouTube, but to write a full-fledged project, with the right structure (atomic design), stylization (bootstrap, eslint,
prettier) and with clean code (husky, github branches, styled-components)

The PWA application and the backend part using the json-server are also included here.

## How to start project

1. Open a browser with protection disabled or disable the cors mode in queries somehow
2. yarn add (command)
3. yarn start (command)
4. json-server --watch db.json (command in another terminal)

### authorization system

First, you will see the login page. If you are not registered, you can use the provided link to go to the registration page and register. if there is no email in the system that you enter, then your account will be created and after receiving a notification that registration was successful, you will need to login again, where you will be redirected. After a successful login, you will be taken to the main page and your data will be stored in localStorage so that next time you do not ask for a login again

### main app logic

On the main page you can see the search bar and the logout button

And in the sidebar you can see your data and a list of channels to which you are subscribed

Also, video materials will be displayed on the main page, which you can click on

You can also search for the video material you need, watch the video in detail, as well as comment on this video and see the details of the channel

### PWA

If you enter a non-existent path, you will see page 404, after which you can go to the main page

If the Internet is disconnected, information about this will be displayed and you are asked to try to connect the Internet.

The application also includes service-workers, that perform many functions such as caching, etc.
