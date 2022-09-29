<template>
  <div class="container">
    <router-link to="/courses">Назад</router-link>
    <iframe
            :src="src"
            width="100%"
            height="100%"
            frameborder="0" c >
           </iframe>
  </div>
</template>

<script>
export default {
  computed:{
    src(){
      return "https://v1415073.hosted-by-vdsina.ru/api/courses/"+this.$route.params.id;
    }
  }
}
</script>

<style>
  .container{
    height: 100vh;
  }
</style>