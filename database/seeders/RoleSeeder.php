<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roles = [
            [
                'name'  => 'User',
            ],
            [
                'name'  => 'Admin',
            ],
            [
                'name'  => 'Client',
            ],
            [
                'name'  => 'Guest',
            ],  
        ];

        foreach($roles as $role)
        {
            Role::updateOrCreate(['name' => $role['name'] ],['name' => $role['name']]);
        }

        return true ;
    }
}
