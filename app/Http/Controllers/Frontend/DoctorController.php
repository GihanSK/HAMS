<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\DoctorProfile;
use App\Models\availableDateTime;
use Carbon\Carbon;

class DoctorController extends Controller
{
    // public function __construct()
    // {
    //     $this->middleware('auth');
    // }


    public function index()
    {
        $query = DoctorProfile::join('users','doctor_profiles.doctor_id','=','users.id')
        ->where('doctor_profiles.status', 'approved');

        $List = $query->get([
            'doctor_profiles.*',
            'users.*',

        ]);

        return view('frontend.doctors',compact('List'));
    }

    public function view($id)
    {
        $query = DoctorProfile::join('users','doctor_profiles.doctor_id','=','users.id')
        ->where('doctor_profiles.doctor_id', $id);


        $currentDate = Carbon::now();
        // Get the first day of the current month

        $format_date_start = $currentDate->format('Y-m-d');


        // Get the last day of the current month
        $lastDayOfMonth = $currentDate->lastOfMonth();
        $format_date_end = $lastDayOfMonth->format('Y-m-d');


        $avbSlots = availableDateTime::whereBetween('available_date', [$format_date_start, $format_date_end])->where('doctor_id',$id)->get();


        $List = $query->get([
            'doctor_profiles.*',
            'users.*',
        ]);


        return view('frontend.doctorProfile',compact('List','avbSlots'));
    }
}
