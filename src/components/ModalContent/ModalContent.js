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
  linkRepoFrontend,
  linkWeb,
}) {
  const { t } = useTranslation();
  return (
    <div className="container mb-5" id="ArgentinaProgramaProject">
      <div className="row ">
        <div className="col-12 text-center pt-4 pt-md-0 pb-4">
          <h4 className="title-proj">{title}</h4>
        </div>
        <div className="col-12 mx-auto">
          <p>{paragraphModal0}</p>
          {paragraphModal1 && <p>{paragraphModal1}</p>}
          {listTitle && <p>{listTitle}</p>}
          {listItem && (
            <ul>
              {listItem.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
          {paragraphModal2 && <p>{paragraphModal2}</p>}

          <div className="proyect-btns align-items-center mt-5 mt-md-4 text-center ">
            {linkRepoFrontend && (
              <a className="nav-link  me-3  web-btn" href={linkRepoFrontend}>
                <IoLogoGithub className="web-btn-icon" />{" "}
                <span className="">Github</span>
              </a>
            )}

            <a className="nav-link  web-btn" href={linkWeb}>
              <TbWorld className="web-btn-icon" />{" "}
              <span className="">{t("btnTry")}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalContent;
