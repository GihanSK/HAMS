<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Frontend\FrontendController;
use App\Http\Controllers\Frontend\RegisterController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/about', function () {
    return view('frontend.about');
})->name('about-us');

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/doctors', [App\Http\Controllers\Frontend\DoctorController::class, 'index'])->name('doctors');
Route::get('/viewProfile/{id}', [App\Http\Controllers\Frontend\DoctorController::class, 'view'])->name('viewprofile');

Route::get('/bookAppoinment/{id}', [App\Http\Controllers\Frontend\AppoinmentController::class, 'bookAppoinment'])->name('bookAppoinment')->middleware('auth');

Route::post('payment',[App\Http\Controllers\Frontend\PaymentController::class,'payment'])->name('stripe.store')->middleware('auth');
Route::get('payment/success',[App\Http\Controllers\Frontend\PaymentController::class,'paymentsuccess'])->name('payment.success')->middleware('auth');

/*
 * Clients management
 * */
Route::prefix('/clients')->group(function () {
    Route::get('/', [\App\Http\Controllers\ClientsController::class, 'index']);
    Route::get('/{client}', [\App\Http\Controllers\ClientsController::class, 'show']);
    Route::post('/store', [\App\Http\Controllers\ClientsController::class, 'store']);
    Route::patch('/{client}', [\App\Http\Controllers\ClientsController::class, 'update']);
    Route::post('/destroy', [\App\Http\Controllers\ClientsController::class, 'destroyMass']);
    Route::delete('/{client}/destroy', [\App\Http\Controllers\ClientsController::class, 'destroy']);
});

// patient
Route::get('/signup',[FrontendController::class,'signupview'])->name('user-signup-view');
Route::post('/store/user',[RegisterController::class,'SignUp'])->name('user-store');


//admin

Route::middleware(['auth','role:admin'])->prefix('admin')->group( function() {
    Route::get('/getWidgetData',[\App\Http\Controllers\Backend\Admin\DashboardController::class,'getWidgetData']);

    Route::get('/pendingList', [\App\Http\Controllers\Backend\Admin\DoctorsPendingProfileController::class, 'PendingList']);
    Route::post('/viewRecord', [\App\Http\Controllers\Backend\Admin\DoctorsPendingProfileController::class, 'viewRecord']);
    Route::post('/rejectProfile', [\App\Http\Controllers\Backend\Admin\DoctorsPendingProfileController::class, 'rejectProfile']);
    Route::post('/approveProfile', [\App\Http\Controllers\Backend\Admin\DoctorsPendingProfileController::class, 'approveProfile']);

    Route::get('/rejectedList', [\App\Http\Controllers\Backend\Admin\DoctorsRejectedProfileController::class, 'rejectedList']);
    Route::post('/rejectedRecordView', [\App\Http\Controllers\Backend\Admin\DoctorsRejectedProfileController::class, 'viewRecord']);

    Route::get('/approvedList', [\App\Http\Controllers\Backend\Admin\DoctorsApprovedProfileController::class, 'approvedList']);
    Route::post('/approvedRecordView', [\App\Http\Controllers\Backend\Admin\DoctorsApprovedProfileController::class, 'viewRecord']);
    Route::post('/destroyDoctor', [\App\Http\Controllers\Backend\Admin\DoctorsApprovedProfileControlle::class, 'destroyMass']);
    Route::delete('/{patient_id}/destroyDcotor', [\App\Http\Controllers\Backend\Admin\DoctorsApprovedProfileControlle::class, 'destroy']);

    Route::get('/doctorTypes',[\App\Http\Controllers\Backend\Admin\DoctorTypeController::class, 'doctorTypes']);
    Route::post('/doctorTypeStore',[\App\Http\Controllers\Backend\Admin\DoctorTypeController::class,'store']);
    Route::post('/doctorTypeUpdate',[\App\Http\Controllers\Backend\Admin\DoctorTypeController::class, 'update']);
    Route::post('/showDoctorType',[\App\Http\Controllers\Backend\Admin\DoctorTypeController::class, 'showDoctorType']);
    Route::post('/destroy', [\App\Http\Controllers\Backend\Admin\DoctorTypeController::class, 'destroyMass']);
    Route::delete('/{doctortype}/destroy', [\App\Http\Controllers\Backend\Admin\DoctorTypeController::class, 'destroy']);

    Route::get('/patientProfilesList',[\App\Http\Controllers\Backend\Admin\PatientProfileController::class, 'List']);
    Route::post('/ShowProfile',[\App\Http\Controllers\Backend\Admin\PatientProfileController::class, 'ShowProfile']);
    Route::post('/destroyPatient', [\App\Http\Controllers\Backend\Admin\PatientProfileController::class, 'destroyMass']);
    Route::delete('/{patient_id}/destroyPatient', [\App\Http\Controllers\Backend\Admin\PatientProfileController::class, 'destroy']);
    Route::post('/updatePatient',[\App\Http\Controllers\Backend\Admin\PatientProfileController::class, 'updatePatient']);
    
    Route::post('/getAllPayments',[\App\Http\Controllers\Backend\Admin\paymentController::class, 'getAllPayments']);
    Route::post('/destroyPayments', [\App\Http\Controllers\Backend\Admin\paymentController::class, 'destroyMass']);
    Route::delete('/{payment_id}/destroyPayments', [\App\Http\Controllers\Backend\Admin\paymentController::class, 'destroy']);

});

