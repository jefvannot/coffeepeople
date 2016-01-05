<?php
try
{
    // On se connecte à MySQL
    //$bdd = new PDO('mysql:host=localhost;dbname=my_base;charset=utf8', 'root', 'root');
    //$bdd = new PDO('mysql:host=coffeerevhdb.mysql.db;dbname=coffeerevhdb;charset=utf8','coffeerevhdb','4CoffeeShops');
    $bdd = new PDO('mysql:host=coffeepeghdb.mysql.db;dbname=coffeepeghdb;charset=utf8','coffeepeghdb','4CoffeeShops');
}
catch(Exception $e)
{
    // En cas d'erreur, on affiche un message et on arrête tout
        die('Erreur : '.$e->getMessage());
}

$req = $bdd->prepare('SELECT * FROM establishment WHERE s = ?');
$req->execute(array($_GET['s']));

while ($donnees = $req->fetch())
{
    $id=$donnees['id'];
    $s=$donnees['s'];
    $firm_type=ucfirst($donnees['firm_type']);
    $firm_name=ucfirst($donnees['firm_name']);
    $firm_email=$donnees['firm_email'];
    $proposed_job=$donnees['proposed_job'];
    $alternativ_job=$donnees['alternativ_job'];
    $job_city=$donnees['job_city'];
    $job_start_date=$donnees['job_start_date'];
    $comment=$donnees['comment'];
    $offer_issue=$donnees['offer_issue'];
}


if ($proposed_job == 'autre')
    $offered_job=$alternativ_job;
else
    $offered_job=$proposed_job;
/*
function Age($date_naissance)
{
    $arr1 = explode('-', $date_naissance);
    $arr2 = explode('/', date('d/m/Y'));

    if(($arr1[1] < $arr2[1]) || (($arr1[1] == $arr2[1]) && ($arr1[2] <= $arr2[0])))
        return ($arr2[2] - $arr1[0]);
    else
        return ($arr2[2] - $arr1[0] - 1);
}

$age = Age($date_naissance);
*/
include("./ft_display_date.php");

$job_start_date = Print_date($job_start_date);

//while ($donnees = $reponse->fetch())
//{
?>
    <div class="illustration">

        <div class="left-col-inner">

            <div class="profil_pic">
                <img itemprop="image"

                <?php
                    $filename = "./upload_establishment_pic/firm_pic_{$s}.jpg";
                    $size = getimagesize($filename);

                    if ($size[1])
                    {
                        echo "src=./upload_establishment_pic/firm_pic_{$s}.jpg";
          //              if ($size[0] > $size[1])
            //                echo " style=\"height: 100%; width: auto;\"";
              //          else
                //            echo " style=\"width: 100%; height: auto;\"";
                    }
                    else
                    {
                        echo "src=./upload_establishment_pic/firm_pic_default.png ";
                        echo "style=\"background-color: rgb(239, 239, 239);\"";
                    }
                ?>

                title="Establishment picture" alt="Establishment picture"  />
            </div>

            <div class="right-col show-phone">
                <div class="inner">

                    <div class="firm-id show-phone">
                        <h2 class="cv-name"><?php echo $firm_name; ?></h2>
                        <div class="subtitle">
                            <h3><?php echo $firm_type; ?></h3>
                        </div>
                    </div>


                </div>
            </div>

        </div>


        <div class="background hide-phone"
            <?php include("./pic_background_color.php"); ?>
        ></div>
    </div>

<div class="profil-info">

    <div class="main-col">

        <div class="inner">

            <div class="firm-id hide-phone">
                <h2 class="cv-name"><?php echo $firm_name; ?></h2>
                <div class="subtitle">
                    <h3><?php echo $firm_type; ?></h3>
                </div>
            </div>

            <div class="job-id">
                    <h4>Nous recherchons un/une <?php echo $offered_job; ?></h4>
                    <h4>Disponible à partir du <?php echo $job_start_date; ?></h4>
            </div>

            <div class="comment italic">
                <p><?php echo $comment; ?></p>
            </div>

            <div class="emission-date italic">
                <p>
                    <?php
                        if ($offer_issue != '0000-00-00')
                        {
                            echo "Offre postée le ";
                            echo Print_date($offer_issue);
                        }
                     ?>
                </p>
            </div>


        </div>
    </div>

<!--
            <div class="profil-wall-right">

            <div class="cv-pic-container">
                    <img class="cv-pic" src="./upload_cv/gwenda-cv.jpeg"/>
            </div>
-->

    <div class="right-col hide-phone">
        <div class="inner">

            <h3></h3>
            <div class="quick-info-job">
                <i class="fa fa-suitcase"></i><h3><?php echo $offered_job; ?></h3>
                <i class="fa fa-map-marker"></i><h3><?php echo $job_city; ?></h3>
                <i class="fa fa-calendar"></i><h3><?php echo $job_start_date; ?></h3>
            </div>

            <div class="mail-link">
                <a class="btn-fa" href="mailto:<?php echo $firm_email; ?>">
                    <div class="cliquable">
                        <i class="fa fa-envelope-o mail-icon"></i>
                        <p>Postulez</p>
                    </div>

                </a>
            </div>

        </div>
    </div>
    <div class="links show-phone">
        <div class="mail-link">
            <a class="btn-fa" href="mailto:<?php echo $firm_email; ?>">
                <i class="fa fa-envelope-o mail-icon"></i>
                <p>Postulez</p>
            </a>
        </div>
    </div>
</div>

<?php
//}

$reponse->closeCursor(); // Termine le traitement de la requête

?>


