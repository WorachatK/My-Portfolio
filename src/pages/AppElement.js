import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
`

export const VideoBG = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
`
export const WrapperContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Wrapper = styled.div`
    background-color: ${({theme})=>theme.bg};
    width: 90%;
    height: 90%;
    position: absolute;
    opacity: 0.8;
    border-radius: 20px;

`
export const ContainerBar = styled.div`
    height: 90%;
    width: 90%;
    z-index: 1;
    border-radius: 20px;
    overflow: hidden;

`
export const Bar = styled.div`
    display: flex;
    height: 100%;
`