import React from "react";
import axios from "axios";
import styled from "styled-components";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      followers: [],
    };
  }

  componentDidMount() {
    axios.get("https://api.github.com/users/tjason-clegg").then((res) => {
      this.setState({
        user: [res.data],
      });
      console.log("res---->", res.data);
    });

    axios
      .get("https://api.github.com/users/tjason-clegg/followers")
      .then((res) => {
        this.setState({
          followers: res.data,
        });
        console.log("followers---->", res.data);
      });
  }

  render() {
    return (
      <StyledApp>
        <StyledDiv>
          {this.state.user.map((data) => (
            <div>
              <StyledImg
                width="200"
                src={data.avatar_url}
                key={data}
                alt={data}
              />
              <h3>Name: {data.name}</h3>
              <p>Github: {data.login}</p>
            </div>
          ))}
        </StyledDiv>

        <div className="followers">
          {this.state.followers.map((data) => (
            <StyledDiv>
              <StyledImg
                width="200"
                src={data.avatar_url}
                key={data}
                alt={data}
              />
              <h3>Github: {data.login}</h3>
            </StyledDiv>
          ))}
        </div>
      </StyledApp>
    );
  }
}

export default App;

const StyledDiv = styled.div`
  color: #b1b493;
  background: #4f8a8b;
  border: 5px solid #ffcb74;
  margin: 1% auto;
  max-width: 30%;
  display: flex;
  flex-flow: column nowrap;
  text-align: center;
`;

const StyledImg = styled.img`
  margin: 0 auto;
  padding: 1rem;
`;

const StyledApp = styled.div`
  background: #07031a;
`;
