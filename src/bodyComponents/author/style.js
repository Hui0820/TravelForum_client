import styled from "styled-components";

export const AuthorComponentWrapper = styled.div`
  width:60%;
  margin:0 auto;
  over-flow:hidden; 
`;

export const AuthorDetailWrapper = styled.div`
  width:100%;
  height:30%;
  over-flow:hidden;
  display:flex;
  img{
    margin:20px;
  }
  .authorInfo{
    margin:10px;
    h3{
      cursor:pointer;
    }
    .metaData{
      span{
        margin-right:15px;
        cursor:pointer;
      }
    }
  }
  .btns{
    margin:10px;
    .authorBtn{
      margin:5px;
    }
  }
`;


