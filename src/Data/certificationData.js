import React from "../assets/png/icon/React.webp";
import PreworkWindows from "../assets/png/icon/PreworkWindows.webp";
import JS from "../assets/png/icon/js.webp";
import Frontend from "../assets/png/icon/Frontend.webp";
import PreworkLinux from "../assets/png/icon/PreworkLinux.webp";
import PensamientoLenguajeProgramacion from "../assets/png/icon/PensamientoLenguajeProgramacion.webp";
import PensamientoDatosFunciones from "../assets/png/icon/PensamientoDatosFunciones.webp";
import PensamientoLogicoDiagramaFlujo from "../assets/png/icon/PensamientoLogicoDiagramaFlujo.webp";
import ComputacionBasica from "../assets/png/icon/ComputacionBasica.webp";
import AngularComponentes from "../assets/png/icon/AngularComponentes.webp";
import HtmlCss from "../assets/png/icon/htmlCss.webp";
import TS from "../assets/png/icon/ts.webp";
import ProgramacionBasica from "../assets/png/icon/ProgramacionBasica.webp";

import ComputacionBasicaCertificate from "../assets/png/certificate/ComputacionBasicaCertificate.png";
import ReactCertificate from "../assets/png/certificate/ReactCertificate.png";
import PreWorkWinCertficate from "../assets/png/certificate/PreWorkWinCertficate.png";
import JsCertificate from "../assets/png/certificate/JsCertificate.png";
import FrontendCertificate from "../assets/png/certificate/FrontendCertificate.png";
import PreWorkLinuxCertificate from "../assets/png/certificate/PreWorkLinux.png";
import PensamientoLogicoCertificate from "../assets/png/certificate/PensamientoLogicoCertificate.png";
import FuncionesEstructuresControlCertificate from "../assets/png/certificate/FuncionesEstructuresControlCertificate.png";
import AlgoritmoDiagramaFlujoCertificate from "../assets/png/certificate/AlgoritmoDiagramaFlujoCertificate.png";
import AngularComponentesCertificate from "../assets/png/certificate/AngularComponentesCertificate.png";
import HtmlCssCertificate from "../assets/png/certificate/HtmlCssCertificate.png";
import TsFundamentosCertificate from "../assets/png/certificate/TsFundamentosCertificate.png";
import FundamentosAngularCertificate from "../assets/png/certificate/FundamentosAngularCertificate.png";
import ProgramacionBasicaCertificate from "../assets/png/certificate/ProgramacionBasicaCertificate.png";
import ComposicionPatronesRender from "../assets/png/certificate/ComposicionPatronesRender.png";
import ManejoProfEstado from "../assets/png/certificate/ManejoProfEstado.png"

export const certificationDataPreview = (t) => [
  {
    logo: React,
    institute: t("PlatziTitle1"),
    titleEducation: t("ReactEstadoCertificate"),
    period: t("ReactEstadoCertificatePeriod"),
    isShowCertification: true,
    certificate: ManejoProfEstado,
    category: "FrontendDevelopment",
  },
  {
    logo: React,
    institute: t("PlatziTitle1"),
    titleEducation: t("ReactComposicionCertificate"),
    period: t("ReactComposicionPeriod"),
    isShowCertification: true,
    certificate: ComposicionPatronesRender,
    category: "FrontendDevelopment",
  },
  {
    logo: React,
    institute: t("PlatziTitle1"),
    titleEducation: t("ReactCertificate"),
    period: t("ReactCertificatePeriod"),
    isShowCertification: true,
    certificate: ReactCertificate,
    category: "FrontendDevelopment",
  },
  {
    logo: JS,
    institute: t("PlatziTitle1"),
    titleEducation: t("JSCertificate"),
    period: t("JSCertificatePeriod"),
    isShowCertification: true,
    certificate: JsCertificate,
    category: "Programming&&Logic",
  },
];

export const categoriesCertificates = (t) => [
  {
    "FrontendDevelopment":   t("FrontendDevelopment"),
  },
  {
    "Infrastructure&OS":   t("Infrastructure&OS"),
  },
  {
    "Programming&&Logic":  t("Programming&&Logic"), 
  },
  
];

