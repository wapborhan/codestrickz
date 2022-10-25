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
    axios(
      `https://www.googleapis.com/blogger/v3/blogs/1491397990658765883/posts/${id}?key=AIzaSyAzu62vFjimdTkVH4bsO0X8SCXq2lKkHkQ&clientid=200223325331-dber15e4juaus1uajuote4p0o0vfqv6a.apps.googleusercontent.com&clientsecret=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`
    ).then(({ data }) => this.setState({ data, shouldUpdate: false }));
    toTop();
  }

  shouldComponentUpdate() {
    const {
      state: { shouldUpdate },
    } = this;
    return shouldUpdate;
  }

  setLastRead = (id, labels, title) => {
    window.localStorage.setItem(
      "lastRead",
      // `${id}-${labels}-${title.replace("-", " ")}`
      `${id}-${labels}-${title}`
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
    // console.log(this.state.data.labels);
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
            <span style={{ color: "#f44336" }}>{tags}</span> বিভাগে, পোস্টটি
            করেছে - <img src={img} alt="" /> {author.displayName}
          </p>
          <div className="post">
            <br />

            <span dangerouslySetInnerHTML={createMarkup(content)} />
            {/* <p>
              আমার এই লেখা পূর্বে{" "}
              <a rel="noopener noreferrer" target="_blank" href={`${link}`}>
                আমার ব্লগে
              </a>{" "}
              প্রকাশিত হয়েছে। চাইলে{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://with.zonayed.me/bn"
              >
                আমার ব্লগ
              </a>{" "}
              থেকে ঘুরে আসতে পারেন। ব্লগ থেকে{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://with.zonayed.me/bn/%E0%A6%B8%E0%A6%BE%E0%A6%AC%E0%A6%B8%E0%A7%8D%E0%A6%95%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%87%E0%A6%AC-%E0%A6%95%E0%A6%B0%E0%A7%81%E0%A6%A8/"
              >
                সাবস্ক্রাইব
              </a>{" "}
              করলে আমি নিজে থেকেই আমার নতুন লেখাগুলো আপনার ইমেইলে প্রতি শুক্রবার
              সকালে পাঠিয়ে দিবো। ভালো থাকবেন। হ্যাপী প্রোগ্রামিং!
            </p> */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
