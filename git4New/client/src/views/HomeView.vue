<template>
  <div class="home-page-container">
    <div>
      <div class="home-page-text">
        <div class="home-page-title">Jacob Wylie Hansen.</div>
        <hr />
        <div
          style="display: flex; justify-content: flex-start"
          class="home-page-subtitle"
        >
          SaaS Product Management.
        </div>
        <hr />
        <div
          style="display: flex; justify-content: center"
          class="home-page-subtitle"
        >
          Software Development.
        </div>
        <hr />
        <div
          style="display: flex; justify-content: flex-end"
          class="home-page-subtitle"
        >
          Product Marketing.
        </div>
      </div>
      <div>
        <img class="home-page-picture" src="../assets/IMG_8839.jpg" alt="" />
      </div>

      <div class="brand-row">
        <div>
          <img
            class="image-row Canopy-logo"
            src="../assets/Canopy-logo.svg"
            alt=""
          />
        </div>
        <div class="vl"></div>
        <div>
          <img class="image-row" src="../assets/fresphaint-lahgo.svg" alt="" />
        </div>
        <div class="vl"></div>
        <div>
          <img class="image-row" src="../assets/heap-lago.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line quotes
  name: "HomeView",
  components: {},
};
</script>
<style>
html {
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
}

#page-container {
  position: relative;
  min-height: 100vh;
}

#content-wrap {
  padding-bottom: 85px; /* Footer height */
}

.home-page-container {
  display: flex;
  justify-content: space-around;
  min-width: 1000px;
}
.about-me-page-title {
  font-family: Arial, sans-serif;
  color: #343a40;
}

.company-container {
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-width: 800px;
}

.company-duration {
  font-family: Arial, sans-serif;
  font-size: 20px;
}

.nav-item {
  margin-right: 5px;
  margin-left: 5px;
}

.home-page-text {
  padding-top: 100px;
  padding-left: 20px;
  padding-right: 20px;
  max-width: 100%;
}
.about-me-page-text {
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  max-width: 100%;
}

.home-page-title {
  font-family: Arial, sans-serif;
  color: #343a40;
  /* font-weight: bold; */
}
hr {
  border-top: 2px solid #343a40;
}

.brand-row {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 70px;
  margin-top: 70px;
  min-width: 700px;
}

.image-row {
  width: 250px;
  height: 50px;
}

.home-page-subtitle {
  color: #343a40;
  font-family: Arial, sans-serif;
  /* font-weight: bold; */
  margin-top: 20px;
  margin-bottom: 20px;
}

.fax-title {
  color: #343a40;
  font-family: Arial, sans-serif;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 20px;
}

.about-page-subtitle {
  color: #343a40;
  font-family: Arial, sans-serif;
  margin-top: 10px;
  margin-bottom: 10px;
}

.about-page-italic {
  color: #343a40;
  font-family: Arial, sans-serif;
  margin-top: 10px;
  margin-bottom: 10px;
  font-style: italic;
}

.about-page-me {
  color: #343a40;
  font-family: Arial, sans-serif;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 25px;
}

.about-page-me-definition {
  color: #343a40;
  font-family: Arial, sans-serif;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 20px;
}

.about-me-text {
  padding-left: 20px;
  padding-right: 50px;
  max-width: 100%;
  min-width: 300px;
}

.about-me-title {
  font-family: Arial, sans-serif;
  font-weight: bold;
  font-size: 30px;
}
.about-me-subtitle {
  font-family: Arial, sans-serif;
  font-size: 25px;
}

.masonry {
  margin: 1.5em auto;
  max-width: 768px;
  column-gap: 1em;
}

.mason-item {
  background-color: #fff;
  padding: 0.5em;
  margin: 0 0 1em;
}

.image-size {
  max-width: 100%;
  max-height: 100%;
}

