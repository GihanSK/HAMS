<?php

namespace App\Http\Controllers\Backend\Doctor;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Appoinment;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;

class AppoinmentsController extends Controller
{
    public function getPendingAppoinmentsForDoctor()
    {
        $AuthId = Auth::id();

        $currentDate = Carbon::now();
        // Get the first day of the current month

        $format_date_start = $currentDate->format('Y-m-d');

        // Get the last day of the current month
        $lastDayOfMonth = $currentDate->lastOfMonth();
        $format_date_end = $lastDayOfMonth->format('Y-m-d');


        $query = Appoinment::where('doctor_id', '=', $AuthId)->where('status','payment-done')
                                ->whereBetween('selected_timeslot', [$format_date_start, $format_date_end])
                                ->join('users','users.id','=','appoinments.user_id');


        $List = $query->get([
            'users.name as user_fullname',
            'users.contact_no as user_contact_no',
            'users.gender as user_gender',
            'users.email as user_email',
            'appoinments.*',
        ]);

        $data = [
            'success'=>true,
            'data'=>$List
        ];

        return response()->json($data);
    }

    public function viewAppoinment(Request $request)
    {
        $AuthId = Auth::id();

        $query = Appoinment::where('appoinments.id', '=', $request->appoinment_id)->where('status','payment-done')
        ->join('users','users.id','=','appoinments.user_id');


        $List = $query->first([
            'users.name as user_fullname',
            'users.contact_no as user_contact_no',
            'users.gender as user_gender',
            'users.email as user_email',
            'appoinments.*',
        ]);

        $data = [
            'success'=>true,
            'data'=>$List
        ];

        return response()->json($data);
    }
}
