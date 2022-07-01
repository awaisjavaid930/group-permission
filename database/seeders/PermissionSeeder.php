<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Permission;
class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $permissions = [
            [
                'name'  =>  'user.index',
            ],
            [
                'name'  =>  'user.create',
            ],
            [
                'name'  =>  'user.edit',
            ],
            [
                'name'  =>  'user.delete',
            ],
            [
                'name'  =>  'post.index',
            ],
            [
                'name'  =>  'post.create',
            ],
            [
                'name'  =>  'post.edit',
            ],
            [
                'name'  =>  'post.delete',
            ],
            [
                'name'  =>  'category.index',
            ],
            [
                'name'  =>  'category.create',
            ],
            [
                'name'  =>  'category.edit',
            ],
            [
                'name'  =>  'category.delete',
            ],
            [
                'name'  =>  'cart.index',
            ],
            [
                'name'  =>  'cart.create',
            ],
            [
                'name'  =>  'cart.edit',
            ],
            [
                'name'  =>  'cart.delete',
            ],
            [
                'name'  =>  'product.index',
            ],
            [
                'name'  =>  'product.create',
            ],
            [
                'name'  =>  'product.edit',
            ],
            [
                'name'  =>  'product.delete',
            ],
            [
                'name'  =>  'order.index',
            ],
            [
                'name'  =>  'order.create',
            ],
            [
                'name'  =>  'order.edit',
            ],
            [
                'name'  =>  'order.delete',
            ],
        ];

        foreach ($permissions as $permissions) {
            Permission::updateOrCreate(['permission' => $permissions['name']],['permission' => $permissions['name']]);
        }
        return true ;
    }
}
