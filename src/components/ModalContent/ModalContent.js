import React from "react";
import { useTranslation } from "react-i18next";
import { IoLogoGithub } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import "./ModalContent.css";

function ModalContent({
  title,
  paragraphModal0,
  paragraphModal1,
  listTitle,
  listItem,
  paragraphModal2,
  paragraphModal3,
  paragraphModal4,
  paragraphModal5,
  paragraphModal6,
  linkRepoFrontend,
  linkWeb,
  sectionTitle1,
  sectionTitle2,
  contributions,
  sectionTitle3,
  quality,
}) {
  const { t } = useTranslation();
  return (
    <div className="container mb-5" id="ArgentinaProgramaProject">
      <div className="row ">
        <div className="col-12 text-center pt-3 pt-md-0 pb-3">
          <h4 className="title-proj">{title}</h4>
        </div>
        <div className="col-12 mx-auto">
          {sectionTitle1 && (
            <h5 className="section-title content-description pt-1 pb-2">
              {sectionTitle1}
            </h5>
          )}
          <p className="content-description" dangerouslySetInnerHTML={{ __html:paragraphModal0 }}/>
          {paragraphModal1 && (
            <p className="content-description"  dangerouslySetInnerHTML={{ __html:paragraphModal1 }}/>
          )}

          {sectionTitle2 && (
            <>
              <h5 className="section-title content-description pt-3 pb-1">
                {sectionTitle2}
              </h5>

              <ul>
                {contributions.map((contribution, index) => (
                  <li
                    key={index}
                    className="pt-2 content-description"
                    dangerouslySetInnerHTML={{
                      __html: contribution,
                    }}
                  />
                ))}
              </ul>
            </>
          )}

          {sectionTitle3 && (
            <>
              <h5 className="section-title content-description pt-3 pb-1">
                {sectionTitle3}
              </h5>

              <ul>
                {quality.map((qa, index) => (
                  <li
                    key={index}
                    className="pt-2 content-description"
                    dangerouslySetInnerHTML={{
                      __html: qa,
                    }}
                  />
                ))}
              </ul>
            </>
          )}

          {paragraphModal2 && (
            <p className="content-description"  dangerouslySetInnerHTML={{ __html:paragraphModal2 }}/>
          )}
          {paragraphModal3 && (
            <p className="content-description"  dangerouslySetInnerHTML={{ __html:paragraphModal3 }}/>
          )}
          {paragraphModal4 && (
            <p className="content-description"  dangerouslySetInnerHTML={{ __html:paragraphModal4 }}/>
          )}
          {listTitle && (
            <h5 className="section-title content-description pt-3 pb-1">
              {listTitle}
            </h5>
          )}

          {listItem && (
            <ul>
              {listItem.map((item, index) => (
                <li
                  key={index}
                  className="pt-2 content-description"
                  dangerouslySetInnerHTML={{
                    __html: item,
                  }}
                />
              ))}
            </ul>
          )}
          {paragraphModal5 && (
            <p className="content-description" dangerouslySetInnerHTML={{ __html:paragraphModal5 }}/>
          )}
          {paragraphModal6 && (
            <p className="content-description" dangerouslySetInnerHTML={{ __html:paragraphModal6 }}/>
          )}

          <div className="proyect-btns align-items-center mt-5 mt-md-4 text-center ">
            {linkRepoFrontend && (
              <a className="nav-link  me-3  web-btn" href={linkRepoFrontend}>
                <IoLogoGithub className="web-btn-icon" />{" "}
                <span className="">Github</span>
              </a>
            )}
            {linkWeb && (
              <a className="nav-link  web-btn" href={linkWeb}>
                <TbWorld className="web-btn-icon" />{" "}
                <span className="">{t("btnTry")}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalContent;
