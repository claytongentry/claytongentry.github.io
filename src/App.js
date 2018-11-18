import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const APP_BLACK = "#47525E"
const APP_WHITE = "#F7F7F7"

class App extends Component {
  render() {
    return (
      <div className="App container-fluid" style={{ padding: 0 }}>
        <Section noHeader={true}>
          <Row>
            <div className="col-md-12 d-flex" style={{ backgroundColor: APP_WHITE, display: "flex", justifyContent: "center", alignItems: "center" }}>
              <img src="/assets/images/clayton.png" height={300} />
            </div>
          </Row>
        </Section>



        <Poll />

        <Section className="row" title="I vibe with open-source.">
          <div className="row" style={{ marginLeft: "auto", marginRight: "auto" }}>
            <div className="d-none d-md-block col-md-5 d-md-flex" style={{
                backgroundColor: APP_BLACK,
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
              <img src="/assets/images/github_logo.png" />
            </div>
            <div className="col-md-7" style={{ display: "flex", flexDirection: "column", padding: 0 }}>
              <Card
                color="#f3ec80"
                title="Furlex"
                description={"Furlex is a structured data extraction tool written in Elixir. It supports unfurling oEmbed, Twitter Card, Facebook Open Graph, JSON-LD and plain ole HTML <meta /> data out of any url you supply."}
                action={<ActionButton color="#f3ec80" href="https://github.com/claytongentry/furlex" value="Open Project" />}
              />
              <Card
                color="#80d8f3"
                title="Spitbot"
                description={
                  <p>Spitbot's a command-line robot that learns to rap using input you supply. I built it with my buddy <a href="http://github.com/ncmatson">Cameron Matson</a>. It's not a doctoral thesis in artificial intelligence, but I still think it's neat.</p>
                }
                action={<ActionButton color="#80d8f3" href="https://github.com/claytongentry/spitbot" value="Open Project" />}
              />
            </div>
          </div>


        </Section>
        <Section title="I prefer startups">
          <Row>
            <Rail>
              <img src="https://fsmedia.imgix.net/assets/about/header.png?dpr=2&auto=format%2Ccompress&w=160" />
            </Rail>
            <Stream>
              <Card
                color="#f6c200"
                title="Inverse"
                description="Inverse is a media and entertainment company dedicated to sparking curiosity about the future."
              />
            </Stream>
          </Row>

          <Row>
            <Rail>
              <h1>Thimble</h1>
            </Rail>
            <Stream>
              <Card
                color="#f7f7f7"
                title="Thimble"
                description="In college, alongside five good friends, I built a platform to streamline interaction between independent fashion designers and boutique owners. The company did not survive. The friendships did."
              />
            </Stream>
          </Row>



        </Section>
        <Section title="I'm learned">
          <Row>
            <Rail>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Northwestern_Wildcats_logo.svg/1200px-Northwestern_Wildcats_logo.svg.png" height={175} />
            </Rail>
            <Stream>
              <Card
                color={APP_WHITE}
                textColor="#59118e"
                title="Northwestern '17"
              >
                <ul style={{ color: "#59118e", fontFamily: "Oswald", fontWeight: 900, textAlign: "left"}}>
                  <li><p>Degree: B.S. in Journalism from Medill, minor in English Literature</p></li>
                  <li><p>{"GPA: Good. Don't remember exactly. 3.8-something."}</p></li>
                  <li><p>Attendance at <a href="https://www.youtube.com/watch?v=-ozKBuXRGAk" target="_blank">{"College GameDay, Oct. 5, 2013"}</a>: True.</p></li>
                </ul>
              </Card>
            </Stream>

          </Row>

        </Section>
        <Section title="I'm easy to contact.">
          <Row>
            <div class="col-md-3 d-flex" style={{ backgroundColor: "#0077B5"}}>

            </div>
            <div class="col-md-3 d-flex" style={{ backgroundColor: APP_WHITE }}>

            </div>
            <div class="col-md-3 d-flex" style={{ backgroundColor: "#BC32A8"}}>

            </div>
            <div class="col-md-3 d-flex" style={{ backgroundColor: APP_BLACK }}>

            </div>
          </Row>

        </Section>
        <div width="100%" style={{ backgroundColor: APP_BLACK, height: 50 }} />
      </div>
    );
  }
}

class Poll extends Component {

  render() {
    return (
      <div class="row" style={{ marginLeft: "auto", marginRight: "auto" }}>
        <div className="col-md-6" style={{ alignItems: "center", backgroundColor: "#EF464B", display: "flex", justifyContent: "center", minHeight: 300, padding: 50 }}>
          <h1 style={{ color: "white", fontFamily: "Oswald", fontWeight: 900 }}>
            “How much better is silence; the coffee cup, the table. How much better to sit by myself like the solitary sea-bird that opens its wings on the stake. Let me sit here for ever with bare things, this coffee cup, this knife, this fork, things in themselves, myself being myself.”
          </h1>
        </div>
        <div className="col-md-6" style={{ alignItems: "center", backgroundColor: APP_WHITE, display: "flex", justifyContent: "center", minHeight: 300, padding: 50 }}>
          <h1 style={{ color: APP_BLACK, fontFamily: "Oswald", fontWeight: 900 }}>{"-V Woolfe"}</h1>
        </div>
      </div>
    )
  }
}

const btnStyle = {
  backgroundColor: APP_BLACK,
  borderRadius: 10,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: 50,
  marginRight: "auto",
  marginTop: 10,
  width: 250,
  marginLeft: "auto",
  boxShadow: "2px 2px 3px #333"
}

const ActionButton = props =>
  <a href={props.href} target="_blank">
    <div style={btnStyle}>
      <p style={{ color: props.color, fontFamily: "Oswald" }}>{props.value}</p>
    </div>
  </a>



class Section extends Component {

  render() {
    return (
      <div style={{ backgroundColor: APP_BLACK, textAlign: "center" }}>
        {this.props.noHeader ? null : <SectionHeader value={this.props.title} />}
        {this.props.children}
      </div>
    )
  }
}

const SectionHeader = props =>
  <div style={{ padding: 20 }}>
    <h2 style={{ color: APP_WHITE, fontFamily: "Oswald", fontWeight: 900 }}>
      {props.value}
    </h2>
  </div>


const cardStyle = {
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  justifyContent: "center",
  margin: 0,
  padding: 40, paddingLeft: 60, paddingRight: 60
}

const Row = props =>
  <div className="row" style={{ marginLeft: "auto", marginRight: "auto"}}>
    {props.children}
  </div>

const Rail = props =>
  <div className="d-none d-md-block col-md-5 d-md-flex" style={{
      backgroundColor: APP_BLACK,
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
  }}>{props.children}</div>

const Stream = props =>
  <div className="col-md-7" style={{ display: "flex", flexDirection: "column", padding: 0 }}>
    {props.children}
  </div>

class Card extends Component {

  render() {
    const color = this.props.textColor || APP_BLACK

    return (
      <div style={{...cardStyle, backgroundColor: this.props.color }} className="card">
        <h1 style={{ color, fontFamily: "Oswald", fontWeight: 900 }}>{this.props.title}</h1>
        <p style={{
          color,
          fontFamily: "Oswald", fontWeight: 900
          }}>{this.props.description}</p>
        {this.props.action}
        {this.props.children}
      </div>
    )
  }
}

export default App;
