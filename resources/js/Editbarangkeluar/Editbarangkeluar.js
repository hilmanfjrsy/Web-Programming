import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import './Editbarangkeluar.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import Success from '../Success';
import Error from '../Error';
import { Form, FormGroup, Label, Input, Col, Row, Button} from 'reactstrap';

class Barangkeluar extends Component {

    constructor(props) {
        super(props);
        this.onChangeNamaKeluar = this.onChangeNamaKeluar.bind(this);
        this.onChangeMerkKeluar = this.onChangeMerkKeluar.bind(this);
        this.onChangeTanggalKeluar = this.onChangeTanggalKeluar.bind(this);
        this.onChangeJumlahKeluar = this.onChangeJumlahKeluar.bind(this);
        this.onChangeSatuanKeluar = this.onChangeSatuanKeluar.bind(this);
        this.onChangeKategoriKeluar = this.onChangeKategoriKeluar.bind(this);
        this.onChangeKeteranganKeluar = this.onChangeKeteranganKeluar.bind(this);
        this.onChangeTujuanKeluar = this.onChangeTujuanKeluar.bind(this);
        this.onChangeSuratKeluar = this.onChangeSuratKeluar.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            namakeluar: '',
            merkkeluar: '',
            tanggalkeluar: '',
            jumlahkeluar: '',
            kategorikeluar: '',
            keterangankeluar: '',
            satuankeluar: '',
            suratkeluar: '',
            tujuankeluar: '',
            alert_message: '',
        }
    }

    componentDidMount(){
        axios.get('/api/datakeluar/'+this.props.match.params.id)
        .then(response=>{
            this.setState({namakeluar:response.data.namakeluar,
                merkkeluar:response.data.merkkeluar,
                tanggalkeluar:response.data.tanggalkeluar,
                satuankeluar:response.data.satuankeluar,
                jumlahkeluar:response.data.jumlahkeluar,
                kategorikeluar:response.data.kategorikeluar,
                keterangankeluar:response.data.keterangankeluar,
                suratkeluar:response.data.suratkeluar,
                tujuankeluar:response.data.tujuankeluar,});
        });
    }

    onChangeNamaKeluar(e) {
        this.setState({
            namakeluar: e.target.value
        });
    }

    onChangeMerkKeluar(e) {
        this.setState({
            merkkeluar: e.target.value
        });
    }

    onChangeTanggalKeluar(e) {
        this.setState({
            tanggalkeluar: e.target.value
        });
    }

    onChangeJumlahKeluar(e) {
        this.setState({
            jumlahkeluar: e.target.value
        });
    }

    onChangeSatuanKeluar(e) {
        this.setState({
            satuankeluar: e.target.value
        });
    }

    onChangeKategoriKeluar(e) {
        this.setState({
            kategorikeluar: e.target.value
        });
    }

    onChangeKeteranganKeluar(e) {
        this.setState({
            keterangankeluar: e.target.value
        });
    }

    onChangeSuratKeluar(e) {
        this.setState({
            suratkeluar: e.target.value
        });
    }

    onChangeTujuanKeluar(e) {
        this.setState({
            tujuankeluar: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const datakeluar = {
            namakeluar: this.state.namakeluar,
            merkkeluar: this.state.merkkeluar,
            tanggalkeluar: this.state.tanggalkeluar,
            jumlahkeluar: this.state.jumlahkeluar,
            satuankeluar: this.state.satuankeluar,
            kategorikeluar: this.state.kategorikeluar,
            keterangankeluar: this.state.keterangankeluar,
            suratkeluar: this.state.suratkeluar,
            tujuankeluar: this.state.tujuankeluar,
        }

        axios.post('/api/datakeluar/'+this.props.match.params.id, datakeluar)
            .then(res => {
                this.setState({ alert_message: "Success" })
            }).catch(error => {
                this.setState({ alert_message: "Error" });
            })
    }


    render() {
        return (
            <div>
                <Navbar />
                <div className="contain-keluar" >
                    <Form onSubmit={this.onSubmit} action='/api/datakeluar' method='post'>
                        <Label className="judul-keluar">Barang Keluar</Label>
                        {this.state.alert_message == "Success" ? <Success /> : null}
                        {this.state.alert_message == "Error" ? <Error /> : null}
                        <Row form >
                            <Col md={2} className="row-form-keluar">
                                <FormGroup>
                                    <Label className="judul-input-keluar">No Surat Jalan</Label>
                                    <Input type="number" placeholder="0" 
                                    id="suratkeluar"
                                    value={this.state.suratkeluar}
                                    onChange={this.onChangeSuratKeluar} />
                                </FormGroup>
                            </Col>

                            <Col md={3}>
                                <FormGroup>
                                    <Label for="exampleSelect" className="judul-input-keluar">Tujuan</Label>
                                    <Input type="text" 
                                    placeholder="Tujuan Keluar"
                                    id="tujuankeluar"
                                    value={this.state.tujuankeluar}
                                    onChange={this.onChangeTujuanKeluar}>
                                    </Input>
                                </FormGroup>
                            </Col>
                            
                        </Row>
                        <Col md={6}>

                            <FormGroup>
                                <Label className="judul-input-keluar"> Nama Barang</Label>
                                <Input type="text" placeholder="Nama Barang"
                                id="namakeluar"
                                value={this.state.namakeluar}
                                onChange={this.onChangeNamaKeluar} />
                            </FormGroup>
                        </Col>
                        <Col md={6}>

                            <FormGroup>
                                <Label className="judul-input-keluar"> Merk Barang</Label>
                                <Input type="text" placeholder="Merk Barang"
                                id="merkkeluar"
                                value={this.state.merkkeluar}
                                onChange={this.onChangeMerkKeluar} />
                            </FormGroup>
                        </Col>
                        <Row form >
                            <Col md={2} className="row-form-keluar">
                                <FormGroup>
                                    <Label className="judul-input-keluar">Jumlah</Label>
                                    <Input type="number" placeholder="0" 
                                    id="jumlahkeluar"
                                    value={this.state.jumlahkeluar}
                                    onChange={this.onChangeJumlahKeluar}/>
                                </FormGroup>
                            </Col>

                            <Col md={3}>
                                <FormGroup>
                                    <Label for="exampleSelect" className="judul-input-keluar">Satuan</Label>
                                    <Input type="select" 
                                    id="satuankeluar"
                                    value={this.state.satuankeluar}
                                    onChange={this.onChangeSatuanKeluar}>
                                        <option>Kilogram</option>
                                        <option>Liter</option>
                                        <option>Unit</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            
                        </Row>
                        <Row form >
                        <Col md={2} className="row-form-keluar">
                                <FormGroup>
                                    <Label for="exampleSelect" className="judul-input-keluar">Kategori</Label>
                                    <Input type="select" 
                                    id="kategorikeluar"
                                    value={this.state.kategorikeluar}
                                    onChange={this.onChangeKategoriKeluar}>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md={3}>
                                <FormGroup>
                                    <Label for="exampleCity" className="judul-input-keluar">Tanggal Keluar</Label>
                                    <Input type="date" 
                                    id="tanggalkeluar"
                                    value={this.state.tanggalkeluar}
                                    onChange={this.onChangeTanggalKeluar} />
                                </FormGroup>
                            </Col>
                            </Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="#" className="judul-input-keluar">Keterangan</Label>
                                    <Input type="textarea" 
                                    id="keterangankeluar"
                                    value={this.state.keterangankeluar}
                                    onChange={this.onChangeKeteranganKeluar}/>
                                </FormGroup>
                            </Col>
                            <Button className="btn-submit-keluar">
                                <Label>Submit</Label>
                            </Button>
                    </Form>

                </div>
            </div>
        )
    }
}

export default Barangkeluar