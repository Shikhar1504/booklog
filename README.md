# Booklog - A Book Review Application

This project is a web-based application for managing and reviewing books. It allows users to add, view, edit, and delete book entries, with features for sorting and displaying book details.

## Description

This application serves as a personal book management system where users can keep track of books they've read, including details like title, author, ISBN, rating, and personal notes. It's built to demonstrate full-stack web development concepts using Node.js, Express.js, EJS for templating, and PostgreSQL as the database.

## Features

*   **View Books:** Browse a list of all books, sorted by title or rating.
*   **Detailed Book View:** See comprehensive details for each book, including cover image (fetched from OpenLibrary.org based on ISBN), author, rating, date read, and personal notes.
*   **Add New Books:** Add new book entries with title, author, ISBN, rating, date read, and a description. (Requires an admin password).
*   **Edit Book Details:** Update the description of existing book entries. (Requires an admin password).
*   **Delete Books:** Remove book entries from the database. (Requires an admin password).
*   **Responsive Design:** Basic styling for different screen sizes.

## Technologies Used

*   **Node.js**: JavaScript runtime environment.
*   **Express.js**: Fast, unopinionated, minimalist web framework for Node.js, used for building the API and handling routes.
*   **EJS (Embedded JavaScript)**: Templating engine used for rendering dynamic HTML pages on the server-side.
*   **PostgreSQL (PG)**: Powerful open-source relational database system, used for storing book data.
*   **Axios**: Promise-based HTTP client for making requests to external APIs (e.g., OpenLibrary for book covers).
*   **Body-parser**: Node.js middleware for parsing incoming request bodies.
*   **Dotenv**: Module to load environment variables from a `.env` file, crucial for secure configuration.
*   **HTML5**: For structuring the web pages.
*   **CSS3**: For styling the application.
*   **Vercel**: Platform for static sites and Serverless Functions, configured for deployment via `vercel.json`.

## Installation and Usage

To get this project up and running on your local machine, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Shikhar1504/booklog
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd booklog
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Environment Variables:**
    Create a `.env` file in the root directory of the project and add the following environment variables. Replace the placeholder values with your actual credentials:

    ```
    POSTGRES_URL="your_postgres_connection_string"
    PASSWORD="your_application_password"
    ```

5.  **Database Setup:**
    Ensure you have a PostgreSQL database set up. You will need to create a table named `book` with appropriate columns (e.g., `id`, `title`, `author`, `isbn`, `rating`, `days`, `description`). The `index.js` file interacts with this table.

6.  **Start the application:**
    ```bash
    npm start
    ```
    The application should now be running, likely accessible via `http://localhost:3000` (or another port if configured).

## File Structure

```
./
├── public/             # Static assets (CSS, SVG images)
│   ├── assets/
│   │   ├── github.svg
│   │   ├── favicon.svg
│   │   ├── instagram.svg
│   │   └── linkedin.svg
│   └── styles/
│       └── style.css
├── views/              # EJS template files for different pages
│   ├── partials/
│   │   ├── footer.ejs
│   │   └── header.ejs
│   ├── about.ejs
│   ├── addBook.ejs
│   ├── edit.ejs
│   ├── index.ejs
│   ├── remove.ejs
│   └── view.ejs
├── .gitignore          # Specifies intentionally untracked files to ignore
├── index.js            # Main application entry point, handles routes and database logic
├── package.json        # Project metadata, scripts, and dependencies
├── package-lock.json   # Records the exact dependency tree
└── vercel.json         # Vercel deployment configuration
```

## Author

Shikhar

## License

This project is licensed under the ISC License.