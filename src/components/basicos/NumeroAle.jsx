import React from 'react'

export default ()=> {

const min = 10
const max = 20
const sorteado = parseInt(Math.random() * (max-min)) + min; //gerar números aleatórios


return(
<div>
<h2>valor aleatório</h2>
<p><strong>valor mínimo:</strong>{min}  </p>
<p><strong>valor máximo:</strong>{max}  </p>
<p><strong>valor sorteado:</strong>{sorteado}  </p>

</div>

)

}


