import { Formik, Form, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { userLoginSchema } from 'utilities/validation';
import authOperations from '../../redux/auth/auth-operations';

function LoginForm() {
    const dispatch = useDispatch();
    
    const handleSubmit = ({ email, password }, actions) => {
      dispatch(authOperations.login({ email, password }));
      actions.setSubmitting(false);
  
      actions.resetForm({
        values: {
          email: '',
          password: '',
      }});
    }
  
    return (
      <>
        <h2>Login</h2>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={handleSubmit}
          validationSchema={userLoginSchema}
        >
          {({ values, handleChange, handleSubmit, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
              <label>
                <h2>Your e-mail adress?</h2>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                />
                <ErrorMessage name="email" component="div" />
              </label>
              <label>
                <h1>Your password?</h1>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={values.password}
                />
                <ErrorMessage name="password" component="div" />
              </label>
              <button type="submit">{isSubmitting ? '...' : 'Login'}</button>
            </Form>
          )}
        </Formik>
      </>
    );
  }
  
  export default LoginForm;