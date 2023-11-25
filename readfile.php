<?php
    if (file_exists($_GET["objectname"]))
    {
        readfile($_GET["objectname"]);
    }
    else
    {
        header('HTTP/1.0 404 not found');
    }
?>
