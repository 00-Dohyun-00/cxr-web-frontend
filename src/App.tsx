import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { checkBackendHealth } from "./api/client";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  const [status, setStatus] = useState<string>("확인 중...");

  useEffect(() => {
    checkBackendHealth()
      .then((data) => setStatus(data.status))
      .catch(() => setStatus("백엔드 연결 실패"));
  }, []);

  useEffect(() => {
    console.log("status changed:", status);
  }, [status]);

  return (
    <Container>
      <h1>CXR.Web Viewer</h1>
      <h3>백엔드 상태: {status}</h3>
    </Container>
  );
}

export default App;
