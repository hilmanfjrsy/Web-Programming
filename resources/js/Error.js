import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';


class Error extends Component{
    render(){
        return(
            <div class="alert alert-danger" role="alert">
  Gagal Menyimpan Data !!
</div>
        );
    }
}

export default Error