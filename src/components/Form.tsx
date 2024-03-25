// import React from 'react';
// import { Formik, Form , Field, ErrorMessage } from 'formik';
// import { IUser } from '../interfaces/userInterface.interface';
// // import './MyForm.css'; // Importa tu archivo CSS para los estilos del formulario

// const initialValues: IUser = {
//     name: '',
//     RFID: '',
//     active: ''
// };

// const UserForm = () => {
//     const handleSubmit = (values: IUser) => {
//         console.log(values);
//         console.log('Aquí hay que hacer cosas')
//         // Codigo
//     };

//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     const validate = (values: IUser) => {
//         const errors: Partial<IUser> = {};

//         if (!values.name) {
//             errors.name = 'Campo obligatorio';
//         }

//         if (!values.RFID) {
//             errors.RFID = 'Campo obligatorio';

//             // } else if (values.active) {
//             //     errors.active = false;
//             // }

//             return errors;
//         }}

//         return (
            
//             <Formik
//                 initialValues={initialValues}
//                 onSubmit={handleSubmit}
//                 validate={validate}
//             >
                
//                 {() => (
//                     <>
//                     <h1>Form</h1>
//                     <Form className="user-form"> {/* CSS */}

//                         <div className="form-group">
//                             <label htmlFor="name">Nombre:</label>
//                             <Field type="text" id="name" name="name" className="form-control" />
//                             <ErrorMessage name="name" component="div" className="error-message" />
//                         </div>

//                         <div className="form-group">
//                             <label htmlFor="email">RFID - Valores:</label>
//                             <Field type="text" id="rfid" name="rfid" className="form-control" />
//                             <ErrorMessage name="rfid" component="div" className="error-message" />
//                         </div>

//                         <button type="submit" className="btn btn-primary">Enviar</button>
//                     </Form>
//                     </>
//                 )}
//             </Formik>
//         );
//     };


// export default UserForm
