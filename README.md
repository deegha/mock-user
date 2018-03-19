## React js test


### How to set up
- Clone the reposioty
- `npm install` to install the dependancies 
- `npm start` to start the dev server
- note : if you got an error regarding "node-sass-chokidar" please install this from npm `npm install --save node-sass-chokidar` and then start the dev server

### Special notes
- API does not return an id to the user, so i didnt call view user endpoint, i took the data from the data store and filtered with the email, hope this is fine with you. 
- API given has an issue when calling to the update mockuser endpoint, it says auth fail, but i have used the cridential given and they works perfectly on the other endpoints
- on async fail, i have put the error code to the notifications, ideally i could have had error constants and return the particular error for the code if i had all the error codes.
- I have tried to keep the state of the application totally on redux. (almost zero statefull components)

### Technologies used 
- `create-react-app` facebook official tool to initialze projects
- `Redux` i have implemented the redux architecture to hold the app state, (yes i know this is a small application and could have done this lot easire than this, but i wanted use Redux to make this app more convincing)
- `scss`
- `Material UI` a react component library
