<template>
  <div>
    <h1>LOGIN</h1>
    <form @submit.prevent="login">
      <input v-model="username" placeholder="username" />
      <br />
      <br />
      <input v-model="password" placeholder="password" type="password" />
      <br />
      <br />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data: () => {
    return {
      username: "admin",
      password: "admin",
    };
  },
  methods: {
    ...mapMutations(["setUser", "setToken"]),
    async login(e) {
      e.preventDefault();
      const response = await fetch("https://localhost:7050/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          login: this.username,
          password: this.password,
        }),
      });

      let token = response.headers.get("authorization");
      this.setToken(token);

      const responseSession = await fetch(
        "https://localhost:7050/api/session",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );

      const session = await responseSession.json();
      this.setUser(session);

      this.$router.push("/");
    },
  },
};
</script>
