class HolaMund extends React.Component{
    render(){
        return <h1>Hola mundo - Legacy</h1>
    }
}

const Saludo = () =>{
    return  <ol>
                <li></li>
                <li></li>
                <li></li>
            </ol>
}

//console.log(React);
//console.log(ReactDOM);
/*Hola Mundo*/
/*ReactDOM.render(
    React.createElement('h1',null,'Hola Mundo'),
    document.getElementById('root')
);*/

/*Sin JSX*/
/*ReactDOM.render(
    React.createElement('ol',null,
       React.createElement('li',null,'Uva'),
       React.createElement('li',null,'Limon'),
       React.createElement('li',null,'Mango')
    ),
    document.getElementById('root')
);*/
/*Con JSX y Babel*/
/*ReactDOM.render(
    <div>
        <ol>
            <li>Manzana</li>
            <li>Uva</li>
            <li>Mango</li>    
        </ol>
    </div>,
    document.getElementById('root')
);*/

/*Con Clases*/
//ReactDOM.render(<HolaMund></HolaMund>,document.getElementById('root'));
ReactDOM.render(<Saludo />,document.getElementById('root'));