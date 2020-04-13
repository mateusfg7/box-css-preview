export default function updateBorderSize(tag, value, side) {
    const methods = {
        'top'() {tag.style.borderTopWidth = value + 'px'},
        'right'(){tag.style.borderRightWidth = value + 'px'},
        'bottom'(){tag.style.borderBottomWidth = value + 'px'},
        'left'(){tag.style.borderLeftWidth = value + 'px'},
    }
    methods[side]()
}