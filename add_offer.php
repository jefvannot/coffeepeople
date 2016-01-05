<?php

// récupération des champs
    if(isset($_POST['firm_type']))          $firm_type=strip_tags($_POST['firm_type']);
    else      $firm_type="";

    if(isset($_POST['firm_name']))          $firm_name=strip_tags($_POST['firm_name']);
    else      $firm_name="";

    if(isset($_POST['firm_email']))         $firm_email=strip_tags($_POST['firm_email']);
    else      $firm_email="";

    if(isset($_POST['firm_website']))         $firm_website=strip_tags($_POST['firm_website']);
    else      $firm_website="";

    if(isset($_POST['proposed_job']))       $proposed_job=strip_tags($_POST['proposed_job']);
    else      $proposed_job="";

    if(isset($_POST['alternativ_job']))       $alternativ_job=strip_tags($_POST['alternativ_job']);
    else      $alternativ_job="";

    if(isset($_POST['job_city']))           $job_city=strip_tags($_POST['job_city']);
    else      $job_city="";

    if(isset($_POST['job_start_date']))     $job_start_date=strip_tags($_POST['job_start_date']);
    else      $job_start_date="";

    if(isset($_POST['comment']))            $comment=strip_tags($_POST['comment']);
    else      $comment="";


    // Vérification des champs vides // empty($job) OR
   if (empty($firm_type) OR empty($firm_name) OR empty($firm_email) OR empty($job_city) OR empty($job_start_date))
   {
        //echo '<font color="red">Veuillez remplir tous les champs</font>';
        //echo "<script>alert($job)</script>";

        ?>
        <script language='Javascript'>

        alert("Veuillez remplir les champs marqués de rouge");
        location.href = "cv-form-pro.php";

        </script>
        <?php
    }


