import React from 'react'
import {
  SocialMediaContainer,
  SocialMediaItem,
  StyledFooterAbout,
  StyledFooterComponent,
  StyledSocialMedia,
} from './style'

export const FooterComponent = () => {
  return (
    <StyledFooterComponent>
      <StyledSocialMedia>
        <SocialMediaContainer>
          <SocialMediaItem>Instagram</SocialMediaItem>
          <SocialMediaItem>Linkedin</SocialMediaItem>
          <SocialMediaItem>Twitter</SocialMediaItem>
        </SocialMediaContainer>
      </StyledSocialMedia>
      <StyledFooterAbout>
        This website is defined for the purpose of selling drugs
      </StyledFooterAbout>
    </StyledFooterComponent>
  )
}
