import React from "react";
// import { Field, reduxForm } from "redux-form";
// import {createField, Input }   from "../common/FormsControls/FormsControls";
// import { required } from "../../utils/validators/validators";
// import { connect } from "react-redux";
// import { login } from "../../Redux/auth-reducer";
// import { Redirect } from "react-router-dom";
// import classes from "../common/FormsControls/FormsControls.module.css";



// const LoginForm = ({handleSubmit, error}) => {
//   return (
//     <form
//       // onSubmit={handleSubmit}
//     >
//       <div>
//         {/* {createField([required], Input,"email","text","Email")} */}
//         <Field
//           // validate={[required]}
//           component={Input}
//           name={"email"}
//           type="text"
//           placeholder={"Email"}
//         />
//       </div>
//       <div>
//       {/* {createField([required], Input,"password","password","Password")} */}
//         <Field
//           // validate={[required]}
//           component={Input}
//           name={"password"}
//           type="password"
//           placeholder={"Password"}
//         />
//       </div>
//       <div>
//       {/* {createField(null, Input,"rememberMe","checkbox",null, 'remember me')} */}
//         <Field
//           component={Input}
//           name={"rememberMe"}
//           type={"checkbox"} />
//         remember me
//       </div>
//       {/* {error && (
//         <div className={classes.formSummaryError}>{error}</div>
//       )} */}
//       <div>
//         <button>Login</button>
//       </div>
//     </form>
//   );
// };

// const LoginReduxForm = reduxForm({
//   form: "login",
// })(LoginForm);

const Login = () => {
  // const onSubmit = (formData) => {
  //   props.login(formData.email, formData.password, formData.followMe);
  // };
  // if (props.isAuth) {
  //   return <Redirect to={"/profile"} />;
  // }
  return (
    <div>
      <h1>Login</h1>
      {/* <LoginReduxForm
        onSubmit={onSubmit}
      /> */}
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   isAuth: state.auth.isAuth,
// });

export default
  // connect(mapStateToProps, { login })
    (Login);
