export default function updateBorderStyle(
  parameterTag,
  parameterValue,
  parameterSide
) {
  const tag = parameterTag;

  const methods = {
    top() {
      tag.style.borderTopStyle = parameterValue;
    },
    right() {
      tag.style.borderRightStyle = parameterValue;
    },
    bottom() {
      tag.style.borderBottomStyle = parameterValue;
    },
    left() {
      tag.style.borderLeftStyle = parameterValue;
    },
  };
  methods[parameterSide]();
}
