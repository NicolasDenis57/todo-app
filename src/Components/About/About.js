import { Field, Form, Formik } from "formik";
import { useId } from "react";
import { useParams, /*useNavigate*/ } from "react-router-dom";
import * as Yup from 'yup';
import Button from '../UI/Button/Button';



const About = () => {

      const id = useId();
      const { name } = useParams();

      const contactFormSchema = Yup.object().shape({
            firstname: Yup.string().required(' Ce champ est requis !'),
            lastname: Yup.string().required('Ce champ est requis'),
            email: Yup.string().email('Format d\'email invalide').required('Ce champ est requis'),
            message: Yup.string().max(50, 'Trop long !!!')
      })

      const handleSubmitForm = (value) => {
            console.log(value);
      }

      //const navigate = useNavigate();

      //const handleClick = () => {
      //      navigate('/');
      //}
      
      return (
            <div>
                  <h1>Welcome { name ? name : 'on About Page' }!</h1>
                  {/*<Button onClick={ handleClick }>Go To Home !</Button>*/}
                  <Formik 
                        initialValues={{
                              firstname: '',
                              lastname: '',
                              email: '',
                              message: ''
                        }}
                        
                        onSubmit={ handleSubmitForm }
                        validationSchema={ contactFormSchema }
                  >
                        {
                              ({ errors, touched }) => (
                                    <Form>
                                          <div>
                                                <label htmlFor={`${id}-firstname`}>Firstname</label>
                                                <Field type='text' id={`${id}-firstname`} placeholder='Ex: John' name='firstname'/>
                                                { errors.firstname && touched.firstname && <p style={{ color: 'red'}}>{ errors.firstname }</p>}
                                          </div>
                                          <div>
                                                <label htmlFor={`${id}-lastname`}>Lastname</label>
                                                <Field type='text' id={`${id}-lastname`} placeholder='Ex: DOE' name='lastname'/>
                                                { errors.lastname && touched.lastname && <p style={{ color: 'red'}}>{ errors.lastname }</p>}
                                          </div>
                                          <div>
                                                <label htmlFor={`${id}-email`}>Email</label>
                                                <Field type='text' id={`${id}-email`} placeholder='example@example.com' name='email'/>
                                                { errors.email && touched.email && <p style={{ color: 'red'}}>{ errors.email }</p>}
                                          </div>
                                          <div>
                                                <label htmlFor={`${id}-message`}>Message</label>
                                                <Field component='textarea' id={`${id}-message`} placeholder='Write your message here...' name='message'/>
                                                { errors.message && touched.message && <p style={{ color: 'red'}}>{ errors.message }</p>}
                                          </div>

                                          <Button type="submit">Submit</Button>
                                    </Form>
                              )
                        }
                  </Formik>
            </div>
      );
}

export default About;