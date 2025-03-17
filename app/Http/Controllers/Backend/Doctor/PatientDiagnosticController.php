<?php

namespace App\Http\Controllers\Backend\Doctor;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Prescription;
use App\Models\PatientDiagnostic;
use Carbon\Carbon;
use App\Models\Appoinment;
use Illuminate\Support\Facades\Auth;

class PatientDiagnosticController extends Controller
{
    public function addMedicalDiagnostic(Request $request)
    {
        $patient_id = $request->patient_id;
        $doctor_id = Auth::id();
        $appoinment_id = $request->appoinment_id;
        $symptoms = $request->symptoms;
        $disease = $request->disease;
        $extra_note = $request->extra_note;
        $medical_transcription = $request->medical_transcription;
        $prescription = $request->prescription;

        $medical_reports = json_decode($medical_transcription,true);
        $reports = "";

        if($medical_reports['radiology_report'] == 'Yes'){
            $reports = 'radiology_report';
        }

        if($medical_reports['laboratory_report'] == 'Yes'){
            $reports = 'laboratory_report';
        }



        $diagnostic = PatientDiagnostic::create([
           'user_id'=>$patient_id,
           'doctor_id'=>$doctor_id,
           'appoinment_id'=>$appoinment_id,
           'patient_symtoms'=>$symptoms,
           'patient_disease'=>$disease,
           'extra_note'=>$extra_note,
           'medical_transcription'=>$reports,
           'created_at'=>Carbon::now(),
           'updated_at'=>Carbon::now()
        ]);

        Appoinment::where('id',$appoinment_id)->update([
            'status'=>'completed'
        ]);

        $prescriptionData = json_decode($prescription, true);

        foreach($prescriptionData as $data){

            $prescription = Prescription::create([
                'diagnostic_id'=>$diagnostic->id,
                'drug'=>$data['drug'],
                'strength'=>$data['strength'],
                'type'=>$data['type'],
                'frequency'=>$data['frequency'],
                'created_at'=>Carbon::now(),
                'updated_at'=>Carbon::now()
            ]);
        }

        $result = [
            'message'=>'Appoinment marked as completed'
        ];

        return response()->json($result);




    }
}
