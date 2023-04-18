import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <StFooter>
      <div>©2023 Jiwon Hong All Rights Reserved.</div>
      <div>Jiwon Hong&apos;s portfolio.</div>
    </StFooter>
  );
};

const StFooter = styled.footer`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.backgroundColor};
  height: 6rem;
  font-size: 1.2rem;
  font-weight: 500;
  font-style: normal;
  color: ${({ theme }) => theme.fontColor};
  scroll-snap-align: end;

  /* laptop */
  @media ${({ theme }) => theme.laptop} {
    padding: 1rem;
  }
  /* tablet */
  @media ${({ theme }) => theme.tablet} {
    padding: 1rem;
  }
  /* mobile */
  @media ${({ theme }) => theme.mobile} {
    padding: 1.5rem;
    flex-flow: column nowrap;
  }
`;

export default Footer;
