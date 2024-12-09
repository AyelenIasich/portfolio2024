import Yazta from "../assets/proyects/yazta.jpg";
import SymbioXr from "../assets/proyects/symbioXr.jpg";
import Nietos from "../assets/proyects/nietos.jpg";
import Celigourmet from "../assets/proyects/celigourmet.jpg";
import Fotografia from "../assets/proyects/Curso-Fotografia.jpg";
import SeekerParking from "../assets/proyects/seeker-Parking.jpg";
import MarcketChain from "../assets/proyects/Marcket-Chain.jpg";
import Portfolio2022 from "../assets/proyects/Portfolio2022.jpg";
import UshuaiaCultura from "../assets/proyects/UshuaiaCultura.jpg";
import MarioFirstGame from "../assets/proyects/MarioFirstGame.jpg";
import MaquetadoUshuaiaCultura from "../assets/proyects/MaquetadoUshuaiaCultura.jpg";
import JorgeIasich from "../assets/proyects/JorgeIasich.jpg";
import PiedraPapelTijera from "../assets/proyects/PiedraPapelTijera.png";
import Telefonia from "../assets/proyects/Telefonia.jpg";

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
import AWS from "../assets/png/tech/AWS.png";
import MongoDB from "../assets/png/tech/MongoDB.png";
import Node from "../assets/png/tech/node.png";
import DigitalOcean from "../assets/png/tech/DigitalOcean.png";
import Springboot from "../assets/png/tech/Springboot.png";
import CleverCloud from "../assets/png/tech/CleverCloud.png";
import Railway from "../assets/png/tech/railway.png";

