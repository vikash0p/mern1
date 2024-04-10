
# mern project

This MERN (MongoDB, Express.js, React.js, Node.js) project is a simple CRUD application for managing pizza data. It uses Mongoose for MongoDB object modeling, Express.js for handling server-side logic, dotenv for environment variable management, Node.js for backend server, and nodemon for automatic server restarts during development.

## API Endpoints
### Create Pizza: POST /api/pizzas
-  Request Body: JSON object representing the pizza details.
- Response: JSON object representing the created pizza.
- Get All Pizzas: GET /api/pizzas

- Response: Array of JSON objects representing all pizzas.
- Get Pizza by ID: GET /api/pizzas/:id

- Request Parameters: ID of the pizza.
- Response: JSON object representing the pizza with the given ID.
- Update Pizza by ID: PUT /api/pizzas/:id

- Request Parameters: ID of the pizza.
- Request Body: JSON object representing the updated pizza details.
- Response: JSON object representing the updated pizza.
- Delete Pizza by ID: DELETE /api/pizzas/:id

- Request Parameters: ID of the pizza.
- Response: JSON object representing the deleted pizza.

- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [API Endpoints](#api-endpoints)
- [Additional Information](#additional-information)
- [Contributors](#contributors)
- [License](#license)
## Acknowledgements

 - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)


## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.


## Appendix

Any additional information goes here


## Authors

- [@octokatherine](https://www.github.com/octokatherine)


## Badges

Add badges from somewhere like: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

