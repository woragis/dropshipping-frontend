import styled from 'styled-components'

export const StyledFooterComponent = styled.footer`
  background-color: #222;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: max-content;
  column-gap: 50px;

  @media (max-width: 400px) {
    flex-direction: column;
  }
`

export const StyledSocialMedia = styled.section`
  width: 100%;
  height: max-content;
`

export const SocialMediaContainer = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const SocialMediaItem = styled.li`
  color: white;
  font-size: 1.5em;
  font-weight: bold;
`

export const StyledFooterAbout = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
