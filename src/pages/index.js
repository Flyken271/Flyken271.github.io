import React from "react"
import { Row, Col } from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "./global.css"
import axios from "axios"
import Navbar from "./Navbar"
import Showcase from "./Showcase"
import Ghrepo from "./Ghrepo"

class Home extends React.Component {
  state = {
    repos: [],
  }

  componentDidMount = async () => {
    try {
      let response = await axios.get(
        "https://api.github.com/users/Flyken271/repos"
      )
      this.setState({ repos: response.data })
    } catch (er) {
      console.log("Error: ", er)
    }
  }

  render() {
    return (
      <>
        <Navbar />
        <Showcase
          title="About me: "
          content="My name is Jared Collins, I've been programming since I was twelve
          when my father introduced me into Visual Basic and Visual Studio. I've
          ventured into many different domains including networking, building
          computers, web development, game development and desktop development,
          from this history of programming I've honed my skill into being a Full
          stack web developer."
        />
        <div className="container">
          <div className="row">
            {this.state.repos.map((repo, index) => {
              return (
                <Ghrepo
                  key={index}
                  title={repo.name}
                  subtitle={repo.owner.login}
                  content={repo.description}
                  link={repo.html_url}
                />
              )
            })}
          </div>
        </div>
        <Row>
          <Col>
            <Showcase
              title="Tool Belt: "
              content="My toolbelt is filled with different technologies including but not limited to Node.JS, Strapi, CSS, HTML, JSON, React, Next.JS, Gatsby, Lua, JavaScript, Java, C#, C++ and C."
            />
          </Col>
          <Col>
            <img
              id="showcaseCode"
              alt="code"
              src="https://specials-images.forbesimg.com/imageserve/5f302109ffad89f9130e07db/960x0.jpg"
              width="600"
              height="300"
            ></img>
          </Col>
          <Col>
            <img
              id="showcaseImage"
              alt="server"
              src="https://www.serversuperstore.com/pub/media/catalog/product/cache/image/650x650/1d588632cf35348847454ff993d7ec54/r/7/r720_-_inside_1.jpg"
              width="520"
              height="400"
            ></img>
          </Col>
          <Col id="secondCol">
            <Showcase
              title="Background: "
              content="Some of my background spans from dedicated hardware to software development. I used to own, maintain and manage my own Dell R720 2U Rack-mount server for quite awhile, I ran ESXi on it with a main VM running Ubuntu Server, which then ran Apache 2 hosting my various websites. My web development really blossomed from there and consistantly grew then on."
            />
          </Col>
        </Row>
      </>
    )
  }
}

export default Home
