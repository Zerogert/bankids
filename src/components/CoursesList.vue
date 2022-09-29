<template>
  <div>
    <router-link to="course-create" v-show="this.$store.state.user.role=='Admin'">Создать курс</router-link>
  <div>
    <CourseItem v-for="item in courses" :item="item" :key="item.id" />
  </div>
  </div>
</template>

<script>
import CourseItem from "./CourseItem.vue";
export default {
  components: { CourseItem },
  data: () => {
    return {
      courses: [],
    };
  },
  methods: {
    async list() {
      const response = await fetch("https://v1415073.hosted-by-vdsina.ru/api/courses", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization":this.$store.state.token
        },
      });

      this.courses = await response.json();
    },
  },
  created(){
    this.list();
  }
};
</script>

<style>
</style>