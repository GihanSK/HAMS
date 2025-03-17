<?php

namespace App\Http\Controllers\Backend\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\DoctorProfile;
use App\Models\PatientProfile;
use App\Models\Appoinment;
use App\Models\DoctorType;

class DashboardController extends Controller
{
    public function getWidgetData()
    {
        $pendingDoctor = DoctorProfile::where('status','pending')->count();
        $prejectDoctor = DoctorProfile::where('status','rejected')->count();
        $approvedDoctor = DoctorProfile::where('status','approved')->count();
        $patientCount = PatientProfile::count();
        $totalDoctorsCount = DoctorProfile::count();
        $totalAppoinmentCount = Appoinment::count();

        $data = [
            'success'=>true,
            'pendingDoctoProfilecount'=>$pendingDoctor,
            'rejectedDoctoProfilecount'=>$prejectDoctor,
            'approvedoctoProfilecount'=>$approvedDoctor,
            'patientCount'=>$patientCount,
            'totalDoctorCount'=>$totalDoctorsCount,
            'totalAppoinmentCount'=>$totalAppoinmentCount,

        ];

        return response()->json($data);
    }
}
