<template>
    <div>
        <particles-bg type="cobweb" :config="config" :bg="true" color="c6c6cc"/>
        <section id="container">
            <div id="introbox">
                <div id="intro">
                    <p>Hello, I'm a Web Developer student at the BASV. Welcome on my portfolio site!</p>
                </div>
                <div id="me">
                    <img src="@/assets/me.png" alt="me"/>
                </div>
            </div>
            <div id="socials">
      <a href="https://www.facebook.com/akos.gyetvan"
        ><i class="fab fa-facebook-f"></i
      ></a>
      <a href="https://github.com/gyetvanakos"
        ><i class="fab fa-github"></i></a>
      <a href="https://www.linkedin.com/in/akosgyetvan"
        ><i class="fab fa-linkedin-in"></i
      ></a>
    </div>
        </section>
    </div>
</template>

<script>
    import {ParticlesBg} from "particles-bg-vue";
    //import  icon  from "../assets/asd.jpg";
    export default {
        name: "Home",
        components: {
            ParticlesBg
        },
        data: function () {
            return {
                config: {
                    num: [4, 7],
                    rps: 0.1,
                    radius: [5, 40],
                    life: [1.5, 3],
                    v: [2, 3],
                    tha: [-30, 30],
                    //body: icon,
                    alpha: [0.6, 0],
                    scale: [0.1, 0.4],
                    position: "all",
                    cross: "dead",
                    random: 15
                }
            };
        }
    };
</script>

<style lang="css">
    #container {
        widows: 100;
        height: auto;
    }

    #introbox {
        display: flex;
        align-items: center;
        justify-items: center;
        justify-content: space-around;
        font-size: 90px;
    }

    #intro {
        color: #2d2d2d;
        height: 100px;
        width: 600px;
        margin: 130px 0 500px 130px;
        border-top: solid red 1px;
        font-family: Helvetica;
    }

    #me {
        width: 800px;
        margin-top: 25px;
        margin-right: 100px;
    }

    p {
        font-weight: lighter;
        font-size: 1.8rem;
        padding-bottom: 50px;
    }

    a {
        margin: 15px 5px 5px 5px;
        color: #c6c6cc;
        transition: 1s;
        display: block;
    }

    a:hover {
        color: #2d2d2d;
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

    img {
        max-width: 100%;
    }

    #socials {
        display: block;
        height: 150px;
        width: 50px;
        font-size: 20px;
        position: absolute;
        margin: 0px 0px 0px 30px;
        bottom: 50px;
    }

    @media screen and (max-width: 1250px) {
        #introbox {
            display: block;
        }

        #intro {
            margin-bottom: 100px;
            width: 750px;
        }

        p {
            font-size: 30px;
            padding-bottom: 0px;
        }

        #socials {
            position: relative;
        }
    }

    @media screen and (max-width: 900px) {
        #intro {
            margin-bottom: 100px;
            width: 300px;
        }

        #introbox {
            display: block;
        }

        p {
            font-size: 17px;
            padding-bottom: 0px;
        }

        #me {
            width: 300px;
            margin-top: 0px;
        }
    }
</style>
