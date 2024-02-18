import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'Poppins';
    src: url('src/assets/fonts/Poppins/Poppins-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'Poppins';
    src: url('src/assets/fonts/Poppins/Poppins-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'Poppins';
    src: url('src/assets/fonts/Poppins/Poppins-BoldItalic.ttf') format('truetype');
    font-weight: bold;
    font-style: italic;
  }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        width: 100%;
        font-family: 'Poppins', sans-serif;
    }
`

export default GlobalStyles
