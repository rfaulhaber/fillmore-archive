export const layouts = {
    root: 'root',
    formFill: 'form-fill',
    loadTemplate: 'load-template',
    saveTemplate: 'save-template'
};

export function show(id) {
    console.log('attempting to show different layout');
    for (const value of Object.values(layouts)) {
        if (value === id) {
            document.getElementById(value).style.display = 'initial';
        } else {
            document.getElementById(value).style.display = 'none';
        }
    }
}

export function buildFormFill(inputs) {
    const root = document.getElementById(layouts.formFill);
    console.log('root', root);
    for (const input of inputs) {
        console.log('input', input);
        const labelNode = document.createElement('label');
        labelNode.innerText = input.id || input.name;

        const inputNode = document.createElement('input');
        inputNode.type = input.type;

        labelNode.appendChild(inputNode);

        root.insertBefore(labelNode, document.getElementById('form-fill-save'));
    }
}

function hide(element) {
    element.display = 'none';
}