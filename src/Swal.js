import Swal from "sweetalert2";

    export const Error = (title = 'ha ocurrido un error', text='intentalo mas tarde', footer=null) => {
        Swal.fire({
            icon: 'error',
            title: title,
            text: text,
            footer: footer
          })
    }
    export const Success = (title ="guardado", text="se ha guardo con exito") => {
        Swal.fire(
            title, text, 'success'
        )
    }

