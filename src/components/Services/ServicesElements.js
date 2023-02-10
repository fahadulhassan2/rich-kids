import styled from 'styled-components';

export const ServicesContainer = styled.div`
    height: 1200px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #0b0e11;

    @media screen and (max-width: 768px){
        height: 3200px;
    }
    @media screen and (max-width:; 480px){
        height: 3200px;
    }
`;
export const ServicesWrapper= styled.div`
    max-width: 2000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 25px;
     padding: 0 0px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 1200px){
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`
export const ServicesCard = styled.div`
    background: #312D2F;
    width: 280px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    margin-top: 10px;
    max-height: 380px;
    padding: 30px 5px 0px 5px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;

    }

`;

export const ServicesIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;

`

export const ServicesH1= styled.h1`
    font-size: 2.5rem;
    color: white;
    margin-bottom: 64px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`

export const ServicesH2= styled.h2`
    font-size: 1rem;
    color: white;
    margin-bottom: 10px;
`

export const ServicesP = styled.p`
    font-size: 1rem;
    color: white;
    text-align: center;
`