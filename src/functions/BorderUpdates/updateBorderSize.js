export default function updateBorderSize(
  parameterTag,
  parameterValue,
  parameterSide
) {
  const tag = parameterTag;

  const methods = {
    top() {
      tag.style.borderTopWidth = `${parameterValue}px`;
    },
    right() {
      tag.style.borderRightWidth = `${parameterValue}px`;
    },
    bottom() {
      tag.style.borderBottomWidth = `${parameterValue}px`;
    },
    left() {
      tag.style.borderLeftWidth = `${parameterValue}px`;
    },
  };
  methods[parameterSide]();
}
