import React, { PureComponent } from "react";

import logo from "../logo.png";

export default class Footer extends PureComponent {
  render() {
    return (
      <header className="logo-area">
        <img src={logo} alt="Practical JavaScript" />
        <h3>Codes TrickZ</h3>
        <p>প্রোগ্রামিং শিখুন সম্পূর্ণ বাংলায়</p>
      </header>
    );
  }
}
