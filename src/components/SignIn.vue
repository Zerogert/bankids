<template>
  <div>
    <h1>LOGIN</h1>
    <form @submit.prevent="login">
      <input v-model="username" placeholder="Логин" />
      <br />
      <br />
      <input v-model="password" placeholder="Пароль" type="password" />
      <br />
      <br />
      <button type="submit">Войти</button>
    </form>
    <router-link to="/create-account">Создать аккаунт</router-link>
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
      console.log(this.$route.params.auth)
      const response = await fetch("https://v1415073.hosted-by-vdsina.ru/api/login", {
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
        "https://v1415073.hosted-by-vdsina.ru/api/session",
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
  created(){
    console.log(this.$route.query);
  }
};
</script>
