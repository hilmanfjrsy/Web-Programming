<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBarangKeluar extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('barang_keluar', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('tanggalkeluar');
            $table->integer('suratkeluar');
            $table->string('namakeluar');
            $table->string('merkkeluar');
            $table->integer('jumlahkeluar');
            $table->string('satuankeluar');
            $table->string('tujuankeluar');
            $table->string('kategorikeluar');
            $table->string('keterangankeluar');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('barang_keluar');
    }
}
