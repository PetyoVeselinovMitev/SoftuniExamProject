1. Brief Description
    - The Horror Cinema seat reservation app.
    - This web application allows users to reserve seats for a movie theater at the desired hour.
        Users can browse all the movies and see the already taken seats.
        An admin panel is made accessible for a set admin account that gives the ability to add, delete,
        and modify movies and their showtimes.

2. Installation Instructions:
    - In the server folder, the backend server can be started directly with "node ./server.js".
    - In the client folder, dependencies installation is required with "npm install".
    - To run the client, use "npm run dev".

3. Code Structure
   - /client: contains the front end
        - /public: contains files like pictures and logos
        - /src
            - /api: contains all the files needed for communication with the backend server
            - /components: contains all the React components and their styles
            - /contexts: contains contexts
            - /hooks: contains custom hooks
   - /server: contains the backend server