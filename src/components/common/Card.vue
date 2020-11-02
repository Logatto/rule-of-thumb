<template>
  <article
    class="card"
    style="background-image: linear-gradient(0deg, rgba(0,0,0,0.611764705882353) 0%, rgba(0,0,0,0) 100%) , url('https://rule-of-thumb.s3-us-west-1.amazonaws.com/images/kanye.jpg')"
  >
    <div class="card-content">
      <h2 class="card-title_name">
        Kanye West
      </h2>
      <div class="card-subinfo">
        <div class="card-subinfo_time">1 month ago</div>
        <div class="subinfo_label">in Entertaiment</div>
      </div>
      <div class="card-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, sequi?
      </div>
      <div class="card-options">
        <div class="button-options">
          <button class="btn btn-green btn-active">
            <fa icon="thumbs-up" />
          </button>
          <button class="btn btn-orange">
            <fa icon="thumbs-down" />
          </button>
        </div>
        <div class="button-action">
          <button class="btn btn-primary">Vote Now</button>
        </div>
      </div>
    </div>

    <div class="card-results">
      <div class="result_up">
        <fa icon="thumbs-up" size="2x" /> <span>64%</span>
      </div>
      <div class="result_down">
        <fa icon="thumbs-down" size="2x" /> <span>36%</span>
      </div>
    </div>

    <div class="card-current-status">
      <button class="btn btn-green"><fa icon="thumbs-up" /></button>
    </div>
  </article>
</template>

<script>
export default {
  name: "Card",
};
</script>

<style scoped lang="scss">
.card {
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  &-content {
    position: absolute;
    bottom: 0;
    margin: 2.5rem;
  }

  &-title_name {
    margin: 0;
  }

  &-subinfo {
    display: flex;

    &_time {
      font-weight: bolder;
      margin-right: 5px;
    }
  }
  &-description {
    margin-top: 20px;
  }

  &-options {
    display: flex;
    margin: 20px 0 20px 0;

    button {
      margin-right: 10px;
    }

    .button-options {
      display: flex;
      align-items: center;
    }
  }

  &-results {
    position: absolute;
    bottom: 0;
    height: 50px;
    width: 100%;
    display: flex;

    .result_up {
      width: 64%;
      height: 100%;
      background: rgba(28, 187, 180, 0.6);
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding-left: 10px;
    }
    .result_down {
      width: 36%;
      height: 100%;
      background: rgba(255, 173, 29, 0.6);
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding-right: 10px;
    }
  }

  &-current-status {
    position: absolute;
    bottom: 205px;
  }
}
</style>
