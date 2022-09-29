<template>

<div>
    <div>
      <nav class="p-1 navbar navbar-expand-lg navbar-dark bg-primary">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <div class="navbar-nav">
            <div class="nav-item active">
              <button
                class="nav-link btn btn-link"
                @click="$router.push('/')"
              >
                Главная
              </button>
            </div>
            <div class="nav-item">
              <button
                class="nav-link btn btn-link"
                @click="$router.push('courses')"
              >
                Уроки
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  async mounted() {
    
  },
  computed: {
    ...mapGetters(["isLoggedIn"])
  },
  created(){
    if(!this.$store.state.token){
      this.$router.push("sign-in");
    }
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.container{
  height:100vh;
}
</style>