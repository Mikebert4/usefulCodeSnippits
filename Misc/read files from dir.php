<?php

/**
 * @function getFiles($dir)
 * @param $dir - directory, string default = current directory
 * 
 */

function getFiles($dir){
    
    #$dir defaults to currnt directory
    if (!isset($dir)) $dir = "/";
    
    #if not a directory, throw error
    if (!is_dir($dir))echo "\nERROR: Non Directory passed to getFiles()\n";
    
    $handle = opendir($dir);
    $files = array();
    
    while (false !== ($file = readdir($handle))) {
        if($file != ".." && $file != "."){ #handle UNIX filesystem
            $files[] = $file;
        }
    }
    closedir($handle);
    
    return $files;
}

?>