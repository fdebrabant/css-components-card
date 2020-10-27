import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 30px;
  border: 1px solid #17C830;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  margin:auto;
`;
const ContainerHeader = styled.div`
    display: flex;
    justify-content: space-around;
`;

const ContainerName = styled.div `
  display: flex;
  flex-direction: column;
  `;

const Title = styled.h1`
  font-weight: 400;
  text-align: center;
`;

const Description = styled.p`
text-align: center;
`;

const Image = styled.img`
  border-radius: 5px;
  width: 50%;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Line = styled.hr`
 border: 0.2px solid #17C830;
 width: 100%
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Stars = styled.div `
  display: flex;
  margin: auto;
`;

const Star = styled.span`
margin-right: 20px;
color: grey;
`;

const GiveANote = styled.p`
`


function App() {
  return (
    <div className="App">
     <Container>
       <ContainerHeader>
          <Image src={`https://images.pexels.com/photos/797797/pexels-photo-797797.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260`}/>
          <ContainerName>
            <Title>Plant</Title>
            <Description>Monstera epipremnoides Engl.</Description>
          </ContainerName>
        </ContainerHeader>
      <Line/>
      <CardFooter>
        <Stars>
          <Star>&#9733;</Star>
          <Star>&#9733;</Star>
          <Star>&#9733;</Star>
          <Star>&#9733;</Star>
          <Star>&#9733;</Star>
        </Stars>
        <GiveANote>Give a note!</GiveANote>
      </CardFooter>
    </Container>
    </div>
  );
}

export default App;
