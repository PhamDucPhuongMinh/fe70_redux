import React, { Component } from "react";
import { connect } from "react-redux";
import GlassesItem from "./GlassesItem";

class GlassesList extends Component {
  render() {
    let arrGlasses = [
      {
        id: -1,
        price: 0,
        name: "",
        url: "",
        desc: "",
      },
    ];
    arrGlasses = [...arrGlasses, ...this.props.arrGlasses];

    const renderGlassesItem = () => {
      return arrGlasses.map((item, index) => {
        return <GlassesItem item={item} key={index} />;
      });
    };
    return <div className="d-flex flex-wrap">{renderGlassesItem()}</div>;
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    arrGlasses: rootReducer.glassesReducer.arrGlasses,
  };
};

export default connect(mapStateToProps)(GlassesList);
