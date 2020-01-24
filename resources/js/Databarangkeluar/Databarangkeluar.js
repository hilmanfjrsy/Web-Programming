import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import './Databarangkeluar.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Table, Label } from 'reactstrap';
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Databarangkeluar extends Component {

    constructor(){
        super();
            this.state={
                barang_keluar:[]
                
            }
    }

    
    componentDidMount(){
        axios.get('/api/datakeluars')
        .then(response=>{
            this.setState({barang_keluar:response.data});
        });
    }

    refreshList(){
        fetch('/api/datakeluars')
        .then(response=>response.json())
        .then(data=>{
            this.setState({barang_keluar:data});
        });
    }

    componentDidUpdate(){
        this.refreshList();
    }

    onDelete(datakeluar)
    {

        if(window.confirm('Apakah anda sudah yakin?'))
        {
            fetch('/api/datakeluar/'+datakeluar.id,{
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
                <div className="table-data-keluar">
                <Label className="judul-data-keluar">Data Barang Keluar</Label>
                    <Table size="sm" hover bordered className="tab-keluar"  >
                        <thead >
                            <tr >
                                <th className="tab-no-keluar">No</th>
                                <th className="tab-surat-keluar">No Surat Jalan</th>
                                <th className="tab-tanggal-keluar">Tanggal Keluar</th>
                                <th className="tab-nama-keluar">Nama Barang</th>
                                <th className="tab-merk-keluar">Merk Barang</th>
                                <th className="tab-jumlah-keluar">Jumlah</th>
                                <th className="tab-satuan-keluar">Satuan</th>
                                <th className="tab-kategori-keluar">Kategori</th>
                                <th className="tab-tujuan-keluar">Tujuan</th>
                                <th className="tab-ket-keluar">Keterangan</th>
                                <th className="tab-aksi-keluar">Aksi</th>
                            </tr>
                        </thead>
                        <tbody >
                        {
                                this.state.barang_keluar.map(datakeluar=>{
                                    return(
                                        <React.Fragment key={datakeluar.id}>
                            <tr>
                                <th scope="row">{datakeluar.id}</th>
                                <td align="center">{datakeluar.suratkeluar}</td>
                                <td align="center">{datakeluar.tanggalkeluar}</td>
                                <td>{datakeluar.namakeluar}</td>
                                <td>{datakeluar.merkkeluar}</td>
                                <td align="center">{datakeluar.jumlahkeluar}</td>
                                <td align="center">{datakeluar.satuankeluar}</td>
                                <td align="center">{datakeluar.kategorikeluar}</td>
                                <td align="center">{datakeluar.tujuankeluar}</td>
                                <td>{datakeluar.keterangankeluar}</td>
                                <th>
                                    <Link to={'/Editbarangkeluar/'+datakeluar.id}>
                                    <FaEdit className="icon-edit-keluar" />
                                    </Link>
                                    <MdDelete className="icon-delete-keluar" onClick={this.onDelete.bind(this,datakeluar)} /></th>
                            </tr>
                            </React.Fragment>
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

export default Databarangkeluar