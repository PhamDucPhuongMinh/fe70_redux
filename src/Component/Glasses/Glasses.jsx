import React, { Component } from "react";
import GlassesList from "./GlassesList";
import Model from "./Model";

export default class Glasses extends Component {
  render() {
    return (
      <div
        className="container-fluid"
        style={{
          backgroundColor: "lightpink",
          width: "100vw",
          height: "100vh",
        }}
      >
        <h1 className="text-white text-uppercase pt-4">Thử Mắt Kính Online</h1>
        <Model />
        <GlassesList />
      </div>
    );
  }
}
