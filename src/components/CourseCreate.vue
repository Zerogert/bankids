<template>
  <div>
    <form @submit.prevent="createCourse">
      <input v-model="title" placeholder="Название" />
      <br />
      <br />
      <input v-model="description" placeholder="Описание" />
      <br />
      <br />
      <input
        ref="upload"
        name="file-upload"
        type="file"
        accept=".html"
        @change="onUploadFiles"
      />
      <br />
      <br />
      <button type="submit">Создать</button>
      <router-link to="/courses">Отмена</router-link>
    </form>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      description: "",
      title: "",
      data:""
    };
  },
  methods: {
    onUploadFiles(event) {
      // process your files, read as DataUrl or upload...
      const reader = new FileReader();
      reader.onload = (res) => {
        this.data =res.target.result;
      };
      reader.onerror = (err) => console.log(err);
      reader.readAsText(event.target.files[0]);
    },
    async createCourse(e){
        e.preventDefault();
        const response = await fetch("https://v1415073.hosted-by-vdsina.ru/api/courses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization":this.$store.state.token
        },
        body:JSON.stringify({
            "title":this.title,
            "description":this.description,
            "html":this.data,
        })
      }); 
      console.log(response);
      this.$router.push("/courses");
    }
  },
};
</script>

<style>
</style>