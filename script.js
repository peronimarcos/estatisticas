class Campo {
    constructor(valor, quantidade) {
        this.valor = valor;
        this.quantidade = quantidade;
    }
}

let lista = [
    new Campo(7, 3),
    new Campo(8, 2),
    new Campo(9, 4),
    new Campo(10, 7),
];

function totalElementos() {
    let totalElementos = 0.0;
    lista.forEach(item => totalElementos += item.quantidade);
    return totalElementos;
}

function adicionar() {
    let valor = Number(document.getElementById("valor").value);
    let quantidade = Number(document.getElementById("quantidade").value);

    // Verifica se já existe um campo com o valor
    let campoExistente = lista.find(campo => campo.valor === valor);

    if (campoExistente) {
        // Aumenta a quantidade do campo existente
        campoExistente.quantidade += quantidade;
    } else {
        // Adiciona um novo campo se não existir
        lista.push(new Campo(valor, quantidade));
    }

    let tabela = document.getElementById("tabela");
    tabela.innerHTML = '';
    const total = totalElementos();
    lista.forEach(x => {
        const percentual = 100 * x.quantidade / total;
        const angulo = 360 * x.quantidade / total;
        tabela.innerHTML += `
        <tr>
        <th scope="row">${x.valor}</th>
        <td>${x.quantidade}</td>
        <td>${percentual.toFixed(2)}%</td>
        <td>${angulo.toFixed(2)}º</td>
        </tr>
        `;
    });
}