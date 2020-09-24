import React from "react"
import { Jumbotron } from "reactstrap"

export default function notfound() {
  return (
    <>
      <Jumbotron id="notfound">
        <h1 className="display-3">404 - Not found dumb dumb</h1>
        <p className="lead">
          You seem to have taken a wrong turn bucko, turn around and go back the
          way you came.
        </p>
        <hr className="my-2" />
      </Jumbotron>
    </>
  )
}
