<template>
  <footer>
    <div class="link">
      <a href="#">Terms and Conditions</a>
      <a href="#">Privacy Policy</a>
      <a href="#">Contact Us</a>
    </div>
    <div class="social">
      <span>Follow Us</span>

      <span><fa :icon="['fab', 'facebook-square']" size="2x" /> </span>
      <span><fa :icon="['fab', 'twitter']" size="2x"/></span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped lang="scss">
footer {
  background-image: linear-gradient(
    to right,
    #000 10%,
    rgba(255, 255, 255, 0) 0%
  );
  background-position: top;
  background-size: 7px 1px;
  background-repeat: repeat-x;

  height: 80px;
  margin: 0 25%;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .link {
    a {
      margin-right: 20px;
    }
  }

  .social {
    display: flex;
    align-items: center;
    span {
      margin-left: 20px;
    }
  }
}
</style>
