<?php
try
{
    // On se connecte à MySQL
    $bdd = new PDO('mysql:host=localhost;dbname=my_base;charset=utf8', 'root', 'root');
    //$bdd = new PDO('mysql:host=coffeerevhdb.mysql.db;dbname=coffeerevhdb;charset=utf8','coffeerevhdb','4CoffeeShops');
    //$bdd = new PDO('mysql:host=coffeepeghdb.mysql.db;dbname=coffeepeghdb;charset=utf8','coffeepeghdb','4CoffeeShops');
}
catch(Exception $e)
{
    // En cas d'erreur, on affiche un message et on arrête tout
    die('Erreur : '.$e->getMessage());
}

// Si tout va bien, on peut continuer

// On récupère tout le contenu de la table
$reponse = $bdd->query('SELECT * FROM cvtheque');


include("./ft_display_date.php");

// On affiche chaque entrée une à une
while ($donnees = $reponse->fetch())
{
?>
    <li class="profil_case col-xs-12 col-sm-6 col-md-4 <?php echo strtolower($donnees['job']); ?>" >

        <div class="card-frame"></div>
        <a target="_blank" class="profil_link hide-sm" href=<?php echo "./profil-wall.php?s={$donnees['s']}"; ?> title="" itemprop="url" >
        <a class="profil_link show-sm" href=<?php echo "./profil-wall.php?s={$donnees['s']}"; ?> title="" itemprop="url" >

            <img class="lomi_pdt_bg"
                <?php
                    $filename = "./upload_pic/img_pic_{$donnees['s']}.jpg";
                    $size = getimagesize($filename);

                    if ($size[1])
                    {
                        echo "src=./upload_pic/img_pic_{$donnees['s']}.jpg";
                        if ($size[0] > $size[1])
                            echo " style=\"height: 100%; width: auto;\"";
                        else
                            echo " style=\"width: 100%; height: auto;\"";
                    }
                    else
                    {
                        echo "src=./upload_pic/pic_profil_default.png ";
                        echo "style=\"background-color:#DEDEDE;\"";
                    }
                ?>
            alt="profile_pic" title="profile_pic" itemprop="image" />
            <!--src=<?php echo "./upload_pic/img_pic_{$donnees['s']}.jpg"; ?>-->


            <div class="lomi_pdt_hover verticalAlign">

                <div class="profil-info">
                    <div class="info-left">
                        <div class="names"><?php echo $donnees['first_name']; ?></div>
                        <div class="city"><?php echo $donnees['city']; ?></div>
                        <div class="dispo">
                          <?php
                          if ($donnees['start_date'] != "0000-00-00")
                            echo 'à partir du ' . Print_date($donnees['start_date']);
                          ?>
                        </div>
                    </div>
                    <div class="info-job">
                        <img class="job_icon" src=
                            <?php $job=strtolower($donnees['job']); echo "./img/icons/{$job}_icon.png"; ?>
                            <?php echo "style=\"background-color:#27898A;\"";?> />
                    </div>
                    <div class="info-right">
                        <div class="job"><?php echo $donnees['job']; ?></div>
                        <div class="experience"><?php echo $donnees['experience']; ?></div>
                    </div>
                </div>
            </div>
           <!-- <div class="profil-mask"></div>  -->
        </a>


    </li>

<?php
}

$reponse->closeCursor(); // Termine le traitement de la requête

?>

