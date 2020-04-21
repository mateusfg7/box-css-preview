import React from "react";

import "../styles.css";

import updateBorderStyle from "../../../functions/BorderUpdates/updateBorderStyle";
import updateBorderColor from "../../../functions/BorderUpdates/updateBorderColor";
import updateBorderSize from "../../../functions/BorderUpdates/updateBorderSize";
import updateBorderRadius from "../../../functions/BorderUpdates/updateBorderRadius";

export default function TopCustumizeSection({ stateTop, setStateTop }) {
  return (
    <div className="custumize-section">
      <p>Top</p>
      <div className="costumize-area">
        Style{" "}
        <select
          onChange={(event) => {
            setStateTop({ ...stateTop, style: event.target.value });
            updateBorderStyle(
              document.getElementById("main-box"),
              event.target.value,
              "top"
            );
          }}
        >
          <option value="solid" selected>
            solid
          </option>
          <option value="dashed">dashed</option>
          <option value="double">double</option>
          <option value="dotted">dotted</option>
          <option value="groove">groove</option>
          <option value="ridge">ridge</option>
          <option value="inset">inset</option>
          <option value="outset">outset</option>
          <option value="hidden">hidden</option>
        </select>
      </div>
      <br />
      <div className="costumize-area">
        Color{" "}
        <input
          name="color"
          type="color"
          onChange={(event) => {
            setStateTop({ ...stateTop, color: event.target.value });
            updateBorderColor(
              document.getElementById("main-box"),
              event.target.value,
              "top"
            );
          }}
        />
      </div>
      <br />
      <div className="costumize-area">
        Size{" "}
        <input
          name="size"
          type="number"
          onChange={(event) => {
            setStateTop({ ...stateTop, size: `${event.target.value}px` });
            updateBorderSize(
              document.getElementById("main-box"),
              event.target.value,
              "top"
            );
          }}
        />
      </div>
      <br />
      <div className="costumize-area">
        Radius{" "}
        <input
          name="radius"
          type="range"
          value={stateTop.radius}
          step="1"
          min="0"
          max="100"
          onChange={(event) => {
            setStateTop({ ...stateTop, radius: event.target.value });
            updateBorderRadius(
              document.getElementById("main-box"),
              event.target.value,
              "top"
            );
          }}
        />
        <span>{`${stateTop.radius}%`}</span>
      </div>
    </div>
  );
}
