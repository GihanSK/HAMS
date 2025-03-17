<?php

namespace App\Http\Controllers;

use App\Models\File;
use App\Http\Requests\FileUploadRequest;
use Illuminate\Http\Request;
use App\Models\user;

class FilesController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Handle an upload & store model instance
     *
     * @param FileUploadRequest $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function store( FileUploadRequest $request ) {
        $uploadedFile = $request->file('file');

        if (!$uploadedFile->isValid()) {
            abort( 422 );
        }

        $user_id = auth()->user()->id;
        $user = User::where('id',$user_id)->first();
        $profile_img_path = $request->file('file')->store('images/user_avatar', 'public');
        $user->profile_img = $profile_img_path;
        $user->save();

        return response()->json([
            'status' => true,
            'data' => $user
        ]);
    }
}
