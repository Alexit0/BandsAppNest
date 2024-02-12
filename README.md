<p align="center">

  <h1>Fleet Desktop Application (back-end )</h1>
  <h3> (Built with NestJS) </h3>
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo"/></a>
</p>

<!-- ABOUT THE PROJECT -->

## About The Project

Bandsapp is an application allowing you to manage a database of musicians and bands they play their duties in. CRUD operations are available, more functionality is coming eventually.

More about app functionality can find [here](https://github.com/Alexit0/BandsAppReact)

### Built With

[![Node.js][Node.js-badge]][Node.js-url] <br>
[![Nest.js][Nest.js-badge]][Nest.js-url] <br>
[![SQLite][SQLite-badge]][SQLite-url] <br>

## Installation

```bash
$ npm install
```

## Running the app

1. Follow all the steps on [Spotify for Developers Website](https://developer.spotify.com/documentation/web-api/tutorials/getting-started) and obtain your token. This is in order to load band pictures from Spotify database.

2. Create .env file in the main folder containing the variable storing your connection string:

```
CLIENT_ID='your client id'
```
```
CLIENT_SECRET='your client secret'
```

3. Run the app:

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

```

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[Node.js-badge]: https://img.shields.io/badge/Node.js-18.15.0-43853D?style=for-the-badge&logo=node.js&logoColor=white
[Node.js-url]: https://nodejs.org/
[Nest.js-badge]: https://img.shields.io/badge/Nest.js-v10.0-red?style=for-the-badge
[Nest.js-url]: https://nestjs.com/
[SQLite-badge]: https://img.shields.io/badge/SQLite-3.41.1-003B57?style=for-the-badge&logo=sqlite&logoColor=white
[SQLite-url]: https://www.sqlite.org/index.html
[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest
