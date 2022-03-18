import React from "react";
import styled from "styled-components";

const Header = ({ sideBarToggle, setSideBarToggle }) => {
  return (
    <Wrapper>
      <HeaderItem onClick={()=> setSideBarToggle(!sideBarToggle)}>
        <i className="fas fa-bars" />
      </HeaderItem>

      <HeaderItem>
        <i className="fas fa-border-all" />
        <span>Dashboard</span>
      </HeaderItem>

      <HeaderItem>
        <i className="fas fa-images" />
        <span>Collections</span>
      </HeaderItem>

      <Placeholder />

      <HeaderItem>
        <Profile>
            <img
                src = 'https://scontent-lax3-2.xx.fbcdn.net/v/t1.18169-9/28168403_1791775667541393_4345244685546332976_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=BVaDd9PqSQUAX8f_2V_&_nc_ht=scontent-lax3-2.xx&oh=00_AT-9jw0WjRKRoyY4prBO_Y_F8Tl6qh3ZHHfvcSLGtpYuJQ&oe=623DE3CC'
                alt = ''
            />
        </Profile>
      </HeaderItem>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
    display: flex;
    height: 70px;
    align-items: center;
    background-color: #20212d;
    padding: 0 20px;
    -webkit-box-shadow: 0px 4px 15px #121212;
    box-shadow: 0px 4px 15px #121212;
    position: sticky;
    top: 0;
`;
const HeaderItem = styled.div`
    color: #eee;
    padding: 10px 16px;
    border-radius: 4px;

    span{
        margin-left: 10px;
        font-weight:  500;
    }

    &:hover{
        background-color: #18181f;
        transition: 0.3s;
        cursor: pointer;
    }
`;
const Placeholder = styled.div`
    flex: 1;
`;
const Profile = styled.div`
    display: flex;
    align-items: center;
    
    img {
        height: 30px;
        border-radius: 50%;
    }
`;
