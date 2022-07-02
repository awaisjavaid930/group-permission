<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    //
    public function index(Request $request)
    {
        $users = User::with('role')->get();
        // $records = $user->groupBy(function($item){
        //     return $item->created_at->format('Y-m-d');
        // });
        if($request->wantsJson()){
            $users = response()->json(['response' => 'success',  'users' => $users]); 
        }
        return view('users.index' , compact('users'));
    }

    public function create()
    {
        return view('users.create');
    }

    public function edit(User $user)
    {
        return view('users.edit');
    }
}
