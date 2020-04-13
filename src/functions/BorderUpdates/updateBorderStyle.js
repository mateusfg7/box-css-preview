export default function updateBorderStyle(tag, value, side) {
    const methods = {
        'top'() {tag.style.borderTopStyle = value},
        'right'(){tag.style.borderRightStyle = value},
        'bottom'(){tag.style.borderBottomStyle = value},
        'left'(){tag.style.borderLeftStyle = value},
    }
    methods[side]()
}