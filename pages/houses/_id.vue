<template>
  <div class="container">
    <div>
      <!--    <h1>Hello {{ id }}</h1>-->
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css" integrity="sha256-mmgLkCYLUQbXn0B1SRqzHar6dCnv9oZFPEC1g1cwlkk=" crossorigin="anonymous">
      <div class="container">
        <div class="row">
          <div class="col-md-5">
            <div class="project-info-box mt-0">
              <h5>HOUSE DETAILS</h5>
              <p class="mb-0">
                Vivamus pellentesque, felis in aliquam ullamcorper, lorem tortor porttitor erat, hendrerit porta nunc tellus eu lectus. Ut vel imperdiet est. Pellentesque condimentum, dui et blandit laoreet, quam nisi tincidunt tortor.
              </p>
            </div><!-- / project-info-box -->

            <div class="project-info-box">
              <p><b>Client:</b> CUPCAKE CO</p>
              <p><b>Date:</b> 14.02.2020</p>
              <p><b>Designer:</b> James Doe</p>
              <p><b>Tools:</b> Illustrator</p>
              <p class="mb-0">
                <b>Budget:</b> $500
              </p>
            </div><!-- / project-info-box -->
          </div><!-- / column -->

          <div class="col-md-7">
            <img src="https://via.placeholder.com/400x300/FFB6C1/000000" alt="project-image" class="rounded">
            <div class="project-info-box">
              <p><b>Categories:</b> Design, Illustration</p>
              <p><b>Skills:</b> Illustrator</p>
            </div><!-- / project-info-box -->
          </div><!-- / column -->
        </div>
      </div>
    </div>
    <div class="mgb-40 padb-30 auto-invert line-b-4 align-center">
      <h4 class="font-cond-l fg-accent lts-md mgb-10" contenteditable="false">
        Zobacz co inni sądzą o tym domku!
      </h4>
      <h1 class="font-cond-b fg-text-d lts-md fs-300 fs-300-xs no-mg" contenteditable="false">
        Read Customer Reviews
      </h1>
    </div>
    <ul class="hash-list cols-3 cols-1-xs pad-30-all align-center text-sm">
      <li>
        <img
          src="https://bootdey.com/img/Content/avatar/avatar1.png"
          class="wpx-100 img-round mgb-20"
          title=""
          alt=""
          data-edit="false"
          data-editor="field"
          data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]"
        >
        <p class="fs-110 font-cond-l" contenteditable="false">
          " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. "
        </p>
        <h5 class="font-cond mgb-5 fg-text-d fs-130" contenteditable="false">
          Martha Stewart
        </h5>
        <small class="font-cond case-u lts-sm fs-80 fg-text-l" contenteditable="false">Business Woman - New York</small>
      </li>
      <li>
        <img
          src="https://bootdey.com/img/Content/avatar/avatar4.png"
          class="wpx-100 img-round mgb-20"
          title=""
          alt=""
          data-edit="false"
          data-editor="field"
          data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]"
        >
        <p class="fs-110 font-cond-l" contenteditable="false">
          " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. "
        </p>
        <h5 class="font-cond mgb-5 fg-text-d fs-130" contenteditable="false">
          Ariana Menage
        </h5>
        <small class="font-cond case-u lts-sm fs-80 fg-text-l" contenteditable="false">Recording Artist - Los Angeles</small>
      </li>
      <li>
        <img
          src="https://bootdey.com/img/Content/avatar/avatar5.png"
          class="wpx-100 img-round mgb-20"
          title=""
          alt=""
          data-edit="false"
          data-editor="field"
          data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]"
        >
        <p class="fs-110 font-cond-l" contenteditable="false">
          " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. "
        </p>
        <h5 class="font-cond mgb-5 fg-text-d fs-130" contenteditable="false">
          Sean Carter
        </h5>
        <small class="font-cond case-u lts-sm fs-80 fg-text-l" contenteditable="false">Fund Manager - Chicago</small>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  layout: 'default',
  async asyncData ({ $axios, params }) {
    const id = params.id
    return await $axios.$get(`http://localhost:8000/api/houses/${params.id}`)
      .then(r => ({ id, houses: r[id] }))
  }
}
</script>

<style>
body{
  background:#f5f5f5;
  margin-top:20px;}
.project {
  margin: 15px 0;
}

.no-gutter .project {
  margin: 0 !important;
  padding: 0 !important;
}

.has-spacer {
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 30px;
}

.has-spacer-extra-space {
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 30px;
}

.has-side-spacer {
  margin-left: 30px;
  margin-right: 30px;
}

.project-title {
  font-size: 1.25rem;
}

.project-skill {
  font-size: 0.9rem;
  font-weight: 400;
  letter-spacing: 0.06rem;
}

