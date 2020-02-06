import React, { useState } from 'react'
import styled from 'styled-components/macro'

const TabContainer = styled.section`
    display: flex;
  flex-direction: row;
  width: 100%;
  height: 50px;
`
const TabButton = styled.button`
  cursor: pointer;
  width: 100%;
  height: 100%;
  padding: 10px;
  border: none;
  border-bottom: ${props => (props.active ? "4px solid #657881" : "4px solid #999")};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  transition: 0.6s;
  background: #fff;
  &:focus {
    outline: none;
  }
`
const TabTitle = styled.span`
  font-family: 'Open Sans', sans-serif;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  text-transform: uppercase;
  font-size: 12px;
  color: #333;
  transition: 0.6s;
  @media (min-width: 450px) {
    font-size: 14px;
  }
  @media (min-width: 668px) {
    font-size: 16px;
  }
`

export const TabBar = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <>
      <TabContainer>
        {tabs.map((tab, index) => (
          <TabButton key={index} active={activeTab === index} onClick={() => setActiveTab(index)}>
            <TabTitle active={activeTab === index}>{tab.title}</TabTitle>
          </TabButton>
        ))}
      </TabContainer>
      {tabs[activeTab].render()}
    </>
  )

}