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

$req = $bdd->prepare('SELECT * FROM cvtheque WHERE s = ?');
$req->execute(array($_GET['s']));

while ($donnees = $req->fetch())
{
    $job=$donnees['job'];
    $first_name=$donnees['first_name'];
    $last_name=$donnees['last_name'];
    $city=$donnees['city'];
    $experience=$donnees['experience'];
    $id=$donnees['id'];
    $date_naissance=$donnees['birthday'];
    $start_date=$donnees['start_date'];
    $email=$donnees['email'];
    $s=$donnees['s'];
}

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

function Dispo($start_date)
{
    $jour = date('d');
    $mois = date('m');
    $annee = date('Y');
    $dbt = explode('-', $start_date);

    if ($annee > $dbt[0] || 
        ($annee == $dbt[0] && ($mois > $dbt[1] || ($mois == $dbt[1] && $jour >= $dbt[2])))) 
    {
        return "immédiate";
    }
    else
        return "le " . $dbt[2] . "/" . $dbt[1] . "/" . $dbt[0];
}

$disponibility = Dispo($start_date);

//while ($donnees = $reponse->fetch())
//{
?>
    <div class="illustration">
<!--        <div class="title">
            <h1 itemprop="name"><span><?php echo $first_name; ?> <?php echo $last_name; ?></span></h1>
            <div class="mask"  style="background-color:#27898A;"></div>
            <div class="cache"><span><?php echo $first_name; ?> <?php echo $last_name; ?></span></div>
        </div>
-->     <div class="profil_left">
            <div class="profil_pic">
                <img itemprop="image"

                <?php 
                    $filename = "./upload_pic/img_pic_{$s}.jpg";
                    $size = getimagesize($filename);

                    if ($size[1])
                    {
                        echo "src=./upload_pic/img_pic_{$s}.jpg";
                        if ($size[0] > $size[1])
                            echo " style=\"height: 100%; width: auto;\"";
                        else
                            echo " style=\"width: 100%; height: auto;\"";
                    } 
                    else 
                    {
                        echo "src=./upload_pic/pic_default_{$job}.png ";
                        echo "style=\"background-color: rgb(239, 239, 239);\"";
                    }
                ?>

                title="Profil picture" alt="Profil picture"  />
            </div>
            <div class="under_pic profil_title">
                <div class="name"><span><?php echo $first_name; ?> <?php echo $last_name; ?></span></div>

                <a target="_blank" class="btn-fa" href="https://www.facebook.com/pages/Marlou/345037685595150?fref=ts">
                    <img class="fb_icon" src="./img/icons/fb_icon.png"/>
                </a>


            </div>
<!--
            <div class="download_link">
                <img class="download_icon" src="./img/icons/download_pdf_icon_white.png"/>
            </div>
-->
        </div>
        <div class="background" 
            <?php include("./pic_background_color.php"); ?>
        ></div>
    </div>

    <div class="lomi_product_right">
<!--
        <div class="profil_title">
            <div class="name"><span><?php echo $first_name; ?> <?php echo $last_name; ?></span></div>
            <div class="background"  style="background-color:#27898A;"></div>
        </div>
-->

        <div class="inner">
        
          <div class="lomi_product_features">
<!--                  <h3><?php echo $first_name; ?> <?php echo $last_name; ?></h3>
-->
                <div class="cv-name"><?php echo $first_name; ?> <?php echo $last_name; ?></div>
                <div class="cv-title"><?php echo $job; ?></div>

                <!-- Data sheet -->
                <section class="page-product-box lomi_features_list">
                    <table class="table-data-sheet" cellpadding="0" cellspacing="0">

                        
                        <tr class="even">
                            <td class="feature_name">Expérience</td>
                            <td class="feature_value"><?php echo $experience; ?></td>
                        </tr>
                        <tr class="even">
                            <td class="feature_name">Âge</td>
                            <td class="feature_value"><?php echo $age; ?> ans</td>
                        </tr>
                        <tr class="odd">
                            <td class="feature_name">Habite à</td>
                            <td class="feature_value"><?php echo $city; ?></td>
                        </tr>
                        <tr class="odd">
                            <td class="feature_name">Disponibilité </td>
                            <td class="feature_value"><?php echo $disponibility; ?></td>
                        </tr>
                        <tr class="even">
                            <td class="feature_name">Email</td>
                            <td class="feature_value"><?php echo $email; ?></td>
                        </tr>
                    </table>
                </section>
                <!--end Data sheet -->

            <div class="social-list col-sm-6 col-md-4 col-lg-4 hidden-xs">
                        <ul class="list-inline">
                            <li>
                                <div class="fb-link-container" <?php include("./pic_background_color.php"); ?> >
                                    <a target="_blank" class="btn-fa" href="https://www.facebook.com/pages/Marlou/345037685595150?fref=ts">
                                        <img class="fb_icon" src="./img/icons/fb_icon.png"/>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div class="mail-link-container" <?php include("./pic_background_color.php"); ?> >
                                    <a class="btn-fa" href="mailto:contact@marlou.fr">
                                        <img class="mail_icon" src="./img/icons/mail_icon.png"/>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>

            </div>

            
        </div>


        
    </div>
</div>
<!--
<div class="profil-wall-right">

            <div class="cv-pic-container">
                    <img class="cv-pic" src="./upload_cv/gwenda-cv.jpeg"/>
            </div>
-->
            <div class="download_link_container" <?php include("./pic_background_color.php"); ?> >
                <a href=<?php echo "./upload_cv/cv_pdf_" . $s . ".pdf"?> >
                    <img class="download_icon" src="./img/icons/download_pdf_icon_white.png"/>
                </a>
            </div>


<?php
//}

$reponse->closeCursor(); // Termine le traitement de la requête

?>


