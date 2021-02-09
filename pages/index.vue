<template>

  <div class="container">
    <div class="row">
      <div class="col-md-6 text-center full-content">
        <h2 class="section-title no-border v-3"><span>Witaj</span> w house share</h2>
        <p class="sub-section-title v-2">Przeglądaj liste domków do wynajęcia lub dodaj swoją ofertę</p>
        <div class="mrb-45"></div>
        <!--  /.mrb -->
      </div>
      <!--  /.col-md-12 -->
    </div>
    <!--  /.row -->

    <div class="row">
      <div class="col-12">
        <div class="row">
          <div class="col-md-6 col-xl-4">
            <article class="post">
              <div class="article-v2">
                <figure class="article-thumb">
                  <a href="#">
<!--                    <img src="https://via.placeholder.com/350x280/FFB6C1/000000" alt="blog image"/>-->
                    <img src="../static/housik.jpg" width="350" height="280" alt="blog image"/>
                  </a>
                </figure>
                <br>
                <br>
                <div class="article-content-main">
                  <div class="article-header">
                    <h2 class="entry-title"><a href="houses/add">Dodaj nowe ogłoszenie.</a></h2>
                    <div class="entry-meta">
                    </div>
                    <!-- /.entry-meta -->
                  </div>
                  <div class="article-footer">
                    <div class="row">
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>

          <div class="col-md-6 col-xl-4">
            <article class="post">
              <div class="article-v2">
                <figure class="article-thumb">
                  <a href="#">
<!--                    <img src="https://via.placeholder.com/350x280/87CEFA/000000" alt="blog image"/>-->
                    <img src="../static/houz.png" width="350" height="280" alt="blog image"/>
                  </a>
                </figure>
                <!-- /.article-thumb -->
                <div class="article-content-main">
                  <div class="article-header">
                    <h2 class="entry-title"><a href="/houses">Zobacz liste domków.</a></h2>
                    <div class="entry-meta">
                    </div>
                  </div>
                  <div class="article-footer">
                    <div class="row">
                      <div class="col-6 text-left footer-link">

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>

          <div class="col-md-6 col-xl-4">
            <article class="post">
              <div class="article-v2">
                <figure class="article-thumb">
                  <a href="#">
                    <img src="../static/profile-1506810-1278719.png" width="350" height="280" alt="blog image"/>
                  </a>
                </figure>
                <br>
                <br>
                <div class="article-content-main">
                  <div class="article-header">
                    <h2 class="entry-title"><a href="#">Zobacz swój profil</a></h2>
                    <div class="entry-meta">
                    </div>
                  </div>
                  <div class="article-footer">
                    <div class="row">
                      <!--  /.col-6 -->
                      <!--  /.col-6 -->
                    </div>
                    <!--  /.row -->
                  </div>
                  <!--  /.article-footer -->
                </div>
                <!--  /.article-content-main -->
              </div>
              <!--  /.article-v2 -->
            </article>
            <!--  /.post -->
          </div>
          <!--  /.col-md-6 -->
        </div>
        <!--  /.blog-carousel -->
      </div>
      <!--  /.col-12 -->
    </div>
<!--    &lt;!&ndash;  /.row &ndash;&gt;authenticated-->
  </div>
</template>

<script>

export default {
  layout: 'default',
  middleware: 'notAuthenticated'
}
</script>

<style>
body{margin-top:20px;}
.post .article-v2 {
  padding: 0 15px;
}

.post .article-v2 .entry-title {
  font-size: 16px;
  color: #666;
  font-weight: 600;
}

.post .article-v2 .article-header {
  margin-bottom: 15px;
}

.post .article-v2 .article-content-main {
  -webkit-box-shadow: 1px 0 20px 1px rgba(0, 0, 0, 0.15);
  box-shadow: 1px 0 20px 1px rgba(0, 0, 0, 0.15);
  padding: 30px;
  position: relative;
  background: #fff;
  margin-top: -75px;
}

@media only screen and (max-width: 1024px) {
  .post .article-v2 .article-content-main {
    padding: 15px;
    margin-bottom: 30px;
  }
}

.post .article-v2 .article-content p:last-of-type {
  margin-bottom: 0;
}

.post .article-v2 .article-thumb {
  position: relative;
  left: 25px;
  margin-bottom: 0;
}

.post .article-v2 .article-footer {
  border-top: 1px solid #ebebeb;
  padding-top: 15px;
  margin-top: 20px;
}

.post .article-v2 .article-footer .more-link {
  color: #ffa800;
}

.post .article-v2 .article-footer .footer-meta a {
  color: #aaa;
  font-size: 15px;
  margin-right: 5px;
}

.post .article-v2 .article-footer .footer-meta a i {
  font-size: 16px;
  margin-left: 2px;
}

</style>
