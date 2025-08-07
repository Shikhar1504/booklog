# Learning NPM

This project is a learning exercise for understanding and utilizing Node Package Manager (NPM). It demonstrates a basic Express.js application with various dependencies.

## Description

I am learning NPM.

## Technologies Used

This project utilizes the following technologies and NPM packages:

*   **Node.js**
*   **Express.js**: Web framework for Node.js.
*   **Axios**: Promise-based HTTP client for the browser and Node.js.
*   **Body-parser**: Node.js body parsing middleware.
*   **Dotenv**: Loads environment variables from a `.env` file.
*   **EJS**: Embedded JavaScript templating.
*   **PG**: Non-blocking PostgreSQL client for Node.js.

## Installation and Usage

To get this project up and running on your local machine, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Shikhar1504/booklog
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd learning-npm
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

5.  **Start the application:**
    ```bash
    npm start
    ```
    The application should now be running, likely accessible via `http://localhost:3000` (or another port if configured).

## File Structure

```
./
├── public/             # Static assets (CSS, JS, images)
├── views/              # EJS template files
├── .gitignore          # Specifies intentionally untracked files to ignore
├── index.js            # Main application entry point
├── package.json        # Project metadata and dependencies
├── package-lock.json   # Records the exact dependency tree
└── vercel.json         # Vercel deployment configuration
```

## Author

Shikhar

## License

This project is licensed under the ISC License.
