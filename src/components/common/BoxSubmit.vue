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

@media (min-width: 768px) and (max-width: 1024px) {
  .submit-text {
    width: 70%;
    text-align: center;
  }
}

@media (min-width: 481px) and (max-width: 767px) {
  .submit-text {
    width: 70%;
    text-align: center;
  }
}

@media (min-width: 320px) and (max-width: 480px) {
  .submit {
    height: auto;
    display: block;
    background-repeat: repeat-y;
    .submit-text {
      text-align: center;
    }
    .submit-button {
      text-align: center;
      margin: 10px 0;
    }
  }
}
</style>
