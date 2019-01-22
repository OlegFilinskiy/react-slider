import React, {Component} from "react"
import "../App.css"

import Row from "react-bootstrap/lib/Row"
import Col from "react-bootstrap/lib/Col"
import styled from "styled-components"

import {NavLink} from "react-router-dom"

// import NavLink as StyledNavLink from "./NavLink"

const List = styled.div`
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
                <Col md={12}>
                    <nav>
                        <List>
                            <NavLink className='link'
                                     activeClassName="selected"
                                     to="/"
                            >Главная</NavLink>
                            <NavLink className='link'
                                     activeClassName='selected'
                                     to="/master"
                            >Вызов мастера</NavLink>
                            <NavLink className='link'
                                     activeClassName='selected'
                                     to="/price"
                            >Прайс на ремонт</NavLink>
                            <NavLink className='link'
                                     activeClassName='selected'
                                     to="/advantages"
                            >Наши преимущества</NavLink>
                            <NavLink className='link'
                                     activeClassName='selected'
                                     to="/reviews"
                            >Отзывы клиентов</NavLink>
                            <NavLink className='link'
                                     activeClassName='selected'
                                     to="/works"
                            >Примеры работ</NavLink>
                        </List>
                    </nav>
                </Col>
            </Row>
        )
    }
}

export default Header

/* This is the first variant of links (styledComponent) without react-router */
/*
<StyledNavLink link="/" text="Главная" />
<StyledNavLink link="#" text="Вызов мастера" />
<StyledNavLink link="#" text="Прайс на ремонт" />
<StyledNavLink link="#" text="Наши преимущества" />
<StyledNavLink link="#" text="Отзывы клиентов" />
<StyledNavLink link="#" text="Примеры работ" />
*/
