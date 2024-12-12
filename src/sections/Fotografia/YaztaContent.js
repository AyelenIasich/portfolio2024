import React from "react";
import BackButton from "../../components/BackButton/BackButton";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Fotografia.css";

function YaztaContent() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const resposabilites = [
    t("YaztaResponsabilitiesDevItem1"),
    t("YaztaResponsabilitiesDevItem2"),
  ];
  const mantenimientos = [
    t("YaztaResponsabilityMantenimientoItem2"),
    t("YaztaResponsabilityMantenimientoItem4"),
    t("YaztaResponsabilityMantenimientoItem6"),
    t("YaztaResponsabilityMantenimientoItem5"),
    t("YaztaResponsabilityMantenimientoItem1"),
    t("YaztaResponsabilityMantenimientoItem3"),
  ];
  const international = [
    t("YaztaResponsabilityEquipoInternacionalItem1"),
    t("YaztaResponsabilityEquipoInternacionalItem2"),
  ];
  const clientes = [t("YaztaClientesItem1")];

  const tools = [t("YaztaTools"), t("YaztaMethologies")];
  const challenges = [
    t("YaztaChallenge1"),
    t("YaztaChallenge2"),
    t("YaztaChallenge3"),
    t("YaztaChallenge4"),
  ];
  const logros = [t("YaztaLogro1"), t("YaztaLogro2"), t("YaztaLogro3")];
  const apps = [t("YaztaDescriptionYaztaMx"), t("YaztaDescriptionYaztaPro")];

  return (
    <div className="row ">
      <div className="col-12 text-center pt-4 pt-md-0 pb-3">
        <h4 className="title-proj">Yazta Mx & Yazta Pro</h4>
      </div>

      <div className="col-12 col-xxl-11 px-4 mx-auto">
        <div className="col-12 mx-auto">
          {/* SECTION DESCRIPTION PROJECT  */}
          <h5 className="section-title content-description pt-3 pb-3">
            {t("YaztaDescriptionSubtitle")}
          </h5>
          <p
            className="content-description"
            dangerouslySetInnerHTML={{ __html: t("YaztaShortDescription") }}
          />
          <ul>
            {apps.map((app, index) => (
              <li
                key={index}
                className="pt-2 content-description"
                dangerouslySetInnerHTML={{
                  __html: app,
                }}
              />
            ))}
          </ul>
          <p
            className="content-description"
            dangerouslySetInnerHTML={{ __html: t("YaztaMethics") }}
          />
          
          {/* TECH SECTION */}
          <h5 className="section-title content-description pt-3 pb-3">
            {t("YaztaTechnologiesTitle")}
          </h5>
          <p
            className="content-description"
            dangerouslySetInnerHTML={{ __html: t("YaztaTechnologies") }}
          />
          {/* ROL SECTION */}
          <h5 className="section-title content-description pt-3 pb-3">
            {t("Rolyazta")}
          </h5>
          <p
            className="content-description"
            dangerouslySetInnerHTML={{ __html: t("RolyaztaDescription") }}
          />

          {/* SECTION RESPONSABILITIES */}
          <h5 className="section-title content-description pt-3 pb-3">
            {t("YaztaResponsabilitiesTitle")}
          </h5>
          <h6 className="section-subtitle content-description pt-3 pb-2">
            {t("YaztaResponsabilitiesDev")}
          </h6>
          {resposabilites && (
            <ul>
              {resposabilites.map((resp, index) => (
                <li
                  key={index}
                  className="pt-2 content-description"
                  dangerouslySetInnerHTML={{
                    __html: resp,
                  }}
                />
              ))}
            </ul>
          )}

          <h6 className="section-subtitle content-description pt-3 pb-2">
            {t("YaztaResponsabilityMantenimiento")}
          </h6>
          {mantenimientos && (
            <ul>
              {mantenimientos.map((man, index) => (
                <li
                  key={index}
                  className="pt-2 content-description"
                  dangerouslySetInnerHTML={{
                    __html: man,
                  }}
                />
              ))}
            </ul>
          )}

          {/* international team */}
          <h6 className="section-subtitle content-description pt-3 pb-2">
            {t("YaztaResponsabilityEquipoInternacional")}
          </h6>
          {international && (
            <ul>
              {international.map((int, index) => (
                <li
                  key={index}
                  className="pt-2 content-description"
                  dangerouslySetInnerHTML={{
                    __html: int,
                  }}
                />
              ))}
            </ul>
          )}

          {/* clientes team */}
          <h6 className="section-subtitle content-description pt-3 pb-2">
            {t("YaztaClientes")}
          </h6>
          {clientes && (
            <ul>
              {clientes.map((cliente, index) => (
                <li
                  key={index}
                  className="pt-2 content-description"
                  dangerouslySetInnerHTML={{
                    __html: cliente,
                  }}
                />
              ))}
            </ul>
          )}

          {/* Logros SECTION */}
          <h6 className="section-title content-description pt-3 pb-2">
            {t("YaztaLogroTitle")}
          </h6>
          {logros && (
            <ul>
              {logros.map((logro, index) => (
                <li
                  key={index}
                  className="pt-2 content-description"
                  dangerouslySetInnerHTML={{
                    __html: logro,
                  }}
                />
              ))}
            </ul>
          )}
          {/* Challenges */}
          <h6 className="section-title content-description pt-3 pb-2">
            {t("YaztaChallengeTitle")}
          </h6>
          {challenges && (
            <ul>
              {challenges.map((challenge, index) => (
                <li
                  key={index}
                  className="pt-2 content-description"
                  dangerouslySetInnerHTML={{
                    __html: challenge,
                  }}
                />
              ))}
            </ul>
          )}
          {/* Development periods */}
          <h6 className="section-title content-description pt-3 pb-2">
            {t("YaztaEtapasTitle")}
          </h6>
          <h6 className="section-subtitle content-description pt-3 pb-2">
            {t("YaztaEtapas1Title")}
          </h6>
          <p
            className="content-description"
            dangerouslySetInnerHTML={{ __html: t("YaztaEtapas1") }}
          />
          <h6 className="section-subtitle content-description pt-3 pb-2">
            {t("YaztaEtapas2Title")}
          </h6>
          <p
            className="content-description"
            dangerouslySetInnerHTML={{ __html: t("YaztaEtapas2") }}
          />
          {/* Tools */}
          <h6 className="section-title content-description pt-3 pb-2">
            8. {t("toolMethodologies")}
          </h6>
          {tools && (
            <ul>
              {tools.map((tool, index) => (
                <li
                  key={index}
                  className="pt-2 content-description"
                  dangerouslySetInnerHTML={{
                    __html: tool,
                  }}
                />
              ))}
            </ul>
          )}

        </div>
      </div>
    </div>
  );
}

export default YaztaContent;
