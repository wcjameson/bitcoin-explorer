import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  html, body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    background-color: #2d2c5e; 
  }

  .App-header {
    background-color: #5e87f5;
    text-align: center;
    padding: 20px;
  }
  
  .navbar {
    background-color: #4e69c3;
    position: relative;
    display: flex;
    align-items: center;
  }

  .link {
    color: white;
    text-decoration: none;
    margin: 0 10px;
    padding: 10px;
  }
  
  .stats {
    box-sizing: border-box;
    color: white;
    width:200px;
    padding:20px;
  }
  
  a:link {
    color: white;
  }` // #282c34 #2b6963 greenish - #2b5069