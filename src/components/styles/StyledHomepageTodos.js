import styled from "styled-components";

const StyledHomepageTodos = styled.div`
  font-size:20px;
  .inputext {
    width: 50%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
  }
  .link{
      margin-left:5px;
      text-decoration: none;
      color:red;
  }
  .button {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
  }
  .customers {
    border-collapse: collapse;
    width: 100%;
  }
  
  .customers td, .customers th {
    border: 1px solid #ddd;
    padding: 8px;
  }
  
  .customers tr:nth-child(even){background-color: #f2f2f2;}
  
  .customers tr:hover {background-color: #ddd;}
  
  .customers th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #4CAF50;
    color: white;
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
    background-color: #4caf50;
    color: black;
  }
  .item a.active {
    background-color: dodgerblue;
    color: white;
  }
`;

export default StyledHomepageTodos;
