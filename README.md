# Deuslink Software Test Backend

this project is a test for Deuslink Software which consist in create a CRUD with node js and express for a task list application

# Installation

1. Clone the repository with the command
```
git clone ....
```
2. Go to the folder
```
cd backend
```
3. Install the dependencies
```
npm install
```
4. Change the name of file .env.example for .env

5. In the file .env put the cdn from mongodb and the port that you want to expose the project

the following steps launch the project depending if you want to launch in dev mode or production

# Launch in develop

1. Run tsc watch to compile typescript files in real time
```
npm run dev:tsc
```

2. In other terminal run nodemoon to take the changes in real time
```
npm run dev:node
```

# Launch in develop

1. Execute the command to build the application
```
npm run build
```
2. Execute the command to launch the project
```
npm run start
```

Once the project is launch, you can use it with the url __localhost:8000__ (the port could change depending of the value in .env file)

## Note

- I will share with you the documentation of the endpoints with Postman to test it
documentation link: https://documenter.getpostman.com/view/5695480/2s93eYWD7D

- I deploy this project in Railwayapp, the link is: 