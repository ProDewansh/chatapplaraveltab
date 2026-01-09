<?php

use Illuminate\Support\Facades\Broadcast;
use App\Models\Message;

Broadcast::channel('chat.{conversationId}', function ($user, $conversationId) {
    // Option 1: If conversationId is actually another user's ID
    // Allow if the authenticated user is chatting with this user
    return (int) $conversationId > 0;
    
    // Option 2: If you want to verify the user is part of this chat
    // Check if there are any messages between these users
    // Uncomment below if needed:
    
    /*
    $message = Message::where('conversation_id', $conversationId)
        ->where(function($query) use ($user) {
            $query->where('sender_id', $user->id)
                  ->orWhere('receiver_id', $user->id);
        })
        ->exists();
    
    return $message;
    */
});