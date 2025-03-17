<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;


class AlterTableNewCols extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
           $table->string('first_name')->after('name')->nullable();
           $table->string('last_name')->after('first_name')->nullable();
           $table->string('contact_no')->after('last_name')->nullable();
           $table->string('gender')->after('contact_no')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropcolumn('first_name');
            $table->dropcolumn('last_name');
            $table->dropcolumn('contact_no');
            $table->dropcolumn('gender');
        });
    }
}
