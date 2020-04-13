export default function updateBorderStyle(tag, value, side) {
    if (side === 'top') {
        tag.style.borderTopStyle = value
    }
    if (side === 'right') {
        tag.style.borderRightStyle = value
    }
    if (side === 'bottom') {
        tag.style.borderBottomStyle = value
    }
    if (side === 'left') {
        tag.style.borderLeftStyle = value
    }
}