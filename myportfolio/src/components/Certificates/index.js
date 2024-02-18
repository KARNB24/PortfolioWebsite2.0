import React from 'react'
import { certificate } from '../../data/constants';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
`

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1100px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`
const CertificatesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`



const CertificateImage = styled.img`
  width: 250px;
  height: 250px;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0,0,0,0.6);
    filter: brightness(1.1);
}
`

export const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
margin-top: 12px;
      font-size: 32px;
  }
`;

const Certificates = () => {
  return (
    <Container id="certificates">
        <Wrapper>
            <Title>Certificates</Title>
            <CertificatesContainer>
                {certificate.map((certificates) => (
                    
                        <a href={certificates.link} target='_blank'><CertificateImage src={certificates.image} alt='image'/></a>
                    
                ))}
            </CertificatesContainer>
        </Wrapper>
    </Container>
  )
}

export default Certificates;