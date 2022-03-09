import React, { Component } from "react";
import { connect } from "react-redux";
import style from "./RowSeat.module.css";

class RowSeat extends Component {
  render() {
    let inforRow = this.props.inforRow;

    const renderSeat = (hang) => {
      return inforRow.danhSachGhe.map((item, index) => {
        if (hang === "") {
          return (
            <span className={`${style["number-seat"]}`} key={item.soGhe}>
              {index + 1}
            </span>
          );
        } else {
          let danhSachGheDangDat = this.props.danhSachGheDangDat;
          let indexGheDangDat = danhSachGheDangDat.find(
            (seat) => item.soGhe === seat.soGhe
          );
          return (
            <button
              className={`${style["seat"]} ${
                item.daDat === true ? style["seat--ordered"] : ""
              } btn ${
                indexGheDangDat != undefined ? style["seat--ordering"] : ""
              }`}
              key={item.soGhe}
              disabled={item.daDat}
              onClick={() => {
                this.props.themXoaGheDangDat(item);
              }}
            >
              {index + 1}
            </button>
          );
        }
      });
    };

    const renderRowSeat = () => {
      return (
        <div className={`${style["row-seat"]}`}>
          <span className={`${style["row-seat__name"]}`}>{inforRow.hang}</span>
          {renderSeat(inforRow.hang)}
        </div>
      );
    };

    return <React.Fragment>{renderRowSeat()}</React.Fragment>;
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    danhSachGheDangDat: rootReducer.seatReducer.danhSachGheDangDat,
  };
};

const mapReducerToProps = (dispatch) => {
  return {
    themXoaGheDangDat: (ghe) => {
      const action = {
        type: "THEM_XOA_GHE_DANG_DAT",
        ghe,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapReducerToProps)(RowSeat);
