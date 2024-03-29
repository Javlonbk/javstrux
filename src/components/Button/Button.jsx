import styled from 'styled-components'
import React from "react";

const BtnContainer = styled.div`
button{
  width: auto;
  margin: 2vh auto 1vh;
  padding: 15px 25px 12px;
  border-radius: 15px;
  background-color: #00b2bf;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
  color: #fff;
  font-size: 16px;
  line-height: inherit;
  font-weight: 400;
  font-family: Averta, sans-serif;
  cursor: pointer;
  display: inline-block;
  border: none;
  svg{
    width: 1em;
    display: inline-block;
    margin-left: 15px;
    box-sizing: border-box;
  }
}
  `;

const Button = () => {
  return( 
  <BtnContainer>
    <button>Batafsil
    <svg data-v-5e1855c7="" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="external-link-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="icon svg-inline--fa fa-external-link-alt fa-w-16"><path data-v-5e1855c7="" fill="currentColor" d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z" class=""></path></svg>
    </button>
  </BtnContainer>
)};

export default Button;
