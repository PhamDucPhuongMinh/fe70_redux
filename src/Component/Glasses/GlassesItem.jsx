import React, { Component } from "react";
import { connect } from "react-redux";

class GlassesItem extends Component {
  render() {
    return (
      <div
        style={{
          width: "20%",
          backgroundColor: "#fff",
          border: "1px solid #000",
          marginTop: "20px",
          cursor: "pointer",
        }}
        onClick={() => {
          this.props.thayKinhDangThu(this.props.item);
        }}
      >
        <img src={this.props.item.url} width={"70%"} />
      </div>
    );
  }
}

const mapReducerToProps = (dispatch) => {
  return {
    thayKinhDangThu: (item) => {
      const action = {
        type: "THAY_KINH_DANG_THU",
        item,
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapReducerToProps)(GlassesItem);
