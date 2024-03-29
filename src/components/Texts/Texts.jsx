import styled from 'styled-components'

export const ParagraphText = styled.p`
font-size: 18px;
line-height: 25px;
font-weight: 400;
color:${(props) => props.white? '#fff' : "#595959"};
`
export const HeadingText = styled.h3`
color:${(props) => props.white? '#fff' : "#000"};
font-weight:600;
font-size: 35px;
line-height: 38px;
margin: 20px auto;
`
export const SubHeadingText = styled.h4`
font-size: 24px;
margin-top: 10px;
line-height: 34px;
color:${(props) => props.white? '#fff' : "#00b2bf"};
font-weight: 600;
`