<template>
  <div>
    <div id="app">
      <section id="container">
        <div id="projects">
          <h1>MY PROJECTS</h1>
          <a href="https://projectwebd.online/login-at-home/Presentation/index.php" class="school"><div class="content" id="deepbook"></div></a
            >
            <div class="bottom">
            <a class="gitrepo" href="https://github.com/gyetvanakos"
              ><i class="fab fa-github"></i
            ></a>
          </div>
          <a href="https://rkexpo.netlify.app/" class="school"><div class="content" id="rkexpo"></div></a
            >
            <div class="bottom">
            <a class="gitrepo" href="https://github.com/gyetvanakos"
              ><i class="fab fa-github"></i
            ></a>
          </div>
          <a href="https://webshop-1bc0c.web.app/" class="school"><div class="content" id="sneakernation"></div></a
            >
          <div>
            <div class="bottom">
            <a class="gitrepo" href="https://github.com/gyetvanakos"
              ><i class="fab fa-github"></i
            ></a>
          </div>
          </div>
          <a href="https://howtocovid.netlify.app/" class="school"><div class="content" id="howtocovid"></div></a>
          <div class="bottom">
            <a class="gitrepo" href="https://github.com/gyetvanakos"
              ><i class="fab fa-github"></i
            ></a>
          </div>
          <a href="https://bass-2019.netlify.app" class="school"><div class="content" id="bass"></div></a>
          <div class="bottom">
            <a class="gitrepo" href="https://github.com/gyetvanakos"
              ><i class="fab fa-github"></i
            ></a>
          </div>
        </div>
        <div id="portfolio">
          <h1>ART WORKS</h1>
          <div class="content" id="first"></div>
          <div class="content" id="second"></div>
          <div class="content" id="third"></div>
          <div class="content" id="fourth"></div>
          <div class="content" id="eleventh"></div>
          <h1>LOGO IDEAS</h1>
          <div class="content" id="fifth"></div>
          <div class="content" id="tenth"></div>
          <h1>POSTERS</h1>
          <div class="content" id="seventh"></div>
          <div class="content" id="eigth"></div>
          <div class="content" id="ninth"></div>
          <h1>WEBDESIGN</h1>
          <div class="content" id="sixth"></div>
        </div>
      </section>
    </div>
    <div id="socials">
      <a href="https://www.facebook.com/akos.gyetvan"
        ><i class="fab fa-facebook-f"></i
      ></a>
      <a href="https://github.com/gyetvanakos"><i class="fab fa-github"></i></a>
      <a href="https://www.linkedin.com/in/akosgyetvan"
        ><i class="fab fa-linkedin-in"></i
      ></a>
      <a href="mailto:gyetvanakos@gmail.com"><i class="fas fa-envelope"></i></a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  align-items: center;
  justify-content: center;
}

#container {
  display: block;
  align-items: center;
  justify-content: center;
}

#portfolio {
  width: 100%;
  height: auto;
  display: block;
  align-items: center;
  justify-content: center;
}

.content {
  width: 800px;
  height: 800px;
  background: #c6c6cc;
  margin-top: 20px;
  border-radius: 25px;
  margin-bottom: 20px;
  border: solid #c6c6cc 1px;
}

#socials {
  display: block;
  height: 150px;
  width: 50px;
  font-size: 20px;
  margin: 630px 0px 0px 30px;
  position: fixed;
}

.school {
  color: black;
}
.school:hover {
}

a {
  margin: 15px 5px 5px 5px;
  color: #c6c6cc;
  transition: 1s;
  display: block;
}

a:hover {
  color: black;
}

a:link {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

a:active {
  text-decoration: none;
}

a:visited {
  color: #c6c6cc;
}

a:hover {
  color: black;
}

h1 {
  font-family: Helvetica;
  margin-top: 55px;
}

#first {
  background-image: url("../assets/clonesoldier.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

#second {
  background-image: url("../assets/minime.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

#third {
  background-image: url("../assets/pizza.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

#fourth {
  background-image: url("../assets/spacesuits.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

#fifth {
  background-image: url("../assets/logoek.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

#sixth {
  background-image: url("../assets/site.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

#seventh {
  background-image: url("../assets/unclecovid.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

#eigth {
  background-image: url("../assets/covidguide.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

#ninth {
  background-image: url("../assets/facts.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

#tenth {
  background-image: url("../assets/hangoverbar-01.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

#eleventh {
  background-image: url("../assets/cthulhu.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

.bottom {
  width: 400px;
  height: 100px;
  display: flex;
  font-size: 18px;
  align-content: center;
  justify-content: space-evenly;
  margin: auto;
  text-align: center;
  font-family: Helvetica;
}

.gitrepo {
  font-size: 30px;
}

#deepbook{
  background-image: url("../assets/deepbook.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

#rkexpo{
  background-image: url("../assets/rkexpo.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}


#sneakernation{
  background-image: url("../assets/sneakernation.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}


#howtocovid{
  background-image: url("../assets/howtocovid.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

#bass{
  background-image: url("../assets/bass.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}



@media screen and (max-width: 900px) {
  .content {
    width: 300px;
    height: 300px;
    background: #c6c6cc;
    margin-top: 20px;
    border-radius: 12px;
    margin-bottom: 50px;
  }
}

@media screen and (max-width: 600px) {
  .content {
    width: 250px;
    height: 250px;
    background: #c6c6cc;
    margin-top: 20px;
    border-radius: 12px;
    margin-bottom: 50px;
  }

  #container {
    margin-top: 100px;
  }
}
</style>