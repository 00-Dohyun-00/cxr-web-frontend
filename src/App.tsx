import "./App.css";

import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #2563eb;
`;

function App() {
  return (
    <Container>
      <Title>CXR.Web Viewer</Title>
    </Container>
  );
}

export default App;
