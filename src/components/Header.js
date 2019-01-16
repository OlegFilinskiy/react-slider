import React, { Component } from "react"
import "../App.css"

import Row from "react-bootstrap/lib/Row"
import Col from "react-bootstrap/lib/Col"
import styled from "styled-components"

import NavLink from "./NavLink"

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  height: 49px;
`

class Header extends React.Component {
  render() {
    return (
      <Row>
        <Col lg={12}>
          <nav>
            <List>
              <NavLink link="#" text="Вызов мастера" />
              <NavLink link="#" text="Прайс на ремонт" />
              <NavLink link="#" text="Наши преимущества" />
              <NavLink link="#" text="Схема работы" />
              <NavLink link="#" text="Отзывы клиентов" />
              <NavLink link="#" text="Примеры работ" />
            </List>
          </nav>
        </Col>
      </Row>
    )
  }
}

export default Header
