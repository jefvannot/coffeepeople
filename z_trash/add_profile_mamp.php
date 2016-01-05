<?php 

// récupération des champs 
    if(isset($_POST['job']))                $job=$_POST['job'];
    else      $job="";

    if(isset($_POST['experience']))         $experience=$_POST['experience'];
    else      $experience="";

    if(isset($_POST['first_name']))         $first_name=$_POST['first_name'];
    else      $first_name="";

    if(isset($_POST['last_name']))          $last_name=$_POST['last_name'];
    else      $last_name="";

    if(isset($_POST['gender']))             $gender=$_POST['gender'];
    else      $gender="";

    if(isset($_POST['birthday']))           $birthday=$_POST['birthday'];
    else      $birthday="";

    if(isset($_POST['email']))              $email=$_POST['email'];
    else      $email="";

//    if(isset($_POST['adress']))             $adress=$_POST['adress'];
//    else      $adress="";

    if(isset($_POST['city']))               $city=$_POST['city'];
    else      $city="";

    if(isset($_POST['zip_code']))           $zip_code=$_POST['zip_code'];
    else      $zip_code="";

    if(isset($_POST['start_date']))           $start_date=$_POST['start_date'];
    else      $start_date="";

//    if(isset($_POST['bearable_distance']))  $bearable_distance=$_POST['bearable_distance'];
//    else      $bearable_distance="";
    

    // Vérification des champs vides // empty($job) OR 
   if (empty($job) OR empty($first_name) OR empty($last_name) OR empty($email) OR empty($city))
   {
        //echo '<font color="red">Veuillez remplir tous les champs</font>'; 
        //echo "<script>alert($job)</script>";

        ?> 
        <script language='Javascript'>

        alert("Veuillez remplir les champs marqués d'un astérisque");
        location.href = "cv-form.php";

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


        $birth_tab = explode('/', $birthday);
        $birthday = $birth_tab[2] . "-" . $birth_tab[1] . "-" . $birth_tab[0];

        $start_tab = explode('/', $start_date);
        $start_date = $start_tab[2] . "-" . $start_tab[1] . "-" . $start_tab[0];

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

                $req = $bdd->prepare('INSERT INTO cvtheque(job, experience, s, first_name, last_name, gender, birthday, email, city, zip_code, start_date) 
                    VALUES(:job, :experience, :s, :first_name, :last_name, :gender, :birthday, :email, :city, :zip_code, :start_date)');
                $req->execute(array(
                    'job' => $job,
                    'experience' => $experience,
                    's' => $s,
                    'first_name' => $first_name,
                    'last_name' => $last_name,
                    'gender' => $gender,
                    'birthday' => $birthday,
                    'email' => $email,
//                    'adress' => $adress,
                    'city' => $city,
                    'zip_code' => $zip_code,
                    'start_date' => $start_date
//                    'bearable_distance' => $bearable_distance,
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

                alert("Merci, votre CV a bien été enregistré");
                location.href = "index.php";

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
                            $nom = "./upload_cv/cv_pdf_{$s}.pdf";
                            $resultat = move_uploaded_file($_FILES['cv_pdf']['tmp_name'], $nom);
                            if ($resultat) echo '<br />' . 'Transfert cv pdf réussi';
/*
                    }
            }
    }
*/

                            $nom = "./upload_pic/img_pic_{$s}.jpg";
                            $resultat = move_uploaded_file($_FILES['profil_pic']['tmp_name'], $nom);
                            if ($resultat) echo '<br />' . 'Transfert photo réussi';
    
    


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


