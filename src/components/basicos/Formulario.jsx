import {useState} from "react";


export default function Formulario(){

const [nome, setNome] = useState('')
const [idade, setIdade] = useState(0)
const [email, setEmail] = useState('')
const [user, setUser] = useState({})



function novoRegistro(e){
alert("FUNCIONANDO")
e.preventDefault() //para não atualizar a tela/página

setUser({
    nome: nome,
    idade: idade,
    email: email,
    
    })

    setNome('')

    setIdade('')

    setEmail('')


}

return(
        <div>
            <h2>Cadastrando usuário</h2>
<form onSubmit={novoRegistro}>

<label>Nome: </label>
<input placeholder="Digite seu nome"
value={nome}
onChange={(e)=>setNome(e.target.value)}
/><br/>

<label>Idade: </label>
<input placeholder="Digite sua idade"
value={idade}
onChange={(e)=>setIdade(e.target.value)}
/><br/>

<label>Email: </label>
<input placeholder="Digite seu email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/><br/>

<button type="submit">Registrar</button>





<div>
<span>Bem vindo: {user.nome}`</span><br/>
<span>Idade: {user.idade}</span><br/>
<span>Email: {user.email}</span><br/>

</div>

</form>









        </div>


    )









}