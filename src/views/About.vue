<template>
  <div>
    <div id="socials">
      <a href="https://www.facebook.com/akos.gyetvan">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="https://www.instagram.com/akosgyetvan/">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="https://www.linkedin.com/in/akosgyetvan">
        <i class="fab fa-linkedin-in"></i>
      </a>
    </div>
    <section id="container">
      <div class="text" id="abouttext">
        <h1>About me</h1>
      </div>
      <div id="texttwo">
        <p>
          Hello!
          My name is Akos Gyetvan, 24 years old, I’m from Budapest, Hungary.
          Currently, I’m studying for Multimedia Design degree at the Business Academy Southwest in Esbjerg
          where I've learnt about HTML, CSS and Javascript.
          <br />I have got some experience in terms of logo creating, photo editing and also how to create an user friendly website. I always try to focus on to turn my interests into my job, which I may do in the future. Due to this passion, I have started to learn how to use different 3D graphics softwares, such as Blender and Zmodeler.
        </p>
      </div>
      <section id="infobox">
      <div id="buttons">
        <a href="https://www.youtube.com/watch?v=bQjr0iKSZ4M"><i class="fas fa-video"></i></a>
        <a href="mailto:gyetvanakos@gmail.com"><i class="fas fa-envelope"></i></a>
        <a href="https://drive.google.com/open?id=1k5UH_LYNI7hifH7zNYGOx1OwueB_aurN"><i class="fas fa-sticky-note"></i></a>
      </div>
    </section>
      <div class="text">
        <h1>My skills</h1>
      </div>
    </section>
    <section id="barchart">
      <div class="skillChart" ref="chartdiv"></div>
    </section>
  </div>
</template>

<script>
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

export default {
  mounted() {
    let chart = am4core.create(this.$refs.chartdiv, am4charts.XYChart);

    // Add data
    chart.data = [
      {
        skill: "HTML",
        htmlSkillValue: 75
      },
      {
        skill: "CSS",
        cssSkillValue: 70
      },
      {
        skill: "JavaScript",
        javaScriptSkillValue: 25
      },
      {
        skill: "Design",
        designSkillValue: 85
      }
    ];

    // Create axes
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "skill";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 5;

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "Value (%) ";

    // Create series
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "htmlSkillValue";
    series.dataFields.categoryX = "skill";
    series.name = "Value (%)";
    series.tooltipText = "{name}: [bold]{valueY}[/]";
    series.stacked = true;
    series.columns.template.fill = am4core.color("#e5562a"); // fill

    // Create series
    var series2 = chart.series.push(new am4charts.ColumnSeries());
    series2.dataFields.valueY = "cssSkillValue";
    series2.dataFields.categoryX = "skill";
    series2.name = "Value (%)";
    series2.tooltipText = "{name}: [bold]{valueY}[/]";
    series2.stacked = true;
    series2.columns.template.fill = am4core.color("#0e74bb"); // fill

    // Create series
    var series3 = chart.series.push(new am4charts.ColumnSeries());
    series3.dataFields.valueY = "javaScriptSkillValue";
    series3.dataFields.categoryX = "skill";
    series3.name = "Value (%)";
    series3.tooltipText = "{name}: [bold]{valueY}[/]";
    series3.stacked = true;
    series3.columns.template.fill = am4core.color("#e5a52c"); // fill

      // Create series
    var series4 = chart.series.push(new am4charts.ColumnSeries());
    series4.dataFields.valueY = "designSkillValue";
    series4.dataFields.categoryX = "skill";
    series4.name = "Value (%)";
    series4.tooltipText = "{name}: [bold]{valueY}[/]";
    series4.stacked = true;
    series4.columns.template.fill = am4core.color("#4cb690"); // fill

    // Add cursor
    chart.cursor = new am4charts.XYCursor();
  },

  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose();
    }
  }
};
</script>

<style lang="scss" scoped>
.skillChart {
  width: 70%;
  height: 400px;
  margin:auto
}

.text {
  display: flex;
  align-items: center;
  justify-items: center;
  margin-left: 40%;
  font-size: 50px;
  font-family: Helvetica;
}

#abouttext {
  margin-top: 100px;
}

#texttwo p {
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: space-around;
  font-size: 20px;
  width: 700px;
  margin: auto;
  font-weight: lighter;
  font-family: Helvetica;
  text-align: center;
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

#barchart{
    height: 400px;
    width:100%;
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
