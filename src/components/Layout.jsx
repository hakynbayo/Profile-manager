import PropTypes from "prop-types";
import styled from "styled-components";
import Navbar from "./Navbar";

//  styled component for the layout container
const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh; // Full viewport height
`;

// styled component for the content container
const ContentContainer = styled.div`
  flex: 1; // Takes up remaining space
  padding: 2rem 0; // Vertical padding
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

// Layout component which includes the Navbar and a content area
const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <Navbar />
      <ContentContainer>{children}</ContentContainer>
    </LayoutContainer>
  );
};

// PropTypes validation for the children prop
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
