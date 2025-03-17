<?php

namespace App\Http\Controllers\Backend\Patient;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\PatientDiagnostic;
use App\Models\Prescription;
use App\Models\medicineSchedule;
use Illuminate\Support\Facades\Auth;

class MedicineTrackerController extends Controller
{
    public function GetlistOfDisease()
    {
        $AuthId = Auth::id();

        $query = PatientDiagnostic::where('user_id', '=', $AuthId)
        ->join('users as doctor','doctor.id','=','patient_diagnostics.doctor_id')
        ->join('doctor_profiles','doctor_profiles.doctor_id','=','patient_diagnostics.doctor_id');


        $List = $query->get([
            'patient_diagnostics.*',
            'doctor.name as doctor_name',
            'doctor_profiles.doctor_type as doctor_category'
        ]);


        $data = [
            'success'=>true,
            'data'=>$List
        ];

        return response()->json($data);

    }


    public function GetPresciptionData(Request $request)
    {
        $diagnostic_id = $request->diagnostic_id;
        $AuthId = Auth::id();

        $prescription = Prescription::where('diagnostic_id', '=', $diagnostic_id)->get();
                //  ->join('patient_diagnostics','patient_diagnostics.id','=','prescriptions.diagnostic_id');

        $medicalLog = PatientDiagnostic::where('id', '=', $diagnostic_id)->first();

        $List = [
            'Prescription'=> $prescription,
            'medicalLog'=>$medicalLog
        ];


        return response()->json($List);

    }

    public function SaveTimeslots(Request $request)
    {
       $AuthId = Auth::id();
       $diagnostic_id =  $request->input('diagnostic_id');
       $frequency =  $request->input('frequency');
       $prescription_id =  $request->input('prescription_id');
       $timeslot1 =  $request->input('timeslot1');
       $timeslot2 =  $request->input('timeslot2');
       $timeslot3 =  $request->input('timeslot3');

       $exist = medicineSchedule::where('prescription_id',$prescription_id)->first();
       if($exist){
        $exist->frequency = $frequency;
        $exist->selected_time_1 = $timeslot1;
        $exist->selected_time_2 = $timeslot2;
        $exist->selected_time_3 = $timeslot3;
        $exist->user_id = $AuthId;
        $exist->save();

       }else{
        $Schedule = new medicineSchedule();
        $Schedule->prescription_id = $prescription_id;
        $Schedule->frequency = $frequency;
        $Schedule->selected_time_1 = $timeslot1;
        $Schedule->selected_time_2 = $timeslot2;
        $Schedule->selected_time_3 = $timeslot3;
        $Schedule->user_id = $AuthId;
        $Schedule->save();
       }




        $data = [
            'success'=>true,
            'message'=>'Timeslots are scheduled'
        ];

        return response()->json($data);

    }

    public function viewTimeslots(Request $request)
    {
        $prescription_id = $request->input('prescription_id');

        $data = medicineSchedule::where('prescription_id',$prescription_id)->first();

        return response()->json($data);
    }
}
