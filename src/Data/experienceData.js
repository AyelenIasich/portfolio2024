import InnovusLogo from "../assets/png/Innovus-Logo.png";
import GobiernoTDF from "../assets/png/Gobierno-TDF.jpg";

const experienceData = (t) => [
  {
    logo: InnovusLogo,
    company: "Innovus - Software Company",
    role: t("roleExperience1"),
    modality: t("modalityRemote"),
    period: t("periodExperience1"),
    periodLong: t("periodLongExperience1"),
    description: t("descriptionExperience1"),
    technologies: t("techExperience1"),
    toolMethologies: [t("toolExperience1a"), t("toolExperience1b"), t("toolExperience1c")],

  },
  {
    logo: GobiernoTDF,
    company: "Secretaría de Gobierno Digital",
    role: t("roleExperience2"),
    modality: t("modalityOnSite"),
    period: t("periodExperience2"),
    periodLong: t("periodLongExperience2"),
    description: t("descriptionExperience2"),
    technologies: t("techExperience2"),
    toolMethologies: [t("toolExperience2")],

  },
];

export default experienceData;