.company-icon {
  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: 50px;
  /* border-width: 1em; */
  margin-right: 50px;
  width: 300px;
}
.technical-icon {
  /* margin-top: 50px;
    margin-bottom: 50px; */
  /* margin-left:50px; */
  /* border-width: 1em; */
  margin-right: 15px;
  margin-left: 15px;
  width: 70px;
}

.about-me-paragraph {
  margin: 50px;
  max-width: 1000px;
  min-width: 500px;
}

.about-me-reviwer {
  font-style: italic;
}

.big-footer {
  color: #343a40;
  height: auto;
  background-color: #d3d3d3;
}

.bg-light {
  background-color: #d3d3d3 !important;
  font-size: 20px;
}
/* .navbar {
    background-image: url("images/Canopy-top.jpg") !important;
} */
.navbar-image {
  margin-right: 10px;
  margin-top: 2px;
}

.vl {
  border-left: 3px solid #343a40;
  height: 60px;
}

.home-page-picture {
  margin-top: 40px;
  margin-left: 50px;
  border: solid;
  border-width: 10px;
  margin-right: 50px;
  min-width: 250px;
}

#footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 85px;
  min-width: 500px;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-contact-title {
  margin-left: 5px;
  margin-right: 5px;
}

.footer-contact {
  margin-left: 10px;
  display: flex;
  font-family: arial;
  /* font-weight: bold; */
  font-size: 18px;
  align-items: center;
}

.footer-picture {
  width: 40px;
  margin-left: 12px;
  margin-right: 12px;
}
.copyright-content {
  display: flex;
  align-items: center;
  padding-right: 20px;
  font-family: arial;
  /* font-weight: bold; */
  font-size: 18px;
}
.copyright-item {
  padding-left: 8px;
  padding-right: 8px;
}
.technical-container {
  display: flex;
  justify-content: space-evenly;
  margin-left: 40px;
  margin-right: 40px;
}

@media only screen and (min-width: 1024px) {
  .masonry {
    column-count: 4;
  }
  .home-page-picture {
    width: 500px;
  }
  .image-row {
    height: 80px;
    margin-left: 20px;
    margin-right: 20px;
  }
  .vl {
    height: 60px;
    border-left: 2px solid #343a40;
  }
  .home-page-title {
    font-size: 60px;
  }
  .about-me-page-title {
    font-size: 40px;
  }
  .home-page-subtitle {
    font-size: 30px;
  }
  .about-page-subtitle {
    font-size: 20px;
  }
  hr {
    border-top: 2px solid #343a40;
  }
}

@media only screen and (max-width: 1023px) and (min-width: 768px) {
  .masonry {
    column-count: 3;
  }
  .home-page-picture {
    width: 400px;
  }
  .image-row {
    height: 50px;
  }
  .vl {
    height: 55px;
    border-left: 2px solid #343a40;
  }
  .home-page-title {
    font-size: 50px;
  }
  .about-me-page-title {
    font-size: 30px;
  }
  .home-page-subtitle {
    font-size: 25px;
  }
  .about-page-subtitle {
    font-size: 15px;
  }
  hr {
    border-top: 1.5px solid #343a40;
  }
}

@media only screen and (max-width: 767px) {
  .masonry {
    column-count: 2;
  }
  .home-page-picture {
    width: 350px;
    min-width: 250px;
  }
  .image-row {
    height: 40px;
  }
  .vl {
    height: 45px;
    border-left: 2px solid #343a40;
  }
  .home-page-title {
    font-size: 35px;
  }
  .about-me-page-title {
    font-size: 25px;
  }
  .home-page-subtitle {
    font-size: 25px;
  }
  .about-page-subtitle {
    font-size: 15px;
  }
  hr {
    border-top: 2px solid #343a40;
  }
}

/* .masonry {
    column-count: 3;
    column-gap: 1em;
}

.mason-item {
    background-color: #7cc7b5;
    display: inline-block;
    margin: 0 0 1em;
}

.image-size {
    max-width: 100%;
    max-height: 100%;
} */
</style>
