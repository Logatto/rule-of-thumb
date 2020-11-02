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
          <li><a href="#">Past Trials</a></li>
          <li class=""><a href="#"> it Works</a></li>
          <li><a href="#"> Log in/Sign Up</a></li>
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

    <main>
      <section class="box-message">
        <div class="title">
          <span>Speak out. Be heard.</span>
          <br />
          <strong>Be counted</strong>
        </div>
        <div class="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          consequuntur ad libero asperiores maxime, tempore dolorem placeat id
          aliquam adipisci!
        </div>
      </section>

      <h1>Votes</h1>

      <section class="people-cards">
        <article
          v-for="id in 4"
          :key="id"
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              sequi?
            </div>
            <div class="card-options">
              <div class="button-options">
                <button class="btn btn-green btn-active">UP</button>
                <button class="btn btn-orange">DO</button>
              </div>
              <div class="button-action">
                <button class="btn btn-primary">Vote Now</button>
              </div>
            </div>
          </div>

          <div class="card-results">
            <div class="result_up">UP 64%</div>
            <div class="result_down">Down 36%</div>
          </div>

          <div class="card-current-status">
            <button class="btn btn-green">UP</button>
          </div>
        </article>
      </section>

      <section class="submit">
        <div class="submit-text">
          Is there anyone else you would want us to add?
        </div>
        <div class="submit-button">
          <button class="btn btn-secondary">Submit a Name</button>
        </div>
      </section>
    </main>

    <footer>
      <div class="link">
        <a href="#">Terms and Conditions</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Contact Us</a>
      </div>
      <div class="social">
        <span>Follow Us</span>

        <span>Icon</span>
        <span>Icon</span>
      </div>
    </footer>

    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap");

#app {
  font-family: "Lato", sans-serif;
}

h1 {
  font-size: 2.5rem;
}
h2 {
  font-size: 2.8rem;
}

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

.btn {
  color: white;
  border: 0;

  width: 35px;
  height: 35px;

  &-active {
    border: 1px solid white;
  }

  &-primary {
    border: 1px solid white;
    background: transparent;
    padding: 0.7rem 1rem;

    width: auto;
    height: auto;
  }

  &-secondary {
    color: black;
    width: auto;
    height: auto;
    border: 2px solid gray;
    padding: 0.7rem 1rem;
    background: transparent;
  }

  &-green {
    background: rgba(28, 187, 180, 0.8);
  }

  &-orange {
    background: rgba(255, 173, 29, 0.8);
  }
}

a {
  text-decoration: none;
  color: inherit;
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

main {
  margin: 2rem 25% 0 25%;
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

  .people-cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 500px;
    gap: 40px;
    color: white;
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

        // padding: 0 10px;

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
  }

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
}

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
    span {
      margin-left: 20px;
    }
  }
}
</style>