const certificationData = (t) => [
  {
    logo: React,
    institute: t("PlatziTitle1"),
    titleEducation: t("ReactEstadoCertificate"),
    period: t("ReactEstadoCertificatePeriod"),
    isShowCertification: true,
    certificate: ManejoProfEstado,
    category: "FrontendDevelopment",
  },
  {
    logo: React,
    institute: t("PlatziTitle1"),
    titleEducation: t("ReactComposicionCertificate"),
    period: t("ReactComposicionPeriod"),
    isShowCertification: true,
    certificate: ComposicionPatronesRender,
    category: "FrontendDevelopment",
  },
  {
    logo: React,
    institute: t("PlatziTitle1"),
    titleEducation: t("ReactCertificate"),
    period: t("ReactCertificatePeriod"),
    isShowCertification: true,
    certificate: ReactCertificate,
    category: "FrontendDevelopment",
  },
  {
    logo: PreworkWindows,
    institute: t("PlatziTitle1"),
    titleEducation: t("PreworkWinCertificate"),
    period: t("PreworkWinCertificatePeriod"),
    isShowCertification: true,
    certificate: PreWorkWinCertficate,
    category: "Infrastructure&OS",
  },
  {
    logo: JS,
    institute: t("PlatziTitle1"),
    titleEducation: t("JSCertificate"),
    period: t("JSCertificatePeriod"),
    isShowCertification: true,
    certificate: JsCertificate,
    category: "Programming&&Logic",
  },
  {
    logo: Frontend,
    institute: t("PlatziTitle1"),
    titleEducation: t("FrontendCertificate"),
    period: t("FrontendCertificatePeriod"),
    isShowCertification: true,
    certificate: FrontendCertificate,
    category: "FrontendDevelopment",
  },
  {
    logo: PreworkLinux,
    institute: t("PlatziTitle1"),
    titleEducation: t("LinuxCertificate"),
    period: t("LinuxCertificatePeriod"),
    isShowCertification: true,
    certificate: PreWorkLinuxCertificate,
    category: "Infrastructure&OS",
  },
  {
    logo: PensamientoLenguajeProgramacion,
    institute: t("PlatziTitle1"),
    titleEducation: t("LogicoCertificate"),
    period: t("LogicoCertificatePeriod"),
    isShowCertification: true,
    certificate: PensamientoLogicoCertificate,
    category: "Programming&&Logic",
  },
  {
    logo: PensamientoDatosFunciones,
    institute: t("PlatziTitle1"),
    titleEducation: t("EstructurasCertificate"),
    period: t("EstructurasCertificatePeriod"),
    isShowCertification: true,
    certificate: FuncionesEstructuresControlCertificate,
    category: "Programming&&Logic",
  },
  {
    logo: PensamientoLogicoDiagramaFlujo,
    institute: t("PlatziTitle1"),
    titleEducation: t("FlujoCertificate"),
    period: t("FlujoCertificatePeriod"),
    isShowCertification: true,
    certificate: AlgoritmoDiagramaFlujoCertificate,
    category: "Programming&&Logic",
  },
  {
    logo: ComputacionBasica,
    institute: t("PlatziTitle1"),
    titleEducation: t("ComputacionCertificate"),
    period: t("ComputacionCertificatePeriod"),
    isShowCertification: true,
    certificate: ComputacionBasicaCertificate,
    category: "Programming&&Logic",
  },
  {
    logo: AngularComponentes,
    institute: t("PlatziTitle1"),
    titleEducation: t("AngularSSCertificate"),
    period: t("AngularSSCertificatePeriod"),
    isShowCertification: true,
    certificate: AngularComponentesCertificate,
    category: "FrontendDevelopment",
  },
  {
    logo: HtmlCss,
    institute: t("PlatziTitle1"),
    titleEducation: t("HtmlCssCertificate"),
    period: t("HtmlCssCertificatePeriod"),
    isShowCertification: true,
    certificate: HtmlCssCertificate,
    category: "FrontendDevelopment",
  },
  {
    logo: TS,
    institute: t("PlatziTitle1"),
    titleEducation: t("TsCertificate"),
    period: t("TsCertificatePeriod"),
    isShowCertification: true,
    certificate: TsFundamentosCertificate,
    category: "FrontendDevelopment",
  },
  {
    logo: AngularComponentes,
    institute: t("PlatziTitle1"),
    titleEducation: t("AnFundamentosCertificate"),
    period: t("AnFundamentosCertificatePeriod"),
    isShowCertification: true,
    certificate: FundamentosAngularCertificate,
    category: "FrontendDevelopment",
  },
  {
    logo: ProgramacionBasica,
    institute: t("PlatziTitle1"),
    titleEducation: t("ProgramacionCertificate"),
    period: t("ProgramacionCertificatePeriod"),
    isShowCertification: true,
    certificate: ProgramacionBasicaCertificate,
    category:  "Programming&&Logic",
  },
];

export default certificationData;
