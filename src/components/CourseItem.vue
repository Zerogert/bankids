<template>
  <div>
    <h1>{{item.title}}</h1>
    <p>{{item.description}}</p>
    <router-link :to="{ name: 'course-view', params: { id: item.id }}">Открыть</router-link>
    <button v-show="this.$store.state.user.role=='Admin'" v-on:click="remove">Удалить</button>
  </div>
</template>

<script>
export default {
    props: {
        item:{}
    },
    methods: {
        async remove() {
            await fetch("https://v1415073.hosted-by-vdsina.ru/api/courses/"+this.item.id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization":this.$store.state.token
        },
      });
      this.$router.go(this.$router.currentRoute);
    }
  },
    created(){
  }   
}
</script>

<style>

</style>