import React, {Component} from "react"
import "../App.css"

import Row from "react-bootstrap/lib/Row"
import Col from "react-bootstrap/lib/Col"

import styled from "styled-components"

import Slider from "./Slider"

const Repair = styled.div`
  color: #ffffff;
  font-weight: 700;
  line-height: 50px;
  font-size: 40px;

  span {
    font-size: 24px;
    display: block;
    line-height: 30px;
  }
`

const LightText = styled.div`
  color: #ffffff;
  font-size: 18px;
  font-weight: 300;
  line-height: 28px;
  margin-top: 54px;
`

const CallBtn = styled.button`
  width: 245px;
  height: 64px;
  background-color: #ffa14b;
  border: none;
  border-radius: 30px;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  line-height: 24px;
  margin-top: 32px;
  transition: all 0.3s;

  &:hover,
  &:active {
    background-color: #af6f35;
  }
`

class Main extends React.Component {
    render() {
        return (
            <Row>
                <Col md={5}>
                    <Repair>
                        Прайс на ремонт iPhone
                    </Repair>
                    <LightText>
                        <ul>
                            <li>5/5s - 000$</li>
                            <li>6/6s - 000$</li>
                            <li>7 - 000$</li>
                            <li>8 - 000$</li>
                            <li>X - 000$</li>
                        </ul>
                    </LightText>
                    <CallBtn>Задать вопрос</CallBtn>
                </Col>
                <Col md={6} mdOffset={1}>
                </Col>
            </Row>
        )
    }
}

export default Main
