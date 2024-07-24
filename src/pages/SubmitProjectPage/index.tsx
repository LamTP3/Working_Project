import React from 'react'
import HeaderPage from '../HeaderPage'
import Header from '../../components/CommonPageSection/Header/Header'
import CollapseComponent from '../../components/CommonPageSection/Collapse/CollapseComponent'
import BasicInformation from '../Organisms/Section/BasicInformation/BasicInformation'
import ProjectDetails from '../Organisms/Section/ProjectDetail/ProjectDetails'
import Links from '../Organisms/Section/Links/Links'
import TokenInformation from '../Organisms/Section/TokenInformation/TokenInformation'
import Capital from '../Organisms/Section/Capital/Capital'
import PublicTokenSale from '../Organisms/Section/PublicTokenSale/PublicTokenSale'
import StatusOfPartnerships from '../Organisms/Section/Status of Partnerships/StatusOfPartnerships'
import Action from '../Organisms/Section/Action/Action'

const SubmitProjectPage = () => {
  return (
    <>
      <Header />
      <div className='max-w-[976px] mt-[50px] mr-auto ml-auto'>
        <div>
          <HeaderPage />
        </div>

        <div className="mt-5">
          <CollapseComponent
            title="Basic Information"
            child={<BasicInformation />}
          />
        </div>

        <div className="mt-5">
          <CollapseComponent
            title="Project Details"
            child={<ProjectDetails />} />
        </div>

        <div className="mt-5">
          <CollapseComponent
            title="Links"
            child={<Links />} />
        </div>

        <div className="mt-5">
          <CollapseComponent
            title="Token Information"
            child={<TokenInformation />}
          />
        </div>
        <div className="mt-5">
          <CollapseComponent
            title="Capital"
            child={<Capital />} />
        </div>
        <div className="mt-5">
          <CollapseComponent
            title="Public Token Sale"
            child={<PublicTokenSale />}
          />
        </div>
        <div className="mt-5">
          <CollapseComponent
            title="Status of Partnerships"
            child={<StatusOfPartnerships />}
          />
        </div>
        <div className="mt-5">
          <Action />
        </div>
      </div>
    </>
  )
}

export default SubmitProjectPage
