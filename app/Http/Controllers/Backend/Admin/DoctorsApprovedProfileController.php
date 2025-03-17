<?php

namespace App\Http\Controllers\Backend\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\DoctorProfile;

class DoctorsApprovedProfileController extends Controller
{
    public function approvedList(Request $request)
    {
        $query = DoctorProfile::join('users','doctor_profiles.doctor_id','=','users.id')->where('doctor_profiles.status','approved');

        $approvedList = $query->get([
            'doctor_profiles.profile_img_status',
            'doctor_profiles.medical_license_status',
            'doctor_profiles.experience_status',
            'users.*',

        ]);

        $data = [
            'success'=>true,
            'data'=>$approvedList
        ];

        return response()->json($approvedList);
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

    public function destroy($doctor_id) {

        DoctorProfile::where('patient_id',$doctor_id)->delete();
        User::where('id',$doctor_id)->delete();

        return response()->json([
            'status' => true
        ]);
    }

    public function destroyMass( Request $request ) {
        $request->validate([
            'ids' => 'required|array'
        ]);
        DoctorProfile::destroy($request->ids);
        User::destroy($request->ids);

        return response()->json([
            'status' => true
        ]);
    }
}
