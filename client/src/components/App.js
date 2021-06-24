import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import SharedButton from "./button/SharedButton";
import ListItem from "./listItem/ListItem";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/index.js";
import Header from "../components/header/Header";
import "../../scss/_custom.scss";
import Headline from "./headline/Headline";

const tempArr = [{
  fName: 'Joe',
  lName: 'Bloggs',
  email: 'joebloggs@gmail.com',
  age: 24,
  onlineStatus: true
}]

class App extends Component {

  constructor(props) {
    super(props);
    this.fetch = this.fetch.bind(this);
  }
  
  fetch() {
    this.props.fetchPosts();
  }
  render() {
    const { posts } = this.props;

    const configButton = {
      buttonText: 'Get Posts',
      emitEvent: this.fetch
    }
    return (
      <div>
        <Header />
        <section className="main">
          <Headline header="Posts" desc="Click the button to render posts!" tempArr={tempArr} />
          <SharedButton {...configButton} />
          {posts.length > 0 &&
            <div>
              {posts.map((post, index) => {
                const {title, body} = post;
                const configListItem = {
                  title,
                  desc: body
                }
                return (
                  <ListItem key={index} {...configListItem} />
                )
              })}
            </div>
          }
        </section>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, { fetchPosts })(App);