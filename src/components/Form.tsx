import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import IUser
// import './MyForm.css'; // Importa tu archivo CSS para los estilos del formulario

interface FormValues {
    name: string;
    email: string;
}

const initialValues: FormValues = {
    name: '',
    email: '',
};

const MyForm: React.FC = () => {
    const handleSubmit = (values: FormValues) => {
        console.log(values);
        // Aquí podrías enviar los datos a tu servidor o hacer otras operaciones
    };

    const validate = (values: FormValues) => {
        const errors: Partial<FormValues> = {};

        if (!values.name) {
            errors.name = 'Campo obligatorio';
        }

        if (!values.email) {
            errors.email = 'Campo obligatorio';
        } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
            errors.email = 'Formato de email inválido';
        }

        return errors;
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validate={validate}
        >
            {() => (
                <Form className="my-form"> {/* Aplica la clase CSS */}
                    <div className="form-group">
                        <label htmlFor="name">Nombre:</label>
                        <Field type="text" id="name" name="name" className="form-control" />
                        <ErrorMessage name="name" component="div" className="error-message" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <Field type="email" id="email" name="email" className="form-control" />
                        <ErrorMessage name="email" component="div" className="error-message" />
                    </div>

                    <button type="submit" className="btn btn-primary">Enviar</button>
                </Form>
            )}
        </Formik>
    );
};

export default MyForm;
