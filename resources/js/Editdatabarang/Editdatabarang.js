import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import './Editdatabarang.css';
import axios from 'axios';
import Success from '../Success';
import Error from '../Error';
import { Form, FormGroup, Label, Input, Col, Row, Button } from 'reactstrap';

class Editdatabarang extends Component {

    constructor(props) {
        super(props);
        this.onChangeNamaBarang = this.onChangeNamaBarang.bind(this);
        this.onChangeMerkBarang = this.onChangeMerkBarang.bind(this);
        this.onChangeJumlahBarang = this.onChangeJumlahBarang.bind(this);
        this.onChangeSatuanBarang = this.onChangeSatuanBarang.bind(this);
        this.onChangeKategoriBarang = this.onChangeKategoriBarang.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            namabarang: '',
            merkbarang: '',
            jumlahbarang: '',
            kategoribarang: '',
            satuanbarang: '',
            alert_message: '',
        }
    }

    componentDidMount() {
        axios.get('/api/databarang/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    namabarang: response.data.namabarang,
                    merkbarang: response.data.merkbarang,
                    satuanbarang: response.data.satuanbarang,
                    jumlahbarang: response.data.jumlahbarang,
                    kategoribarang: response.data.kategoribarang,
                });
            });
    }

    onChangeNamaBarang(e) {
        this.setState({
            namabarang: e.target.value
        });
    }

    onChangeMerkBarang(e) {
        this.setState({
            merkbarang: e.target.value
        });
    }

    onChangeJumlahBarang(e) {
        this.setState({
            jumlahbarang: e.target.value
        });
    }

    onChangeSatuanBarang(e) {
        this.setState({
            satuanbarang: e.target.value
        });
    }

    onChangeKategoriBarang(e) {
        this.setState({
            kategoribarang: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const databarang = {
            namabarang: this.state.namabarang,
            merkbarang: this.state.merkbarang,
            jumlahbarang: this.state.jumlahbarang,
            satuanbarang: this.state.satuanbarang,
            kategoribarang: this.state.kategoribarang,
        }

        axios.put('/api/databarang/' + this.props.match.params.id, databarang)
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
                <div className="contain-barang">

                    <Form onSubmit={this.onSubmit} action='/api/databarang' method='post'>

                        <Label className="judul-barang">Tambah Barang Baru</Label>
                        {this.state.alert_message == "Success" ? <Success /> : null}
                        {this.state.alert_message == "Error" ? <Error /> : null}
                        <Col md={6}>
                            <FormGroup >
                                <Label for="namabarang" className="judul-input">Nama Barang</Label>

                                <Input type="text"
                                    id="namabarang"
                                    value={this.state.namabarang}
                                    onChange={this.onChangeNamaBarang}
                                    placeholder="Nama Barang" />
                            </FormGroup>
                        </Col>
                        <Col md={6}>

                            <FormGroup>
                                <Label className="judul-input"> Merk Barang</Label>
                                <Input type="text" placeholder="Merk Barang"
                                    id="merkbarang"
                                    value={this.state.merkbarang}
                                    onChange={this.onChangeMerkBarang} />
                            </FormGroup>
                        </Col>

                        <Col md={6}>
                            <FormGroup>
                                <Label className="judul-input">Jumlah</Label>
                                <Input type="number" placeholder="0"
                                    id="jumlahbarang"
                                    value={this.state.jumlahbarang}
                                    onChange={this.onChangeJumlahBarang} />
                            </FormGroup>
                        </Col>

                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleSelect" className="judul-input">Satuan</Label>
                                <Input type="text"
                                    id="satuanbarang"
                                    placeholder="Satuan Barang"
                                    value={this.state.satuanbarang}
                                    onChange={this.onChangeSatuanBarang} >
                                </Input>
                            </FormGroup>
                        </Col>

                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleSelect" className="judul-input">Kategori</Label>
                                <Input type="text"
                                    placeholder="Kategori Barang"
                                    id="kategoribarang"
                                    value={this.state.kategoribarang}
                                    onChange={this.onChangeKategoriBarang} >
                                </Input>
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

export default Editdatabarang