<?php
if(file_exists(storage_path('app/settings.json')))
{
    $fg = file_get_contents(storage_path('app/settings.json'));
    return json_decode($fg,true);
}else{
    
    return throw new Exception("File settings.json not Found");
}