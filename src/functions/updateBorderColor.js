export default function updateBorderColor(tag, value, side) {
    if (side === 'top') {
        tag.style.borderTopColor = value
    }
    if (side === 'right') {
        tag.style.borderRightColor = value
    }
    if (side === 'bottom') {
        tag.style.borderBottomColor = value
    }
    if (side === 'left') {
        tag.style.borderLeftColor = value
    }
}