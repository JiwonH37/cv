import React from 'react';
import SectionWrapper from '../Global/SectionWrapper';
import styled from 'styled-components';
import useFadeIn from '../../Hooks/useFadeIn';

const AboutSection = () => {
  const ref1 = useFadeIn('up', 0.5);
  const ref3 = useFadeIn('up', 0.5);

  return (
    <SectionWrapper id="about">
      <StHeading {...ref1}>ABOUT</StHeading>
      <StInformationBox {...ref3}>
        <StInformationHeadings>
          <div>GITHUB</div>
          <div>EMAIL</div>
          <div>PHONE</div>
          <div>ADDRESS</div>
        </StInformationHeadings>
        <StInformationDatas>
          <StData>
            <a
              href="https://github.com/JiwonH37"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://github.com/JiwonH37
            </a>
          </StData>
          <StData>jiwonhong37@gmail.com</StData>
          <StData>(626)997-7302</StData>
          <StData>2522 Grier School Rd, PA</StData>
        </StInformationDatas>
      </StInformationBox>
    </SectionWrapper>
  );
};

const StHeading = styled.h2`
  padding: 9rem 3rem 3rem 3rem;
  font-size: 9rem;
  font-weight: 900;
  cursor: default;

  /* laptop */
  @media ${({ theme }) => theme.laptop} {
    font-size: 9rem;
  }
  /* tablet */
  @media ${({ theme }) => theme.tablet} {
    font-size: 6rem;
  }
  /* mobile */
  @media ${({ theme }) => theme.mobile} {
    padding: 7rem 1.5rem 1.5rem 1.5rem;
    font-size: 4rem;
  }
  /* phone */
  @media ${({ theme }) => theme.phone} {
    padding: 5rem 1.5rem 1.5rem 1.5rem;
  }
`;

const StInformationBox = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding: 3rem;
  font-size: 2.5rem;
  font-weight: 900;
  line-height: 1.5;
  column-gap: 2rem;

  /* mobile */
  @media ${({ theme }) => theme.mobile} {
    padding: 6rem 1.5rem 1.5rem 1.5rem;
    font-size: 2rem;
  }
  /* phone */
  @media ${({ theme }) => theme.phone} {
    padding: 3rem 1.5rem 1.5rem 1.5rem;
    font-size: 1.5rem;
  }
`;

const StInformationHeadings = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const StInformationDatas = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const StData = styled.div`
  &:hover {
    color: ${({ theme }) => theme.emphasis};
    cursor: pointer;
  }
  & > a:hover {
    color: ${({ theme }) => theme.emphasis};
  }
`;

export default AboutSection;
