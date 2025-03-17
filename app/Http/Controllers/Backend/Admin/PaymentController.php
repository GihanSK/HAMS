<?php

namespace App\Http\Controllers\Backend\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Payments;
use DateTime;

class PaymentController extends Controller
{
    public function getAllPayments(Request $request)
    {
        $startDate  = $request->input('start_date');
        $endDate    = $request->input('end_date');

        $startDateConverted = DateTime::createFromFormat('Y-n-j H:i:s', $startDate." 00:00:01");
        $endDateConverted   = DateTime::createFromFormat('Y-n-j H:i:s', $endDate." 23:59:59");

      
        $query = Payments::where('payments.created_at', '>', $startDateConverted->format('Y-m-d H:i:s'))
            ->where('payments.created_at', '<', $endDateConverted->format('Y-m-d H:i:s'));
        
        $reportResults = $query->get([
            'payments.*',
        ]);

        return response()->json($reportResults);
    }

    public function destroy($doctorType) {

        Payments::where('id',$doctorType)->delete();


        return response()->json([
            'status' => true
        ]);
    }

    public function destroyMass( Request $request ) {
        $request->validate([
            'ids' => 'required|array'
        ]);

        Payments::destroy($request->ids);

        return response()->json([
            'status' => true
        ]);
    }
}
