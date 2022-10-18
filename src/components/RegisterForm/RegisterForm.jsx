import { Formik, Form, ErrorMessage } from 'formik';
import { Title, Label, TitleInput, Input } from './RegisterForm.styled';
import { userRegisterSchema } from 'utilities/validation';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';

function RegisterForm() {
  
  const dispatch = useDispatch();

  const handleSubmit = ({name, email, password}, actions) => {
    dispatch(authOperations.register({name,email,password}));
    actions.setSubmitting(false);

    actions.resetForm({
      values: {
        name: '',
        email: '',
        password: '',
    }});
  }

  return (
    <>
      <Title>Registration</Title>

      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={userRegisterSchema}
      >
        {({ values, handleChange, handleSubmit, isSubmitting }) => (
          <Form>
            <Label>
              <TitleInput>What is your name?</TitleInput>
              <Input
                type="text"
                name="name"
                onChange={handleChange}
                value={values.name}
              />
              <ErrorMessage name="name" component="div" />
            </Label>
            <Label>
              <TitleInput>Your e-mail adress?</TitleInput>
              <Input
                type="email"
                name="email"
                onChange={handleChange}
                value={values.email}
              />
              <ErrorMessage name="email" component="div" />
            </Label>
            <Label>
              <TitleInput>Create a password.</TitleInput>
              <Input
                type="password"
                name="password"
                onChange={handleChange}
                value={values.password}
              />
              <ErrorMessage name="password" component="div" />
            </Label>
            <button type="submit">
              {isSubmitting ? '...' : 'Registration'}
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default RegisterForm;