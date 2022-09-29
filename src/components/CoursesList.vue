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
      const response = await fetch("http://185.231.154.122/api/courses", {
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