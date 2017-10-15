export default function abstractElement(element) {
    const attributes = reduceAttributes(element);

    return Object.assign({}, attributes, {type: element.tagName.toLowerCase(), value: element.value});
}

function reduceAttributes(element) {
    return element.getAttributeNames().reduce((object, item) => 
        Object.assign({}, object, {[item]: element.getAttribute(item)}), {});
}