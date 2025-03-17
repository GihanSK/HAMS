<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Auth;
use App\Models\Prescription;
use App\Models\medicineSchedule;

class MedicineReminders extends Mailable
{
    use Queueable, SerializesModels;

    public $user;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($user)
    {
        $this->user = $user;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {

        $schedule = medicineSchedule::all();

        \Log::info('schdule list');
        \Log::info(json_decode($schedule));

        foreach($schedule as $data){
            $current_time = date('H:i').':00';
            \Log::info('schdule started');
            \Log::info('selected time 1------'. $data->selected_time_1);
            \Log::info('current time'.$current_time);

            if($data->selected_time_1 != "" && $data->selected_time_1 == $current_time){

               $prescription = Prescription::where('id', $data->prescription_id)->first();
            }

            if($data->selected_time_2 != "" && $data->selected_time_2 == $current_time){

                $prescription = Prescription::where('id', $data->prescription_id)->first();
            }

            if($data->selected_time_3 != "" && $data->selected_time_3 == $current_time){

                $prescription = Prescription::where('id', $data->prescription_id)->first();
            }
        }
        return $this->subject('Take Your Medicine!')
        ->view('emails.medicineReminder',compact('prescription'));
    }
}
