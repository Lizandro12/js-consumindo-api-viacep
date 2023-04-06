async function buscaEndereco(cep){

    try{

    let consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)

    let consultaCEPConvertida = await consultaCEP.json()
    if(consultaCEPConvertida.erro){
        throw Error('CEP não Existe')
    }

    console.log(consultaCEPConvertida);
    return consultaCEPConvertida
    } catch (erro){
        console.log(erro)
    }
}