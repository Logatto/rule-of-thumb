<template>
  <section class="box-message">
    <div class="title">
      <span>{{ title }}</span>
      <br />
      <strong>{{ subtitle }}</strong>
    </div>
    <div class="description">
      {{ description }}
    </div>
  </section>
</template>

<script>
export default {
  name: "BoxMessage",
  props: {
    title: {
      type: String,
    },
    subtitle: {
      type: String,
    },
    description: {
      type: String,
    },
  },
};
</script>

<style scoped lang="scss">
.box-message {
  padding: 0 1.8rem 0 1.8rem;
  background: #ebebeb;
  display: flex;
  justify-items: center;
  align-items: center;
  height: 100px;

  .title {
    width: 20%;
    text-align: center;
    padding-right: 1.8rem;
    span {
      font-size: 1.5rem;
    }
    strong {
      font-size: 2rem;
      font-weight: 700;
    }
  }

  .description {
    width: 80%;
    font-size: 1rem;
    letter-spacing: 0;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .box-message {
    .title {
      width: 30%;
    }
  }
}

@media (min-width: 481px) and (max-width: 767px) {
  .box-message {
    // display: inline-block;
    .title {
      width: 40%;
    }
    .description {
      width: 60%;
    }
  }
}
@media (min-width: 320px) and (max-width: 480px) {
  .box-message {
    display: inline-block;
    height: auto;
    padding: 1rem;
    .title {
      width: auto;
      padding: 0;
      margin-bottom: 1rem;
    }
    .description {
      width: auto;
    }
  }
}
</style>
