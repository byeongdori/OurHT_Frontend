/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState } from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Toast
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {

  const main = React.createRef();

  const [newusername, setNewusername] = useState();
  const [newpassword, setNewpassword] = useState();
  
  localStorage.setItem("user_pk", 0);

  const onUsernameChange = (e) => {
    setNewusername(e.target.value);
    console.log(newusername);
  }

  const onPasswordChange = (e) => {
    setNewpassword(e.target.value);
    console.log(newpassword);
  }

  async function registerrequest(newusername, newpassword) {
    console.log(newusername, newpassword);
    fetch(`/apis/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        "username": newusername,
        "password": newpassword,
      }),
    }).then((response) => response.json())
    .then((data) => {
      if (data !== -1) {
        console.log(data);
        localStorage.setItem("user_pk", JSON.stringify(data));
        document.location.href = "/";
      }
    })
  }

  function doRegister() {
    console.log("회원가입 버튼 클릭");
    console.log(newusername, newpassword);
    registerrequest(newusername, newpassword);
  }

  // toast.success("회원가입이 완료되었습니다", {
  //   autoClose: 3000,
  //   position: toast.POSITION.TOP_RIGHT
  // });
  return (
    <>
      <DemoNavbar />
      <main ref={main}>
      <ToastContainer/>
        <section className="section section-shaped section-lg">
          <div className="shape shape-style-1 bg-gradient-default">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className="pt-lg-7">
            <Row className="justify-content-center">
              <Col lg="5">
                <Card className="bg-secondary shadow border-0">
                  <CardBody className="px-lg-5 py-lg-5">
                    <div className="text-center text-muted mb-4">
                      <span className="bold">Sign Up</span>
                    </div>
                    <Form role="form">
                      <FormGroup>
                        <InputGroup className="input-group-alternative mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-hat-3" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="Username" type="text" onChange={onUsernameChange}/>
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-lock-circle-open" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Password"
                            type="password"
                            autoComplete="off"
                            onChange={onPasswordChange}
                          />
                        </InputGroup>
                      </FormGroup>
                      <Row className="my-4">
                        <Col xs="12">
                          <div className="custom-control custom-control-alternative custom-checkbox">
                            <input
                              className="custom-control-input"
                              id="customCheckRegister"
                              type="checkbox"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheckRegister"
                            >
                              <span>
                                I agree with the{" "}
                                <a
                                  href="#pablo"
                                  onClick={e => e.preventDefault()}
                                >
                                  Privacy Policy
                                </a>
                              </span>
                            </label>
                          </div>
                        </Col>
                      </Row>
                      <div className="text-center">
                        <Button
                          className="mt-4"
                          color="primary"
                          type="button"
                          onClick={doRegister}
                        >
                          Create account
                        </Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
      <SimpleFooter />
    </>
  );
}

export default Register;
// class Register extends React.Component {
//   componentDidMount() {
//     document.documentElement.scrollTop = 0;
//     document.scrollingElement.scrollTop = 0;
//     this.refs.main.scrollTop = 0;
//   }
//   render() {
//     return (
//       <>
//         <DemoNavbar />
//         <main ref="main">
//           <section className="section section-shaped section-lg">
//             <div className="shape shape-style-1 bg-gradient-default">
//               <span />
//               <span />
//               <span />
//               <span />
//               <span />
//               <span />
//               <span />
//               <span />
//             </div>
//             <Container className="pt-lg-7">
//               <Row className="justify-content-center">
//                 <Col lg="5">
//                   <Card className="bg-secondary shadow border-0">
//                     <CardHeader className="bg-white pb-5">
//                       <div className="text-muted text-center mb-3">
//                         <small>Sign up with</small>
//                       </div>
//                       <div className="text-center">
//                         <Button
//                           className="btn-neutral btn-icon mr-4"
//                           color="default"
//                           href="#pablo"
//                           onClick={e => e.preventDefault()}
//                         >
//                           <span className="btn-inner--icon mr-1">
//                             <img
//                               alt="..."
//                               src={require("assets/img/icons/common/github.svg")}
//                             />
//                           </span>
//                           <span className="btn-inner--text">Github</span>
//                         </Button>
//                         <Button
//                           className="btn-neutral btn-icon ml-1"
//                           color="default"
//                           href="#pablo"
//                           onClick={e => e.preventDefault()}
//                         >
//                           <span className="btn-inner--icon mr-1">
//                             <img
//                               alt="..."
//                               src={require("assets/img/icons/common/google.svg")}
//                             />
//                           </span>
//                           <span className="btn-inner--text">Google</span>
//                         </Button>
//                       </div>
//                     </CardHeader>
//                     <CardBody className="px-lg-5 py-lg-5">
//                       <div className="text-center text-muted mb-4">
//                         <small>Or sign up with credentials</small>
//                       </div>
//                       <Form role="form">
//                         <FormGroup>
//                           <InputGroup className="input-group-alternative mb-3">
//                             <InputGroupAddon addonType="prepend">
//                               <InputGroupText>
//                                 <i className="ni ni-hat-3" />
//                               </InputGroupText>
//                             </InputGroupAddon>
//                             <Input placeholder="Name" type="text" />
//                           </InputGroup>
//                         </FormGroup>
//                         <FormGroup>
//                           <InputGroup className="input-group-alternative mb-3">
//                             <InputGroupAddon addonType="prepend">
//                               <InputGroupText>
//                                 <i className="ni ni-email-83" />
//                               </InputGroupText>
//                             </InputGroupAddon>
//                             <Input placeholder="Email" type="email" />
//                           </InputGroup>
//                         </FormGroup>
//                         <FormGroup>
//                           <InputGroup className="input-group-alternative">
//                             <InputGroupAddon addonType="prepend">
//                               <InputGroupText>
//                                 <i className="ni ni-lock-circle-open" />
//                               </InputGroupText>
//                             </InputGroupAddon>
//                             <Input
//                               placeholder="Password"
//                               type="password"
//                               autoComplete="off"
//                             />
//                           </InputGroup>
//                         </FormGroup>
//                         <div className="text-muted font-italic">
//                           <small>
//                             password strength:{" "}
//                             <span className="text-success font-weight-700">
//                               strong
//                             </span>
//                           </small>
//                         </div>
//                         <Row className="my-4">
//                           <Col xs="12">
//                             <div className="custom-control custom-control-alternative custom-checkbox">
//                               <input
//                                 className="custom-control-input"
//                                 id="customCheckRegister"
//                                 type="checkbox"
//                               />
//                               <label
//                                 className="custom-control-label"
//                                 htmlFor="customCheckRegister"
//                               >
//                                 <span>
//                                   I agree with the{" "}
//                                   <a
//                                     href="#pablo"
//                                     onClick={e => e.preventDefault()}
//                                   >
//                                     Privacy Policy
//                                   </a>
//                                 </span>
//                               </label>
//                             </div>
//                           </Col>
//                         </Row>
//                         <div className="text-center">
//                           <Button
//                             className="mt-4"
//                             color="primary"
//                             type="button"
//                           >
//                             Create account
//                           </Button>
//                         </div>
//                       </Form>
//                     </CardBody>
//                   </Card>
//                 </Col>
//               </Row>
//             </Container>
//           </section>
//         </main>
//         <SimpleFooter />
//       </>
//     );
//   }
// }

// export default Register;
