<template>
  <div>
    <div class="add-review-container">
      <div class="review-input">
        <form class="form">
          <hr />
          <div style="font-size: 30px">
            <span>Add a Review: </span>
          </div>
          <hr />
          <div class="review-input-container">
            <label>Name</label>
            <input
              v-model="name"
              type="text"
              class="form-control"
              id="name"
              required
            />
          </div>
          <div class="review-input-container">
            <label>Position</label>
            <input
              v-model="position"
              type="text"
              class="form-control"
              id="position"
              required
            />
          </div>
          <div class="review-input-container">
            <label>Review</label>
            <textarea
              v-model="text"
              type="text"
              class="form-control"
              id="text"
              required
            />
          </div>
          <div class="review-input-container">
            <label>Image URL</label>
            <input
              v-model="image"
              type="text"
              class="form-control"
              id="image"
              required
            />
          </div>
          <div class="review-input-container">
            <button @click="upload" class="btn btn-success">
              Submit Review
            </button>
          </div>
        </form>
      </div>
    </div>
    <div class="reviews-container">
      <hr />
      <div style="font-size: 30px; margin-bottom: 15px; margin-left: 10px">
        Current Reviews:
      </div>
      <div
        class="review-container-admin"
        v-for="review in reviews"
        :key="review.id"
      >
        <div class="about-me-text">
          <div class="review-profile">
            <span class="about-me-title">{{ review.name }}</span>
          </div>
          <hr />
          <div
            style="display: flex; justify-content: center"
            class="about-me-reviewer"
          >
            "{{ review.text }}"
          </div>
          <hr v-if="review.position" />
          <div
            style="display: flex; justify-content: center"
            v-if="review.position"
            class="about-me-reviewer"
          >
            - {{ review.position }}
          </div>
        </div>
        <div v-if="review.image">
          <img class="review-image" :src="review.image" alt="" />
        </div>
        <div class="button-container">
          <!-- <div class="button-view">
            <button
              @click="editRevie(review.id)"
              type="button"
              class="btn btn-info"
            >
              Edit
            </button>
          </div> -->
          <div @click="deleteReview(review)" class="button-view">
            <button type="button" class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// name
// review
// time created
// optional photo

// eslint-disable-next-line quotes
// const FETCH_URL = "http://localhost:1234/reviews";
export default {
  // eslint-disable-next-line quotes
  name: "ReviewsView",
  data() {
    return {
      reviews: [],
      name: "",
      position: "",
      text: "",
      image: "",
      addReview: null,
    };
  },
  created() {
    this.getReviews();
  },
  // mounted() {
  //   fetch(FETCH_URL)
  //     .then((response) => response.json())
  //     .then((result) => {
  //       this.reviews = result;
  //     });
  // },
  methods: {
    async getReviews() {
      try {
        let response = await axios.get("/api/reviews");
        this.reviews = response.data;
        return true;
      } catch (error) {
        console.log(error);
        console.log("fails at getreviews");
      }
    },
    // addReview() {
    //   console.log(this.review);
    //   fetch(FETCH_URL, {
    //     method: "POST",
    //     body: JSON.stringify(this.review),
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //   })
    //     .then((response) => response.json())
    //     .then((result) => {
    //       console.log(result);
    //     });
    // },
    async upload() {
      try {
        let newReview = await axios.post("/api/reviews", {
          name: this.name,
          position: this.position,
          text: this.text,
          image: this.image,
        });
        this.addReview = newReview.data;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteReview(review) {
      try {
        await axios.delete("api/reviews/" + review._id);
        this.getReviews();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
.review-input {
  margin: 50px;
}
.review-input-container {
  margin-top: 15px;
  margin-bottom: 15px;
}

.button-view {
  margin-top: 10px;
  margin-bottom: 10px;
}

.review-image {
  max-width: 250px;
}

.review-profile {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.reviews-container {
  justify-content: center;
}
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

.review-container-admin {
  padding-top: 30px;
  padding-bottom: 30px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  min-width: 800px;
  border-top: solid;
}

.company-duration {
  font-family: Arial, sans-serif;
  font-size: 20px;
  display: flex;
  justify-content: center;
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
