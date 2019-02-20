import styled from 'styled-components'

export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    overflow: hidden;
`

export const HomeLeft = styled.div`
    width: 625px;
    margin-left: 15px;
    padding-top: 30px;
    float: left;
    .banner-img {
        width: 625px;
        height: 270px;
        border-radius: 5px;
    }
`

export const HomeRight = styled.div`
    width: 280px;
    padding-top: 30px;
    float: right;
`
export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: #a5a5a5;
    color: #fff;
    font-size: 14px;
    margin: 30px 0;
    border-radius: 20px;
    cursor: pointer;
`

export const BackToTop = styled.div`
    position: fixed;
    right: 100px;
    bottom: 100px;
    width: 60px;
    height: 60px;
    border: 1px solid #dcdcdc;
    border-radius: 8px;
    font-size: 12px;
    text-align: center;
    line-height: 60px;
    cursor: pointer;
    color: #666;
`

export const ListWrapper = styled.div`
    width: 625px;
    margin-top: 30px;
    .item:first-child {
        display: block;
        border-top: 1px solid #dcdcdc;
    }
`

export const ListItem = styled.div`
    padding: 20px 0;
    overflow: hidden;
    border-bottom: 1px solid #dcdcdc;
    .list-pic {
        width: 150px;
        height: 100px;
        float: right;
    }
`

export const ListInfo = styled.div`
    width: 458px;
    float: left;
    .title {
        font-size: 18px;
        color: #000;
        line-height: 30px;
        text-decoration: none;
    }
    .desc {
        font-size: 13px;
        color: #999;
        line-height: 24px;
    }
`

export const RecommendWrapper = styled.div`
    width: 100%;
`

export const RecommendItem = styled.div`
    width: 100%;
    height: 50px;
    margin-bottom: 6px;
    background: url(${(opt) => opt.imgUrl});
    background-size: contain;
`

export const WriterWrapper = styled.div`
    width: 100%;
    margin-top: 10px;
`

export const WriterTitle = styled.div`
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    color: #969696;
    overflow: hidden;
    .rec-title {
        float: left;
    }
    .rec-switch {
        float: right;
        .spin {
            margin-right: 2px;
        }
    }
`

export const WriterItem = styled.div`
    overflow: hidden;
    margin-top: 16px;
    .avatar {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        float: left;
    }
`
export const WriterContent = styled.div`
    width: 172px;
    float: left;
    padding-left: 10px;
    line-height: 24px;
    box-sizing: border-box;
    .nickname {
        font-size: 14px;
        color: #333;
    }
    .writer-info {
        font-size: 12px;
        color: #969696;
    }
`
export const WriterFollow = styled.div`
    width: 40px;
    float: right;
    font-size: 13px;
    line-height: 24px;
    color: #42c02e;
    cursor: pointer;
`