<template>
  <div class="row">
      <div class="alert alert-primary" role="alert">
        Добро пожаловать {{this.$store.state.user.firstName}} {{this.$store.state.user.lastName}}
        <br>
        На этом сайты вы сможете обучиться финасовой грамотности. Желаю вам хорошо провести время. Для продолжение выберите вкладку уроки.
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>