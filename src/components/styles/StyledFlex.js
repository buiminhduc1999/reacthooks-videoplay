import styled from "styled-components";

const StyledFlex = styled.div`
.container-3-box{
    flex-basis:10%;
    font-size: 12px;
  }
  @media screen and (max-width: 500px) {
    .item a {
      float: none;
      display: block;
      text-align: left;
    }
  }
  .item a {
    float: left;
    color: black;
    text-align: center;
    padding: 12px;
    text-decoration: none;
    font-size: 18px;
    line-height: 25px;
    border-radius: 4px;
  }
  
  .item a.logo {
    font-size: 25px;
    font-weight: bold;
  }
  
  .item a:hover {
    background-color: #ddd;
    color: black;
  }
  .item a.active {
    background-color: dodgerblue;
    color: white;
  }
`;

export default StyledFlex;