<?php

function Dispo($start_date)
{
    $jour = date('d');
    $mois = date('m');
    $annee = date('Y');
    $dbt = explode('-', $start_date);

	$array = array("janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre");

    if ($annee > $dbt[0] || 
        ($annee == $dbt[0] && ($mois > $dbt[1] || ($mois == $dbt[1] && $jour >= $dbt[2])))) 
    {
        return "immédiatemment";
    }
    else
        return "le " . $dbt[2] . " " . $array[$dbt[1] - 1] . " " . $dbt[0];
}

?>