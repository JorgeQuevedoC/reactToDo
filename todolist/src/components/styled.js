import styled from 'styled-components'

export const HeaderContainer = styled.header`
    background-color:#F4B433;
    height:50px;
    width: 100%;
    margin:0px;
    padding:0px;
    position:fixed;
    left:0;
    top:0;
    display:flex;
    align-items:center;
    justify-content:center;
    font-family: Impact;
`

export const HeaderButton = styled.button`
    width:10%;
    height:100%;
    text-decoration: none;
    font-weight:bold;
    font-size:18px;
    color:#FFF;
    background-color:#F4B433;
    border:none;
    margin-bottom: 10px;
    border-bottom: solid 3px #FFF;
    margin-right:5px;
    margin-left:5px;
    outline:none;

    :hover{
        background-color: #D69E2B;
        cursor: pointer;
    }
`;

export const Section = styled.section`
    width:100%;
    height:100vh;
    padding-top:50px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:start;
    font-size:18px;
    color:#FFF;
    font-family: Impact;
`;

export const AuthButton = styled.button`
    background-color:#FFF;
    border:none;
    border: 3px solid #F4B433;
    width:auto;
    max-height: 50%;
    height:10%;
    font-size:25px;
    color:#F4B433;
    border-radius:15px;
    margin-top: 10vh;
    outline:none;
    :hover{
        background-color: #F4B433;
        color:#FFF;
        cursor: pointer;
    }
`
export const LogButton = styled.button`
    background-color:#FFF;
    border:none;
    border: 3px solid #B44;
    width:auto;
    max-height: 50%;
    height:10%;
    font-size:25px;
    color:#B44;
    border-radius:15px;
    margin-top: 10vh;
    outline:none;
    :hover{
        background-color: #B44;
        color:#FFF;
        cursor: pointer;
    }
`

export const TodoContainer = styled.div`
    width:100%;
    padding-top:10px;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    font-family: Impact;
    position:relative;
    top:0;
`;

export const TodoInput = styled.input`
    background-color:#FFF;
    border:none;
    border: 3px solid #F4B433;
    width:45%;
    padding: 15px;
    font-size:35px;
    font-weight:lighter;
    color:#F4B433;
    border-radius:15px;
    outline:none;
`

export const TodoButton = styled.button`
    background-color:#F4B433;
    border:none;
    border: 3px solid #F4B433;
    width:65px;
    height:65px;
    font-size:40px;
    color:#FFF;
    border-radius:65px;
    margin-left:15px;
    outline:none;
    :hover{
        background-color: #D69E2B;
        color:#FFF;
        cursor: pointer;
    }
`

export const TodoListElement = styled.ul`
    list-style: #F4B433;
    background-color:#FFF;
    border:none;
    border-bottom: 3px solid #F4B433;
    border-right: 3px solid #F4B433;
    width:60%;
    box-shadow: 5px 5px rgba(50, 50, 50, 0.7);
`

export const TodoLi = styled.li`
    background-color:#FFF;
    border:none;
    border-bottom: 1px solid rgba(50, 50, 50, 0.7);
    width:100%;
    font-size:35px;
    font-weight:100;
    color:#555;
    letter-spacing:3px;
    :hover{
        background-color: #444;
        color:#F4B433;
        cursor: pointer;
    }
`