import React from "react";

import "../styles.css";

import updateBorderStyle from "../../../functions/BorderUpdates/updateBorderStyle";
import updateBorderColor from "../../../functions/BorderUpdates/updateBorderColor";
import updateBorderSize from "../../../functions/BorderUpdates/updateBorderSize";
import updateBorderRadius from "../../../functions/BorderUpdates/updateBorderRadius";

export default function RightCustumizeSection({ stateRight, setStateRight }) {
  return (
    <div className="custumize-section">
      <p>Right</p>
      <div className="costumize-area">
        Style{" "}
        <select
          onChange={(event) => {
            setStateRight({ ...stateRight, style: event.target.value });
            updateBorderStyle(
              document.getElementById("main-box"),
              event.target.value,
              "right"
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
            setStateRight({ ...stateRight, color: event.target.value });
            updateBorderColor(
              document.getElementById("main-box"),
              event.target.value,
              "right"
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
            setStateRight({ ...stateRight, size: `${event.target.value}px` });
            updateBorderSize(
              document.getElementById("main-box"),
              event.target.value,
              "right"
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
          value={stateRight.radius}
          step="1"
          min="0"
          max="100"
          onChange={(event) => {
            setStateRight({ ...stateRight, radius: event.target.value });
            updateBorderRadius(
              document.getElementById("main-box"),
              event.target.value,
              "right"
            );
          }}
        />{" "}
        <span>{`${stateRight.radius}%`}</span>
      </div>
    </div>
  );
}
