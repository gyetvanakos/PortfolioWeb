<template>
  <div>
    <div id="socials">
      <a href="https://www.facebook.com/akos.gyetvan"
        ><i class="fab fa-facebook-f"></i
      ></a>
      <a href="https://www.linkedin.com/in/akosgyetvan"
        ><i class="fab fa-github"></i>
        </a>
      <a href="https://www.linkedin.com/in/akosgyetvan"
        ><i class="fab fa-linkedin-in"></i
      ></a>
      <a href="mailto:gyetvanakos@gmail.com"><i class="fas fa-envelope"></i></a>
    </div>
    <section id="container">
      <div id="texttwo">
        <p>
          Hi! My name is Akos Gyetvan, 24 years old, I’m from Budapest,
          Hungary. Currently, I’m studying for PBA Web developer at the
          Business Academy Southwest in Esbjerg.
          <br />
          <br />
          I always focus on to turn my interests into my job, which I may do in the
          future. I believe that my diligence and responsibility will enable me
          to perform well at your company. I have good interpersonal skills,
          value teamwork and I am aware that hard work is the key to succeed.
          <br />
          <br />
          
        </p>
      </div>
      <div>
        <div class="content" id="first"></div>
      </div>
    </section>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.content {
  width: 800px;
  height: 800px;
  margin-top: 20px;
  margin-left: 20px;
}

#first {
  background-image: url("../assets/IMG_5735.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

.text {
  text-align: left;
  margin-left: 40%;
  font-size: 50px;
  font-family: Helvetica;
}

#abouttext {
  margin-top: 100px;
}

#texttwo p {
  font-size: 20px;
  width: 700px;
  margin: auto;
  font-family: Helvetica;
  font-weight: normal;
}

#socials {
  display: block;
  height: 150px;
  width: 50px;
  font-size: 20px;
  margin: 630px 0px 0px 30px;
  position: fixed;
}

#infobox {
  display: flex;
  align-items: center;
  justify-content: center;
}

#buttons {
  display: flex;
  width: 500px;
  height: 5px;
  justify-content: space-between;
  font-size: 15px;
}

#container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

section {
  width: 100%;
  height: 150px;
}

body {
  --def: #c6c6cc;
  --inv: #000;
}

a {
  margin: 15px 5px 5px 5px;
  color: #c6c6cc;
  transition: 1s;
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

#barchart {
  height: 400px;
  width: 100%;
  align-content: center;
  justify-content: center;
  display: flex;
}

@media screen and (max-width: 900px) {
  #abouttext {
    margin-top: 100px;
  }

  .text {
    font-size: 30px;
    width: 300px;
  }

  #abouttext {
    font-size: 30px;
  }

  #texttwo p {
    font-size: 15px;
    width: 250px;
  }
}
</style>
