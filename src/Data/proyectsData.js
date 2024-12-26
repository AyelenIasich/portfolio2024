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
import PiedraPapelTijera from "../assets/proyects/PiedraPapelTijera.png";
import Telefonia from "../assets/proyects/Telefonia.jpg";

import JsLogo from "../assets/png/tech/js.png";
import PhpLogo from "../assets/png/tech/php.png";
import CssLogo from "../assets/png/tech/css-3.png";
import MySQLLogo from "../assets/png/tech/mysql.png";
import PostgreSQLLogo from "../assets/png/tech/postgreSQL.png";
import ReactNativeLogo from "../assets/png/tech/react-native.png";
import ReactJsLogo from "../assets/png/tech/react-js.png";
import AngularLogo from "../assets/png/tech/angular.png";
import LaravelLogo from "../assets/png/tech/Laravel.png";
import BootstrapLogo from "../assets/png/tech/bootstrap-1.png";
import StrapiLogo from "../assets/png/tech/strapi.png";
import DjangoLogo from "../assets/png/tech/dj.png";
import DockerLogo from "../assets/png/tech/docker.png";
import FigmaLogo from "../assets/png/tech/figma.png";
import AWS from "../assets/png/tech/AWS.png";
import MongoDB from "../assets/png/tech/MongoDB.png";
import Node from "../assets/png/tech/node.png";
import DigitalOcean from "../assets/png/tech/DigitalOcean.png";
import Springboot from "../assets/png/tech/Springboot.png";
import CleverCloud from "../assets/png/tech/CleverCloud.png";
import Railway from "../assets/png/tech/railway.png";

const proyectsData = (t) => [
  // {
  //   image: Yazta,
  //   category: t("MobileDevelopment"),
  //   categoryFilter: "MobileDevelopment",
  //   title: "Yazta Mx & Yazta Pro (Innovus)",
  //   title2: "Yazta Mx & Yazta Pro",
  //   tech: [
  //     { name: "React Native", icon: ReactNativeLogo },
  //     { name: "Strapi", icon: StrapiLogo },
  //     { name: "AWS", icon: AWS },
  //     { name: "PostgreSQL", icon: PostgreSQLLogo },
  //     { name: "CSS", icon: CssLogo },
  //     { name: "Figma", icon: FigmaLogo },
  //   ],
  //   period: "Nov. 2023 - Oct. 2024",
  //   description: t("YaztaDescription"),
  //   linkMoreInfo: "/yaztaproject",
  //   isYazta: true,
  //   isShowModalPhotoProject: false,
  // },
  {
    image: Yazta,
    category: t("MobileDevelopment"),
    categoryFilter: "MobileDevelopment",
    title: "Yazta Mx & Yazta Pro (Innovus)",
    title2: "Yazta Mx & Yazta Pro",
    tech: [
      { name: "React Native", icon: ReactNativeLogo },
      { name: "Strapi", icon: StrapiLogo },
      { name: "AWS", icon: AWS },
      { name: "PostgreSQL", icon: PostgreSQLLogo },
      { name: "CSS", icon: CssLogo },
      { name: "Figma", icon: FigmaLogo },
    ],
    period: "Nov. 2023 - Oct. 2024",
    description: t("YaztaDescription"),
    linkMoreInfo: "/yaztaproject",
    isYazta: false,
    isShowModalPhotoProject: true,
    isYaztaModalContent:true
  },
  {
    image: Nietos,
    category: t("WebDevelopment"),
    categoryFilter: "WebDevelopment",
    title: "Nietos (Innovus)",
    title2: "Nietos",
    tech: [
      { name: "Laravel", icon: LaravelLogo },
      { name: "MySQL", icon: MySQLLogo },
      { name: "Bootstrap", icon: BootstrapLogo },
      { name: "CSS", icon: CssLogo },
    ],
    period: "Oct. 2023 - Mar. 2024",
    description: t("NietosDescription"),
    sectionTitle1: t("NietosSectioTitle1"),
    paragraphModal0: t("NietosDescription0"),
    sectionTitle2: t("NietosSectioTitle2"),
    contributions: [
      t("NietosContribution1"),
      t("NietosContribution2"),
      t("NietosContribution3"),
    ],
    sectionTitle3: t("NietosSectionTitle3"),
    quality: [t("NietosQA1"), t("NietosQA2")],
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
    title2: "Symbioxr",
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
    title2: t("FotografiaTitle2"),
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
    listItem: [t("FotografiaListItem1"), t("FotografiaListItem2")],
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
    title2: "Seeker Parking (Innovus)",
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
    title2: "Ushuaia Cultura",
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
    title2: "Argentina Programa",
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
    title2: "Yazta Mx & Yazta Pro",
    tech: [
      { name: "React Native", icon: ReactNativeLogo },
      { name: "Strapi", icon: StrapiLogo },
      { name: "AWS", icon: AWS },
      { name: "PostgreSQL", icon: PostgreSQLLogo },
      { name: "CSS", icon: CssLogo },
      { name: "Figma", icon: FigmaLogo },
    ],
    period: "Nov. 2023 - Oct. 2024",
    description: t("YaztaDescription"),
    linkMoreInfo: "/yaztaproject",
    isYazta: false,
    isShowModalPhotoProject: true,
    isYaztaModalContent:true
  },
  {
    image: Nietos,
    category: t("WebDevelopment"),
    categoryFilter: "WebDevelopment",
    title: "Nietos (Innovus)",
    title2: "Nietos",
    tech: [
      { name: "Laravel", icon: LaravelLogo },
      { name: "MySQL", icon: MySQLLogo },
      { name: "Bootstrap", icon: BootstrapLogo },
      { name: "CSS", icon: CssLogo },
    ],
    period: "Oct. 2023 - Mar. 2024",
    description: t("NietosDescription"),
    sectionTitle1: t("NietosSectioTitle1"),
    paragraphModal0: t("NietosDescription0"),
    sectionTitle2: t("NietosSectioTitle2"),
    contributions: [
      t("NietosContribution1"),
      t("NietosContribution2"),
      t("NietosContribution3"),
    ],
    sectionTitle3: t("NietosSectionTitle3"),
    quality: [t("NietosQA1"), t("NietosQA2")],
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
    title2: "Symbioxr",
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
    isShowBtns: false,
    isShowMoreInfo: false,
  },
];

export default proyectsData;
