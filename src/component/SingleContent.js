import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BarLoader } from "react-spinners";
import { Helmet } from "react-helmet";

import { createMarkup, toTop } from "../helper";

export default class SingleContent extends Component {
  state = {
    data: "",
    shouldUpdate: true,
  };

  componentWillMount() {
    const {
      props: {
        match: {
          params: { id },
        },
      },
    } = this;
    // Fetch On Blogspot.com
    axios(
      `https://www.googleapis.com/blogger/v3/blogs/1491397990658765883/posts/${id}?key=AIzaSyAzu62vFjimdTkVH4bsO0X8SCXq2lKkHkQ&clientid=200223325331-dber15e4juaus1uajuote4p0o0vfqv6a.apps.googleusercontent.com&clientsecret=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`
    ).then(({ data }) => this.setState({ data, shouldUpdate: false }));

    // Fetch on Hashnode
    // const fetchPostsByUsername = async (slug) => {
    //   const query = JSON.stringify({
    //     query: `{
    //       post(slug: "${slug}", hostname: "") {
    //         title
    //         brief
    //         coverImage
    //         author {
    //           name
    //           photo
    //         }
    //       }
    //     }`,
    //   });

    //   const response = await fetch("https://api.hashnode.com/", {
    //     method: "post",
    //     body: query,
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });

    //   const jsonResponse = await response.json();
    //   const data = jsonResponse.data.post;
    //   this.setState({ data, shouldUpdate: false });
    //   console.log(jsonResponse.data.post);
    //   // console.log(jsonResponse.data.user.publication.posts);
    // };

    // fetchPostsByUsername(slug);

    toTop();
  }

  shouldComponentUpdate() {
    const {
      state: { shouldUpdate },
    } = this;
    return shouldUpdate;
  }

  setLastRead = (id, topic, title) => {
    window.localStorage.setItem(
      "lastRead",
      // `${id}-${labels}-${title.replace("-", " ")}`
      `${id}-${topic}-${title}`
    );
  };

  render() {
    const {
      state: { data },
    } = this;

    if (!data)
      return (
        <div className="loading-bar">
          <BarLoader />
        </div>
      );

    const {
      props: {
        match: {
          params: { labels, id },
        },
      },
    } = this;

    const {
      state: {
        data: { title, content, author },
      },
    } = this;

    this.setLastRead(id, labels, title);
    const img = this.state.data.author.image.url;
    const tags = this.state.data.labels;
    return (
      <React.Fragment>
        <Helmet>
          <title>{title} - হাতেকলমে জাভাস্ক্রিপ্ট</title>
        </Helmet>
        <div className="btns">
          <Link to="/" className="btn btn-home">
            হোম
          </Link>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={`https://github.com/wapborhan/codestrickz/issues/new?title=${title}&labels=%E0%A6%B2%E0%A7%87%E0%A6%96%E0%A6%BE%E0%A7%9F%20%E0%A6%AD%E0%A7%81%E0%A6%B2&body=সমস্যা বিস্তারিতঃ `}
            className="btn btn-error"
          >
            ভুল পেয়েছেন?
          </a>
        </div>
        <div className="single-content">
          <h1 className="title" dangerouslySetInnerHTML={createMarkup(title)} />
          <p>
            {" "}
            <span style={{ color: "#f44336" }}> {tags} </span> বিভাগে, পোস্টটি
            করেছে - <img src={img} width="40px" alt="" />
            {author.displayName}
          </p>
          <div className="post">
            <br />

            <br />
            <span dangerouslySetInnerHTML={createMarkup(content)} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
