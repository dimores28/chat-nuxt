<template>
  <div class="c-wrap">
    <div class="c-chat" ref="block">
      <Message
        v-for="m in messages"
        :key="m.text"
        :name="m.name"
        :text="m.text"
        :owner="m.id === user.id"
      />
    </div>
    <div class="c-form">
      <ChatForm />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import Message from "@/components/Message";
import ChatForm from "@/components/ChatForm";

export default {
  middleware: ["chat"],
  head() {
    return {
      title: `Room ${this.user.room}`
    };
  },
  components: { Message, ChatForm },
  computed: {
    ...mapGetters({ messages: "getMessages", user: "getUser" })
  },
  watch: {
    messages() {
      setTimeout(() => {
        this.$refs.block.scrollTop = this.$refs.block.scrollHeight;
      });
    }
  }
};
</script>

<style scoped>
.c-wrap {
  height: 100%;
  position: relative;
  overflow: hidden;
}

.c-chat {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 80px;
  padding: 1rem;
  overflow-y: auto;
}

.c-form {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  height: 80px;
  background: #212121;
}
</style>
