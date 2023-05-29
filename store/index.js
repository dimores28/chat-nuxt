export const state = () => ({
   user: {},
});

export const mutations = {
   setUser(state, user) {
      state.user = user;
   }
}

export const actions = {
   SOCKET_NewMessage(context, data) {
      console.log(data);
   }
}