<template>
  <div>
    <ul>
      <li v-for="m in messages" :key="m.text">{{ m.text }}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  middleware: ["chat"],
  head() {
    return {
      title: `Room ${this.user.room}`
    };
  },
  computed: {
    ...mapGetters({ messages: "getMessages", user: "getUser" })
  }
};
</script>
