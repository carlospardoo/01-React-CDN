const Contador = () =>{

    const [contador, setContador] = React.useState(0);
    console.log(contador);

    const aumentar  = () => setContador(contador + 1);
    const disminuir = () => setContador(contador - 1);
    //className = class pero evita errores
    return (
        <div>
            <h1 className = {contador <0 ? "menor" : "mayor"} >Contador: {contador} </h1>
            <hr></hr>
            <button  onClick={aumentar} >Aumentar</button>
            <button onClick = {disminuir}>Disminuir</button>
        </div>
    );
};