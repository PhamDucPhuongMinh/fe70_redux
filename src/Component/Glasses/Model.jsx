import React, { Component } from "react";
import { connect } from "react-redux";
import style from "./Model.module.css";

class Model extends Component {
  render() {
    return (
      <div className="container-model position-relative">
        <img className={style["model"]} src="./image/model.jpg" />
        {this.props.kinhDangThu.url === "" ? (
          <></>
        ) : (
          <img
            className={style["model-glasses"]}
            src={this.props.kinhDangThu.url}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    kinhDangThu: rootReducer.glassesReducer.kinhDangThu,
  };
};

export default connect(mapStateToProps)(Model);