const proyectsData = (t) => [
  {
    image: Yazta,
    category: t("MobileDevelopment"),
    categoryFilter: "MobileDevelopment",
    title: "Yazta Mx & Yazta Pro (Innovus)",
    tech: [
      { name: "React Native", icon: ReactNativeLogo },
      { name: "Strapi", icon: StrapiLogo },
      { name: "AWS", icon: AWS },
      { name: "PostgreSQL", icon: PostgreSQLLogo },
      { name: "CSS", icon: CssLogo },
    ],
    period: "Nov. 2023 - Oct. 2024",
    description:
      'Actualmente, colaboro en el proyecto "Yazta", una aplicación en React Native y Strapi v3 para Android e iOS. Trabajo con mis compañeros para garantizar un desarrollo exitoso de la aplicación móvil.',
    linkMoreInfo: "#",
  },
  {
    image: Nietos,
    category: t("WebDevelopment"),
    categoryFilter: "WebDevelopment",
    title: "Nietos (Innovus)",
    tech: [
      { name: "Laravel", icon: LaravelLogo },
      { name: "MySQL", icon: MySQLLogo },
      { name: "Bootstrap", icon: BootstrapLogo },
      { name: "CSS", icon: CssLogo },
    ],
    period: "Oct. 2023 - Mar. 2024",
    description: t("NietosDescription"),
    paragraphModal0: t("NietosDescription0"),
    paragraphModal1: t("NietosDescription1"),
    paragraphModal2: t("NietosDescription2"),
    paragraphModal3: t("NietosDescription3"),
    // Herramientas y metodologías utilizadas:
    listTitle: t("SeekerParkingTitleList"),
    listItem: [
      t("SeekerParkingListItem1"),
      t("SeekerParkingListItem2"),
      t("SeekerParkingListItem3"),
    ],
    isShowModalPhotoProject: true,
    isShowMoreInfo: true,
  },
  {
    image: SymbioXr,
    category: t("WebDevelopment"),
    categoryFilter: "WebDevelopment",
    title: "Symbioxr (Innovus)",
    tech: [
      { name: "React.js", icon: ReactJsLogo },
      { name: "Node.js", icon: Node },
      { name: "MongoDB", icon: MongoDB },
      { name: "Bootstrap", icon: BootstrapLogo },
      { name: "CSS", icon: CssLogo },
    ],
    isShowModalPhotoProject: true,
    isShowMoreInfo: true,
    period: t("SymbioxrPeriod"),
    description: t("SymbioxrDescription"),
    paragraphModal0: t("SymbioxrDescription0"),
    paragraphModal1: t("SymbioxrDescription1"),
    paragraphModal2: t("SymbioxrDescription2"),
    paragraphModal3: t("SymbioxrDescription3"),
    // Herramientas y metodologías utilizadas:
    listTitle: t("SeekerParkingTitleList"),
    listItem: [
      t("SeekerParkingListItem1"),
      t("SeekerParkingListItem2"),
      t("SeekerParkingListItem3"),
    ],
  },
  {
    image: MarcketChain,
    category: t("WebDesign"),
    categoryFilter: "WebDesign",
    title: "MarketChain (Innovus)",
    tech: [{ name: "Figma", icon: FigmaLogo }],
    period: t("MarketChainPeriod"),
    description: t("MarketChainDescription"),
    linkWeb:
      "https://www.figma.com/design/LVUtuggIRUZDLkGmrjJiZQ/MarketChainFigmaUX%7CIX?node-id=0-1&node-type=canvas&t=sPowzbgy41RHGWsc-0",
    isShowBtns: true,
    isShowMoreInfo: false,
  },
  {
    image: Fotografia,
    category: t("WebDevelopment"),
    categoryFilter: "WebDevelopment",
    title: t("FotografiaTitle"),
    tech: [
      { name: "PHP", icon: PhpLogo },
      { name: "MySQL", icon: MySQLLogo },
      { name: "Bootstrap", icon: BootstrapLogo },
      { name: "CSS", icon: CssLogo },
    ],
    period: "Oct. 2023",
    description: t("FotografiaDescription"),

    isShowModalPhotoProject: true,
    isShowMoreInfo: true,
    paragraphModal0: t("FotografiaDescription0"),
    paragraphModal1: t("FotografiaDescription1"),
    listItem: [
      t("FotografiaListItem1"),
      t("FotografiaListItem2"),
    ],
  },

  {
    image: Celigourmet,
    category: t("WebDevelopment"),
    categoryFilter: "WebDevelopment",
    title: "Celigourmet (Innovus)",
    tech: [
      { name: "Laravel", icon: LaravelLogo },
      { name: "MySQL", icon: MySQLLogo },
      { name: "Bootstrap", icon: BootstrapLogo },
      { name: "CSS", icon: CssLogo },
    ],
    period: "Dic. 2023",
    description: t("CeligourmetDescription"),
    isShowBtns: false,
    isShowModalPhotoProject: false,
    isShowMoreInfo: false,
  },
  {
    image: SeekerParking,
    category: t("WebDevelopment"),
    categoryFilter: "WebDevelopment",
    title: "Seeker Parking (Innovus)",
    tech: [
      { name: "PHP", icon: PhpLogo },
      { name: "MySQL", icon: MySQLLogo },
      { name: "Bootstrap", icon: BootstrapLogo },
      { name: "CSS", icon: CssLogo },
      { name: "Figma", icon: FigmaLogo },
    ],
    period: t("SeekerParkingPeriod"),
    description: t("SeekerParkingDescription"),
    isShowModalPhotoProject: true,
    isShowMoreInfo: true,
    paragraphModal0: t("SeekerParkingDescription0"),
    paragraphModal1: t("SeekerParkingDescription1"),
    paragraphModal2: t("SeekerParkingDescription2"),
    paragraphModal3: t("SeekerParkingDescription3"),
    listTitle: t("SeekerParkingTitleList"),
    listItem: [
      t("SeekerParkingListItem1"),
      t("SeekerParkingListItem2"),
      t("SeekerParkingListItem3"),
    ],
  },
  {
    image: Telefonia,
    category: t("WebDevelopment"),
    categoryFilter: "WebDevelopment",
    title: "Telefonía (SGD)",
    tech: [
      { name: "Django", icon: DjangoLogo },
      { name: "MySQL", icon: MySQLLogo },
      { name: "Bootstrap", icon: BootstrapLogo },
      { name: "CSS", icon: CssLogo },
    ],
    period: "May. 2023 - Jun. 2023",
    description: t("TelefoniaDescription"),
    isShowBtns: false,
    isShowModalPhotoProject: false,
    isShowMoreInfo: false,
  },
  {
    image: UshuaiaCultura,
    category: t("WebDevelopment"),
    categoryFilter: "PersonalProjects",
    title: "Ushuaia Cultura",
    tech: [
      { name: "Laravel", icon: LaravelLogo },
      { name: "MySQL", icon: MySQLLogo },
      { name: "Digital Ocean", icon: DigitalOcean },
      { name: "Clever Cloud", icon: CleverCloud },
    ],
    period: t("UshuaiaCulturaPeriod"),
    description: t("UshuaiaCulturaDescription"),
    linkMoreInfo: "#",
    linkRepoFrontend: "https://github.com/AyelenIasich/Ushuaia_Cultura",
    linkWeb: "https://ushuaiacultura.com/",
    isShowBtns: false,
    isShowModalPhotoProject: true,
    paragraphModal0: t("UshuaiaCulturaDescription0"),
    paragraphModal1: t("UshuaiaCulturaDescription1"),
    listTitle: t("UshuaiaCulturaListTitle"),
    listItem: [t("UshuaiaCulturaListItem1"), t("UshuaiaCulturaListItem2")],
  },
  {
    image: MaquetadoUshuaiaCultura,
    category: t("WebDesign"),
    categoryFilter: "WebDesign",
    title: t("MaquetadoUshuaiaTitle"),
    tech: [{ name: "Figma", icon: FigmaLogo }],
    period: t("MaquetadoUshuaiaPeriod"),
    description: t("MaquetadoUshuaiaCulturaDescription"),
    linkWeb:
      "https://www.figma.com/design/4EvogqNwZCvWFTgwyjzJ6b/Untitled?node-id=0-1&t=noaW0pU4gBkHIM7u-0",
    isShowMoreInfo: false,
    isShowBtns: true,
  },
  {
    image: Portfolio2022,
    category: t("WebDevelopment"),
    categoryFilter: "PersonalProjects",
    title: "Argentina Programa #YoProgramo",
    tech: [
      { name: "Angular", icon: AngularLogo },
      { name: "Springboot", icon: Springboot },
      { name: "Bootstrap", icon: BootstrapLogo },
      { name: "Railway", icon: Railway },
      { name: "Clever Cloud", icon: CleverCloud },
    ],
    period: t("ArgentinaProgramaPeriod"),
    description: t("ArgentinaProgramaPreviewDescription"),
    linkMoreInfo: "/ArgentinaProgramaProject",
    isShowBtns: false,
    linkRepoFrontend: "https://github.com/AyelenIasich/PortfolioFrontEnd",
    linkRepoBackend: "https://github.com/AyelenIasich/portfolio-BackEnd",
    linkWeb: "https://ayeleniasichmyportfolio.web.app/",
    isArgentinaPrograma: true,
    isShowModalPhotoProject: true,
    paragraphModal0: t("ArgentinaProgramaDescription0"),
    paragraphModal1: t("ArgentinaProgramaDescription1"),
    listTitle: t("ArgentinaProgramaDescription2"),
    listItem: [
      t("ArgentinaProgramaDescription3"),
      t("ArgentinaProgramaDescription4"),
      t("ArgentinaProgramaDescription5"),
    ],
    paragraphModal6: t("ArgentinaProgramaDescription6"),
  },
  {
    image: PiedraPapelTijera,
    category: t("WebDevelopment"),
    categoryFilter: "PersonalProjects",
    title: t("RockPaperScissors"),
    tech: [
      { name: "Javascript", icon: JsLogo },
      { name: "Bootstrap", icon: BootstrapLogo },
      { name: "CSS", icon: CssLogo },
    ],
    period: "Mar. 2023",
    description: t("RockPaperScissorsDescription"),
    isShowMoreInfo: false,
    isShowBtns: true,
    linkRepoFrontend:
      "https://github.com/AyelenIasich/piedrapapeltijera.github.io",
    linkWeb: "https://ayeleniasich.github.io/piedrapapeltijera.github.io/",
  },
  {
    image: MarioFirstGame,
    category: t("WebDevelopment"),
    categoryFilter: "PersonalProjects",
    title: t("MarioTitle"),
    tech: [
      { name: "Kaboom.js", icon: JsLogo },
      { name: "CSS", icon: CssLogo },
    ],
    period: t("MarioPeriod"),
    description: t("MarioProject"),
    isShowMoreInfo: false,
    linkRepoFrontend: "https://github.com/AyelenIasich/miprimerjuego.github.io",
    linkWeb: "https://ayeleniasich.github.io/miprimerjuego.github.io/",
    alertProyect: t("MarioAlert"),
    isShowBtns: true,
  },
];

