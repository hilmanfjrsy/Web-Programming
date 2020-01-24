<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Datamasuk;

class DatamasukController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $result= Datamasuk::all();
        return $result;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    //public function create()
    //{
        //
    //}

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $datamasuk=new Datamasuk([
            'namamasuk' => $request->get('namamasuk'),
            'merkmasuk' => $request->get('merkmasuk'),
            'tanggalmasuk' => $request->get('tanggalmasuk'),
            'jumlahmasuk' => $request->get('jumlahmasuk'),
            'satuanmasuk' => $request->get('satuanmasuk'),
            'kategorimasuk' => $request->get('kategorimasuk'),
            'keteranganmasuk' => $request->get('keteranganmasuk'),
        ]);
        $datamasuk->save();

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Datamasuk::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $datamasuk = Datamasuk::findOrFail($id);
        $datamasuk ->namamasuk = $request->get('namamasuk');
        $datamasuk ->merkmasuk = $request->get('merkmasuk');
        $datamasuk ->tanggalmasuk = $request->get('tanggalmasuk');
        $datamasuk ->jumlahmasuk = $request->get('jumlahmasuk');
        $datamasuk ->satuanmasuk = $request->get('satuanmasuk');
        $datamasuk ->kategorimasuk = $request->get('kategorimasuk');
        $datamasuk ->keteranganmasuk = $request->get('keteranganmasuk');
        $datamasuk ->save();
        return $datamasuk;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function delete(Request $request, $id)
    {
        $datamasuk = Datamasuk::findOrFail($id);
        $datamasuk->delete();

        return response()->json('Product Deleted Successfully.');
    }
}
