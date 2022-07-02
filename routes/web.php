<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\{HomeController, RoleController, PermissionController, UserController};

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [HomeController::class, 'index'])->name('home');

Route::resources([
    'role'      => RoleController::class,
    'permission'=> PermissionController::class,
    'user'=> UserController::class,
]);