//echo 'test';
    // Aucun champ n'est vide, on peut enregistrer dans la table
    else
    {
        // connexion à la base
        try
        {
            $bdd = new PDO('mysql:host=localhost;dbname=my_base;charset=utf8', 'root', 'root');
            //$bdd = new PDO('mysql:host=coffeerevhdb.mysql.db;dbname=coffeerevhdb;charset=utf8','coffeerevhdb','4CoffeeShops');
            //$bdd = new PDO('mysql:host=coffeepeghdb.mysql.db;dbname=coffeepeghdb;charset=utf8','coffeepeghdb','4CoffeeShops');
        //    array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
        }
        catch (Exception $e)
        {
            die('Erreur : ' . $e->getMessage());
        }

        // sélection de la base
        //mysql_select_db('nom_de_la_base',$db)  or die('Erreur de selection '.mysql_error());

      //  $sql = "SELECT id FROM cvtheque WHERE last_name='$last_name'"; //" AND first_name='$first_name' AND email='$email'";
     //   $req = mysql_query($sql) or die('Erreur SQL !'.$sql.'<br>'.mysql_error());
        /*
        $res = $req->rowCount();

        if ($res != 0)  // l'entree existe déjà, on affiche un message d'erreur
        {
            echo '<font color="red">Un CV a déjà été enregistré en votre nom, nhésitez pas à nous contacter si vous souhaitez modifier ou supprimer votre CV</font>';
        }
*/
        //Créer un identifiant difficile à deviner
        $s = substr(md5(uniqid(rand())), 0, 5);

        $offer_issue = date('Y-m-d');

//        $birth_tab = explode('/', $birthday);
//        $birthday = $birth_tab[2] . "-" . $birth_tab[1] . "-" . $birth_tab[0];

        $job_start_tab = explode('/', $job_start_date);
        $job_start_date = $job_start_tab[2] . "-" . $job_start_tab[1] . "-" . $job_start_tab[0];

/*
    // on regarde si l'entree existe déjà
        $sql = "SELECT COUNT(*) FROM cvtheque WHERE last_name='$last_name'";
        if ($res = $conn->query($sql))
        {
            // Récupère le nombre de lignes qui correspond à la requête SELECT
            if ($res->fetchColumn() > 0)
            {
                echo '<font color="red">Un CV a déjà été enregistré en votre nom, nhésitez pas à nous contacter si vous souhaitez modifier ou supprimer votre CV</font>';
            }
            else  // L'entree n'existe pas, on insère les informations du formulaire dans la table
            {
*/
            //  $sql = "INSERT INTO cvtheque(job, first_name, last_name, gender, birthday, email, adress, titre, url) VALUES('','$nom','$prenom','$email','$icq','$titre','$url')";
            //  mysql_query($sql) or die('Erreur SQL !'.$sql.'<br>'.mysql_error());

                $req = $bdd->prepare('INSERT INTO establishment(s, firm_type, firm_name, firm_email, firm_website, proposed_job, alternativ_job, job_city, job_start_date, comment, offer_issue)
                    VALUES(:s, :firm_type, :firm_name, :firm_email, :firm_website, :proposed_job, :alternativ_job, :job_city, :job_start_date, :comment, :offer_issue)');
                $req->execute(array(
                    's' => $s,
                    'firm_type' => $firm_type,
                    'firm_name' => $firm_name,
                    'firm_email' => $firm_email,
                    'firm_website' => $firm_website,
                    'proposed_job' => $proposed_job,
                    'alternativ_job' => $alternativ_job,
                    'job_city' => $job_city,
                    'job_start_date' => $job_start_date,
                    'comment' => $comment,
                    'offer_issue' => $offer_issue
                    ));



            //    echo 'Merci, votre CV a bien été enregistré';

        //}

            //$id_membre = $bdd->query('SELECT max(id) FROM cvtheque');
 /*           while ($donnees = $id_membre->fetch())
            {
                echo $donnees['id'] . '<br />';
            }
*/

//            $id_nvx = $bdd->lastInsertId();
//            echo '<br />' . ' id du nouveau membre ' . $id_nvx ;
            mysql_close();  // on ferme la connexion
/*        }
        $res = null;
        $conn = null;
*/

?>
                <script language='Javascript'>

//                alert("Merci, votre CV a bien été enregistré");
                location.href = "cv-form-pro-success.php";


                </script>
<?php

}
/*
    $maxsize = 1000000

    // Test envoi du fichier
    if (isset($_FILES['cv_pdf']) AND $_FILES['cv_pdf']['error'] == 0)
    {
     // Test taille du fichier < 1Mo
            if ($_FILES['cv_pdf']['size'] <= $maxsize)
            {
     // Test extension autorisée
                    $infosfichier = pathinfo($_FILES['cv_pdf']['name']);
                    $extension_upload = $infosfichier['extension'];
                    $extensions_autorisees = array('pdf');
                    if (in_array($extension_upload, $extensions_autorisees))
                    {
                    // On peut valider le fichier et le stocker définitivement
                            // move_uploaded_file($_FILES['cv_pdf']['tmp_name'], 'upload_cv/' . basename($_FILES['cv_pdf']['name']));
*/
                            $nom = "./upload_establishment_pic/firm_pic_{$s}.jpg";
                            $resultat = move_uploaded_file($_FILES['firm_pic']['tmp_name'], $nom);
                            if ($resultat) echo '<br />' . 'Transfert photo réussi';

/*
                    }
            }
    }
*/





/****** upload de fichier ******/

    /*** tutoriel de DHKold ***/

    //  if ($_FILES['cv_pdf']['error'] > 0) $erreur = "Erreur lors du transfert";

    //  if ($_FILES['cv_pdf']['size'] > $maxsize) $erreur = "Le fichier est trop gros";

    /*  verif de l'extension du fichier
        $extensions_valides = array( 'jpg' , 'jpeg' , 'gif' , 'png' );
        //1. strrchr renvoie l'extension avec le point (« . »).
        //2. substr(chaine,1) ignore le premier caractère de chaine.
        //3. strtolower met l'extension en minuscules.
        $extension_upload = strtolower( substr( strrchr($_FILES['cv_pdf']['name'], '.') ,1) );
        if ( in_array($extension_upload,$extensions_valides) ) echo "Extension correcte";
    */

    /*  verif taille d'une image
        $image_sizes = getimagesize($_FILES['cv_pdf']['tmp_name']);
        if ($image_sizes[0] > $maxwidth OR $image_sizes[1] > $maxheight) $erreur = "Image trop grande";
    */

    /*  creation de nom & deplacement du fichier vers le dossier définitif
        $nom = "avatars/{$id_membre}.{$extension_upload}";
        $resultat = move_uploaded_file($_FILES['icone']['tmp_name'],$nom);
        if ($resultat) echo "Transfert réussi";
    */









?>


