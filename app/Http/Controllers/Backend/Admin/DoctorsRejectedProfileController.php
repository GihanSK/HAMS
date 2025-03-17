<?php

namespace App\Http\Controllers\Backend\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\DoctorProfile;

class DoctorsRejectedProfileController extends Controller
{
    public function rejectedList(){
        $query = DoctorProfile::join('users','doctor_profiles.doctor_id','=','users.id')->where('doctor_profiles.status','rejected');

        $rejectedList = $query->get([
            'doctor_profiles.profile_img_status',
            'doctor_profiles.medical_license_status',
            'doctor_profiles.experience_status',
            'users.*',

        ]);

        $data = [
            'success'=>true,
            'data'=>$rejectedList
        ];

        return response()->json($rejectedList);
    }

    public function viewRecord(Request $request)
    {
        $doctor_id = $request->doctor_id;

        $query = DoctorProfile::join('users','doctor_profiles.doctor_id','=','users.id')->where('doctor_profiles.doctor_id',$doctor_id);

        $List = $query->get([
            'doctor_profiles.*',
            'users.*',

        ]);

        $data = [
            'success'=>true,
            'data'=>$List
        ];

        return response()->json($data);

    }
}
