import styled from "styled-components";

export const FaqContainer = styled.div`
    color: #fff;
    background:  #0b0e11;
    height: 1000px;
    @media screen and (max-width: 768px){
        padding: 100px 0;
    }
    @media screen and (max-width: 768px){
        height: 800px;
    }
`;

export const FaqWrapper = styled.div`
    
    z-index: 0;
    height: 1000px;
    display: flex ;
    width: 100%;


    // max-width: 1400px;
    // margin-right: auto;
    margin-left: 0;
    // padding: 0 24px;
    
`;
export const LeftDiv = styled.div`
    margin-top: auto;       
    height: 80%;
    
  
    width: 10%;
    background: yellow;
`
export const ImageArea = styled.div`
    height: 100%;

    width: 600px;
    background: red;
`
export const ImageArea2 = styled.div`
   
    height: 100%;
    display: flex;
    margin-left: 100px;
    width: 50%;
    
    background: red;
`
export const InfoRow = styled.div`
    display: grid;
  //  grid-auto-columns: minmax(auto,5fr);
    grid-column-gap: 10px;

    grid-template-areas:  'col2 col1 col3 col4';


`;

export const Accord = styled.div`
    background: #343a4000;
    border: 2px solid #343a4000 !important;
`