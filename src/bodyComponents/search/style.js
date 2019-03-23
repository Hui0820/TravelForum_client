import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width:960px;
  margin:0 auto;
  over-flow:hidden; 
`;

export const HomeLeft = styled.div`
  margin-left:15px;
  padding-top:30px;
  width:625px;
  float:left;
  .banner-img{
    width:625px;
    height:270px;
  }
`;

export const HomeRight = styled.div`
  width:280px;
  float:right;
  padding-top:30px;
`;

export const TopicWrapper = styled.div`
  overflow:hidden;
  padding:20px 0 10px 0;
  margin-left:-18px;
  border-bottom:1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
    float:left;
    background:#f7f7f7;
    padding-right:10px;
    margin-left:18px;
    margin-top:10px;
    height:32px;
    line-height:32px;
    font-size:14px;
    color:#000;
    border:1px solid #dcdcdc;
    border-radius:4px;
    cursor:pointer;
    .topic-pic{
      display:block;
      float:left;
      width:32px;
      height:32px;
      margin-right:10px;
    }
`;

export const TopicLink = styled.div`
    float:left;
    padding-right:10px;
    margin-left:18px;
    margin-top:10px;
    height:32px;
    line-height:32px;
    font-size:14px;
    color:#000;
    cursor:pointer;
`;

export const ListItem = styled.div`
  overflow:hidden;
  padding:20px 0;
  border-bottom:1px solid #dcdcdc;
   .list-pic{
    width:100px;
    height:100px;
    display:block;
    float:right;
    border-radius:10px;
    cursor:pointer;
   }
`;

export const ListInfo = styled.div`
  overflow:hidden;
  width:600px;
  float:left;
  .list-title{
    line-height:27px;
    font-size:18px;
    font-weight:bold;
    color:#333;
    martin-bottom:10px;
    cursor:pointer;
  }
  .list-desc{
    line-height:18px;
    font-size:13px;
    color:#999;
    }
    .link{
      text-decoration:none;
    }
    .link:hover{
      text-decoration:underline;
    }
`;

export const ListNote = styled.div`
	float:left;
  margin-top:20px;
  color:#333;
  font-size:13px;
  span{
    margin:10px 25px 15px 0;
    cursor:pointer;
  }
`;

export const RecommendWrapper = styled.div`
  width:100%;
`;
export const RecommendItem = styled.div`
  height:50px;
  border-radius:3px;
  margin-bottom:10px;
  cursor:pointer;
  background:url(${(props)=>props.imgUrl});
  background-size:cover;
`;

export const RecommendCodeBar = styled.div`
  height:65.98px;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  padding: 7px 10px;
  overflow:hidden;
  margin: 30px 0;
  .qrCode{ 
    float:left;
    width: 60px;
    height: 60px;
    opacity: .85;
  }
  .desc{
    width:135px;
    float:right;
    line-height:40.23px;
    height:60px;
  .downLoadApp{
    font-size:14px;
    font-weight:bold;
    line-height:20px;
    padding:2px;
    display:block;
    text-decoration:none;
    color:#000;
    cursor: pointer;
  }
  .codeDesc{
    font-size:12px;
    margin-top:16px;
    line-height:16.25px;
    display:block;
     text-decoration:none;
    color:#999;
    cursor: pointer;
  }
`;

export const WriterWrapper = styled.div`
  margin-top:30px;
  .checkWhole{
    cursor:pointer;
    height:40px;
    font-size: 13px;
    color: #787878;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    text-align:center;
    line-height:40px;
  }
  
`;

export const WriterTitle = styled.div`
  overflow:hidden;
  height:30px;
  line-height:30px;
  font-size: 14px;
  color: #969696;
  span{
    padding-left:10px;
  }
`;

export const WriterSwitch = styled.div`
    float:right;
    cursor:pointer;
    .spin{
      display:inline-block;
      transition:all 0.5s ease-in;
      transform-orgin:center center;
    }

`;

export const WriterItem = styled.div`
    height:50px;
    margin:20px 0;
    img{
      cursor:pointer;
      width:50px;
      height:50px;
      border: 1px solid #ddd;
      border-radius: 50%;
      vertical-align: middle;
    }
`;

export const WriterInfo = styled.div`
    float:right;
    margin:5px 0px 20px 0;
    width:200px;
    h3{
      cursor:pointer;
      float:left;
      width:100%;
      span{
        color:#42c02e;
        float: right;
      }
    }
    p{
      float:left;
      margin-top:8px;
      color:#969696;
      font-size: 12px;
    }
`;

export const LoadMore = styled.div`
  width:100%;
  height:40px;
  margin:30px 0;
  line-height:40px;
  background:#a5a5a5;
  text-align:center;
  border-radius:20px;
  color:#fff;
  cursor:pointer;
`;

export const BackToTop = styled.div`
  position:fixed;
  right:100px;;
  bottom:30px;
  width:60px;
  height:60px;
  line-height:60px;
  text-align:center;
  border:1px solid #ccc;
  cursor:pointer;
`;