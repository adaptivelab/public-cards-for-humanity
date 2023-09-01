import React from 'react'

import HubspotForm from './reactHubspotForm'
import Link from '../Link'
import { ContentMedium } from '../Content'

import { FormContainer } from './style'

const {
  REACT_APP_HUBSPOT_ID,
  REACT_APP_HUBSPOT_FORM_ID
} = process.env

const Form = () => {
  return (
    <FormContainer>
      <HubspotForm
        portalId={REACT_APP_HUBSPOT_ID}
        formId={REACT_APP_HUBSPOT_FORM_ID}
      />
      <ContentMedium>
          <Link
            textLink
            newTab
            href="https://www.capgemini.com/privacy-policy/"
            data-track-category="about-menu" data-track-description="privacy-notice"
          >
            Privacy Notice
        </Link>
      </ContentMedium> 
    </FormContainer>
  )
}

export default Form
