<?php

namespace App\Http\Controllers\Backend\Doctor;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\DoctorProfile;
use App\Models\User;

class ProfileController extends Controller
{
    public function GetProfileData(Request $request)
    {
        $doctor_id = $request->input('doctor_id');

        $query = DoctorProfile::join('users','doctor_profiles.doctor_id','=','users.id')->where('doctor_profiles.doctor_id',$doctor_id);

        $profileData = $query->get([
            'doctor_profiles.*',
            'users.*',

        ]);

        $data = [
            'success'=>true,
            'data'=>$profileData
        ];

        return response()->json($data);
    }

    public function updateProfile(Request $request)
    {
        $doctor_id = $request->input('doctor_id');
        $first_name = $request->input('first_name');
        $last_name = $request->input('last_name');
        $email = $request->input('email');
        $contact_no = $request->input('contact_no');
        $gender = $request->input('gender');
        $experience = $request->input('experience');
        $doctor_type = $request->input('doctor_type');


        try{

            $profile = DoctorProfile::where('doctor_id',$doctor_id)->first();

            //if profile update
            if ($request->input('profile_img_updated') == true ) {
                $profile->experience = $experience;
                $profile->status = 'pending';
                if ($request->hasFile('profile_img')) {
                    $profile_img_path= $request->file('profile_img')->store('images/profile_img', 'public');
                    $profile->profile_img_status = true;
                }
                $profile->profile_img = $profile_img_path;
                $profile->doctor_type = $doctor_type;
                $profile->doctor_fee = $request->doctor_fee;
                $profile->save();

                $user = User::where('id',$doctor_id)->first();
                $user->first_name = $first_name;
                $user->last_name = $last_name;
                $user->name = $first_name. " ".$last_name;
                $user->email = $email;
                $user->contact_no = $contact_no;
                $user->gender = $gender;

                $user->save();

            }else if($request->input('medical_license_updated') == true ) {
                $profile->experience = $experience;
                $profile->status = 'pending';

                if ($request->hasFile('medical_license')) {
                    $medical_license_img_path= $request->file('medical_license')->store('images/medical_license', 'public');
                    $profile->medical_license_status = true;
                }
                $profile->medical_license_doc = $medical_license_img_path;
                $profile->doctor_type = $doctor_type;
                $profile->doctor_fee = $request->doctor_fee;
                $profile->save();

                $user = User::where('id',$doctor_id)->first();
                $user->first_name = $first_name;
                $user->last_name = $last_name;
                $user->name = $first_name. " ".$last_name;
                $user->email = $email;
                $user->contact_no = $contact_no;
                $user->gender = $gender;

                $user->save();
            }else if($profile->medical_license_status == true && $profile->profile_img_status == true){

                $profile->experience = $experience;
                $profile->experience_status = true;
                $profile->doctor_type = $doctor_type;
                $profile->status = 'pending';
                $profile->doctor_fee = $request->doctor_fee;
                $profile->save();

                $user = User::where('id',$doctor_id)->first();
                $user->first_name = $first_name;
                $user->last_name = $last_name;
                $user->email = $email;
                $user->contact_no = $contact_no;
                $user->gender = $gender;
                $user->save();
            }else{
                $profile->experience = $experience;
                $profile->experience_status = true;
                $profile->doctor_type = $doctor_type;
                $profile->doctor_fee = $request->doctor_fee;
                if ($request->hasFile('profile_img')) {
                    $profile_img_path= $request->file('profile_img')->store('images/profile_img', 'public');
                    $profile->profile_img_status = true;
                }

                if ($request->hasFile('medical_license')) {
                    $medical_license_img_path= $request->file('medical_license')->store('images/medical_license', 'public');
                    $profile->medical_license_status = true;
                }
                $profile->profile_img = $profile_img_path;
                $profile->medical_license_doc = $medical_license_img_path;
                $profile->status = 'pending';
                $profile->save();

                $user = User::where('id',$doctor_id)->first();
                $user->first_name = $first_name;
                $user->last_name = $last_name;
                $user->email = $email;
                $user->contact_no = $contact_no;
                $user->gender = $gender;
                $user->save();
            }

            $data = [
                'success'=>true,
                'message'=>'Your profile has been updated, Admin will review your profile'
            ];

        }catch(Exception $err){
            $data = [
                'success'=>false,
                'message'=>$err
            ];
        }


        return response()->json($data);

    }
}
