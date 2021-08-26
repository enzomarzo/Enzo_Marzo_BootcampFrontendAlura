


/* import React from 'react';

// máscara de telefone (praticando)
export default function Telefone() {
  const [telefone, setTelefone] = React.useState();
  const [telefoneFiltrado, setTelefoneFiltrado] = React.useState();

  function FilteringTelefone() {
    setTelefoneFiltrado(telefone.replace(/-/g, ''));
  }

  return (
    <>
      <input
        type="text"
        placeholder="0000-0000 ou 00000-0000"
        onKeyUp={(event) => setTelefone(event.target.value)}
      />
      <span>{telefone}</span>
    </>
  );
}
 */
// 1 pegar os dados do input
// 2 tirar o hifen, caso tenha, com o replace
// 3 incluir o hifen se tiver 8 ou 9 numeros
// 4 retornar na tela ao tirar o foco do teclado

/* // keyUp com useState no NextJS
export default function Teste() {
  const [textoDigitado, setTextoDigitado] = React.useState('');

  return (
    <>
      <input
        className="inputText"
        type="text"
        onKeyUp={(event) => { setTextoDigitado(event.currentTarget.value); }}
      />
      <span>{textoDigitado}</span>
    </>
  );
}
 */
