export default function updateBorderColor(
  parameterTag,
  parameterValue,
  parameterSide
) {
  const tag = parameterTag;

  const methods = {
    top() {
      tag.style.borderTopColor = parameterValue;
    },
    right() {
      tag.style.borderRightColor = parameterValue;
    },
    bottom() {
      tag.style.borderBottomColor = parameterValue;
    },
    left() {
      tag.style.borderLeftColor = parameterValue;
    },
  };
  methods[parameterSide]();
}
