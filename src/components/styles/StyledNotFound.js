import styled from "styled-components";

const StyledNotFound = styled.div`
#notfound .notfound {
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
  }
   .notfound-404 h1 {
    font-family: 'Titillium Web', sans-serif;
    font-size: 186px;
    font-weight: 900;
    margin: 0px;
    color: black;
    text-transform: uppercase;
  }
  .notfound a {
    display: inline-block;
    text-transform: uppercase;
    color: #fff;
    text-decoration: none;
    border: none;
    background: #5c91fe;
    padding: 10px 40px;
    font-size: 14px;
    font-weight: 700;
    border-radius: 1px;
    margin-top: 15px;
  }
  
  .notfound a:hover {
    opacity: 0.8;
  }
  
  
`;

export default StyledNotFound;
