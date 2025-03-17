<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Payments;
use App\Models\User;
use App\Models\Appoinment;
use Illuminate\Support\Facades\Auth;
use Session;
use Illuminate\Support\Facades\Validator;
use Stripe;

class PaymentController extends Controller
{


    public function paymentsuccess()
    {
        return view('frontend.payment');
    }

    public function payment(Request $request)
    {
        $format_amount  = $request->total_amount * 100;

        $timeslot_id = $request->timeslot_id;

        $validator = Validator::make($request->all(), [
            'card_name' => 'required',
            'card_number' => 'required',
            'month' => 'required',
            'year' => 'required',
            'cvv' => 'required'
        ]);

        if ($validator->fails()) {
            $request->session()->flash('danger', $validator->errors()->first());
            return response()->redirectTo('/bookAppoinment/'.$timeslot_id);
        }

        Stripe\Stripe::setApiKey(env('STRIPE_SECRET'));

        $response  = Stripe\Charge::create ([
                "amount" => $format_amount ,
                "currency" => "lkr",
                "source" => $request->stripeToken,
                "description" => "Test payment from medical tracker."
        ]);

       
        $AuthId = Auth::id();
        $userData = User::where('id',$AuthId)->first();

        $payment = new Payments();
        $payment->status = $response->status;
        $payment->amount = $request->total_amount;
        $payment->currency = 'LKR';
        $payment->patient_name =$userData->name;
        $payment->Save();

        Session::flash('success', 'Payment successful!');
        // $payment = new Payment();
        // $payment->status = 

        $doctor_id = $request->doctor_id;
        $timeslot_id = $request->timeslot_id;
        $selected_timeslot = $request->selected_timeslot;
        $selected_start_time = $request->selected_start_time;
        $selected_end_time = $request->selected_end_time;
        $total_amount = $request->total_amount;
        $email = $request->email;
        $name = $request->first_name." ".$request->last_name;

      

        $appointment = new Appoinment();
        $appointment->doctor_id = $doctor_id;
        $appointment->timeslot_id = $timeslot_id;
        $appointment->user_id = $AuthId;
        $appointment->selected_timeslot =  $selected_timeslot;
        $appointment->selected_start_time = $selected_start_time;
        $appointment->selected_end_time = $selected_end_time;
        $appointment->total_amount = $total_amount;
        $appointment->status = 'payment-done';
        $appointment->save();

        return response()->redirectTo('/payment/success');
    }






    public function store(Request $request)
    {
        $doctor_id = $request->doctor_id;
        $timeslot_id = $request->timeslot_id;
        $selected_timeslot = $request->selected_timeslot;
        $selected_start_time = $request->selected_start_time;
        $selected_end_time = $request->selected_end_time;
        $total_amount = $request->total_amount;
        $email = $request->email;
        $name = $request->first_name." ".$request->last_name;

        $AuthId = Auth::id();

        $appointment = new Appoinment();
        $appointment->doctor_id = $doctor_id;
        $appointment->timeslot_id = $timeslot_id;
        $appointment->user_id = $AuthId;
        $appointment->selected_timeslot =  $selected_timeslot;
        $appointment->selected_start_time = $selected_start_time;
        $appointment->selected_end_time = $selected_end_time;
        $appointment->total_amount = $total_amount;
        $appointment->status = 'payment-pending';
        $appointment->save();


        Stripe\Stripe::setApiKey(env('STRIPE_SECRET'));

        Stripe\Charge::create ([
                "amount" => $request->total_amount,
                "currency" => "usd",
                "source" => $request->stripeToken,
                "description" => "Test payment from medical tracker."
        ]);

        Session::flash('success', 'Payment successful!');

        return back();
    }
}
