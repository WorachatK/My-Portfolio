import styled from "styled-components";

export const Container = styled.div`
    height: 40px;
    width: 100%;
    border-bottom: 1px solid #909497;
`
export const Wrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 20px;
`
export const ColorContainer = styled.div`
    display: flex;
    gap: 10px;
`
export const IconB = styled.div`
    height: 15px;
    width: 15px;
    background-color: ${(props)=>props.bgcolor};
    border-radius: 50%;
    cursor: pointer;
`
export const Text =styled.div`
    text-align: center;
    width: 100%;
    font-size: 14px;
    color: rgba(213,213,213,0.7);
`