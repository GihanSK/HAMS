<?php

namespace App\Http\Controllers\Backend\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\PatientProfile;

class PatientProfileController extends Controller
{
    public function List()
    {
        $data = User::join('patient_profiles','users.id','patient_profiles.patient_id')->get();

        return response()->json($data);
    }

    public function ShowProfile(Request $request)
    {
        $user_id = $request->user_id;
        $data =  User::join('patient_profiles','users.id','patient_profiles.patient_id')
        ->where('patient_profiles.patient_id','=',$user_id)->first();


        return response()->json($data);
    }

    public function destroy($patient_id) {

        User::where('id',$patient_id)->delete();

        return response()->json([
            'status' => true
        ]);
    }

    public function destroyMass( Request $request ) {
        $request->validate([
            'ids' => 'required|array'
        ]);

        User::destroy($request->ids);

        return response()->json([
            'status' => true
        ]);
    }

    public function updatePatient(Request $request)
    {
        $patient_id = $request->patient_id;
        $patientData = PatientProfile::where('id',$patient_id)->first();
        

        $user = User::where('id',$patientData->patient_id)->first();
        $user->first_name = $request->first_name;
        $user->last_name = $request->last_name;
        $user->contact_no = $request->contact_no;
        $user->gender = $request->gender;
        $user->save();

        $data = [
            'data'=>true,
            'message'=>'Update Successfull'
        ];

        return response()->json($data);
    }
}
