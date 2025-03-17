<?php

namespace App\Http\Controllers\Backend\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\doctorType;

class DoctorTypeController extends Controller
{
    public function doctorTypes()
    {
        $data = doctorType::all();

        return response()->json($data);
    }

    public function store(Request $request)
    {
        $name = $request->name;
        $exist = doctorType::where('name',$name)->first();

        if($exist){
            return response()->json([
              'success' => false,
              'message' => 'Doctor Type Already Exist'
            ]);
        }else{
            $data = new doctorType();
            $data->name = $name;
            $data->save();

            return response()->json([
              'success' => true,
              'message' => 'Doctor Type Added Successfully'
            ]);
        }

    }
    public function update(Request $request)
    {
        $id = $request->id;
        $name = $request->name;
        $exist = doctorType::where('name',$name)->where('id','!=',$id)->first();

        if($exist){
            return response()->json([
             'success' => false,
             'message' => 'Doctor Type Already Exist'
            ]);
        }else{
            $data = doctorType::find($id);
            $data->name = $name;
            $data->save();

            return response()->json([
             'success' => true,
             'message' => 'Doctor Type Updated Successfully'
            ]);
        }


    }

    public function showDoctorType(Request $request)
    {
        $id = $request->id;
        $data = doctorType::find($id);

        return response()->json($data);
    }

    public function destroy($doctorType) {

        doctorType::where('id',$doctorType)->delete();


        return response()->json([
            'status' => true
        ]);
    }

    public function destroyMass( Request $request ) {
        $request->validate([
            'ids' => 'required|array'
        ]);

        doctorType::destroy($request->ids);

        return response()->json([
            'status' => true
        ]);
    }

}
