<?php
//db.php YA

    function connect(){

	$servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "uanly";

    $conn = new mysqli($servername, $username, $password, $dbname);
	return $conn;

    }


?>


/*
Persona
 -ClvPersona INT
 -Nombre_Persona VARCHAR(30)
 -Nombre_Usuario VARCHAR(30)
 -Apellido VARCHAR(30)
 -Genero CHAR(1)
 -FechaNacimiento DATE
 -Email VARCHAR(254)
 -Contrasenia VARCHAR(30)
 -Img_Perfil VARCHAR(254)
 -Rol CHAR(1)
 -FechaRegistro DATE
 -FechaUltimoCambio DATE
 -Activo tinyInt

Mensaje
 -ClvMensaje INT
 -Mensaje VARCHAR(254)
 -FechaEnvio DATE
 -ClvPersona_Autor INT
 -ClvPersona_Destino INT

Categoria
 -ClvCategoria INT
 -Titulo_Categoria VARCHAR(30)
 -Descrip_Cat VARCHAR(30)
 -FechaCreacion DATE
 -ClvPersona INT

Publicacion
 -ClvPublicacion INT
 -IMAGEN
 -DESCRIPCION
 -ClvPersona INT
 -ClvCategoria INT

Comision
 -ClvComision INT
 -Titulo_Comision VARCHAR(30)
 -LinkVideo VARCHAR(254)
 -Img_Portada VARCHAR(254)
 -Descripcion VARCHAR(254)
- ARTISTA
- PRECIO

Recibo
 -ClvRecibo INT
 -Numero Transacción
 -FechaTransaccion DATE
 -ClvComision INT
 -ClvPersona INT

Seguidores
-ClvSeguidor
-ClvPersona_Autor
-ClvPersona_Siguiendo

Comentario
 -ClvComentario INT
 -Descrip_Com VARCHAR(254)
 -Calificacion BIT
 -FechaCreacion DATE
 -ClvPersona_Autor INT
 -ClvCurso INT

*/