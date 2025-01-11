import JsLogo from "../assets/png/tech/js.png";
import TsLogo from "../assets/png/tech/typescript.png";
import PhpLogo from "../assets/png/tech/php.png";
import PythonLogo from "../assets/png/tech/python.jpg";
import JavaLogo from "../assets/png/tech/java.png";
import CssLogo from "../assets/png/tech/css-3.png";
import MySQLLogo from "../assets/png/tech/mysql.png";
import PostgreSQLLogo from "../assets/png/tech/postgreSQL.png";
import ReactNativeLogo from "../assets/png/tech/react-native.png";
import ReactJsLogo from "../assets/png/tech/react-js.png";
import AngularLogo from "../assets/png/tech/angular.png";
import LaravelLogo from "../assets/png/tech/Laravel.png";
import BootstrapLogo from "../assets/png/tech/bootstrap-1.png";
import StrapiLogo from "../assets/png/tech/strapi.png";
import SassLogo from "../assets/png/tech/sass.png";
import DjangoLogo from "../assets/png/tech/dj.png";
import GithubLogo from "../assets/png/tech/github.png";
import DockerLogo from "../assets/png/tech/docker.png";
import FigmaLogo from "../assets/png/tech/figma.png";
import ClockifyLogo from "../assets/png/tech/clockify.png";
import JiraLogo from "../assets/png/tech/jira.png";
import ScrumLogo from "../assets/png/tech/scrum.png";
import GenexusLogo from "../assets/png/tech/genexus.jpg";
import ReduxIcon from "../assets/png/icon/reduxIcon.png";
import tailwind from "../assets/png/icon/tailwind.png";

const technologiesData = (t) => [
  {
    image: JsLogo,
    tech: "Javascript",
    techDescription: t("WebDevelopment"),
  },
  {
    image: PhpLogo,
    tech: "Php",
    techDescription: t("BackendDevelopment"),
  },
  {
    image: PythonLogo,
    tech: "Python",
    techDescription: t("FullStack"),
  },
  {
    image: CssLogo,
    tech: "Css",
    techDescription: t("WebDesign"),
  },
  {
    image: TsLogo,
    tech: "Typescript",
    techDescription: t("WebDevelopment"),
  },
  {
    image: JavaLogo,
    tech: "Java",
    techDescription: t("BackendDevelopment"),
  },
];

export const dataBaseData = (t) => [
  {
    image: MySQLLogo,
    tech: "MySQL",
    techDescription: t("DataBase"),
  },
  {
    image: PostgreSQLLogo,
    tech: "PostgreSQL",
    techDescription: t("DataBase"),
  },
];

export const frameworksData = (t) => [
  {
    image: ReduxIcon,
    tech: "Redux",
    techDescription: t("StateManagement"),
  },
  {
    image: ReactNativeLogo,
    tech: "React Native",
    techDescription: t("MobileDevelopment"),
  },
  {
    image: ReactJsLogo,
    tech: "React.js",
    techDescription: t("FrontendDevelopment1"),
  },
  {
    image: LaravelLogo,
    tech: "Laravel",
    techDescription: t("FullStack"),
  },
  {
    image: DjangoLogo,
    tech: "Django",
    techDescription: t("FullStack"),
  },
  {
    image: StrapiLogo,
    tech: "Strapi",
    techDescription: t("CMS"),
  },
  {
    image: BootstrapLogo,
    tech: "Bootstrap",
    techDescription: t("CssFramework"),
  },
  {
    image: tailwind,
    tech: "Tailwind",
    techDescription: t("CssFramework"),
  },
  {
    image: SassLogo,
    tech: "Sass",
    techDescription: t("CssFramework"),
  },
  {
    image: AngularLogo,
    tech: "Angular",
    techDescription: t("FrontendDevelopment1"),
  },
];

export const toolsDevData = (t) => [
  {
    image: FigmaLogo,
    tech: "Figma",
    techDescription: t("UxIxDesign"),
  },
  {
    image: ClockifyLogo,
    tech: "Clockify",
    techDescription: t("TimeManagement"),
  },
  {
    image: JiraLogo,
    tech: "Jira",
    techDescription: t("ProjectManagement"),
  },
  {
    image: ScrumLogo,
    tech: "Scrum",
    techDescription: t("AgileMethodology"),
  },
  {
    image: GenexusLogo,
    tech: "Genexus",
    techDescription: t("SoftwareDevelopment"),
  },
  {
    image: GithubLogo,
    tech: "Github",
    techDescription: t("ControlVersion"),
  },
  {
    image: DockerLogo,
    tech: "Docker",
    techDescription: t("Devops"),
  },
];

export default technologiesData;
