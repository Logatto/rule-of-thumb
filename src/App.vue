<template>
  <div id="app">
    <header>
      <div class="container-image">
        <div
          class="background-image"
          style="background-image:url(https://rule-of-thumb.s3-us-west-1.amazonaws.com/images/papa.jpg);"
        ></div>
      </div>

      <nav>
        <div class="logo">
          <div class="name-logo">
            Rule of Thumb.
          </div>
        </div>
        <ul class="menus">
          <li>Past Trials</li>
          <li class="">How it Works</li>
          <li>Log in/Sign Up</li>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            voluptas aut ratione consectetur repellendus magni, doloremque
            distinctio nemo corrupti molestias?
          </p>
          <p class="more">More information</p>
          <div class="final-q">
            What's Your Veredict?
          </div>
        </div>
        <div class="box-footer">
          <div class="vote-buttons">
            <button class="vote-up">UP</button>
            <button class="vote-down">DOWN</button>
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

    <main></main>

    <footer></footer>

    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");

#app {
  font-family: "Lato", sans-serif;
}

header {
  // position: relative;
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
  padding: 0 10rem 0 10rem;

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    font-size: 2rem;
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
  margin-left: 10rem;
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
  }
  .number-days {
    width: 60%;
    height: 100%;
    color: #464646;
    display: flex;
    align-items: center;
    background: rgba(255, 255, 255, 0.7);
    padding-left: 20px;
  }
}
</style>
