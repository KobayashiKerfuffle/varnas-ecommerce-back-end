# Varnas e-Commerce Back-end

This project is the back end for an e-commerce site. It uses Express.js for the server and Sequelize to interact with a MySQL database.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Links](#links)
- [Database Setup](#database-setup)
- [Routes](#routes)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install the application, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/KobayashiKerfuffle/varnas-ecommerce-back-end.git
   ```

2. To install the necessary dependencies, run the following command:

   ```bash
   npm install
   ```

## Usage

To use the application, follow these steps:

1. To start the server, run:

   ```bash
   npm start
   ```

2. To seed the database with sample data, run:

   ```bash
   npm run seed
   ```

## Database Setup

- Log in to MySQL Shell and run source db/schema.sql.
- Adjust the .env file with your MySQL username, password, and database name.

## Routes
The API has routes for categories, products, and tags:

### Categories:
- **GET** all categories
- **GET** a single category by ID
- **POST** a new category
- **PUT** to update a category by its ID
- **DELETE** a category by its ID

### Products:
- **GET** all products
- **GET** a single product by ID
- **POST** a new product
- **PUT** to update a product by its ID
- **DELETE** a product by its ID

### Tags:
- **GET** all tags
- **GET** a single tag by ID
- **POST** a new tag
- **PUT** to update a tag by its ID
- **DELETE** a tag by its ID

## Contributing
Contributions to this project are welcome. Please ensure your pull requests adhere to the following guidelines:
- Descriptive commit messages.
- Clear, readable code with proper documentation.
- Changes that are relevant to the project objectives.

## License

This project is licensed under the [MIT License](LICENSE).