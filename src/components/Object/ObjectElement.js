import styled from "styled-components";

export const Container = styled.div`
    flex: 3;
    @media (max-width: 800px){
        flex: 2;
    }
    @media (max-width: 450px){
        display: ${props=>props.about ? 'none':''};
    }
`
export const LinkBarContainer = styled.div`
    padding-left: 20px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: start;
    border-bottom: 1px solid #909497;
    gap: 10px;
    @media (max-width: 450px){
        padding-left: 0px;
        gap: 5px;
        justify-content: center;

    }
`
export const Link = styled.div`
    padding: 10px 30px;
    border-radius: 5px;
    height: 100%;
    cursor: pointer;
    background-color: ${props=>props.project ? '#1D1D1D':''};
    transition: all 0.3s ease;
    &:hover{
        background-color: #3C3C3C;
    }

    @media (max-width: 450px){
        padding: 10px 5px;
    }
`
export const Wrapper = styled.div`
    overflow: scroll;
    padding: 30px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    width: 100%;
    height: 100%;
    padding-bottom: 100px;

    @media (max-width: 800px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 450px){
        grid-template-columns: repeat(1, 1fr);
    }
`

export const ColorBg = styled.div`
    background-color: rgba(0,0,0,0.5);
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    opacity: 0;
    transition: all 0.3s ease;
`
export const CardContainer = styled.div`
    height: 400px;
    width: 100%;
    border-radius: 20px;
    position: relative;
    overflow: hidden;
    animation: Top 1s;

    &:hover ${ColorBg}{
        opacity: 1;
    }
`
export const CardImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
`

export const CardLinks = styled.div`
    padding: 10px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    gap: 30px;
`
export const CardLink = styled.a`
    background-color: ${props=>props.bgc};
    color: ${props=>props.c};
    text-align: center;
    width: 100%;
    height: 50px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    text-decoration: none;
`
export const Logo = styled.img`
    height: 60%;
    margin-right: 10px;
`
export const ContactWrapper = styled.div`
    overflow: scroll;
    padding: 30px;
    height: 100%;
    width: 500px;
    animation: Top 1s;

    @media (max-width: 450px){
        width: 100%;
        padding: 30px 0px;
    }
`
export const HeadContact = styled.h1`
    margin-bottom: 30px;
    width: 100%;
`
export const ContactContainer = styled.ul`
    padding: 0 0 0 20px;
    width: 100%;
`
export const Contact = styled.li`
    margin-bottom: 10px;
    font-size: 20px;
    width: 100%;

    @media (max-width: 450px){
        font-size: 16px;
    }
`
