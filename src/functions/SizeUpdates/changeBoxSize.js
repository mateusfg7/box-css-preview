export default function changeBoxSize(direction, boxSize, setBoxSize) {
  const mainBox = document.getElementById("main-box");

  const updateSize = {
    "height-plus": () => {
      const newHeight = boxSize.heigth + 1;
      mainBox.style.height = `${newHeight}px`;
      setBoxSize({ ...boxSize, heigth: newHeight });
    },
    "height-minus": () => {
      const newHeight = boxSize.heigth - 1;
      mainBox.style.height = `${newHeight}px`;
      setBoxSize({ ...boxSize, heigth: newHeight });
    },
    "width-plus": () => {
      const newWidth = boxSize.width + 1;
      mainBox.style.width = `${newWidth}px`;
      setBoxSize({ ...boxSize, width: newWidth });
    },
    "width-minus": () => {
      const newWidth = boxSize.width - 1;
      mainBox.style.width = `${newWidth}px`;
      setBoxSize({ ...boxSize, width: newWidth });
    },
  };
  updateSize[direction]();
}
