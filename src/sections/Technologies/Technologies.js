import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import TitleSection from '../../components/TitleSection/TitleSection'
import {
  toolsDevData,
  dataBaseData,
  frontendData,
  BackendData,
} from '../../Data/technologiesData'
import './Technologies.css'
import TechCardSection from '../TechCardSection/TechCardSection'

function Technologies() {
  const { t } = useTranslation()
  const backendTechnologies = BackendData(t)
  const toolsDevelopment = toolsDevData(t)
  const DataBases = dataBaseData(t)
  const frontendTech = frontendData(t)

  const [visibleProgramming, setVisibleProgramming] = useState(3)
  const [visibleFramework, setVisibleFramework] = useState(3)
  const [visibleTools, setVisibleTools] = useState(3)

  const handleShowMoreProgramming = () => {
    setVisibleProgramming((prevVisibleItems) => prevVisibleItems + 3)
  }

  const handleShowMoreFrameworks = () => {
    setVisibleFramework((prevVisibleItems) => prevVisibleItems + 3)
  }

  const handleShowMoreTools = () => {
    setVisibleTools((prevVisibleItems) => prevVisibleItems + 3)
  }

  return (
    <section className="container pt-3" id="technologies">
      <div className="row ">
        <div className="col-12 text-center pt-5 pt-xxl-5 mt-xxl-3">
          <TitleSection t={t} title={t('SkillsTitle')} />
        </div>
        {/* FRONTEND SECTION  */}
        <TechCardSection
          list={frontendTech}
          title={"Frontend"}
          visibleItem={visibleFramework}
          handleShow={handleShowMoreFrameworks}
        />

        {/* BACKEND SECTION */}
        <TechCardSection
          list={backendTechnologies}
          title={"Backend"}
          visibleItem={visibleProgramming}
          handleShow={handleShowMoreProgramming}
        />

        {/* DATABASE SECTION */}
        <TechCardSection
          list={DataBases}
          title={t('Databases')}
          visibleItem={2}
          isShowBtn={false}
        />

        {/* TOOLS SECTION */}
        <TechCardSection
          list={toolsDevelopment}
          title={t('DevelopmentTools')}
          visibleItem={visibleTools}
          handleShow={handleShowMoreTools}
        />
      </div>
    </section>
  )
}

export default Technologies
