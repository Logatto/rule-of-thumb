<template>
  <article
    class="card"
    :style="
      `background-image: linear-gradient(0deg, rgba(0,0,0,0.611764705882353) 0%, rgba(0,0,0,0) 100%) , url('${image}')`
    "
  >
    <div class="card-content">
      <h2 class="card-title_name">
        {{ name }}
      </h2>
      <div class="card-subinfo">
        <div class="card-subinfo_time">{{ date | timeago }}</div>
        <div class="subinfo_label">in {{ label }}</div>
      </div>
      <div class="card-description">
        {{ isVoted ? "Thank you for voting!" : description }}
      </div>
      <div class="card-options">
        <div class="button-options" v-if="!isVoted">
          <button
            class="btn btn-green"
            :class="selected == 'up' ? 'btn-active' : null"
            @click="selected = 'up'"
          >
            <fa icon="thumbs-up" />
          </button>
          <button
            class="btn btn-orange"
            :class="selected == 'down' ? 'btn-active' : null"
            @click="selected = 'down'"
          >
            <fa icon="thumbs-down" />
          </button>
        </div>
        <div class="button-action">
          <button
            class="btn btn-primary"
            @click="sendVote"
            v-if="!isVoted"
            :disabled="!selected"
          >
            Vote Now
          </button>
          <button class="btn btn-primary" @click="voteAgain" v-if="isVoted">
            Vote Again
          </button>
        </div>
      </div>
    </div>

    <div class="card-results">
      <div
        class="result_up"
        :style="`width:${percentUp}%!important`"
        v-if="percentUp"
      >
        <fa icon="thumbs-up" size="2x" /> <span>{{ percentUp }}%</span>
      </div>
      <div
        class="result_down"
        :style="`width:${percentDown}%!important`"
        v-if="percentDown"
      >
        <fa icon="thumbs-down" size="2x" /> <span> {{ percentDown }}%</span>
      </div>
    </div>

    <div class="card-current-status" v-if="currentStatus">
      <button :class="`btn btn-${currentStatus.color}`">
        <fa :icon="`thumbs-${currentStatus.status}`" />
      </button>
    </div>
  </article>
</template>

<script>
export default {
  name: "Card",
  data() {
    return {
      selected: null,
      isVoted: false,
    };
  },
  props: {
    id: {
      type: Number,
    },
    name: {
      type: String,
    },
    date: {
      type: String,
    },
    label: {
      type: String,
    },
    description: {
      type: String,
    },
    total_up: {
      type: Number,
      default: 0,
    },
    total_down: {
      type: Number,
      default: 0,
    },
    image: {
      type: String,
    },
  },
  computed: {
    total() {
      return this.total_up + this.total_down;
    },
    percentUp() {
      if (this.total == 0 || this.total_up == 0) return 0;
      return Math.round((100 / this.total) * this.total_up);
    },
    percentDown() {
      if (this.total == 0 || this.total_down == 0) return 0;
      return Math.round((100 / this.total) * this.total_down);
    },
    currentStatus() {
      if (this.total_down == this.total_up) return;
      return this.total_up > this.total_down
        ? { color: "green", status: "up" }
        : { color: "orange", status: "down" };
    },
  },
  methods: {
    async sendVote() {
      await this.$store.dispatch("sendVote", {
        id: this.id,
        type_vote: this.selected.toUpperCase(),
      });

      this.selected = null;
      this.isVoted = true;
    },
    voteAgain() {
      this.isVoted = false;
    },
  },
};
</script>

<style scoped lang="scss">
.card {
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-position: 50%;

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
    min-height: 2.5rem;
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

    span {
      font-size: 1.8rem;
      margin-left: 5px;
    }

    .result_up {
      width: 50%;
      height: 100%;
      background: rgba(28, 187, 180, 0.6);
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding-left: 10px;
    }
    .result_down {
      width: 50%;
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

@media (min-width: 1025px) and (max-width: 1280px) {
  .card {
    &-current-status {
      bottom: 220px;
    }
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .card {
    &-current-status {
      bottom: 240px;
    }
  }
}
</style>
