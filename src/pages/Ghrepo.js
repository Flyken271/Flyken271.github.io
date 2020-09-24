import React from "react"
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap"

const Ghrepo = props => {
  return (
    <Card id="repocard">
      <CardBody>
        <CardTitle id="repocardtitle">{props.title}</CardTitle>
        <CardSubtitle id="repoowner">{props.subtitle}</CardSubtitle>
        <CardText>{props.content}</CardText>
        <Button href={props.link}>Visit</Button>
      </CardBody>
    </Card>
  )
}

export default Ghrepo
