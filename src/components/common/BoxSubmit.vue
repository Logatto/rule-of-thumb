<template>
  <section class="submit">
    <div class="submit-text">
      {{ title }}
    </div>
    <div class="submit-button">
      <button class="btn btn-secondary">Submit a Name</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "BoxSubmit",
  props: {
    title: {
      type: String,
    },
  },
};
</script>

<style scoped lang="scss">
.submit {
  margin-top: 32px;
  margin-bottom: 40px;
  height: 80px;
  max-width: 100%;
  background: linear-gradient(
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.8)
    ),
    url("~@/assets/submit-image.png");
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  justify-content: space-between;

  &-text {
    font-size: 1.8rem;
  }
}
</style>
