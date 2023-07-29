import {
  Button,
  ErrorMsg,
  FormWrap,
  Label,
  StyledField,
} from 'components/RegistryForm/RegistryForm.styled';
import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { login } from 'redux/authorization/auth-operations';
import * as Yup from 'yup';
import { LoginText } from './LoginForm.styled';

export function LoginForm() {
  const dispatch = useDispatch();

  return (
    <FormWrap>
      <h2>Sign In with your account</h2>
      <Formik
        initialValues={{ email: '', password: '', confirm: '' }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email('Please enter valid e-mail')
            .required('E-mail is required'),
          password: Yup.string()
            .required('Password is forgotten. Why?')
            .min(6, 'Password must be at least 6 characters long'),
        })}
        onSubmit={({ email, password }, { resetForm }) => {
          dispatch(login({ email, password }));
          resetForm();
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form>
            <Label htmlFor="email" error={touched.email && errors.email}>
              Email
            </Label>
            <StyledField
              type="email"
              name="email"
              id="email"
              value={values.email}
            />
            <ErrorMsg name="email" component="div" />

            <Label
              htmlFor="password"
              error={touched.password && errors.password}
            >
              Password
            </Label>
            <StyledField type="password" name="password" id="password" />
            <ErrorMsg name="password" component="div" />

            <Button type="submit" disabled={isSubmitting}>
              Sign In
            </Button>
          </Form>
        )}
      </Formik>

      <LoginText>
        Don't have an account yet?{' '}
        <NavLink to={'/registry'} style={{ color: 'black', fontWeight: '600' }}>
          Click here!
        </NavLink>
      </LoginText>
    </FormWrap>
  );
}
