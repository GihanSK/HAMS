<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\DoctorProfile;
use App\Models\PatientProfile;

class RegisterController extends Controller
{
    public function SignUp(Request $request)
    {
        $this->validate($request,[
            'first_name'=>'required',
            'last_name'=>'required',
            'email'=>'required|unique:users,email',
            'contact_no'=>'required',
            'password' => 'required|confirmed|min:6',
         ]);

         $first_name = $request->input('first_name');
         $last_name = $request->input('last_name');
         $contact_no = $request->input('contact_no');
         $date_of_birth =  $request->input('date_of_birth');
         $password = $request->input('password');
         $email = $request->input('email');
         $gender = $request->input('gender');

        //  $today = Carbon::now();
        //  $age = $today->diff(Carbon::parse($date_of_birth));


         $user = User::create([
            'name'=>$first_name." ".$last_name,
            'first_name'=>$first_name,
            'last_name'=>$last_name,
            'contact_no'=>$contact_no,
            'gender'=>$gender,
            'email'=>$email,
            'password'=>Hash::make($password)

         ]);



         $role = $request->input('role');
         if($role == 'patient'){
            $user->assignRole('patient');
            $patientProfile = new PatientProfile();
            $patientProfile->patient_id = $user->id;
            $patientProfile->save();
         }

         if($role == 'doctor'){
            $user->assignRole('doctor');

            $Doctprofile = new DoctorProfile();
            $Doctprofile->doctor_id = $user->id;
            $Doctprofile->Save();
        }



        return redirect()->back()->withSuccess('You have successfully registered');


    }
}
