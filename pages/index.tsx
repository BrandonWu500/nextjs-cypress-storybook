import styled from "styled-components";

const Container = styled.div`
  padding: 0 2rem;
  background-color: ${(props) => (props.theme === "dark" ? "black" : "red")};
`;

const Home = () => {
  return (
    <Container theme="dark">
      <h1>Home</h1>
    </Container>
  );
};
export default Home;
