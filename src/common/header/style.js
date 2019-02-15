import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
    position: relative;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
`;

export const HeaderContent = styled.div`
position: relative;
    width: 1440px;
    height: 100%;
    margin: 0 auto;
`;

export const Logo = styled.a.attrs({
    href: '/'
})`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    height: 100%;
    width: 100px;
    background: url(${logoPic});
    background-size: contain;
`;

export const Nav = styled.div`
    width: 960px;
    height: 56px;
    margin: 0 auto;
`;

export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    &.left {
        float: left;
        color: #333;
    }
    &.right {
        float: right;
        color: #969696;
    }
    &.login {
        font-size: 15px;
    }
    &.active {
        color: #ea6f5a;
    }
`;

export const NavSearchWrapper = styled.div`
    height: 56px;
    margin-left: 20px;
    position: relative;
    float: left;
    .iconfont {
        position: absolute;
        right: 13px;
        top: 13px;
        color: #999;
        width: 30px;
        height: 30px;
        border-radius: 30px;
        line-height: 30px;
        text-align: center;
        &.focus {
            background: #999;
            color: #fff;
        }
    }
`;

export const NavSearch = styled.input.attrs({
    placeholder: "搜索"
})`
    width: 240px;
    height: 38px;
    box-sizing: border-box;
    padding: 0 44px 0 20px;
    border: none;
    outline: none;
    border-radius: 19px;
    margin-top: 9px;
    background: #eee;
    color: #666;
    &::placeholder {
        color: #999;
    }
    &.focus {
        width: 320px;
    }
    &.search-slide-enter {
        transition: all .5s ease-out;
    }
    &.search-slide-enter-active {
        width: 320px;
    }
    &.search-slide-exit {
        transition: all .5s ease-out;
    }
    &.search-slide-exit-active {
        width: 240px;
    }
`;

export const SearchInfo = styled.div`
    position: absolute;
    left: 0;
    top: 56px;
    width: 240px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
`;

export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`;

export const SearchInfoSwitch = styled.div`
    float: right;
    font-size: 13px;
`;

export const SearchInfoList = styled.div`
    overflow: hidden;
    margin-bottom: 10px;
`;

export const SearchInfoItem = styled.a`
    display: block;
    float: left;
    margin-right: 20px;
    margin-bottom: 10px;
    padding: 0 6px;
    line-height: 18px;
    font-size: 12px;
    color: #787878;
    border: 1px solid #ddd;
    border-radius: 3px;
`; 

export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
`;

export const Button = styled.div`
    float: right;
    height: 38px;
    line-height: 38px;
    margin-top: 9px;
    margin-left: 20px;
    border-radius: 19px;
    border: 1px solid #ea6f5a;
    text-align: center;
    font-size: 15px;
    &.reg {
        width: 80px;
        color: #ea6f5a;
    }
    &.writting {
        width: 100px;
        color: #fff;
        background: #ea6f5a;
        .iconfont {
            margin-right: 5px;
        }
    }
`;