<?php

namespace App\Http\Controllers\Backend\Patient;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Appoinment;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Carbon\Carbon;

class AppoinmentController extends Controller
{
    public function getPendingAppoinmentForPatient()
    {

        $AuthId = Auth::id();

        $currentDate = Carbon::now();
        // Get the first day of the current month

        $format_date_start = $currentDate->format('Y-m-d');

        // Get the last day of the current month
        $lastDayOfMonth = $currentDate->lastOfMonth();
        $format_date_end = $lastDayOfMonth->format('Y-m-d');


        $query = Appoinment::where('user_id', '=', $AuthId)->where('appoinments.status','payment-done')
                                ->whereBetween('appoinments.selected_timeslot', [$format_date_start, $format_date_end])
                                ->join('users','users.id','=','appoinments.user_id')
                                ->join('users as doctor','doctor.id','=','appoinments.doctor_id')
                                ->join('doctor_profiles','doctor_profiles.doctor_id','=','appoinments.doctor_id');

        $List = $query->get([
            'users.name as user_fullname',
            'users.contact_no as user_contact_no',
            'users.gender as user_gender',
            'users.email as user_email',
            'appoinments.*',
            'doctor.name as doctor_name',
            'doctor_profiles.doctor_type as doctor_category'
        ]);


        $data = [
            'success'=>true,
            'data'=>$List
        ];

        return response()->json($data);
    }


    public function getExpiredAppoinmentForPatient()
    {

        $AuthId = Auth::id();

        $currentDate = Carbon::now();
        // Get the first day of the current month

        $format_date_start = $currentDate->format('Y-m-d');

        // Get the last day of the current month
        $lastDayOfMonth = $currentDate->lastOfMonth();
        $format_date_end = $lastDayOfMonth->format('Y-m-d');


        $query = Appoinment::where('user_id', '=', $AuthId)->where('appoinments.status','payment-done')
                                ->whereDate('appoinments.selected_timeslot', '<=',$format_date_start)
                                ->join('users','users.id','=','appoinments.user_id')
                                ->join('users as doctor','doctor.id','=','appoinments.doctor_id')
                                ->join('doctor_profiles','doctor_profiles.doctor_id','=','appoinments.doctor_id');



        $List = $query->get([
            'users.name as user_fullname',
            'users.contact_no as user_contact_no',
            'users.gender as user_gender',
            'users.email as user_email',
            'appoinments.*',
            'doctor.name as doctor_name',
            'doctor_profiles.doctor_type as doctor_category'
        ]);

        $data = [
            'success'=>true,
            'data'=>$List
        ];

        return response()->json($data);
    }

    public function getCompletedAppoinmentForPatient()
    {

        $AuthId = Auth::id();

        $currentDate = Carbon::now();
        // Get the first day of the current month

        $format_date_start = $currentDate->format('Y-m-d');

        // Get the last day of the current month
        $lastDayOfMonth = $currentDate->lastOfMonth();
        $format_date_end = $lastDayOfMonth->format('Y-m-d');


        $query = Appoinment::where('user_id', '=', $AuthId)->where('appoinments.status','completed')
                                ->join('users','users.id','=','appoinments.user_id')
                                ->join('users as doctor','doctor.id','=','appoinments.doctor_id')
                                ->join('doctor_profiles','doctor_profiles.doctor_id','=','appoinments.doctor_id');



        $List = $query->get([
            'users.name as user_fullname',
            'users.contact_no as user_contact_no',
            'users.gender as user_gender',
            'users.email as user_email',
            'appoinments.*',
            'doctor.name as doctor_name',
            'doctor_profiles.doctor_type as doctor_category'
        ]);

        $data = [
            'success'=>true,
            'data'=>$List
        ];

        return response()->json($data);
    }
}
