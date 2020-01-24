<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Datakeluar extends Model
{
    protected $table = "barang_keluar";

    protected $fillable=[
        'namakeluar',
        'merkkeluar',
        'jumlahkeluar',
        'satuankeluar',
        'tanggalkeluar',
        'kategorikeluar',
        'keterangankeluar',
        'tujuankeluar',
        'suratkeluar',
    ];
}
