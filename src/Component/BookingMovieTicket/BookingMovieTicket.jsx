import React, { Component } from "react";
import style from "./BookingMovieTicket.module.css";
import DiagramSeat from "./DiagramSeat";
import TableTicket from "./TableTicket";

export default class BookingMovieTicket extends Component {
  render() {
    return (
      <div className={`${style["font-movie"]} ${style["container-booking"]}`}>
        <div className={`${style["container-content"]} text-white`}>
          <div className="row">
            <div className="col-7">
              <h1 className={`${style["title-cinema"]}`}>
                Đặt vé xem phim MiChu Cinema
              </h1>
              <div className={`${style["screen"]}`}>Màn hình</div>
              <DiagramSeat />
            </div>
            <div className="col-5">
              <TableTicket />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
