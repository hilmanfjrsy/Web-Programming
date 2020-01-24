import 'bootstrap/dist/css/bootstrap.css';
import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { Link } from 'react-router-dom';
import '../Login/Login.css';

class Login extends Component {

  render (){
  return(
    <div className="container">
     
        <Form className="form-background">
          <p className="text-welcome">SELAMAT DATANG</p>

          <FormGroup>
            <Label className="text">Username</Label>
            <Input type="username" name="username" id="exampleEmail" placeholder="Username" className="text-placeholder" />
          </FormGroup>

          <FormGroup>
            <Label className="text">Password</Label>
            <Input type="password"  name="password" id="examplePassword" placeholder="Password" className="text-placeholder" />
          </FormGroup>
          
          <Link to={'/Home'}>
          <Button className="button-login" >Login</Button>
          </Link>
        </Form>
      
        <p className="copyright" align="center">&#169;2020 PT Bangun Anugrah Jaya Abadi</p>
        
    </div >
  )
  }
}

export default Login;
