const INITIAL_STATE = {
    "data": "2019-09-09",
    "nome": "Rafael",
    "email": "rafael@verzel.com.br",
    "telefone": 23330000,
    "assunto": "informações sobre o curso 105"
}

export default function(state = INITIAL_STATE, action){
    //switch faz o comando if e else para cada um dos itens abaixo, funciona como controlador
    switch(action.type){
        case 'ATUALIZA_DATA' : return {...state, data : action.value};
        
        case 'ATUALIZA_NOME' : return {...state, data : action.value};
        
        case 'ATUALIZA_EMAIL' : return {...state, data : action.value};
        
        case 'ATUALIZA_TELEFONE' : return {...state, data : action.value};
        
        default : return state
        
        
    }
}