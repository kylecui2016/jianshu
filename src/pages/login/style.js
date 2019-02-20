import styled from 'styled-components'

export const LoginWrapper = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 56px;
    bottom: 0;
    background: #eee;
`

export const LoginBox = styled.div`
    width: 400px;
    height: 220px;
    margin: 100px auto;
    background: #fff;
    box-shadow: 0 0 8px rgba(0, 0, 0, .1);
    border-radius: 5px;
    padding-top: 50px;
`

export const Input = styled.input`
    display: block;
    width: 220px;
    height: 30px;
    line-height: 30px;
    text-indent: 10px;
    margin: 10px auto;
    color: #777;
    border-radius: 5px;
    border: 1px solid #dcdcdc;
    outline: none;
`

export const Button = styled.div`
    width: 220px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #fff;
    margin: 20px auto;
    border-radius: 20px;
    background: #187cb7;
    cursor: pointer;
`