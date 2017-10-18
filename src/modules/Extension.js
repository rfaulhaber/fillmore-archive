export const layouts = {
    root: 'root',
    formFill: 'form-fill',
    loadTemplate: 'load-template'
};

export function show(id) {
    console.log('attempting to show different layout');
    for (const value of Object.values(layouts)) {
        const node = document.getElementById(value);

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
    console.log('tags', tags);
    const rows = [];

    const fillable = [].concat(tags.inputs, tags.selects);
    console.log('fillable', fillable);
    const labels = tags.labels;

    for (const label of labels) {
        for (const input of fillable) {
            if (label.for === input.id) {
                input.label = label.innerText;
            }
        }
    }

    for (const tag of fillable) {
        switch(tag.tagName) {
        case 'input':
            rows.push([label(tag.label || tag.id), input(tag)]);
            break;
        case 'select':
            rows.push([label(tag.label || tag.id), select(tag)]);
            break;
        }
    }

    console.log('rows', rows);
    
    root.insertBefore(table(rows), document.getElementById('form-fill-save'));
}

function table(rows) {
    const table = document.createElement('table');
    const tableRows = rows.map(row => tableRow(tableDetail(row[0]), tableDetail(row[1])));

    for (const row of tableRows) {
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

function input(abstractNode) {
    const input = document.createElement('input');
    input.setAttribute('id', abstractNode.id);
    input.setAttribute('name', abstractNode.name)

    if (abstractNode.type === 'password') {
        input.type = 'text';
    } else {
        input.type = abstractNode.type;
    }

    return input;
}

function select(abstractNode) {
    const select = document.createElement('select');
    select.setAttribute('id', abstractNode.id);

    const options = abstractNode.options.map(o => option(o));

    for (const o of options) {
        select.options.add(o);
    }

    return select;
}

function option(abstractNode) {
    const option = document.createElement('option');
    option.setAttribute('id', abstractNode.id);

    option.innerText = abstractNode.value;

    return option;
}

function label(label) {
    const labelNode = document.createElement('label');

    // the generated label text and the ID the label is for are the same
    labelNode.setAttribute('for', label);
    labelNode.innerText = label;

    return labelNode;
}

function hide(element) {
    element.display = 'none';
}