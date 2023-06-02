export const state = () => ({
   user: {},
   messages: [],
   users: []
});

export const getters = {
   getUser: state => state.user,
   getMessages: state => state.messages,
   getUsers: state => state.users,
}

export const mutations = {
   setUser(state, user) {
      state.user = user;
   },
   clearData(state) {
      state.user = {};
      state.messages = [];
      state.users = [];
   },
  SOCKET_newMessage(state, message) {
    state.messages.push(message)
  },
  SOCKET_updateUsers(state, users) {
    state.users = users
  }
}

// export const actions = {
//    SOCKET_NewMessage(context, data) {
//       console.log(data);
//    }
// }