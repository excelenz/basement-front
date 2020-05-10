import { users } from "./db";

const resolvers = {
  Query: {
    user: (email, { id }, dateofbirth, placeofbirth) => {
      return users.find(user => user.id === id);
    },
    users: (email, dateofbirth, placeofbirth) => {
      return users;
    }
};

export default resolvers;
