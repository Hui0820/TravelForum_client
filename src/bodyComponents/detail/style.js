import styled from 'styled-components';

export const DetailWrapper = styled.div`
  width:70%;
  margin:0 auto;
  over-flow:hidden; 
  padding-bottom:100px;
`;

export const DetailTitle = styled.div`
  margin:50px 0 20px 0;
  line-height:44px;
  font-size:34px;
  color:#333;
  font-weight:bold;
  text-align:center;
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