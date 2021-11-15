# Bookmark'd BackEnd
## Welcome to the Bookmark'd BackEnd 

### Dependencies
- Mongoose
- Express
- dotenv
- Cors
- Morgan

### Model/Schema
 name: String  
 url: String
### Route Table
| URL | Method | Action |
|-----|--------|--------|
| / | GET | Test Route |
| /bookmarks | GET | Index page of all bookmarks|
| /bookmarks | POST | Create New Bookmark |
| /bookmarks/:id | PUT | Update Bookmark |
| /bookmarks/:id | DELETE | Delete selected bookmark |

### User Stories
When a user is in the backend of the application the user should be able to display all the bookmarks created. If a user is using PostMan, Thunder Client, or Insomnia they can go to the routes listed about to create, update, or delete bookmarks. If any errors occur while trying to do so double check what kind of request, you are making to the server and verify it with what you are attempting. For reference use the table above for guidance on which route to take.
### Challenges
The Challenges that came with the back end was that bookmarks could not be updated. While reviewing the code we found that the update route was incomplete once the changes were made all routes were fully functional.