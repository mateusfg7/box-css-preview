export default function updateBorderRadius(tag, value, side) {
    const methods = {
        'top'() {tag.style.borderTopLeftRadius = value + '%'},
        'right'(){tag.style.borderTopRightRadius = value + '%'},
        'bottom'(){tag.style.borderBottomRightRadius = value + '%'},
        'left'(){tag.style.borderBottomLeftRadius = value + '%'},
    }
    methods[side]()
}