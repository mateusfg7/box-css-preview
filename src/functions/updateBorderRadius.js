export default function updateBorderRadius(tag, value, side) {
    if (side === 'top') {
        tag.style.borderTopLeftRadius = value + 'px'
    }
    if (side === 'right') {
        tag.style.borderTopRightRadius = value + 'px'
    }
    if (side === 'bottom') {
        tag.style.borderBottomRightRadius = value + 'px'
    }
    if (side === 'left') {
        tag.style.borderBottomLeftRadius = value + 'px'
    }
}