import React from "react"
import { Jumbotron, Container } from "reactstrap"

const Showcase = props => {
  return (
    <Jumbotron id="aboutme" fluid>
      <Container fluid>
        <h1 className="display-3">About Me: </h1>
        <p className="lead">
          My name is Jared Collins, I've been programming since I was twelve
          when my father introduced me into Visual Basic and Visual Studio. I've
          ventured into many different domains including networking, building
          computers, web development, game development and desktop development,
          from this history of programming I've honed my skill into being a Full
          stack web developer.
        </p>
      </Container>
    </Jumbotron>
  )
}

export default Showcase
