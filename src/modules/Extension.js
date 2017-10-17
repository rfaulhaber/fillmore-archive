export const layouts = {
    root: 'root',
    formFill: 'form-fill',
    loadTemplate: 'load-template'
};

export function show(id) {
    console.log('attempting to show different layout');
    for (const value of Object.values(layouts)) {
        const node = document.getElementById(value);

        if (node === null) {
            console.log('value: ', value, 'is null');
        }

        if (value === id) {
            document.getElementById(value).style.display = 'initial';
        } else {
            document.getElementById(value).style.display = 'none';
        }
    }
}

export function buildFormFill(tags) {
    const root = document.getElementById(layouts.formFill);
    console.log('root', root);
    const rows = [];
    for (const input of tags.inputs) {
        console.log('input', input);
        const labelNode = document.createElement('label');
        const inputNode = document.createElement('input');

        const inputLabel = input.id;
        inputNode.setAttribute('id', input.id);

        labelNode.innerText = inputLabel;

        labelNode.setAttribute('for', inputLabel);

        console.log('input type', input.type);

        if (input.type === 'password') {
            inputNode.type = 'text';
        } else {
            inputNode.type = input.type;
        }

        rows.push([labelNode, inputNode]);
    }
    
    root.insertBefore(buildTable(rows), document.getElementById('form-fill-save'));
}

function buildTable(rows) {
    const table = document.createElement('table');
    const tableRows = rows.map(row => buildRow(buildDetail(row[0]), buildDetail(row[1])));

    for (const row of tableRows) {
        table.appendChild(row);
    }

    return table;
}

function buildRow(left, right) {
    const tr = document.createElement('tr');
    tr.appendChild(left);
    tr.appendChild(right);

    return tr;
}

function buildDetail(content) {
    const td = document.createElement('td');
    td.appendChild(content);

    return td;
}

function buildInput(inputNode, input) {

}

function buildSelect(selectNode, select) {

}

function buildLabel(labelNode, label) {

}

function buildDiv(divNode, div) {

}

function hide(element) {
    element.display = 'none';
}