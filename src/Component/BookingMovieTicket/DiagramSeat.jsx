import React, { Component } from "react";
import { connect } from "react-redux";
import RowSeat from "./RowSeat";

class DiagramSeat extends Component {
  render() {
    const renderDiagramSeat = () => {
      return this.props.arrSeat.map((item, index) => {
        return <RowSeat key={index} inforRow={item} />;
      });
    };
    return <div>{renderDiagramSeat()}</div>;
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    arrSeat: rootReducer.seatReducer.seat,
  };
};

export default connect(mapStateToProps)(DiagramSeat);
