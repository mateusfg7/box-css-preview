export default function updateBorderRadius(tag, value, side) {
    if (side === 'top') {
        tag.style.borderTopLeftRadius = value + '%'
    }
    if (side === 'right') {
        tag.style.borderTopRightRadius = value + '%'
    }
    if (side === 'bottom') {
        tag.style.borderBottomRightRadius = value + '%'
    }
    if (side === 'left') {
        tag.style.borderBottomLeftRadius = value + '%'
    }
}