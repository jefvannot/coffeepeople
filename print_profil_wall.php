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
    $comment=$donnees['comment'];
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

include("./ft_display_date.php");

if ($start_date != '0000-00-00')
  $disponibility=Print_date($start_date);
else
  $disponibility=0;


//while ($donnees = $reponse->fetch())
//{
?>
    <div class="info-job show-phone">
                <img class="job_icon" src=
                    <?php echo "./img/icons/{$job}_icon.png"; ?>
                    <?php echo "style=\"background-color:#27898A;\"";?>
                />
    </div>

    <div class="illustration">

        <div class="left-col-inner">

            <div class="profil_pic">
                <img itemprop="image"

                <?php
                    $filename = "./upload_pic/img_pic_{$s}.jpg";
                    $size = getimagesize($filename);

                    if ($size[1])
                    {
                        echo "src=./upload_pic/img_pic_{$s}.jpg";
  //                      if ($size[0] > $size[1])
    //                        echo " style=\"height: 100%; width: auto;\"";
      //                  else
        //                    echo " style=\"width: 100%; height: auto;\"";
                    }
                    else
                    {
                        echo "src=./upload_pic/pic_profil_default.png ";
                        echo "style=\"background-color: rgb(239, 239, 239);\"";
                    }
                ?>

                title="Profil picture" alt="Profil picture"  />
            </div>

      <div class="right-col show-phone">
        <div class="inner">

            <h2 class="cv-name show-phone"><?php echo $first_name; ?> <?php echo $last_name; ?></h2>

            <div class="info-job-row show-phone">
                <div class="uppercase job-name"><?php echo $job; ?></div>
                <div class="experience italic"><?php echo $experience; ?></div>
            </div>
<!--
            <div class="download-file btn"
                    <?php
                        $filename = "./upload_cv/cv_pdf_" . $s . ".pdf";
                        if (count(glob($filename)) > 0) {
                            echo "style=\"display:block;\"";
                        } else {
                            echo "style=\"display:none;\"";
                        }
                     ?>
                >

                <a href=<?php echo "./upload_cv/cv_pdf_" . $s . ".pdf"?> >
                    <img class="download-icon" src="./img/icons/download_cv_icon_white.png"/>
                </a>
            </div>
-->



        </div>
    </div>

<!--
            <div class="under_pic profil_title">
                <div class="name"><span><?php echo $first_name; ?> <?php echo $last_name; ?></span></div>
            </div>
-->
        </div>


        <div class="background hide-phone"
            <?php include("./pic_background_color.php"); ?>
        ></div>
    </div>

<div class="profil-info">

    <div class="main-col">

        <div class="inner">

                <h2 class="cv-name hide-phone"><?php echo $first_name; ?> <?php echo $last_name; ?></h2>
                <!--<div class="cv-title"><?php echo $job; ?></div>-->

                <div class="subtitle">
                    <h3>Je souhaite travailler à <?php echo $city; ?>.</h3>
                    <h3>
                          <?php
                          if ($disponibility)
                            echo 'Disponible à partir du ' . $disponibility ;
                          ?>
                    </h3>

                </div>

                <div class="comment italic">
                    <p><?php echo $comment; ?></p>
                </div>

                <div class="mail-link hide-phone">
                    <a class="btn-fa" href="mailto:<?php echo $email; ?>">
                        <!--<span class="mail-icon">Contactez-moi</span>
                        <img class="mail-icon" src="./img/icons/mail_icon.png"/>-->
                        <i class="fa fa-envelope-o mail-icon"></i>
                        <p>Contactez-moi</p>
                    </a>
                </div>

        <div class="links show-phone">
            <div class="download-file btn"
                    <?php
                        $filename = "./upload_cv/cv_pdf_" . $s . ".pdf";
                        if (count(glob($filename)) > 0) {
                            echo "style=\"display:block;\"";
                        } else {
                            echo "style=\"display:none;\"";
                        }
                     ?>
                >

                <a href=<?php echo "./upload_cv/cv_pdf_" . $s . ".pdf"?> >
                    <img class="download-icon" src="./img/icons/download_cv_icon_white.png"/>
                </a>
            </div>

                <div class="mail-link">
                    <a class="btn-fa" href="mailto:<?php echo $email; ?>">
                        <!--<span class="mail-icon">Contactez-moi</span>
                        <img class="mail-icon" src="./img/icons/mail_icon.png"/>-->
                        <i class="fa fa-envelope-o mail-icon"></i>
                        <p>Contactez-moi</p>
                    </a>
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

    <div class="right-col hide-phone">
        <div class="inner">
            <div class="info-job">
                <img class="job_icon" src=
                    <?php echo "./img/icons/{$job}_icon.png"; ?>
                    <?php echo "style=\"background-color:#27898A;\"";?>
                />
            </div>
            <div class="info-job-row">
                <div class="uppercase"><?php echo $job; ?></div>
                <div class="experience italic"><?php echo $experience; ?></div>
            </div>

            <div class="download-file btn"
                    <?php
                        $filename = "./upload_cv/cv_pdf_" . $s . ".pdf";
                        if (count(glob($filename)) > 0) {
                            echo "style=\"display:block;\"";
                        } else {
                            echo "style=\"display:none;\"";
                        }
                     ?>
                >
                <a href=<?php echo "./upload_cv/cv_pdf_" . $s . ".pdf"?> >
                    <img class="download-icon" src="./img/icons/download_cv_icon_white.png"/>
                </a>
            </div>




        </div>
    </div>
</div>

<?php
//}

$reponse->closeCursor(); // Termine le traitement de la requête

?>


