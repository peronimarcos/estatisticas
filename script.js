class Campo{
    constructor(valor,quantidade){
    this.valor = valor;
    this.quantidade = quantidade;
    }
    }
    
    let lista=[
    new Campo(7,3),
    new Campo(8,2),
    new Campo(9,4),
    new Campo(10,7),
    ];
    
    function adicionar(){
    let valor=Number(document.getElementById("valor").value);
    let quantidade=Number(document.getElementById("quantidade").value);
    
    const campo=new Campo(valor,quantidade);
    lista.push(campo);
    
    let tabela=document.getElementById("tabela");
    tabela.innerHTML='';
    lista.forEach(x=>{
    tabela.innerHTML+=`
    <tr>
    <th scope="row">${x.valor}</th>
    <td>${x.quantidade}</td>
    <td>Otto</td>
    <td>@mdo</td>
    </tr>
    `;
    });
    }