<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\DoctorProfile;
use App\Models\availableDateTime;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use App\Models\Appoinment;
use App\Models\User;


class AppoinmentController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }

    public function bookAppoinment($id)
    {

        $AuthId = Auth::id();

        $checkExist = Appoinment::where('user_id', $AuthId)->where('timeslot_id',$id)->first();
        if($checkExist){
            return redirect()->back()->with('success', 'Cannot book appoinment. You have already booked');
        }else{

            $timeslot = availableDateTime::where('id',$id)->first();

            $doctorProfile = DoctorProfile::join('users','doctor_profiles.doctor_id','=','users.id')->where('doctor_id',$timeslot->doctor_id)->first();

            $userDetails = User::where('id',$AuthId)->first();

            return view('frontend.bookAppoinment',compact('userDetails', 'doctorProfile','timeslot'));
        }


    }
}
