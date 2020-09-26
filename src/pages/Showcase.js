import React from "react"
import { Jumbotron, Container } from "reactstrap"

const Showcase = props => {
  return (
    <Jumbotron id="aboutme" fluid>
      <Container fluid>
        <h1 className="display-3">{props.title}</h1>
        <p className="lead">{props.content}</p>
      </Container>
    </Jumbotron>
  )
}

export default Showcase
