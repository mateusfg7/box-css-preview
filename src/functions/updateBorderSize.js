export default function updateBorderSize(tag, value, side) {
    if (side === 'top') {
        tag.style.borderTopWidth = value + 'px'
    }
    if (side === 'right') {
        tag.style.borderRightWidth = value + 'px'
    }
    if (side === 'bottom') {
        tag.style.borderBottomWidth = value + 'px'
    }
    if (side === 'left') {
        tag.style.borderLeftWidth = value + 'px'
    }
}