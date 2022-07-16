import react from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


const ModalUpdate = (props) => {
    const schema = yup.object({
        name: yup.string().required(),
    }).required();

    const { register, handleSubmit,setValue, reset,formState:{ errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onSubmit',
        reValidateMode: 'onSubmit',
        defaultValues: props.PokeChange //esto carga y esto mismo se envia en la data de ChangePoke
    });

    // actualiza el campo name por el que viene por props que a la ves se asigna a defaultValues
    // setValue('name',props.PokeChange.name)
    
    //envia a app.js component el nuevo nombre del pokemon 
    const changePoke = data => {
        console.log('update',data)
        props.editPoke(data);
        reset();
    }
    return ( 
        <div>
            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{props.PokeChange.name}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit(changePoke)}>
                                <p>Nombre Personalizado</p>
                                <img src={props.PokeChange.sprites.front_shiny}/>
                                <input {...register('name')} className="form-control" type="text" />
                                {errors.name && <p  className="text-danger">{errors.name.message}</p>}
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-info" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-success" data-bs-dismiss="modal">Actualizar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ModalUpdate;