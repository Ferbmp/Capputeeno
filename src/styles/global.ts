import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle` 
    :root{
            --background:#DEDEDE;
            --orange: #FFA585;
            --grey-light:  #E9E9F0;
            --blue: #115D8C;
            --green: #51B853;
    
            
            --text: #363F5F;
            --text-dark:#41414D;

            --text-helps: #737380;

            --padding: 0px 160px

        }
    * {
        margin: 0px;
        padding: 0px; 
        box-sizing: border-box
    }
    html{
        
        @media(max-width: 1080px){
            font-size: 93.75%;
        }
        @media(max-width: 720px){
            font-size: 87.5%;
        }
    }
    body, input, textarea, button{
        font-family: 'Saira', sans-serif;
        font-weight: 300;
        font-size: 16px
    }
    h1{
        font-size: 16px

    }

    body{ 
        background: var(--background); 
        -webkit-font-smoothing:antialiased;
    }
    button{ 
        cursor: pointer;
    }

`;
