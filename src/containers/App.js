import React, { Component } from 'react';

// Helpers
import { debounce } from '../utils'

// Components
import { Card, Menu, MenuItem, Text, Title } from '../components'

// Styles
import { APP_WHITE } from '../styles/colors'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      viewport: {}
    }
  }

  componentDidMount() {
    this.addResizeListener()
  }

  render() {
    return (
      <div>
        <Menu viewport={this.state.viewport}>
          <MenuItem label="Labels" href="#labels" />
          <MenuItem label="Pursuits" href="#pursuits" />
          <MenuItem label="Recommendations" href="#recommendations" />
        </Menu>

        {/* Banner Card */}
        <Card style={{ marginLeft: 110, marginRight: 110 }}>
          <Title style={{ color: APP_WHITE, fontSize: 120, marginLeft: 160 }}>
            HEY,
          </Title>
          <Title style={{ color: APP_WHITE, fontSize: 36, textAlign: "center"}}>
            I'M CLAYTON.
          </Title>
          <Text style={{ color: APP_WHITE, textAlign: "center" }}>
            I write software and drink coffee.<br/>And I’m all out of coffee.
          </Text>
          <Text style={{ fontSize: 10, color: APP_WHITE, textAlign: "center" }}>
            New York, NY
          </Text>

          <div style={{ textAlign: "center" }}>
            <Icon
              name="fa-linkedin-in"
              href="https://www.linkedin.com/in/clayton-gentry-6492588a/"
            />

            <Icon
              name="fa-github"
              href="https://github.com/claytongentry/"
            />

            <Icon
              name="fa-instagram"
              href="https://www.instagram.com/cg3ntry"
            />

            <Icon
              name="fas fa-envelope"
              href="mailto:cg3ntry@gmail.com"
            />

          </div>

        </Card>
      </div>
    )
  }

  addResizeListener() {
    const onResize = () => this.setViewport()
    window.addEventListener("resize", debounce(onResize, 250))
    this.setViewport()
  }

  setViewport() {
    const { innerHeight, innerWidth } = window
    this.setState({ viewport: { innerHeight, innerWidth }})
  }
}

const Icon = (props) =>
  <a href={props.href} target="_blank">
    <i className={`fab ${props.name} fa-2x`} style={{ color: APP_WHITE, padding: 50 }}/>
  </a>



export default App
