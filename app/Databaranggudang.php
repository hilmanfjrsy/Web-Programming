<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Databaranggudang extends Model
{
    protected $table='data_barang_gudang';

    protected $fillable = [
        'namabarang',
        'merkbarang',
        'jumlahbarang',
        'satuanbarang',
        'kategoribarang',
    ];
    
}
