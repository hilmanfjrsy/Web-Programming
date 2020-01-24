<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDataBarangGudang extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('data_barang_gudang', function (Blueprint $table) {
            $table->increments('id');
            $table->string('namabarang');
            $table->string('merkbarang');
            $table->integer('jumlahbarang');
            $table->string('satuanbarang');
            $table->string('kategoribarang');
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
        Schema::dropIfExists('data_barang_gudang');
    }
}
