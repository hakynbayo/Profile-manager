import styled from "styled-components";
import Layout from "../components/Layout";

const Container = styled.div`
  width: 50%;
  margin: 0 auto;
  color: black;
  padding: 3.4rem;
  background-color: #eeeeee;
  border-radius: 0.8rem;
  box-shadow: 0 0 32px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.7rem;
  }
`;

const WelcomeMessage = styled.h1`
  font-size: 32px;
  color: #007bff;
  text-align: center;
  margin-bottom: 20px;
`;

const HomePage = () => {
  return (
    <Layout>
      <Container>
        <WelcomeMessage>Welcome to D-Tech Career Consultancy</WelcomeMessage>
        <p>
          To access the Profile Manager page and edit your profile, click the
          icon on the top-right corner of the navbar.
        </p>
      </Container>
    </Layout>
  );
};

export default HomePage;
