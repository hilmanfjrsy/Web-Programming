<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Databaranggudang;

class DatabaranggudangController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $result= Databaranggudang::all();
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
        $databarang=new Databaranggudang([
            'namabarang' => $request->get('namabarang'),
            'merkbarang' => $request->get('merkbarang'),
            'jumlahbarang' => $request->get('jumlahbarang'),
            'satuanbarang' => $request->get('satuanbarang'),
            'kategoribarang' => $request->get('kategoribarang'),
            
        ]);
        $databarang->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Databaranggudang::find($id);
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
        $databarang = Databaranggudang::findOrFail($id);
        $databarang ->namabarang = $request->get('namabarang');
        $databarang ->merkbarang = $request->get('merkbarang');
        $databarang ->jumlahbarang = $request->get('jumlahbarang');
        $databarang ->satuanbarang = $request->get('satuanbarang');
        $databarang ->kategoribarang = $request->get('kategoribarang');
        $databarang ->save();
        return $databarang;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function delete(Request $request, $id)
    {
        $databarang = Databaranggudang::findOrFail($id);
        $databarang->delete();
        return 204;
    }
}
