import React, { PureComponent } from "react";

export default class Footer extends PureComponent {
  render() {
    return (
      <footer>
        <ul className="github">
          <li>
            <a
              className="github-button"
              href="https://github.com/zonayedpca/js.zonayed.me"
              data-icon="octicon-star"
              aria-label="Star zonayedpca/js.zonayed.me on GitHub"
            >
              Star
            </a>
          </li>
          <li>
            <a
              className="github-button"
              href="https://github.com/zonayedpca/js.zonayed.me/issues"
              data-icon="octicon-issue-opened"
              aria-label="Issue ntkme/github-buttons on GitHub"
            >
              Issue
            </a>
          </li>
          <li>
            <a
              className="github-button"
              href="https://github.com/zonayedpca"
              aria-label="Follow @zonayedpca on GitHub"
            >
              Follow Me
            </a>
          </li>
        </ul>
        <ul>
          <li>
            With <span className="love">❤</span> By{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.wapborhan.com"
            >
              Borhan Udiin
            </a>
          </li>
          <li>
            <a
              className="copy"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.srdreamlab.com"
            >
              SR Dream Lab
            </a>
          </li>
        </ul>
      </footer>
    );
  }
}
