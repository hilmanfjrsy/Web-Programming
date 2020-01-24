<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Datakeluar;

class DatakeluarController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $result= Datakeluar::all();
        return $result;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $datakeluar=new Datakeluar([
            'namakeluar' => $request->get('namakeluar'),
            'merkkeluar' => $request->get('merkkeluar'),
            'tanggalkeluar' => $request->get('tanggalkeluar'),
            'jumlahkeluar' => $request->get('jumlahkeluar'),
            'satuankeluar' => $request->get('satuankeluar'),
            'kategorikeluar' => $request->get('kategorikeluar'),
            'keterangankeluar' => $request->get('keterangankeluar'),
            'suratkeluar' => $request->get('suratkeluar'),
            'tujuankeluar' => $request->get('tujuankeluar'),
        ]);
        $datakeluar->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Datakeluar::find($id);
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
        $datakeluar = Datakeluar::findOrFail($id);
        $datakeluar ->namakeluar = $request->get('namakeluar');
        $datakeluar ->merkkeluar = $request->get('merkkeluar');
        $datakeluar ->tanggalkeluar = $request->get('tanggalkeluar');
        $datakeluar ->jumlahkeluar = $request->get('jumlahkeluar');
        $datakeluar ->satuankeluar = $request->get('satuankeluar');
        $datakeluar ->kategorikeluar = $request->get('kategorikeluar');
        $datakeluar ->keterangankeluar = $request->get('keterangankeluar');
        $datakeluar ->suratkeluar = $request->get('suratkeluar');
        $datakeluar ->tujuankeluar = $request->get('tujuankeluar');
        $datakeluar ->save();
        return $datakeluar;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $datakeluar = Datakeluar::findOrFail($id);
        $datakeluar->delete();

        return response()->json('Product Deleted Successfully.');
    }
}
