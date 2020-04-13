export default function updateBorderColor(tag, value, side) {
    const methods = {
        'top'() {tag.style.borderTopColor = value},
        'right'(){tag.style.borderRightColor = value},
        'bottom'(){tag.style.borderBottomColor = value},
        'left'(){tag.style.borderLeftColor = value},
    }
    methods[side]()
}