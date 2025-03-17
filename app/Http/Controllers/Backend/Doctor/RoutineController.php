<?php

namespace App\Http\Controllers\Backend\Doctor;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Carbon\Carbon;
use App\Models\availableDateTime;

class RoutineController extends Controller
{
    public function storeDateAndTime(Request $request)
    {

        $date = $request->date;
        $start_time = $request->start_time;
        $end_time = $request->end_time;

        $existDate = availableDateTime::whereDate('available_date',$date)->first();

        if($existDate){
            $data = [
                'success'=>false,
                'message'=>'Cannot add multiple Time slots to the Selected Date'
            ];
        }else{

            $avbData = new availableDateTime();
            $avbData->doctor_id = $request->doctor_id;
            $avbData->available_date = $date;
            $avbData->start_time = $start_time;
            $avbData->end_time = $end_time;
            $avbData->save();

            $data = [
                'success'=>true,
                'message'=>'Record created successfully'
            ];
        }

        return response()->json($data);

    }

    public function getTimeTable(Request $request)
    {
        $user_id = $request->doctor_id;

        $data = availableDateTime::where('doctor_id',$user_id)->get();

        return response()->json($data);
    }


}
