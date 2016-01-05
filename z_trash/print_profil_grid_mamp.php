<?php
try
{
    // On se connecte à MySQL
    $bdd = new PDO('mysql:host=localhost;dbname=my_base;charset=utf8', 'root', 'root');
}
catch(Exception $e)
{
    // En cas d'erreur, on affiche un message et on arrête tout
        die('Erreur : '.$e->getMessage());
}

// Si tout va bien, on peut continuer

// On récupère tout le contenu de la table
$reponse = $bdd->query('SELECT * FROM cvtheque');


include("./ft_disponibility.php");

// On affiche chaque entrée une à une
while ($donnees = $reponse->fetch())
{
?>
    <li class="profil_case col-xs-12 col-sm-6 col-md-4 <?php echo $donnees['job']; ?>" >
        <a target="_blank" class="profil_link" href=<?php echo "./profil-wall.php?s={$donnees['s']}"; ?> title="" itemprop="url" >

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
                        echo "src=./upload_pic/pic_default_cup.png ";
                        echo "style=\"background-color:#DEDEDE;\"";
                    }
                ?>
            alt="profile_pic" title="profile_pic" itemprop="image" />
            <!--src=<?php echo "./upload_pic/img_pic_{$donnees['s']}.jpg"; ?>-->

            <div class="lomi_pdt_hover verticalAlign">

                <img class="job_icon" src=<?php echo "./img/icons/{$donnees['job']}_icon.png"; ?> 
                    <?php 
                        if ($donnees['job'] == "Barista")
                            echo "style=\"background-color:#E28F60;\"";
                        if ($donnees['job'] == "Cuisinier")
                            echo "style=\"background-color:#27898A;\"";
                        if ($donnees['job'] == "Patissier")
                            echo "style=\"background-color:#af6cb1;\"";
                    ?>
                />
                <div class="right_up_box">
                    <div><?php echo $donnees['job']; ?> - <?php echo $donnees['experience']; ?> - <?php echo $donnees['city']; ?></div>
                <!--    <div><?php echo $donnees['city']; ?></div>-->
                    <div class="dispo">Disponible <?php echo Dispo($donnees['start_date']); ?></div>
                </div>

                <div class="lomi_pdt_name">
                    <div><?php echo $donnees['first_name']; ?> <?php echo $donnees['last_name']; ?></div>
                </div>
            <!--
                <div class="hidden_info">
                    <div>32 ans</div>
                    <div><?php echo $donnees['first_name']; ?></div>
                </div>
            -->
            </div>
            <div class="lomi_pdt_mask"></div>               
        </a>
    </li>

<?php
}

$reponse->closeCursor(); // Termine le traitement de la requête

?>

