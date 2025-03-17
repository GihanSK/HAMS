<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\medicineSchedule;
use Mail;
use App\Models\User;
use App\Mail\MedicineReminders;

class SendMedicineReminders extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'auto:reminders';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Send Medicine Reminders to Patients';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $schedule = medicineSchedule::all();

        if ($schedule->count() > 0) {
            foreach ($schedule as $data) {
                $current_time = date('H:i').':00';
                \Log::info('schdule started');
                \Log::info('selected time 1------'. $data->selected_time_1);
                \Log::info('current time'.$current_time);

                if($data->selected_time_1 != "" && $data->selected_time_1 == $current_time){

                    $user = User::where('id',$data->user_id)->first();

                    Mail::to($user)->send(new MedicineReminders($user));
                }

                if($data->selected_time_2 != "" && $data->selected_time_2 == $current_time){

                    $user = User::where('id',$data->user_id)->first();

                    Mail::to($user)->send(new MedicineReminders($user));
                }

                if($data->selected_time_3 != "" && $data->selected_time_3 == $current_time){

                    $user = User::where('id',$data->user_id)->first();

                    Mail::to($user)->send(new MedicineReminders($user));
                }

            }
        }

        return 0;
    }
}
