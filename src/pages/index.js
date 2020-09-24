import React from "react"
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
        <Showcase />
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
      </>
    )
  }
}

export default Home
