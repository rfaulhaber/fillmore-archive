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

    for (const tag of [].concat(tags.inputs, tags.selects)) {
        switch(tag.tagName) {
            case 'input':
                rows.push([label(tag.id), input(tag)]);
                break;
            case 'select':
                break;
        }
    }

    console.log('rows', rows);
    
    root.insertBefore(table(rows), document.getElementById('form-fill-save'));
}

function table(rows) {
    const table = document.createElement('table');
    const tablerows = rows.map(row => tableRow(tableDetail(row[0]), tableDetail(row[1])));

    for (const row of tablerows) {
        table.appendChild(row);
    }

    return table;
}

function tableRow(left, right) {
    const tr = document.createElement('tr');
    tr.appendChild(left);
    tr.appendChild(right);

    return tr;
}

function tableDetail(content) {
    const td = document.createElement('td');
    td.appendChild(content);

    return td;
}

function input(node) {
    const input = document.createElement('input');
    input.setAttribute('id', node.id);

    if (node.type === 'password') {
        input.type = 'text';
    } else {
        input.type = node.type;
    }

    return input;
}

function select(selectNode, select) {

}

function label(label) {
    const labelNode = document.createElement('label');

    // the generated label text and the ID the label is for are the same
    labelNode.setAttribute('for', label);
    labelNode.innerText = label;

    return labelNode;
}

function div(divNode, div) {

}

function hide(element) {
    element.display = 'none';
}