export const categoriesProyects = (t) => [
  {
    MobileDevelopment: t("MobileDevelopment"),
  },
  {
    WebDevelopment: t("WebDevelopment"),
  },
  {
    WebDesign: t("WebDesign"),
  },
  {
    PersonalProjects: t("PersonalProjects"),
  },
];

export const previewProjectsData = (t) => [
  {
    image: Yazta,
    category: t("MobileDevelopment"),
    categoryFilter: "MobileDevelopment",
    title: "Yazta Mx & Yazta Pro (Innovus)",
    tech: [
      { name: "React Native", icon: ReactNativeLogo },
      { name: "Strapi", icon: StrapiLogo },
      { name: "AWS", icon: AWS },
      { name: "PostgreSQL", icon: PostgreSQLLogo },
    ],
    period: "Nov. 2023 - Oct. 2024",
    description:
      'Actualmente, colaboro en el proyecto "Yazta", una aplicación en React Native y Strapi v3 para Android e iOS. Trabajo con mis compañeros para garantizar un desarrollo exitoso de la aplicación móvil.',
    linkMoreInfo: "#",
  },
  {
    image: Nietos,
    category: t("WebDevelopment"),
    categoryFilter: "WebDevelopment",
    title: "Nietos (Innovus)",
    tech: [
      { name: "Laravel", icon: LaravelLogo },
      { name: "MySQL", icon: MySQLLogo },
    ],
    period: "Oct. 2023 - Marzo. 2024",
    description:
      'Contribuí al proyecto "Nietos" en Innovus, una aplicación para gestionar pedidos de un restaurante. Desempeñé el rol de desarrolladora full stack utilizando Laravel, colaborando efectivamente en un equipo para asegurar el éxito del proyecto',
    linkMoreInfo: "#",
  },
  {
    image: SymbioXr,
    category: t("WebDevelopment"),
    categoryFilter: "WebDevelopment",
    title: "Symbioxr (Innovus)",
    tech: [
      { name: "React.js", icon: ReactJsLogo },
      { name: "Node.js", icon: Node },
      { name: "MongoDB", icon: MongoDB },
    ],
    period: "Oct. 2023 - Dic. 2023",
    description:
      'Actualmente, colaboro en el proyecto "Yazta", una aplicación en React Native y Strapi v3 para Android e iOS. Trabajo con mis compañeros para garantizar un desarrollo exitoso de la aplicación móvil.',
    linkMoreInfo: "#",
  },
  {
    image: MarcketChain,
    category: t("WebDesign"),
    categoryFilter: "WebDesign",
    title: "MarketChain (Innovus)",
    tech: [{ name: "Figma", icon: FigmaLogo }],
    period: "Nov. 2023 - Dic. 2023",
    description:
      "Como diseñadora UX/UI en Innovus para el proyecto Marketchain, creé una interfaz adaptable y centrada en la experiencia del usuario, optimizada para escritorio y dispositivos móviles, facilitando el intercambio de productos y servicios con criptomonedas.",
    linkMoreInfo: "#",
    linkWeb:
      "https://www.figma.com/design/LVUtuggIRUZDLkGmrjJiZQ/MarketChainFigmaUX%7CIX?node-id=0-1&node-type=canvas&t=sPowzbgy41RHGWsc-0",
  },
];

export default proyectsData;
