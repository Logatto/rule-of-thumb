<template>
  <main>
    <BoxMessage
      title="Speak out. Be heard."
      subtitle="Be counted"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
      consequuntur ad libero asperiores maxime, tempore dolorem placeat id
      aliquam adipisci!"
    />

    <h1>Votes</h1>

    <section class="people-cards">
      <Card
        v-for="i in 4"
        :key="i"
        name="Malala"
        label="Politic"
        date="2020-04-10"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, sequi?"
        image="https://rule-of-thumb.s3-us-west-1.amazonaws.com/images/malala.jpg"
        :total_up="3"
        :total_down="10"
      />
    </section>

    <BoxSubmit
      title="Is there anyone else you would want us to add?
"
    />
  </main>
</template>

<script>
import Card from "@/components/common/Card.vue";
import BoxMessage from "@/components/common/BoxMessage.vue";
import BoxSubmit from "@/components/common/BoxSubmit.vue";

export default {
  name: "Home",
  components: {
    Card,
    BoxMessage,
    BoxSubmit,
  },
};
</script>

<style lang="scss" scoped>
main {
  margin: 2rem 25% 0 25%;

  .people-cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 500px;
    gap: 40px;
    color: white;
  }
}
</style>
