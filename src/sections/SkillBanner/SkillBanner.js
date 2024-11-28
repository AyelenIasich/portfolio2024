import React from "react";
import Marquee from "../../components/Marquee/Marquee";
import Strapi from "../../assets/png/tech/strapi.png";
import Typescript from "../../assets/png/tech/typescript.png";
import JavaScript from "../../assets/png/tech/js.png";
import ReactJs from "../../assets/png/tech/react-js.png";
import ReactNative from "../../assets/png/tech/react-native.png";
import Css from "../../assets/png/tech/css-3.png";
import Sass from "../../assets/png/tech/sass.png";
import Bootstrap from "../../assets/png/tech/bootstrap-1.png";
import Figma from "../../assets/png/tech/figma.png";
import Angular from "../../assets/png/tech/angular.png";
import Php from "../../assets/png/tech/php.png";
import Laravel from "../../assets/png/tech/Laravel.png";
import Django from "../../assets/png/tech/django.png";
import PostgreSQL from "../../assets/png/tech/postgreSQL.png";
import Mysql from "../../assets/png/tech/mysql.png";
import Genexus from "../../assets/png/tech/genexus.jpg";
import Java from "../../assets/png/tech/java.png";

function SkillBanner() {
  const technologies1 = [
    // Frontend
    { src: JavaScript, alt: "JavaScript" },
    { src: Typescript, alt: "Typescript" },
    { src: ReactJs, alt: "React.js" },
    { src: ReactNative, alt: "React Native" },
    { src: Css, alt: "CSS3" },
    { src: Sass, alt: "SASS" },
    { src: Bootstrap, alt: "Bootstrap" },
    { src: Figma, alt: "Figma" },
  ];
  const technologies2 = [
    // Frontend
    // { src: Angular, alt: "Angular" },

    // Backend
    { src: Php, alt: "PHP" },
    { src: Laravel, alt: "Laravel" },
    { src: Django, alt: "Django" },
    // { src: Java, alt: "Java" },

    // Database
    { src: PostgreSQL, alt: "PostgreSQL" },
    { src: Mysql, alt: "MySQL" },

    // CMS and others
    { src: Strapi, alt: "Strapi" },
    { src: Genexus, alt: "Genexus" },
  ];

  const technologies = [
    // Frontend
    { src: JavaScript, alt: "JavaScript" },
    { src: Typescript, alt: "Typescript" },
    { src: ReactJs, alt: "React.js" },
    { src: ReactNative, alt: "React Native" },
    { src: Css, alt: "CSS3" },
    { src: Sass, alt: "SASS" },
    { src: Bootstrap, alt: "Bootstrap" },
    { src: Figma, alt: "Figma" },
    { src: Angular, alt: "Angular" },

    // Backend
    { src: Php, alt: "PHP" },
    { src: Laravel, alt: "Laravel" },
    { src: Django, alt: "Django" },
    { src: Java, alt: "Java" },

    // Database
    { src: PostgreSQL, alt: "PostgreSQL" },
    { src: Mysql, alt: "MySQL" },

    // CMS and others
    { src: Strapi, alt: "Strapi" },
    { src: Genexus, alt: "Genexus" },
  ];

  return (
    <div className="container-fluid my-5 py-lg-3">
      <Marquee technologies={technologies1} />
      <Marquee technologies={technologies2} isLeft={true}/>
    </div>
  );
}

export default SkillBanner;
