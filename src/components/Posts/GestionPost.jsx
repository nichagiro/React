import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { useDispatch, useSelector } from 'react-redux'
import { CreatePost, UnselectedPost, UpdatePost } from '../../redux/features/postSlice'

const validate = values => {

    const errors = {}

    if (!values.title) {
        errors.title = 'Campo Requerido'
    }

    if (!values.body) {
        errors.body = 'Campo Requerido'
    }

    return errors;

}

const renderField = ({
    input,
    textarea = false,
    label,
    className,
    type,
    meta: { touched, error }
}) => (
    <div>
        <label>{label}</label>
        <div>
            {
                textarea ? (
                    <textarea {...input} placeholder={label} type={type} className={className} />
                ) : (
                    <input {...input} placeholder={label} type={type} className={className} />
                )
            }
            {touched &&
                ((error && <small className="text-danger">{error}</small>))}
        </div>
    </div>
)

let GestionPost = (props) => {

    console.log(props)
    const { handleSubmit, reset } = props;

    const btnDelete = useSelector(state => state.post.btnDelete); // disabled 

    const dispatch = useDispatch();

    const SubmitCreate = values => {
        dispatch(CreatePost(values));
        reset()
    }

    const SubmitUpdate = values => {
        dispatch(UpdatePost(values));
    }

    return (
        <div className="col-4">
            <form className="p-4 shadow card w-100 sticky-top" onSubmit={handleSubmit(btnDelete ? SubmitCreate : SubmitUpdate)}>
                <div className="my-2">
                    <Field
                        label="Titulo del post"
                        className="form-control"
                        name="title"
                        component={renderField}
                        type="text"
                    />
                </div>
                <div className="my-2">
                    <Field
                        label="Descripción"
                        name="body"
                        type="textarea"
                        textarea={true}
                        component={renderField}
                        className="form-control"
                    />
                </div>
                {
                    btnDelete ? (
                        <button type="submit" className="btn btn-primary my-3">Guardar</button>
                    ) : (
                        <div className="my-3 d-flex justify-content-center">
                            <button className="btn btn-primary mx-2">Actualizar</button>
                            <button onClick={() => { dispatch(UnselectedPost()) }} type="button" className="btn btn-secondary mx-2">Cancelar</button>
                        </div>
                    )
                }
            </form>
        </div>
    )
}

GestionPost = reduxForm({
    form: 'GestionPost',
    validate,
})(GestionPost)


GestionPost = connect(
    state => ({
        initialValues: state.post.postSelect,
        enableReinitialize: true
    }),
)(GestionPost)


export default GestionPost
