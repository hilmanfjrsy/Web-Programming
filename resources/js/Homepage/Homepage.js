import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Label, Input, Table, Button } from 'reactstrap';
import './Homepage.css';
import { AiFillFolderAdd } from 'react-icons/ai';
import { GoSignOut, GoSignIn } from 'react-icons/go';
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar"

function Homepage() {
  return (
    <div>
      <Navbar />

      <div className="container">
        <Link to={"/Tambahbarang"}>
          <div className="add-item">
            <AiFillFolderAdd className="icon-additem" />
            <Label className="add-itemtext">Tambah<br />Barang</Label>
          </div>
        </Link>
        
        <Link to={"/Barangmasuk"}>
          <div className="in-item">
            <GoSignIn className="icon-in" />
            <Label className="add-itemtext">Barang<br />Masuk</Label>
          </div>
        </Link>

        <Link to={"/Barangkeluar"}>
          <div className="out-item">
            <GoSignOut className="icon-out" />
            <Label className="add-itemtext">Barang<br />Keluar</Label>
          </div>
        </Link>
      </div>

      <div className="table-item">
        <Table size="sm" hover bordered className="tab-item"  >
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
            <tr>
              <th scope="row">1</th>
              <td>Pipa</td>
              <td>Rucika</td>
              <td align="center">10</td>
              <td align="center">Unit</td>
              <td align="center">1</td>
              <th><FaEdit className="icon-edit" /> <MdDelete className="icon-delete" /></th>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Homepage;
