<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterTableDoctorProfilesAddNewColumns extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('doctor_profiles', function (Blueprint $table) {
           $table->string('doctor_type')->nullable();
           $table->float('doctor_fee')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('doctor_profiles', function (Blueprint $table) {
            $table->dropcolumn('doctor_type');
            $table->dropColumn('doctor_fee');
        });
    }
}
