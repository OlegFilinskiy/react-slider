import React, {Component} from "react"
import logo from "./logo.svg"
import "./App.css"

import Grid from "react-bootstrap/lib/Grid"

import styled from "styled-components"

import {BrowserRouter as Router, Route} from "react-router-dom"

import Header from "./components/Header"
import Menu from "./components/Menu"
import Main from "./components/Main"
import MasterCallPage from "./components/MasterCallPage"
import PricePage from "./components/PricePage"
import ReviewsPage from "./components/ReviewsPage"
import AdvantagePage from "./components/AdvantagePage"
import SamplesPage from "./components/SamplesPage"

const url = process.env.PUBLIC_URL + "/img/bg.jpg"

const HeaderWrapper = styled.header`
  width: 100%;
  min-height: 48px;
  background-color: #242424;
  opacity: 0.8;
`

const MenuWrapper = styled.div`
  width: 100%;
  min-height: 89px;
  padding-top: 20px;
  padding-bottom: 15px;
`

const MainWrapper = styled.main`
  width: 100%;
  height: 600px;
  padding-top: 130px;
  background: url(${url}) no-repeat;
  background-size: cover;
`

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <HeaderWrapper>
                        <Grid>
                            <Header/>
                        </Grid>
                    </HeaderWrapper>

                    <MenuWrapper>
                        <Grid>
                            <Menu/>
                        </Grid>
                    </MenuWrapper>

                    <MainWrapper>
                        <Grid>
                            <Route path='/' component={Main} exact/>
                            <Route path='/master' component={MasterCallPage}/>
                            <Route path='/price' component={PricePage}/>
                            <Route path='/advantages' component={AdvantagePage}/>
                            <Route path='/reviews' component={ReviewsPage}/>
                            <Route path='/works' component={SamplesPage}/>
                        </Grid>
                    </MainWrapper>
                </div>
            </Router>
        )
    }
}

export default App
