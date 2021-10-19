    export default function Jsx(){
    const num1 = 4;
    const num2 = 6;
    const soma = num1+ num2;

    console.log(soma);

    function subTitle(){
    return "Aula de Next.js";
    }

    const title = <h1>Entendendo o jsx</h1>
    return (<div>
        {title}
        {subTitle()} <br />
        O resultado é {soma}
    </div>);
    }