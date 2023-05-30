export const state = () => ({
   user: {},
   messages: [],
});

export const getters = {
   getUser: state => state.user,
   getMessages: state => state.messages,
}

export const mutations = {
   setUser(state, user) {
      state.user = user;
   },
   clearData(state) {
      state.user = {};
      state.messages = [];
   }
}

export const actions = {
   SOCKET_NewMessage(context, data) {
      console.log(data);
   }
}