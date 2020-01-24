import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import './Databarangmasuk.css';
import { Table, Label } from 'reactstrap';
import { MdDelete} from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Databarangmasuk extends Component {

    constructor(){
        super();
            this.state={
                barang_masuk:[]
                
            }
    }

    
    componentDidMount(){
        axios.get('/api/datamasuks')
        .then(response=>{
            this.setState({barang_masuk:response.data});
        });
    }

    refreshList(){
        fetch('/api/datamasuks')
        .then(response=>response.json())
        .then(data=>{
            this.setState({barang_masuk:data});
        });
    }

    componentDidUpdate(){
        this.refreshList();
    }

    onDelete(datamasuk)
    {

        if(window.confirm('Apakah anda sudah yakin?'))
        {
            fetch('/api/datamasuk/'+datamasuk.id,{
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
                <div className="table-data-masuk">
                    <Label className="judul-data-masuk">Data Barang Masuk</Label>
                    <Table size="sm" hover bordered className="tab-masuk"  >
                        <thead >
                            <tr >
                                <th className="tab-no-masuk">No</th>
                                <th className="tab-tanggal-masuk">Tanggal Masuk</th>
                                <th className="tab-nama-masuk">Nama Barang</th>
                                <th className="tab-merk-masuk">Merk Barang</th>
                                <th className="tab-jumlah-masuk">Jumlah</th>
                                <th className="tab-satuan-masuk">Satuan</th>
                                <th className="tab-kategori-masuk">Kategori</th>
                                <th className="tab-ket-masuk">Keterangan</th>
                                <th className="tab-aksi-masuk">Aksi</th>
                            </tr>
                        </thead>
                        <tbody >
                            {
                                this.state.barang_masuk.map(datamasuk=>{
                                    return(
                                        <React.Fragment key={datamasuk.id}>
                            <tr>
                                <th scope="row">{datamasuk.id}</th>
                                <td align="center">{datamasuk.tanggalmasuk}</td>
                                <td>{datamasuk.namamasuk}</td>
                                <td>{datamasuk.merkmasuk}</td>
                                <td align="center">{datamasuk.jumlahmasuk}</td>
                                <td align="center">{datamasuk.satuanmasuk}</td>
                                <td align="center">{datamasuk.kategorimasuk}</td>
                                <td>{datamasuk.keteranganmasuk}</td>
                                <th>
                                <Link to={'/Editbarangmasuk/'+datamasuk.id}>
                                <FaEdit className="icon-edit-masuk"  />
                                </Link>
                                <MdDelete className="icon-delete-masuk" onClick={this.onDelete.bind(this,datamasuk)} /></th>
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

export default Databarangmasuk