import { Title } from 'components/Welcome/Welcome.styled';
import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { registry } from 'redux/authorization/auth-operations';
import * as Yup from 'yup';
import {
  FormWrap,
  Button,
  StyledField,
  Label,
  ErrorMsg,
} from './RegistryForm.styled';

export function RegistryForm() {
  const dispatch = useDispatch();

  return (
    <FormWrap>
      <Title>Registry Form</Title>
      <Formik
        initialValues={{ name: '', email: '', password: '', confirm: '' }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required('*Required'),
          email: Yup.string().email().required('*Required'),
          password: Yup.string()
            .required('*Required')
            .min(7, 'Password must be at least 7 characters long'),
          confirm: Yup.string()
            .required('*Required')
            .oneOf(
              [Yup.ref('password'), null],
              'Your passwords are different, try harder!'
            ),
        })}
        onSubmit={({ name, email, password }, { resetForm }) => {
          dispatch(registry({ name, email, password }));
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
          // <form onSubmit={handleSubmit}>
          //   <input
          //     type="email"
          //     name="email"
          //     onChange={handleChange}
          //     onBlur={handleBlur}
          //     value={values.email}
          //   />
          //   {errors.email && touched.email && errors.email}
          //   <input
          //     type="password"
          //     name="password"
          //     onChange={handleChange}
          //     onBlur={handleBlur}
          //     value={values.password}
          //   />
          //   <input
          //     type="password"
          //     name="confirm"
          //     onChange={handleChange}
          //     onBlur={handleBlur}
          //     value={values.confirm}
          //   />
          //   {errors.password && touched.password && errors.password}
          //   {errors.confirm && touched.confirm && errors.confirm}
          //   <button type="submit" disabled={isSubmitting}>
          //     Submit
          //   </button>
          // </form>
          <Form onSubmit={handleSubmit}>
            <Label htmlFor="name" error={touched.name && errors.name}>
              Name
            </Label>
            <StyledField
              required
              type="text"
              name="name"
              id="name"
              value={values.name}
            />
            <ErrorMsg name="name" component="div" />

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
            <StyledField
              type="password"
              name="password"
              id="password"
              value={values.password}
            />
            <ErrorMsg name="password" component="div" />

            <Label htmlFor="confirm" error={touched.confirm && errors.confirm}>
              Password again
            </Label>
            <StyledField
              type="password"
              name="confirm"
              id="confirm"
              value={values.confirm}
            />
            <ErrorMsg name="confirm" component="div" />

            <Button type="submit" disabled={isSubmitting}>
              Registry
            </Button>
          </Form>
        )}
      </Formik>
    </FormWrap>
  );
}
