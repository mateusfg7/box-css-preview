export default function updateBorderRadius(
  parameterTag,
  parameterValue,
  parameterSide
) {
  const tag = parameterTag;

  const methods = {
    top() {
      tag.style.borderTopLeftRadius = `${parameterValue}%`;
    },
    right() {
      tag.style.borderTopRightRadius = `${parameterValue}%`;
    },
    bottom() {
      tag.style.borderBottomRightRadius = `${parameterValue}%`;
    },
    left() {
      tag.style.borderBottomLeftRadius = `${parameterValue}%`;
    },
  };
  methods[parameterSide]();
}
