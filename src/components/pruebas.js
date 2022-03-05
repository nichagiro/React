import moment from 'moment'
import React from 'react'

const pruebas = () => {

   // Valor actual de ambas fechas en formato string DD/MM/YYYY
   const fecha = '2022-02-02T15:55:00'


   //  seteamos a DATE
   let date = moment(fecha).format('DD/MM/YYYY HH:mm');

    console.log('date', date);



//    console.table({dmyDateInicio, start, fullDate})
//    let date = moment(fecha, 'YYYY/MM/DD').format('DD/MM/YYYY');
//    let diferencia_dias = moment(dmyDateFin).diff(moment(dmyDateInicio), 'days')   

    const check = data => {
        const input = document.getElementsByName(data);
        input.forEach(element => {
        console.log(element);
        console.log(element.value);
        console.log(element.checked);
        });

    }


    return (
        <div className="m-5">
            <div onClick={()=>check('1')}>
                <label>check</label>
                <input 
                    className='mx-5' 
                    type={'checkbox'} 
                    name="1"
                    defaultValue="Nicolas"
                    data-value="Chamorro"
                    aa="giron"
                >                
                </input>
            </div>
            <div onClick={()=>check('1')}>
                <label>a</label>
                <input 
                    className='mx-5' 
                    type={'checkbox'} 
                    name="1"
                    defaultValue="Luis"
                    data-value="cardenas"
                    aa="mendex"
                >                
                </input>
            </div>
        </div>
    )
}

export default pruebas
