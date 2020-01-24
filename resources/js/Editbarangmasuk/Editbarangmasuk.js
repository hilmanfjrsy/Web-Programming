import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import './Editbarangmasuk.css';
import axios from 'axios';
import Success from '../Success';
import Error from '../Error';
import { Form, FormGroup, Label, Input, Col, Row, Button } from 'reactstrap';

class Editbarangmasuk extends Component {

    constructor(props) {
        super(props);
        this.onChangeNamaMasuk = this.onChangeNamaMasuk.bind(this);
        this.onChangeMerkMasuk = this.onChangeMerkMasuk.bind(this);
        this.onChangeTanggalMasuk = this.onChangeTanggalMasuk.bind(this);
        this.onChangeJumlahMasuk = this.onChangeJumlahMasuk.bind(this);
        this.onChangeSatuanMasuk = this.onChangeSatuanMasuk.bind(this);
        this.onChangeKategoriMasuk = this.onChangeKategoriMasuk.bind(this);
        this.onChangeKeteranganMasuk = this.onChangeKeteranganMasuk.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            namamasuk: '',
            merkmasuk: '',
            tanggalmasuk: '',
            jumlahmasuk: '',
            kategorimasuk: '',
            keteranganmasuk: '',
            satuanmasuk: '',
            alert_message: '',
        }
    }

    componentDidMount(){
        axios.get('/api/datamasuk/'+this.props.match.params.id)
        .then(response=>{
            this.setState({namamasuk:response.data.namamasuk,
                merkmasuk:response.data.merkmasuk,
                tanggalmasuk:response.data.tanggalmasuk,
                satuanmasuk:response.data.satuanmasuk,
                jumlahmasuk:response.data.jumlahmasuk,
                kategorimasuk:response.data.kategorimasuk,
                keteranganmasuk:response.data.keteranganmasuk,});
        });
    }

    onChangeNamaMasuk(e) {
        this.setState({
            namamasuk: e.target.value
        });
    }

    onChangeMerkMasuk(e) {
        this.setState({
            merkmasuk: e.target.value
        });
    }

    onChangeTanggalMasuk(e) {
        this.setState({
            tanggalmasuk: e.target.value
        });
    }

    onChangeJumlahMasuk(e) {
        this.setState({
            jumlahmasuk: e.target.value
        });
    }

    onChangeSatuanMasuk(e) {
        this.setState({
            satuanmasuk: e.target.value
        });
    }

    onChangeKategoriMasuk(e) {
        this.setState({
            kategorimasuk: e.target.value
        });
    }

    onChangeKeteranganMasuk(e) {
        this.setState({
            keteranganmasuk: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const datamasuk = {
            namamasuk: this.state.namamasuk,
            merkmasuk: this.state.merkmasuk,
            tanggalmasuk: this.state.tanggalmasuk,
            jumlahmasuk: this.state.jumlahmasuk,
            satuanmasuk: this.state.satuanmasuk,
            kategorimasuk: this.state.kategorimasuk,
            keteranganmasuk: this.state.keteranganmasuk
        }

        axios.put('/api/datamasuk/'+this.props.match.params.id,datamasuk)
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
                <div className="contain-masuk">

                    <Form onSubmit={this.onSubmit} method='post'>

                        <Label className="judul-masuk">Edit Barang Masuk</Label>
                        {this.state.alert_message == "Success" ? <Success /> : null}
                        {this.state.alert_message == "Error" ? <Error /> : null}
                        <Col md={6}>
                            <FormGroup >
                                <Label for="namamasuk" className="judul-input">Nama Barang</Label>

                                <Input type="text"
                                    id="namamasuk"
                                    value={this.state.namamasuk}
                                    onChange={this.onChangeNamaMasuk}
                                    placeholder="Nama Barang" />
                            </FormGroup>
                        </Col>
                        <Col md={6}>

                            <FormGroup>
                                <Label className="judul-input"> Merk Barang</Label>
                                <Input type="text" placeholder="Merk Barang"
                                    id="merkmasuk"
                                    value={this.state.merkmasuk}
                                    onChange={this.onChangeMerkMasuk} />
                            </FormGroup>
                        </Col>
                        <Row form >
                            <Col md={2} className="row-form">
                                <FormGroup>
                                    <Label className="judul-input">Jumlah</Label>
                                    <Input type="number" placeholder="0"
                                        id="jumlahmasuk"
                                        value={this.state.jumlahmasuk}
                                        onChange={this.onChangeJumlahMasuk} />
                                </FormGroup>
                            </Col>

                            <Col md={3}>
                                <FormGroup>
                                    <Label for="exampleSelect" className="judul-input">Satuan</Label>
                                    <Input type="select"
                                        id="satuanmasuk"
                                        value={this.state.satuanmasuk}
                                        onChange={this.onChangeSatuanMasuk} >
                                        <option>Kilogram</option>
                                        <option>Liter</option>
                                        <option>Unit</option>
                                    </Input>
                                </FormGroup>
                            </Col>

                        </Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleSelect" className="judul-input">Kategori</Label>
                                <Input type="select"
                                    id="kategorimasuk"
                                    value={this.state.kategorimasuk}
                                    onChange={this.onChangeKategoriMasuk} >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleCity" className="judul-input">Tanggal Masuk</Label>
                                <Input type="date"
                                    id="tanggalmasuk"
                                    value={this.state.tanggalmasuk}
                                    onChange={this.onChangeTanggalMasuk} />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="#" className="judul-input">Keterangan</Label>
                                <Input type="textarea"
                                    id="keteranganmasuk"
                                    value={this.state.keteranganmasuk}
                                    onChange={this.onChangeKeteranganMasuk} />
                            </FormGroup>
                        </Col>

                        <Button className="btn-submit" type="submit" >
                            <Label>Submit</Label>
                        </Button>

                    </Form>

                </div>
            </div>
        )
    }
}

export default Editbarangmasuk