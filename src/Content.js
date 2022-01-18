import React from "react";
import styled from "styled-components";
import { useState } from "react";
// import { colors } from 'ui';
// import searchIcon from "img/search-icon.svg";
// import closeIcon from "img/close-icon.svg";
// import categoryNames from "components/categoryNames";

const Wrapper = styled.div`
.Title {
  text-align:center;
  background-color:;
  margin-top:40px;
  padding:40px;
  font-family:monospace;

  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
}



`;

const Content = () => {
  return (
    <Wrapper>
      <div>
        <h1 className="Title">Audio list</h1>
      </div>
    </Wrapper>
  );
  }

export default Content;
