<?php

namespace App\Http\Controllers\Backend\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\DoctorProfile;

class DoctorsPendingProfileController extends Controller
{
    public function PendingList()
    {
        $query = DoctorProfile::join('users','doctor_profiles.doctor_id','=','users.id')->where('doctor_profiles.status','pending');

        $pendingList = $query->get([
            'doctor_profiles.profile_img_status',
            'doctor_profiles.medical_license_status',
            'doctor_profiles.experience_status',
            'users.*',

        ]);

        $data = [
            'success'=>true,
            'data'=>$pendingList
        ];

        return response()->json($pendingList);
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

    public function rejectProfile(Request $request)
    {
            $doctor_id = $request->doctor_id;

            DoctorProfile::where('doctor_id',$doctor_id)->update([
                'status' => 'rejected',
                'comment'=>$request->comment
            ]);



            $data = [
               'success'=>true,
                'message'=>'Profile has been rejected'
            ];


        return response()->json($data);
    }

    public function approveProfile(Request $request)
    {
        $doctor_id = $request->doctor_id;

        DoctorProfile::where('doctor_id',$doctor_id)->update([
            'status' => 'approved',
            'comment'=>$request->comment
        ]);



        $data = [
           'success'=>true,
            'message'=>'Profile has been approved'
        ];

        return response()->json($data);
    }
}
