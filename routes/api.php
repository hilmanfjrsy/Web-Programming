<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::get('databarangs','Api\DatabaranggudangController@index');
Route::get('databarang/{id}','Api\DatabaranggudangController@show');
Route::post('databarang','Api\DatabaranggudangController@store');
Route::put('databarang/{id}','Api\DatabaranggudangController@update');
Route::delete('databarang/{id}','Api\DatabaranggudangController@delete');

Route::get('datamasuks', 'Api\DatamasukController@index');
Route::get('datamasuk/{id}','Api\DatamasukController@show');
Route::post('datamasuk', 'Api\DatamasukController@store');
Route::put('datamasuk/{id}', 'Api\DatamasukController@update');
Route::delete('datamasuk/{id}','Api\DatamasukController@delete');

Route::get('datakeluars', 'Api\DatakeluarController@index');
Route::get('datakeluar/{id}','Api\DatakeluarController@show');
Route::post('datakeluar', 'Api\DatakeluarController@store');
Route::put('datakeluar/{id}', 'Api\DatakeluarController@update');
Route::delete('datakeluar/{id}','Api\DatakeluarController@delete');