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

// Si tout va bien, on peut continuer

// On récupère tout le contenu de la table
$reponse = $bdd->query('SELECT * FROM establishment');

//include("./ft_display_date.php");

if($reponse->rowCount() == 0)
{
  ?>
    <p class="empty-message">Désolé, il n'y a pas d'offres pour le moment.</p>
  <?php
}
else
{
// On affiche chaque entrée une à une
  while ($donnees = $reponse->fetch())
  {
  ?>

    <li class="profil_case col-xs-12 col-sm-6 col-md-4 <?php echo $donnees['proposed_job']; ?>" >

        <div class="card-frame"></div>

        <a target="_blank" class="profil_link hide-sm" href=<?php echo "./establishment-wall.php?s={$donnees['s']}"; ?> title="" itemprop="url" >
        <a class="profil_link show-sm" href=<?php echo "./establishment-wall.php?s={$donnees['s']}"; ?> title="" itemprop="url" >

            <img class="lomi_pdt_bg"
                <?php
                    $filename = "./upload_establishment_pic/firm_pic_{$donnees['s']}.jpg";
                    $size = getimagesize($filename);

                    if ($size[1])
                    {
                        echo "src=./upload_establishment_pic/firm_pic_{$donnees['s']}.jpg";
                        if ($size[0] > $size[1])
                            echo " style=\"height: 100%; width: auto;\"";
                        else
                            echo " style=\"width: 100%; height: auto;\"";
                    }
                    else
                    {
                        echo "src=./upload_establishment_pic/firm_pic_default.png ";
                        echo "style=\"background-color:#DEDEDE;\"";
                    }
                ?>
            alt="establishment_pic" title="establishment_pic" itemprop="image" />

            <div class="lomi_pdt_hover verticalAlign">

                <div class="profil-info establishment-info">
                    <div class="info-left">
                        <div class="firm-name"><?php echo $donnees['firm_name']; ?></div>
                        <div class="firm-type"><?php echo $donnees['firm_type']; ?></div>
                        <div class="job-city"><?php echo $donnees['job_city']; ?></div>

                    </div>
<!--
                    <div class="info-job">
                        <img class="job_icon" src=
                            <?php $job=strtolower($donnees['job']); echo "./img/icons/{$job}_icon.png"; ?>
                            <?php echo "style=\"background-color:#27898A;\"";?> />
                    </div>
-->
                    <div class="info-right">
                        <div class="offered-job">
                            <img class="job_icon" src=
                                <?php $job=strtolower($donnees['proposed_job']); echo "./img/icons/{$job}_icon.png"; ?>
                                <?php echo "style=\"background-color:#27898A;\"";?> />
                        </div>
<!--
                        <div class="search">Recherche :
                        </div>
-->
                        <div class="offered-job">
                            <?php
                                if ($donnees['proposed_job'] == 'autre')
                                    echo $donnees['alternativ_job'];
                                else
                                    echo $donnees['proposed_job'];
                            ?></div>
                        <div class="job-start-date">à partir du <br><?php echo Print_date($donnees['job_start_date']); ?></div>

                    </div>
                </div>
            </div>

        </a>


    </li>

  <?php
  }
}

$reponse->closeCursor(); // Termine le traitement de la requête

?>

