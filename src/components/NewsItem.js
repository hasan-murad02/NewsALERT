import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsURL } = this.props;
    return (
      <div className="card my-3" style={{ width: "18rem" }}>
        <img src={imageUrl?imageUrl:"https://assets1.cbsnewsstatic.com/hub/i/r/2023/05/10/9c5ccd58-079c-4b7b-9db9-9118b8bb3368/thumbnail/1200x630/b6fca31638b443f9b66f28f5c4bafd5c/gettyimages-1237735281.jpg?v=532947bbe7449b367b963713a282edbc"} className="card-img-top" alt="..." style={{maxHeight: '150px'}}/>
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <a rel="noreferrer" href={newsURL} target="_blank" className="btn btn-sm btn-primary">
            Read More
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
