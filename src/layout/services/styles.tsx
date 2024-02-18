import styled from 'styled-components'

export const ServicesContainer = styled.section`
  width: 100%;
  height: 700px;
  padding: 0.8rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
export const Title = styled.span`
  font-size: 3rem;
  font-weight: bold;
`

export const Paragrapth = styled.p`
  font-size: 1.2rem;
  width: 600px;
  text-align: center;
  line-height: 40px;
`

export const CardContainer = styled.div`
  margin-top: 20px;
  width: 600px;
  display: flex;
  justify-content: space-around;
  height: 400px;
  gap: 20px;
  align-items: center;
`

export const CardComponent = styled.div`
  height: 380px;
  border-radius: 10px;
`

export const ImgCard = styled.img`
  background-attachment: fixed;
  background-size: cover;
`

export const Description = styled.div`
  border-radius: 5px;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  height: 40px;
  width: 100%;
  align-items: center;
  font-weight: bold;
`

export const Price = styled.span`
  background-color: #000;
  padding: 0.3rem;
  border-radius: 5px;
  color: #fff;
  font-weight: 100;
`
