import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 2, text: 'Projects on GitHub'},
  { number: 0, text: 'Freelance Contracts', },
  { number: 0, text: 'Github Followers', },
  { number: 0, text: 'Github Stars', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle> Personal Acomplishments</SectionTitle>
    <Boxes>
      {data.map((card,index) =>
      <Box key={index}>
          <BoxNum>{card.number}   </BoxNum>
          <BoxText>{card.text}</BoxText>
      </Box>
      )}
    </Boxes>
  </Section>
);

export default Acomplishments;
