export default function abstractElement(element) {
    const abstract = {};
    const tagName = element.tagName.toLowerCase();

    console.log('abstractElement');

    if (tagName === 'select') {
        abstract.options = [];

        // we can't map because they're not a true array!
        for (const option of element.options) {
            abstract.options.push(abstractElement(option));
        }
    }

    const attributes = reduceAttributes(element);
    return Object.assign({}, abstract, attributes, {
        tagName,
        value: element.value,
        innerText: element.innerText
    });
}

function reduceAttributes(element) {
    return element.getAttributeNames().reduce((object, item) =>
        Object.assign({}, object, {
            [item]: element.getAttribute(item)
        }), {});
}