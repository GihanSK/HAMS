<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDoctorProfilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('doctor_profiles', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('doctor_id');
            $table->string('profile_img')->nullable();
            $table->string('medical_license_doc')->nullable();
            $table->string('experience')->nullable();
            $table->boolean('profile_img_status')->default(false);
            $table->boolean('medical_license_status')->default(false);
            $table->boolean('experience_status')->default(false);
            $table->string('comment')->nullable();;
            $table->string('status')->default('pending');
            $table->string('reject_reason')->nullable();
            $table->timestamps();

            $table->foreign('doctor_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('doctor_profiles');
    }
}
