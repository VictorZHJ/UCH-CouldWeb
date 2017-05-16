<?php
session_start();

// destroy the session 
session_destroy(); 

echo '{"result": "ok", "data":"none"}';
