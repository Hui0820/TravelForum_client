import styled from 'styled-components';

export const DetailWrapper = styled.div`
  width:70%;
  margin:0 auto;
  over-flow:hidden; 
  padding-bottom:100px;
`;

export const DetailTitle = styled.div`
  display: inline-block;
  margin:50px 5% 10px 0;
  line-height:44px;
  font-size:34px;
  color:#333;
  font-weight:bold;
`;

export const DetailContent = styled.div`
  color:#2f2f2f;
  margin-bottom:5%;
  img{
    width:600px !important;
    height:400px !important;
    margin:6% 15%;
    display:flex;
  }
  p{
    font-size:16px;
    line-height:30px;
  }
`;

export const DetailAuthor = styled.div`
  width:50%;
  margin: 3% 0;
  display:flex;
  justify-content:space-between;
  
`;

export const DetailAuthorInfo = styled.div`
  
  width:85%;
  display:flex;
  justify-content:space-between;
  flex-direction:column;
  cursor:pointer;
  div{
    font-size:10px;
    flex-direction:row;
    display:flex;
    justify-content:flext-start;
  }
  .Icon{
    margin:0 10px;
  }
`;

export const ListNote = styled.div`
	float:left;
  margin-top:20px;
  color:#333;
  font-size:13px;
  margin:10px 25px 15px 0;
  cursor: default;
`;
