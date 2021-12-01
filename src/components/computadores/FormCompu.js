import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { useDispatch, useSelector } from 'react-redux'
import {CreateCompu, UpdateCompu} from '../../redux/features/compuSlice'

const validate = values => {
            
    const errors = {}

    if (!values.ram) {
        errors.ram = 'Campo Requerido'
    }
    else if (values.ram > 32) {
        errors.ram = 'No puede ser mayor a 32'
    }
    else if (values.ram < 2) {
        errors.ram = 'No puede ser menor a 2'
    }

    if (!values.procesador) {
        errors.procesador = 'Campo Requerido'
    }

    if (!values.tarjeta_grafica) {
        errors.tarjeta_grafica = 'Campo Requerido'
    }
    else if (values.tarjeta_grafica > 16) {
        errors.tarjeta_grafica = 'No puede ser mayor a 16'
    }
    else if (values.tarjeta_grafica < 2) {
        errors.tarjeta_grafica = 'No puede ser menor a 2'
    }
    
    if (!values.marca) {
        errors.marca = 'Campo Requerido'
    }
    
    return errors;

}

const renderField = ({
    input,
    label,
    className,
    type,
    meta: { touched, error }
  }) => (
    <div>
      <label>{label}</label>
      <div>
          {
              type == 'textarea' ? (
                  <textarea {...input} placeholder={label} type={type} className={className} />
                ):(
                  <input {...input} placeholder={label} type={type} className={className}/>
              )
          }
        {touched &&
          ((error && <small className="text-danger">{error}</small>))}
      </div>
    </div>
  )

let FormCompu = (props) => {

    const { handleSubmit, reset } = props;
    const selectCompu = useSelector(state => state.computadores.selectCompu);
    const dispatch = useDispatch();
    const compuSelect = selectCompu.length > 0 ? true : false;

    const SubmitCreate = values => {

        if (compuSelect) {
            const data = {
                marca: values.marca,
                procesador: values.procesador,
                ram: values.ram,
                tarjeta_grafica: values.tarjeta_grafica,
                cod_barras: selectCompu[0].cod_barras,
                users_id: selectCompu[0].users_id,
                id: selectCompu[0].id
            }
            dispatch(UpdateCompu(data))
        }
        else{
            const data = {
                marca: values.marca,
                procesador: values.procesador,
                ram: values.ram,
                tarjeta_grafica: values.tarjeta_grafica,
                cod_barras: 999999999999,
                users_id: 10
            }
            dispatch(CreateCompu(data));
            reset();
        }
    }

    return (
        <div className="p-5 bg-info">
            <form className="p-4 shadow card w-50 mx-auto" onSubmit={handleSubmit(SubmitCreate)}> 
                <div className="my-2">
                    <Field 
                        label="Marca" 
                        className="form-control" 
                        name="marca" 
                        type="text"
                        component={renderField} 
                    />
                </div>
                <div className="my-2">
                    <Field 
                        label="Procesador" 
                        name="procesador" 
                        type="text" 
                        className="form-control"
                        component={renderField} 
                    />
                </div>
                <div className="my-2">
                    <Field 
                        label="Ram" 
                        name="ram" 
                        type="number" 
                        className="form-control"
                        component={renderField} 
                    />
                </div>
                <div className="my-2">
                    <Field 
                        label="Tarjeta Grafica" 
                        name="tarjeta_grafica" 
                        type="number" 
                        className="form-control"
                        component={renderField} 
                    />
                </div>
                <button type="submit" className="btn btn-primary w-25 mx-auto my-3">
                    {
                        compuSelect ? 'Actualizar' : 'Crear'
                    }
                </button>
            </form>
        </div>
    )
}

FormCompu = reduxForm({
    form: 'FormCompu',
    validate,
  })(FormCompu)
  

  FormCompu = connect(
    state => ({
      initialValues: state.computadores.selectCompu[0] ,
      enableReinitialize:true
    }),
  )(FormCompu)


export default FormCompu
