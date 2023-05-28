<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <h1>Title</h1>
      <v-btn @click="clickButton">
        new message
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  components: {},
  sockets: {
        connect: function () {
            console.log('socket connected')
        }
  },
  methods: {
        clickButton: function (data) {
            // $socket is socket.io-client instance
            this.$socket.emit('emit_method', {
              text: "client"
            })
        }
  }
};
</script>
