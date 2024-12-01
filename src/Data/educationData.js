import GenexusCertification from "../assets/png/education/certificadoGenexus.jpg";
import YoProgramoCertication from "../assets/png/education/yoProgramo.png";
import EFCertificate from "../assets/png/education/EFCertificate.png";
import Politecnico from "../assets/png/education/politecnico.png";
import UTNBaLogo from "../assets/png/education/UTNBaLogo.png";
import Gx from "../assets/png/education/gx.jpg";
import ArgentinaPrograma from "../assets/png/education/ArgentinaPrograma.png";
import Ipesfa from "../assets/png/education/ipesfa.png";
import EFSET from "../assets/png/education/efset.png";

const educationData = (t) => [
  {
    logo: Politecnico,
    institute: "Centro Politécnico Superior Malvinas Argentinas",
    titleEducation: t("PolitecnicoTitle"),
    period: "2025 - 2027",
    description: t("PolitecnicoDescription"),
  },
  {
    logo: UTNBaLogo,
    institute: "Academia del conocimiento - UNT.BA",
    titleEducation: t("UTNBaTitle"),
    period: t("UTNBaPeriod"),
    description: t("UTNBaDescription"),
  },
  {
    logo: Gx,
    institute: "Genexus 17 Junior Developer",
    titleEducation: t("GenexusTitle"),
    period: t("GenexusPeriod"),
    description: t("GenexusDescription"),
    isShowCertification: true,
    certificate:GenexusCertification
  },
  {
    logo: ArgentinaPrograma,
    institute: "Argentina Programa: #YoProgramo",
    titleEducation: t("ArgProgramaTitle"),
    period: t("ArgProgramaPeriod"),
    description: t("ArgProgramaDescription"),
    isShowCertification: true,
    certificate:YoProgramoCertication
  },
  {
    logo: Ipesfa,
    institute: "IPES “Florentino Ameghino”",
    titleEducation: t("IpesTitle"),
    period: t("IpesPeriod"),
  },
  {
    logo: EFSET,
    institute: "EF SET Certificate",
    titleEducation: t("EFTitle"),
    period: t("EFPeriod"),
    isShowCertification: true,
    certificate:EFCertificate
  },
];

export default educationData;