
let ejer =+prompt("Ingrese el ejercicio que desea desarrollar");
switch(ejer){
    case 1:
        let num1= +prompt("Ingrese el importe de su compra");
        if(num1>=150){
            alert(`A usted le corresponde un descuento de 12%: ${num1*0.12} soles. El importe de la compra final es ${num1- (num1*0.12)}soles `);
        }else
        {
            alert(`A usted no le corresponde ningún descuento, El importe de la compra es ${num1} `);
        }
        break;

    case 2:
        let nomb = prompt("Ingrese el nombre del alumno");
        let notaP = +prompt(`Ingrese la nota de su exámen parcial del alumno: ${nomb} `);
        let examenF = +prompt(`Ingrese la nota del exámen final del alumno: ${nomb} `);
        let promedioP = +prompt(`Ingrese el promedio de sus prácticas del alumno: ${nomb} `);
        const promedio = (notaP+promedioP+(2*examenF))/4;
        if(promedio>=11){
            alert(`Felicitaciones ${nomb}, aprobaste el exámen con un promedio de ${promedio} `);
        }else
        {
            alert(`Usted está desaprobado `);
        }

        break;

    case 3:
        let nombT = prompt("Ingrese el nombre del trabajador");
        let sueldoB = +prompt(`Ingrese el sueldo básico del trabajador: ${nombT} `);
        let nHijos = +prompt(`Ingrese el número de hijos del trabajador: ${nombT} `);
       
        if(nHijos>0){
         
            alert(`Felicitaciones ${nombT}, le corresponde una bonificación de ${sueldoB*0.07} su sueldo final es ${sueldoB+(sueldoB*0.07)} `);
        }else if (nHijos==0)
        {
            alert(`${nombT} a usted no le corresponde bonificación, su sueldo final es ${sueldoB} `)
        }else{
            alert(`El valor ingresado no es válido `);
        }

        break;
    case 4:
        let num= +prompt("Ingrese un número");
        if(num>500){
            alert(`El 18% de: ${num} soles es ${num*0.18}soles`);
        }else
        {
            alert(`El número es ${num} menor o igual a 500 `);
        }
        break;
    case 5:
        let num2= +prompt("Ingrese un número");
        let total=1;
        if (num2>=1){
            for(let i=1; i<=num2; i++)
            {
                
                total = total * i;
            }
            alert(`El factorial de ${num2} es ${total} `)

        }else if (num2==0){
                alert(`El factorial de ${num2} es 1`)
        }
        else{
                alert(`Ingrese un número válido`)
            }
        break;
    default:
        alert("Ingrese una opción válida")

}

