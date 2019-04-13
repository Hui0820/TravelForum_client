import styled from "styled-components";

export const ChatContentWrap = styled.ul`
	width:100%;
	height:40vh;
    border-bottom:1px solid #7E7C91;
    overflow-y:scroll;
`;

export const ChatWrap = styled.div`
    width: 50%;
 	border:1px solid #7E7C91;
    margin:3% auto;
    overflow:hidden;

   
`;

export  const ChatHeader = styled.div`
    width:100%;
    height:2rem;
    background-color:#9BABAB;
    text-align:center;
    line-height:2rem;
    font-size:120%;
    color:#fff;   
    display:block;
    list-style:none;
`;


export const ReceiveMsg = styled.li`
    width:100%;
    flex-basis:auto;
    padding:1%;
    margin:1% 0;
    display:block;
    list-style:none;
    img{
        width:40px;
        height:40px;
        margin-right:1%;
    }
    span{
        background-color:#16466B;
        color:#fff;
        padding:1%;
        font-style:italic;
        display:inline-block;
        border:1px solid #000000;
        border-radius:10%;    
    }
`;

export const SendMsg = styled.li`
    width:100%;
    flex-basis:auto;
    padding:1%;
    margin:1% 0;
    text-align:right;
    span{
        padding:1%;
        display:inline-block;        
    }
`;

export const SenderWrap = styled.div`
		width:100%;
		textarea{
			padding:1%;
			margin:1%;
		}
`;
