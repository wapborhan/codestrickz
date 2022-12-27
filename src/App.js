import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import axios from "axios";

import Header from "./component/Header";
import Main from "./component/Main";
import Footer from "./component/Footer";
import SingleContent from "./component/SingleContent";

import "./App.css";

export default class App extends Component {
  state = {
    basics: [],
    advance: [],
    es6: [],
    dom: [],
    daily: [],
    algods: [],
    // soft: [],
  };

  componentDidMount() {
    axios(
      "https://www.googleapis.com/blogger/v3/blogs/1491397990658765883/posts?maxResults=500&key=AIzaSyAzu62vFjimdTkVH4bsO0X8SCXq2lKkHkQ&clientid=200223325331-dber15e4juaus1uajuote4p0o0vfqv6a.apps.googleusercontent.com&clientsecret=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"
    ).then(({ data }) => this.setState({ basics: data.items }));
    // axios("https://jsonplaceholder.typicode.com/posts").then(({ data }) =>
    //   this.setState({ advance: data })
    // );
    // axios("https://jsonplaceholder.typicode.com/posts").then(({ data }) =>
    //   this.setState({ es6: data })
    // );
    // axios("https://jsonplaceholder.typicode.com/posts").then(({ data }) =>
    //   this.setState({ dom: data })
    // );
    // axios("https://jsonplaceholder.typicode.com/posts").then(({ data }) =>
    //   this.setState({ daily: data })
    // );
    // axios("https://jsonplaceholder.typicode.com/posts").then(({ data }) =>
    //   this.setState({ algods: data })
    // );
    // axios("https://jsonplaceholder.typicode.com/posts").then(({ data }) =>
    //   this.setState({ soft: data })
    // );
  }

  componentWillUnmount() {
    clearTimeout();
  }

  render() {
    console.log(this.state.basics);
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route exact path="/" render={() => <Main data={this.state} />} />
          <Route
            exact
            path="/:topic/:id"
            render={(props) => <SingleContent {...props} />}
          />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
