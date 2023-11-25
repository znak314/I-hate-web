<?php
if(isset($_POST["objectname"]) && isset($_POST["object"])) {
    $filename = $_POST["objectname"];
    $data = $_POST["object"];

    // Впевніться, що $filename не містить спецсимволів, може бути обмежене до певних типів файлів або шляхів.
    // Наприклад, якщо ви очікуєте лише ім'я файлу без шляху, то ви можете використати щось на зразок:
    // $filename = preg_replace('/[^a-zA-Z0-9_.]/', '', $_POST["objectname"]);
    
    $myfile = fopen($filename, "w");
    fwrite($myfile, $data);
    fclose($myfile);

    echo "Файл створено: $filename";
} else {
    echo "Не вдалося створити файл. Перевірте передані дані.";
}
?>
