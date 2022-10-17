import { Formik, Form, ErrorMessage } from 'formik';
import useLoginUser from 'hooks/useLoginUser';

function LoginForm() {
    const { onSubmitForm } = useLoginUser();
  
    return (
      <>
        <h2>Login</h2>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={onSubmitForm}
        //   validationSchema={userLoginSchema}
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