<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Datamasuk extends Model
{
    protected $table = "barang_masuk";
 
    protected $fillable = [
        'namamasuk',
        'merkmasuk',
        'jumlahmasuk',
        'satuanmasuk',
        'tanggalmasuk',
        'kategorimasuk',
        'keteranganmasuk',
    ];
}
