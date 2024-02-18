import styled from 'styled-components'
import Banner from '../../assets/images/banner.jpg'

export const BannerContainer = styled.main`
  background-image: url(${Banner});
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  backdrop-filter: blur(0, 9, 1);
  width: 100%;
  height: 760px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
  width: 600px;
  color: #fff;
`

export const Message = styled.h1`
  font-weight: 700;
  text-transform: uppercase;
  line-height: 3rem;
`

export const SubMessage = styled.p`
  font-size: medium;
  font-weight: bold;
  height: 40px;
`
