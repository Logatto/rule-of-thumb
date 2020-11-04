<template>
  <header>
    <div class="container-image">
      <div
        class="background-image"
        style="background-image:url(https://rule-of-thumb.s3-us-west-1.amazonaws.com/images/papa.jpg);"
      ></div>
    </div>

    <nav class="topnav" id="navbar">
      <div class="logo">
        <div class="name-logo">
          <router-link to="/"> Rule of Thumb.</router-link>
        </div>
      </div>
      <ul class="menus">
        <li class="icon-bars" @click="toogleMenu">
          <fa icon="bars" size="2x"></fa>
        </li>
        <li><router-link to="/past-trials">Past Trials</router-link></li>
        <li class=""><router-link to="/it-works"> it Works</router-link></li>
        <li><router-link to="/login"> Log in/Sign Up</router-link></li>
        <li><fa icon="search" size="lg"></fa></li>
      </ul>
    </nav>
    <section class="box">
      <div class="box-header">
        <span>What's your opinion on</span>
        <br />
        <strong>Pope Francis?</strong>
      </div>
      <div class="box-body">
        <p class="info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptas
          aut ratione consectetur repellendus magni, doloremque distinctio nemo
          corrupti molestias?
        </p>
        <p class="more">
          <fa :icon="['fab', 'wikipedia-w']"></fa> More information
        </p>
        <div class="final-q">
          What's Your Veredict?
        </div>
      </div>
      <div class="box-footer">
        <div class="vote-buttons">
          <button class="vote-up">
            <fa icon="thumbs-up" size="2x" />
          </button>
          <button class="vote-down">
            <fa icon="thumbs-down" size="2x" />
          </button>
        </div>
      </div>
    </section>
    <div class="info-footer">
      <div class="closing">
        Closing in
      </div>
      <div class="number-days">
        22 days
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  methods: {
    toogleMenu() {
      var x = document.getElementById("navbar");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    },
  },
};
</script>

<style scoped lang="scss">
header {
  height: 80vh;
}

.background-image {
  width: 100%;
  height: 80%;
  position: absolute;
  background: no-repeat;
  background-size: cover;
  z-index: -1;
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  color: white;
  background: linear-gradient(
    180deg,
    rgba(102, 102, 102, 0.4) 55%,
    rgba(255, 255, 255, 0) 100%
  );
  padding: 0 25% 0 25%;

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    font-size: 2rem;
    padding-left: 15px;
  }
  ul.menus {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    li {
      list-style: none;
      text-decoration: none;
      padding: 0.5em 1em;
      font-size: 1rem;
      font-weight: 300;

      &:hover,
      &.active {
        border-bottom: 3px solid white;
      }
    }
  }
}

section.box {
  color: white;
  margin-left: 25%;
  margin-top: 70px;
  backdrop-filter: blur(10px);
  background: rgba(60, 60, 60, 0.5);
  width: 500px;

  .box-header {
    padding: 2rem 2rem 0 2rem;
    span {
      font-weight: 300;
      font-size: 1rem;
      line-height: 19px;
    }
    strong {
      font-weight: 400;
      font-size: 3rem;
    }
  }

  .box-body {
    padding: 0 2rem;
    font-weight: 300;

    .info {
      font-size: 1.3rem;
      line-height: 24px;
    }

    .more {
      font-size: 0.8rem;
      line-height: 24px;
    }

    .final-q {
      margin-bottom: 30px;
    }
  }

  .box-footer {
    height: 80px;

    .vote-buttons {
      display: flex;
      height: 100%;

      .vote-up {
        width: 50%;
        background-color: rgba(28, 187, 180, 0.8);
        border: none;
        color: white;
      }

      .vote-down {
        width: 50%;
        background-color: rgba(255, 173, 29, 0.8);
        border: none;
        color: white;
      }
    }
  }
}

.info-footer {
  position: absolute;
  bottom: 20vh;
  height: 50px;
  display: flex;
  width: 100%;
  align-items: center;

  .closing {
    width: 40%;
    height: 100%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 10px;
    background: rgba(112, 112, 112, 0.3);
    font-size: 0.8rem;
    font-weight: 400;

    &:after {
      content: "";
      position: absolute;
      border-top: 7px solid transparent;
      border-bottom: 7px solid transparent;
      border-left: 7px solid rgba(112, 112, 112, 1);
      margin-right: -17px;
    }
  }
  .number-days {
    width: 60%;
    height: 100%;
    color: #464646;
    display: flex;
    align-items: center;
    background: rgba(255, 255, 255, 0.7);
    padding-left: 20px;
    font-size: 2rem;
    font-weight: 400;
  }
}

.icon-bars {
  display: none;
  cursor: pointer;
}

@media screen and (max-width: 600px) {
  .menus {
    li {
      display: none;
    }
    .icon-bars {
      display: block;
      &:hover {
        border-bottom: none;
      }
    }
  }

  nav.responsive {
    ul.menus {
      display: inline-block;
      position: absolute;
      top: 10px;
      right: 0px;
      background: rgba(0, 0, 0, 0.5);
      z-index: 5;
    }
    li {
      float: none;
      display: block;
      text-align: center;
    }
  }
}
</style>
