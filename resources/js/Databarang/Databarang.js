import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import { Table, Label } from 'reactstrap';
import axios from 'axios';
import './Databarang.css';
import { Link } from 'react-router-dom';

class Databarang extends Component {

    constructor() {
        super();
        this.state = {
            data_barang_gudang: []
        }
    }

    componentDidMount() {
        axios.get('/api/databarangs')
            .then(response => {
                this.setState({ data_barang_gudang: response.data });
            });
    }

    refreshList(){
        fetch('/api/databarangs')
        .then(response=>response.json())
        .then(data=>{
            this.setState({data_barang_gudang:data});
        });
    }

    componentDidUpdate(){
        this.refreshList();
    }

    onDelete(databarang)
    {

        if(window.confirm('Apakah anda sudah yakin?'))
        {
            fetch('/api/databarang/'+databarang.id,{
                method:'DELETE',
                header:{'Accept':'application/json',
                'Content-Type':'application/json'
            }
            })
        }
    }


    render() {
        return (
            <div>
                <Navbar />
                <div className="table-data">
                    <Label className="judul-data">Data Semua Barang</Label>
                    <Table size="sm" hover bordered className="tab-data"  >
                        <thead >
                            <tr >
                                <th className="tab-no">No</th>
                                <th className="tab-nama">Nama Barang</th>
                                <th className="tab-merk">Merk Barang</th>
                                <th className="tab-jumlah">Jumlah</th>
                                <th className="tab-satuan">Satuan</th>
                                <th className="tab-kategori">Kategori</th>
                                <th className="tab-aksi">Aksi</th>
                            </tr>
                        </thead>
                        <tbody >
                            {
                                this.state.data_barang_gudang.map(databarang => {
                                    return (
                                        <tr>
                                            <th scope="row">{databarang.id}</th>
                                            <td>{databarang.namabarang}</td>
                                            <td>{databarang.merkbarang}</td>
                                            <td align="center">{databarang.jumlahbarang}</td>
                                            <td align="center">{databarang.satuanbarang}</td>
                                            <td align="center">{databarang.kategoribarang}</td>
                                            <th>
                                            <Link to={'/Editdatabarang/'+databarang.id}>
                                            <FaEdit className="icon-edit" />
                                            </Link>
                                            <MdDelete className="icon-delete" onClick={this.onDelete.bind(this,databarang)}/></th>
                                        </tr>
                                    )
        })
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}

export default Databarang