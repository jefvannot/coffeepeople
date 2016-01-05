<?php

function Print_date($start_date)
{
    $dbt = explode('-', $start_date);

	$array = array("janv.", "févr.", "mars", "avr.", "mai", "juin", "juill.", "août", "sept.", "oct.", "nov.", "déc.");

    return $dbt[2] . " " . $array[$dbt[1] - 1] . " " . $dbt[0];
}

?>