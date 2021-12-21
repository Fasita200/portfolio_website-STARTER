import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
    <Section row nopadding>
        <LeftSection>
            <SectionTitle main center>
                Welcome to <br />
                My personal portfolio
            </SectionTitle>
            <SectionText>
             Here you can find my brief explanation of technologies and services I provide.
            </SectionText>
            <Button onClick={()=>window.location='https://google.com'}>Learn more</Button>
    </LeftSection>
    </Section>
);

export default Hero;