p {
  font-family: "Barlow", sans-serif !important;
  font-weight: 300;
  font-size: 1rem;
  color: #686c6d;
  letter-spacing: 0.03rem;
  margin-bottom: 10px;
}

.project-info-box {
  margin: 15px 0;
  background-color: #fff;
  padding: 30px 40px;
  border-radius: 5px;
}

.project-info-box p {
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #d5dadb;
}

.project-info-box p:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: none;
}
img {
  width: 100%;
  max-width: 100%;
  height: auto;
  -webkit-backface-visibility: hidden;
}
.rounded {
  border-radius: 5px !important;
}
.btn-xs.btn-icon {
  width: 34px;
  height: 34px;
  max-width: 34px !important;
  max-height: 34px !important;
  font-size: 10px;
  line-height: 34px;
}
.btn-facebook, .btn-facebook:active, .btn-facebook:focus {
  color: #fff !important;
  background: #4e68a1;
  border: 2px solid #4e68a1;
}

.btn-facebook:hover {
  color: #fff !important;
  background: #3b4f7a;
  border: 2px solid #3b4f7a;
}

.btn-facebook-link, .btn-facebook-link:active, .btn-facebook-link:focus {
  color: #4e68a1 !important;
  background: transparent;
  border: none;
}

.btn-facebook-link:hover {
  color: #3b4f7a !important;
}

.btn-outline-facebook, .btn-outline-facebook:active, .btn-outline-facebook:focus {
  color: #4e68a1 !important;
  background: transparent;
  border: 2px solid #4e68a1;
}

.btn-outline-facebook:hover {
  color: #fff !important;
  background: #4e68a1;
  border: 2px solid #4e68a1;
}

/* twitter button */
.btn-twitter, .btn-twitter:active, .btn-twitter:focus {
  color: #fff !important;
  background: #65b5f2;
  border: 2px solid #65b5f2;
}

.btn-twitter:hover {
  color: #fff !important;
  background: #5294c6;
  border: 2px solid #5294c6;
}

.btn-twitter-link, .btn-twitter-link:active, .btn-twitter-link:focus {
  color: #65b5f2 !important;
  background: transparent;
  border: none;
}

.btn-twitter-link:hover {
  color: #5294c6 !important;
}

.btn-outline-twitter, .btn-outline-twitter:active, .btn-outline-twitter:focus {
  color: #65b5f2 !important;
  background: transparent;
  border: 2px solid #65b5f2;
}

.btn-outline-twitter:hover {
  color: #fff !important;
  background: #65b5f2;
  border: 2px solid #65b5f2;
}

/* google button */
.btn-google, .btn-google:active, .btn-google:focus {
  color: #fff !important;
  background: #e05d4b;
  border: 2px solid #e05d4b;
}

.btn-google:hover {
  color: #fff !important;
  background: #b94c3d;
  border: 2px solid #b94c3d;
}

.btn-google-link, .btn-google-link:active, .btn-google-link:focus {
  color: #e05d4b !important;
  background: transparent;
  border: none;
}

.btn-google-link:hover {
  color: #b94c3d !important;
}

.btn-outline-google, .btn-outline-google:active, .btn-outline-google:focus {
  color: #e05d4b !important;
  background: transparent;
  border: 2px solid #e05d4b;
}

.btn-outline-google:hover {
  color: #fff !important;
  background: #e05d4b;
  border: 2px solid #e05d4b;
}

/* linkedin button */
.btn-linkedin, .btn-linkedin:active, .btn-linkedin:focus {
  color: #fff !important;
  background: #2083bc;
  border: 2px solid #2083bc;
}

.btn-linkedin:hover {
  color: #fff !important;
  background: #186592;
  border: 2px solid #186592;
}

.btn-linkedin-link, .btn-linkedin-link:active, .btn-linkedin-link:focus {
  color: #2083bc !important;
  background: transparent;
  border: none;
}

.btn-linkedin-link:hover {
  color: #186592 !important;
}

.btn-outline-linkedin, .btn-outline-linkedin:active, .btn-outline-linkedin:focus {
  color: #2083bc !important;
  background: transparent;
  border: 2px solid #2083bc;
}

.btn-outline-linkedin:hover {
  color: #fff !important;
  background: #2083bc;
  border: 2px solid #2083bc;
}

/* pinterest button */
.btn-pinterest, .btn-pinterest:active, .btn-pinterest:focus {
  color: #fff !important;
  background: #d2373b;
  border: 2px solid #d2373b;
}

.btn-pinterest:hover {
  color: #fff !important;
  background: #ad2c2f;
  border: 2px solid #ad2c2f;
}

.btn-pinterest-link, .btn-pinterest-link:active, .btn-pinterest-link:focus {
  color: #d2373b !important;
  background: transparent;
  border: none;
}

.btn-pinterest-link:hover {
  color: #ad2c2f !important;
}

