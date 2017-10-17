export default function abstractElement(element) {
    const abstract = {};

    if (element.tagName.toLowerCase() === 'select') {
        abstract.options = [];

        for (const option of element.options) {
            abstract.options.push(abstractElement(option));
        }
    }

    const attributes = reduceAttributes(element);
    return Object.assign({}, abstract, attributes, {tagName: element.tagName.toLowerCase(), value: element.value});
}

function reduceAttributes(element) {
    return element.getAttributeNames().reduce((object, item) => 
        Object.assign({}, object, {[item]: element.getAttribute(item)}), {});
}