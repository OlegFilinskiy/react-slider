import React, { Component } from "react"
import "../App.css"

import Row from "react-bootstrap/lib/Row"
import Col from "react-bootstrap/lib/Col"

import styled from "styled-components"

const Repair = styled.div`
  color: #464646;
  font-size: 18px;
  font-weight: 300;
  line-height: 22px;
`

const WorkTime = styled.div`
  color: #2a2a2a;
  font-size: 12px;
  font-weight: 300;
  line-height: 24px;

  span {
    display: block;
    font-weight: 700;
    color: #464646;
    font-size: 21px;
  }
`

const Calls = styled.div`
  color: #2a2a2a;
  font-size: 12px;
  font-weight: 300;
  line-height: 24px;

  span {
    display: block;
    font-weight: 700;
    color: #464646;
    font-size: 21px;
  }

  @media (max-width: 992px) {
    margin-top: 15px;
  }
`

const CallButton = styled.button`
  width: 173px;
  height: 45px;
  background-color: #3fc7db;
  border-radius: 25px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 400;
  border: none;
  transition: all 0.3s;
  max-width: 100%;

  &:hover {
    background-color: #26a4b7;
  }

  @media (max-width: 992px) {
    margin-top: 20px;
  }
`

class Address extends React.Component {
  render() {
    return <span> {this.props.addr} </span>
  }
}

class TelNumber extends React.Component {
  render() {
    return <span> {this.props.tel} </span>
  }
}

class Menu extends React.Component {
  render() {
    return (
      <Row>
        <Col xs={6} md={3}>
          <Repair>Ремонт айфонов в сервисном центре и на выезде</Repair>
        </Col>
        <Col xs={6} md={3} mdOffset={1}>
          <WorkTime>
            Пн-пт с 10 до 20, сб,вс с 11 до 18
            <Address addr="Крещатик, 7/11" />
          </WorkTime>
        </Col>
        <Col xs={6} md={3}>
          <Calls>
            Звонки принимаются 24 часа
            <TelNumber tel="0 (800) 500 00 00" />
          </Calls>
        </Col>
        <Col xs={6} md={2}>
          <CallButton>Заказать звонок!</CallButton>
        </Col>
      </Row>
    )
  }
}

export default Menu
