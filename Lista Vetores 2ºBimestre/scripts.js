function exer01(){
    let vetor = []
    for (let i=0; i<6; i++){
        vetor[i] = Number (prompt(`Informe o ${i+1} º elemento`))
    }
    let pares = []; let ipares = 0;
    let impares = []; let iimpares = 0;
    for (let i=0; i<6; i++){
        if (vetor[i] % 2 == 0){
            pares[ipares] = vetor[i]
            ipares++
        }
        else{
            impares[iimpares] = vetor[i]
            iimpares++
        }
    }
    console.log(`Pares ${pares} Quantidade: ${pares.length}`)
    console.log(`Ímpares ${impares} Quantidade: ${impares.length}`)
}

function exer02(){
    let vetor = []
    for (let i=0; i<7; i++){
        vetor[i] = Number(prompt(`Informe o ${i+1} º elemento`))
    }
    let mult2 = [], mult3 = [], mult2e3 = []
    for (let i=0; i<7; i++){
        if ((vetor[i] % 2 == 0) && (vetor[i] % 3 == 0)){
            mult2e3.push(vetor[i])
            mult2.push(vetor[i])
            mult3.push(vetor[i])
        }
        else if (vetor[i] % 2 == 0){
            mult2.push(vetor[i])
        }
        else if (vetor[i] % 3 == 0){
            mult3.push(vetor[i])
        }
    }
    console.log(`Múltiplos de 2: ${mult2}`)
    console.log(`Múltiplos de 3: ${mult3}`)
    console.log(`Múltiplos de 2 e 3: ${mult2e3}`)
}

function exer03(){
    let codigos = []
    let estoque = []
    let achou = false
    let cliente = Number(prompt('Informe o código do cliente'))
    while (cliente != 0){
        for(let i=0; i<5; i++){
        codigos[i] = Number(prompt(`Informe código do produto ${i+1}`))
        estoque[i] = Number(prompt(`Informe quantidade em estoque do produto ${i+1}`))
    }
    
    let codigo = Number(prompt('Informe o código do produto para compra'))
    let qtde = Number(prompt('Informe quantidade para compra'))
    for (let i=0; i<5; i++){
        if(codigo == codigos[i]){
            estoque[i] = estoque[i] - qtde
            alert ('Compra realizada com sucesso')
        }
        else{
            alert ('Compra não realizada, falta do produto no estoque')
        }
    }
    if(!achou){
        alert ('Produto não encontrado')
    }
    cliente =(prompt('Informe outro código de cliente. Digite 0 para encerrar '))
  }
  console.log(`Estoque atualizado ${estoque}`)
}

function exer04(){
    let vet = []
    for(let i=0; i<10; i++){
        vet[i] = Number(prompt(`Informe o ${i+1} elemento`))
    }
    let posicoes = []
    for(let i=0; i<10; i++){
        if(vet[i] == 30){
            posicoes.push(i)
        }
    }
    alert (`Posições aonde o 30 aparecem ${posicoes}`)
}

function exer05(){
    let logica = []
    let linguagem = []
    let comum = []
    for(let i=0; i<10; i++){
        logica[i] = Number (prompt(`Informe o ${i+1}º aluno que faz Lógica`))
    }
    for(let i=0; i<5; i++){
        linguagem[i] = Number (prompt(`Informe o ${i+1}º aluno que faz Linguagem`))
    }
    for(let i=0; i<10; i++){
        if(linguagem.includes(logica[i])){
            comum.push(logica[i])
        }
    }
    alert(`Alunos que fazem as duas disciplicas ${comum}`)
}

function exer06(){
    let vendas = []
    let percentuais = []
    let nomes = []
    let comissoes = []
    for (let i=0; i<5; i++){
        vendas[i] = Number (prompt(`Informe vendas do ${i+1}º vendedor`))
        percentuais[i] = Number (prompt(`Informe % do ${i+1}º vendedor`))
        nomes[i] = prompt(`Informe nome do ${i+1}º vendedor`)
        comissoes[i] = (vendas[i] / percentuais[i]) * 100
    }
    let total = 0
    let maior = comissoes[0]; let menor = comissoes[0]
    for(let i=0; i<5; i++){
        total = total + vendas[i]
        if(comissoes[i] > maior){
            maior = comissoes[i]
        }
        if(comissoes[i] > menor){
            menor = comissoes[i]
        } 
    }
  console.log(`Valor total vendido ${total}`)
  console.log(`Maior valor ${maior} e quem recebe ${nomes[comissoes.indexOf(maior)]}`)
  console.log(`Menor valor ${menor} e quem recebe ${nomes[comissoes.indexOf(menor)]}`)
}


function codrepetição(){
    let cod = []
    let nome = []
    for(let i=0; i<5; i++){
            let codigo = Number (prompt('Informe o código do aluno'))
        while(cod.includes(codigo)){
            codigo = Number (prompt('Código já existente, informe um novo'))
        }
        cod[i] = codigo
        nome[i] = prompt(`Informe nome do aluno`)      
}
console.log(cod)
console.log(nome)
}

function exer07(){
    let vet = []
    for (let i=0; i<10; i++){
        let num = Number (prompt(`Informe o ${i+1} º número`))
        vet.push(num)
    }
    let numneg = 0
    let numpos = 0
    for (let i=0; i < 10; i++){
        if (i < 0){
            numneg++
        }
        else if (i > 0){
            numpos += i
        }
    }
    console.log(`Quantidade de números negativos: ${numneg.length}`)
    console.log(`Soma dos números positivos: ${numpos}`)
}

function exer08(){
     let nomes = []
     let medias = []
     for(let i=0; i<7; i++){
        let nome = (prompt("Digite o nome do aluno" +(i+1)+ ": "))
        nomes.push(nome)
        let media = (prompt("Digite a média final do aluno" +(i+1)+ ": "))
        medias.push(media)
     }
     let maiorMedia = medias[0];
     let alunoMaiorMedia = nomes[0];
     for (i=1; i<medias.length; i++) {
         if (medias[i] > maiorMedia) {
             maiorMedia = medias[i];
             alunoMaiorMedia = nomes[i];
         }
     }
}

function exer09(){
     let nomesProdutos = [10]
     let codigosProdutos = [10]
     let precosProdutos = [10]
     console.log("Relatório de produtos com aumento:");

    for (let i = 0; i < 10; i++) {
         if (codigosProdutos[i] % 2 === 0 || precosProdutos[i] > 1000.00) {
             let novoPreco = precosProdutos[i] * 1.1;

    // Mostrando os dados do produto
     console.log("Nome: " + nomesProdutos[i]);
     console.log("Código: " + codigosProdutos[i]);
     console.log("Preço: R$" + precosProdutos[i].toFixed(2));
     console.log("Novo Preço: R$" + novoPreco.toFixed(2));
     console.log("-------------------------------------");
         } 
     }
}