.btn-outline-pinterest, .btn-outline-pinterest:active, .btn-outline-pinterest:focus {
  color: #d2373b !important;
  background: transparent;
  border: 2px solid #d2373b;
}

.btn-outline-pinterest:hover {
  color: #fff !important;
  background: #d2373b;
  border: 2px solid #d2373b;
}

/* dribble button */
.btn-dribbble, .btn-dribbble:active, .btn-dribbble:focus {
  color: #fff !important;
  background: #ec5f94;
  border: 2px solid #ec5f94;
}

.btn-dribbble:hover {
  color: #fff !important;
  background: #b4446e;
  border: 2px solid #b4446e;
}

.btn-dribbble-link, .btn-dribbble-link:active, .btn-dribbble-link:focus {
  color: #ec5f94 !important;
  background: transparent;
  border: none;
}

.btn-dribbble-link:hover {
  color: #b4446e !important;
}

.btn-outline-dribbble, .btn-outline-dribbble:active, .btn-outline-dribbble:focus {
  color: #ec5f94 !important;
  background: transparent;
  border: 2px solid #ec5f94;
}

.btn-outline-dribbble:hover {
  color: #fff !important;
  background: #ec5f94;
  border: 2px solid #ec5f94;
}

/* instagram button */
.btn-instagram, .btn-instagram:active, .btn-instagram:focus {
  color: #fff !important;
  background: #4c5fd7;
  border: 2px solid #4c5fd7;
}

.btn-instagram:hover {
  color: #fff !important;
  background: #4252ba;
  border: 2px solid #4252ba;
}

.btn-instagram-link, .btn-instagram-link:active, .btn-instagram-link:focus {
  color: #4c5fd7 !important;
  background: transparent;
  border: none;
}

.btn-instagram-link:hover {
  color: #4252ba !important;
}

.btn-outline-instagram, .btn-outline-instagram:active, .btn-outline-instagram:focus {
  color: #4c5fd7 !important;
  background: transparent;
  border: 2px solid #4c5fd7;
}

.btn-outline-instagram:hover {
  color: #fff !important;
  background: #4c5fd7;
  border: 2px solid #4c5fd7;
}

/* youtube button */
.btn-youtube, .btn-youtube:active, .btn-youtube:focus {
  color: #fff !important;
  background: #e52d27;
  border: 2px solid #e52d27;
}

.btn-youtube:hover {
  color: #fff !important;
  background: #b31217;
  border: 2px solid #b31217;
}

.btn-youtube-link, .btn-youtube-link:active, .btn-youtube-link:focus {
  color: #e52d27 !important;
  background: transparent;
  border: none;
}

.btn-youtube-link:hover {
  color: #b31217 !important;
}

.btn-outline-youtube, .btn-outline-youtube:active, .btn-outline-youtube:focus {
  color: #e52d27 !important;
  background: transparent;
  border: 2px solid #e52d27;
}

.btn-outline-youtube:hover {
  color: #fff !important;
  background: #e52d27;
  border: 2px solid #e52d27;
}
.btn-icon span, .btn-icon i {
  display: block;
  line-height: 50px;
}
.btn-icon i {
  margin-top: -1px;
}

.btn-xs.btn-icon span, .btn-xs.btn-icon i {
  line-height: 34px;
}
.btn-icon.btn-circle span, .btn-icon.btn-circle i {
  margin-top: -1px;
  margin-right: -1px;
}

a.btn, a.btn-social {
  display: inline-block;
}
.mr-5 {
  margin-right: 5px !important;
}
.mb-0 {
  margin-bottom: 0 !important;
}

.btn-circle {
  border-radius: 50% !important;
}

b, strong {
  font-weight: 700 !important;
}

.align-center {
  text-align: center;
}
.hash-list {
  display: block;
  padding: 0;
  margin: 0 auto;
}

@media (min-width: 768px){
  .hash-list.cols-3 > li:nth-last-child(-n+3) {
    border-bottom: none;
  }
}
@media (min-width: 768px){
  .hash-list.cols-3 > li {
    width: 33.3333%;
  }
}
.hash-list > li {
  display: block;
  float: left;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
.pad-30, .pad-30-all > * {
  padding: 30px;
}
.mgb-20, .mgb-20-all > * {
  margin-bottom: 20px;
}

.img-round, .img-rel-round {
  border-radius: 50%;
}
.padb-30, .padb-30-all > * {
  padding-bottom: 30px;
}

.mgb-40, .mgb-40-all > * {
  margin-bottom: 40px;
}

[class*="line-b"] {
  position: relative;
  padding-bottom: 20px;
  border-color: #E6AF2A;
}
.fg-text-d, .fg-hov-text-d:hover, .fg-active-text-d.active {
  color: #222;
}
.font-cond-b {
  font-weight: 700 !important;
}

</style>