//doctor
Route::middleware(['auth','role:doctor'])->prefix('doctor')->group( function() {
    Route::post('/getProfileData',[\App\Http\Controllers\Backend\Doctor\ProfileController::class,'GetProfileData']);
    Route::post('/updateProfile',[\App\Http\Controllers\Backend\Doctor\ProfileController::class,'updateProfile']);
    Route::get('/doctorTypes',[\App\Http\Controllers\Backend\Admin\DoctorTypeController::class, 'doctorTypes']);
    Route::post('/storeDateAndTime',[\App\Http\Controllers\Backend\Doctor\RoutineController::class, 'storeDateAndTime']);
    Route::post('/getTimeTable',[\App\Http\Controllers\Backend\Doctor\RoutineController::class, 'getTimeTable']);
    Route::get('/getPendingAppoinmentsForDoctor',[\App\Http\Controllers\Backend\Doctor\AppoinmentsController::class, 'getPendingAppoinmentsForDoctor']);
    Route::post('/viewAppoinment',[\App\Http\Controllers\Backend\Doctor\AppoinmentsController::class, 'viewAppoinment']);
    Route::post('/addMedicalDiagnostic',[\App\Http\Controllers\Backend\Doctor\PatientDiagnosticController::class, 'addMedicalDiagnostic']);

});

//patient

Route::middleware(['auth','role:patient'])->prefix('patient')->group( function() {
    Route::get('/getPendingAppoinmentForPatient',[\App\Http\Controllers\Backend\Patient\AppoinmentController::class, 'getPendingAppoinmentForPatient']);
    Route::get('/getExpiredAppoinmentForPatient',[\App\Http\Controllers\Backend\Patient\AppoinmentController::class, 'getExpiredAppoinmentForPatient']);
    Route::get('/getCompletedAppoinmentForPatient',[\App\Http\Controllers\Backend\Patient\AppoinmentController::class, 'getCompletedAppoinmentForPatient']);

    Route::get('/GetlistOfDisease',[\App\Http\Controllers\Backend\Patient\MedicineTrackerController::class, 'GetlistOfDisease']);
    Route::post('/GetPresciptionData',[\App\Http\Controllers\Backend\Patient\MedicineTrackerController::class, 'GetPresciptionData']);
    Route::post('/SaveTimeslots',[\App\Http\Controllers\Backend\Patient\MedicineTrackerController::class, 'SaveTimeslots']);
    Route::post('/viewTimeslots',[\App\Http\Controllers\Backend\Patient\MedicineTrackerController::class,'viewTimeslots']);

});



/*
 * Current user
 * */
Route::prefix('/user')->group(function () {
    Route::get('/', [\App\Http\Controllers\CurrentUserController::class, 'show']);
    Route::patch('/', [\App\Http\Controllers\CurrentUserController::class, 'update']);
    Route::patch('/password', [\App\Http\Controllers\CurrentUserController::class, 'updatePassword']);
});

/*
 * File upload (e.g. avatar)
 * */
Route::post('/files/store', [\App\Http\Controllers\FilesController::class, 'store']);

Route::get('{any}', function () {
    return view('welcome');
})->where('any', '.*');
