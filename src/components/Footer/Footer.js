import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import {Div3, SocialIcons} from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
        <LinkList>
            <LinkColumn>
                <LinkTitle>Call</LinkTitle>
                <LinkItem href='Tel:+37067387000'>+37067387000</LinkItem>
            </LinkColumn>
            <LinkColumn>
                <LinkTitle>Email</LinkTitle>
                <LinkItem href='mailto:info@provocator.lt'>info@PROvocator.lt</LinkItem>
            </LinkColumn>
        </LinkList>
        <SocialIconsContainer>
            <CompanyContainer>
                <Slogan>Innovating one project at a time</Slogan>
            </CompanyContainer>

              <SocialIcons href='https://github.com'>
                    <AiFillGithub size='3rem' />
                </SocialIcons>
                <SocialIcons href='https://linkedin.com'>
                    <AiFillLinkedin size='3rem' />
                </SocialIcons>
                <SocialIcons href='https://instagram.com'>
                    <AiFillInstagram size='3rem' />
                </SocialIcons>

         </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
