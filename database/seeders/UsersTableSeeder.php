<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       $user = User::create([
            'name' => 'John Morton',
            'email' => 'admin@abc.com',
            'password' => bcrypt('123456')
        ]);

        $user->assignRole('admin');
    }
}
