import React, { Component } from "react";
import { connect } from "react-redux";
import style from "./TableTicket.module.css";

class TableTicket extends Component {
  render() {
    let totalPrice = 0;
    const renderTicket = () => {
      return this.props.danhSachGheDangDat.map((item) => {
        totalPrice += item.gia;
        return (
          <tr key={item.soGhe}>
            <td className={`${style["text-yellow"]}`}>{item.soGhe}</td>
            <td className={`${style["text-yellow"]}`}>{item.gia}</td>
            <td>
              <button
                className="btn btn-danger"
                onClick={() => {
                  this.props.xoaGheDangDat(item.soGhe);
                }}
              >
                Hủy
              </button>
            </td>
          </tr>
        );
      });
    };

    const renderTotalPrice = () => {
      return (
        <tr>
          <td className={`${style["text-yellow"]}`}>Tổng giá vé</td>
          <td className={`${style["text-yellow"]}`}>{totalPrice}</td>
          <td></td>
        </tr>
      );
    };
    return (
      <React.Fragment>
        <h4 className="text-white text-uppercase">Danh sách ghế bạn chọn</h4>
        <div className={`${style["color-seat"]}`}>
          <div className={`${style["seat"]} ${style["seat-orange"]}`}>
            Ghế đã đặt
          </div>
          <div className={`${style["seat"]} ${style["seat-green"]}`}>
            Ghế đang đặt
          </div>
          <div className={`${style["seat"]} ${style["seat-white"]}`}>
            Ghế chưa đặt
          </div>
        </div>
        <div className={style["table-ticket"]}>
          <table className="table table-bordered mt-4 position-relative">
            <thead>
              <tr>
                <th className="text-white">Số ghế</th>
                <th className="text-white">Giá</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {renderTicket()}
              {renderTotalPrice()}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    danhSachGheDangDat: rootReducer.seatReducer.danhSachGheDangDat,
  };
};

const mapReducerToProps = (dispatch) => {
  return {
    xoaGheDangDat: (soGhe) => {
      const action = {
        type: "XOA_GHE_DANG_DAT",
        soGhe,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapReducerToProps)(TableTicket);
