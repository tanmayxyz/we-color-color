import React, { Component } from "react";
import "./Colorbox.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default class Colorbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false
    };
    this.handleCopy = this.handleCopy.bind(this);
  }
  handleCopy() {
    this.setState(
      {
        copied: true
      },
      () => {
        setTimeout(() => this.setState({ copied: false }), 1500);
      }
    );
  }
  render() {
    const { name, background } = this.props;
    const { copied } = this.state;
    return (
      <CopyToClipboard text={background} onCopy={this.handleCopy}>
        <div style={{ background: background }} className="colorbox">
          <div
            style={{ background: background }}
            className={`copy-overlay ${copied && "show"}`}
          ></div>
          <div className={`copy-msg ${copied && "show"}`}>
            <h1>Copied</h1>
            <p>{this.props.background}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span>{name}</span>
            </div>
            <button className="copy-button">copy</button>
          </div>
          <span className="see-more">more</span>
        </div>
      </CopyToClipboard>
    );
  }
}
