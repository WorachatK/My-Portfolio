import styled from "styled-components";

export const Container = styled.div`
    flex: 1;
    height: 100%;
    border-right: 1px solid #909497;
    overflow: scroll;

    display: ${props=>props.about ? 'flex':'none'};
`
export const Wrapper = styled.div`
    padding: 10px;
    margin-bottom: 50px;
    animation: moveL 1s;
`
export const ProfileContainer = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 50px;
`
export const MyPhoto = styled.img`
    height: 150px;
    width: 150px;
    border-radius: 50%;
`
export const MyName = styled.div`
    margin-top: 20px;
    font-size: 23px;
    text-align: center;
`
export const JobContainer = styled.div`
    text-align: center;
    margin-top: 20px;
    background-color: #2E2E2E;
    border-radius: 5px;
    width: 100%;
    font-size: ${props=>props.fz}px;
    @media (max-width: 800px){
        padding: 10px 0px;
    }
`
export const AboutContainer = styled.div`
    padding: 10px 30px;
    width: 100%;

    @media (max-width: 800px){
        padding: 10px 0px;
    }
`
export const AboutMeHead = styled.h2`
    margin-bottom: 15px;
`
export const AboutText = styled.div`
`
export const AboutTextUL = styled.ul`
    padding:0 0 0 20px ;
`
export const AboutTextLI = styled.li`
`
export const SetProfile = styled.div`
    margin-top: 30px;
    background-color: #fff;
    color: #000;
    padding: 15px;
    width: 100%;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
    display: none;

    &:hover{
        background-color: black;
        color: white;
    }
    @media (max-width: 450px){
        display: block;
    }
`
