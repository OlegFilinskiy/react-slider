import React, { Component } from "react"

import Slide_1 from "../img/slide-1.jpg"
import Slide_2 from "../img/slide-2.jpg"
import Slide_3 from "../img/slide-3.jpg"
import Slide_4 from "../img/slide-4.jpg"

class Slider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      slides: [
        {
          slideItem: `url(${Slide_1})`
        },
        {
          slideItem: `url(${Slide_2})`
        },
        {
          slideItem: `url(${Slide_3})`
        },
        {
          slideItem: `url(${Slide_4})`
        }
      ],
      autoplay: false,
      active: 0,
      max: 0
    }

    this.state.max = this.state.slides.length
    this.intervalBetweenSlides = this.intervalBetweenSlides.bind(this)
    this.toggleAutoPlay = this.toggleAutoPlay.bind(this)
    this.nextSlide = this.nextSlide.bind(this)
    this.prevSlide = this.prevSlide.bind(this)
  }

  componentDidMount() {
    this.interval = setInterval(() => this.intervalBetweenSlides(), 3000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  intervalBetweenSlides() {
    if (this.state.autoplay === true) {
      if (this.state.active === this.state.max - 1) {
        this.state.active = 0
      } else {
        this.state.active++
      }

      this.setState({
        active: this.state.active
      })
    }
  }

  toggleAutoPlay() {
    this.setState({
      autoplay: !this.state.autoplay
    })
  }

  nextSlide() {
    this.state.active < this.state.max - 1
      ? this.setState({ active: this.state.active + 1 })
      : this.setState({ active: 0 })
  }

  prevSlide() {
    this.state.active > 0
      ? this.setState({ active: this.state.active - 1 })
      : this.setState({ active: this.state.max - 1 })
  }

  activeDots(index) {
    this.setState({
      active: index
    })
  }

  isActive(value) {
    if (this.state.active === value) {
      return "active"
    }
  }

  setSliderStyles() {
    const transition = (this.state.active * - 100) / this.state.slides.length

    return {
      width: this.state.slides.length * 100 + "%",
      transform: `translateX(${transition}%)`
    }
  }

  renderSlides() {
    const widthOneSlide = 100 / this.state.slides.length + "%"

    return this.state.slides.map((item, index) => (
      <div
        className="slider__item"
        key={index}
        style={{ backgroundImage: item.slideItem, width: widthOneSlide }}
      />
    ))
  }

  renderDots() {
    return this.state.slides.map((item, index) => (
      <li
        className={this.isActive(index) + " dots"} // Check if this slide is active. If yes, then assign the class="active"
        key={index}
        ref="dots"
        onClick={this.activeDots.bind(this, index)} // Биндим прям здесь, чтобы получить index
      >
        <a>&#9679;</a>
      </li>
    ))
  }

  renderPlayPause() {
    let playPauseBtn;

    if (this.state.autoplay) {
      playPauseBtn = ( // Pause
        <svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
        </svg>
      )
    } else {
      playPauseBtn = ( // Play
        <svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
        </svg>
      )
    }

    return playPauseBtn
  }

  renderArrows() {
    return (
      <div>
        <button type="button" className="arrows prev" onClick={this.prevSlide}>
          <svg fill="#FFFFFF" width="50" height="50" viewBox="0 0 24 24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </button>

        <button type="button" className="arrows next" onClick={this.nextSlide}>
          <svg fill="#FFFFFF" height="50" viewBox="0 0 24 24" width="50">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </button>
      </div>
    )
  }

  render() {
    return (
      <div className="slider">
        <div className="slider__wrapper" style={this.setSliderStyles()}>
          {this.renderSlides()}
        </div>
        {this.renderArrows()}
        <ul className="dots-container">
            {this.renderDots()}
        </ul>
        <a className="toggle-play" onClick={this.toggleAutoPlay}>
          {this.renderPlayPause()}
        </a>
      </div>
    )
  }
}

export default Slider
