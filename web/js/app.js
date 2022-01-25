$(document).ready(function(){
	$('#frmRegistro').submit(function(e){
		e.preventDefault();
		
		var nom = $('#nombre').val();
		var doc = $('#domicilio').val();
        var ref = $('#referencia').val();
        var dni = $('#dni').val();
        var telef = $('#telef').val();
        var email = $('#email').val();
        var apod = $('#apod').val();
        //var fnacanio = $('#fnacanio').val();
        //var cel = $('#cel').val();
        //var dep = $('#dep').val();
        //var prov = $('#prov').val();
        //var dist = $('#dist').val();
        //var ndistribuidor = $('#ndistribuidor').val();
        //var email = $('#email').val();
        //var dir = $('#dir').val();
        //var inst_edu = $('#inst_edu').val();
        //var inst_edu_dir = $('#inst_edu_dir').val();
        //var inst_edu_dep = $('#inst_edu_dep').val();
        //var inst_edu_dist = $('#inst_edu_dist').val();
        //var inst_edu_telf = $('#inst_edu_telf').val();
       // var user = $('#user').val();
        
        /* if($("#retonitos").is(':checked')) {  
           var retonitos = $("#retonitos").val();  
        } else {  
           var retonitos = '';  
        }
        
        if($("#maestras").is(':checked')) {  
           var maestras = $("#maestras").val();  
        } else {  
           var maestras = '';  
        }
        
        if($("#miss").is(':checked')) {  
           var miss = $("#miss").val();  
        } else {  
           var miss = '';  
        }       */     

		$("#nombre").css({ background: "white", border: "1px solid #97bddb", color: "#666666" });
        $("#domicilio").css({ background: "white", border: "1px solid #97bddb", color: "#666666" });
        $("#referencia").css({ background: "white", border: "1px solid #97bddb", color: "#666666" });
		$("#dni").css({ background: "white", border: "1px solid #97bddb", color: "#666666" });
        $("#telef").css({ background: "white", border: "1px solid #97bddb", color: "#666666" });
        /* $("#fnacdia").css({ background: "white", border: "1px solid #97bddb", color: "#666666" });
        $("#fnacmes").css({ background: "white", border: "1px solid #97bddb", color: "#666666" });
        $("#fnacanio").css({ background: "white", border: "1px solid #97bddb", color: "#666666" });
        $("#dep").css({ background: "white", border: "1px solid #97bddb", color: "#666666" });
        $("#dist").css({ background: "white", border: "1px solid #97bddb", color: "#666666" });
        $("#ndistribuidor").css({ background: "white", border: "1px solid #97bddb", color: "#666666" }); */
        $("#email").css({ background: "white", border: "1px solid #97bddb", color: "#666666" });
        $("#apod").css({ background: "white", border: "1px solid #97bddb", color: "#666666" }); 
        
		if ( nom == "") {
			$('#error').html( 'Debe ingresar su nombre.' );
			$('#error').slideDown('fast').delay(2000).slideUp('fast');
            $("#nombre").css({ background: "red", border: "3px solid #97bddb", color: "white" });
            
		}
        else if(ape == "")
        {
          $('#error').html( 'Debe ingresar su apellido.' );
		  $('#error').slideDown('fast').delay(2000).slideUp('fast'); 
          $("#ape").css({ background: "red", border: "3px solid #97bddb", color: "white" }); 
        }
        else if(pass == "")
        {
          $('#error').html( 'Debe ingresar su password.' );
		  $('#error').slideDown('fast').delay(2000).slideUp('fast');
          $("#pass").css({ background: "red", border: "3px solid #97bddb", color: "white" });  
        }
        else if(dni == "")
        {
          $('#error').html( 'Debe ingresar su dni.' );
		  $('#error').slideDown('fast').delay(2000).slideUp('fast');
          $("#dni").css({ background: "red", border: "3px solid #97bddb", color: "white" });  
        }
        
        else if(email == "")
        {
          $('#error').html( 'Debe ingresar su email.' );
		  $('#error').slideDown('fast').delay(2000).slideUp('fast');
          $("#email").css({ background: "red", border: "3px solid #97bddb", color: "white" });  
        }
        else if($("#email").val().indexOf('@', 0) == -1 || $("#email").val().indexOf('.', 0) == -1) {  
	    $('#error').html( 'El email es incorrecto.' );
		$("#email").focus();
		$('#error').slideDown('fast').delay(2000).slideUp('fast'); 
        }
        /*
        else if($("#retonitos").not(':checked') && $("#maestras").not(':checked') && $("#miss").not(':checked'))
        {
          $('#error').html( 'Debe seleccionar por lo menos una revista.' );
		  $('#error').slideDown('fast').delay(2000).slideUp('fast');
          $("#retonitos").css({ background: "red", border: "3px solid #97bddb", color: "white" });  
        }
        */
        else if(telf == "")
        {
          $('#error').html( 'Debe ingresar su telefono.' );
		  $('#error').slideDown('fast').delay(2000).slideUp('fast');
          $("#telf").css({ background: "red", border: "3px solid #97bddb", color: "white" });  
        }
        else if(fnacdia == "")
        {
          $('#error').html( 'Debe ingresar su dia de nacimiento.' );
		  $('#error').slideDown('fast').delay(2000).slideUp('fast'); 
          $("#fnacdia").css({ background: "red", border: "3px solid #97bddb", color: "white" }); 
        }
        else if(fnacmes == "")
        {
          $('#error').html( 'Debe ingresar su mes de nacimiento.' );
		  $('#error').slideDown('fast').delay(2000).slideUp('fast'); 
          $("#fnacmes").css({ background: "red", border: "3px solid #97bddb", color: "white" }); 
        }
        else if(fnacanio == "")
        {
          $('#error').html( 'Debe ingresar su año de nacimiento.' );
		  $('#error').slideDown('fast').delay(2000).slideUp('fast');
          $("#fnacanio").css({ background: "red", border: "3px solid #97bddb", color: "white" });  
        }
        else if(dep == "")
        {
          $('#error').html( 'Debe ingresar su departamento.' );
		  $('#error').slideDown('fast').delay(2000).slideUp('fast');
          $("#dep").css({ background: "red", border: "3px solid #97bddb", color: "white" });  
        }
         else if(dist == "")
        {
          $('#error').html( 'Debe ingresar su distrito.' );
		  $('#error').slideDown('fast').delay(2000).slideUp('fast');
          $("#dist").css({ background: "red", border: "3px solid #97bddb", color: "white" });  
        }
         
        /*
        else if(fnacdia > 2)
        {
        $('#error').html( 'El día de nacimiento debe tener solo 2 digitos.' );
		$("#fnacdia").focus();
		$('#error').slideDown('fast').delay(2000).slideUp('fast');
        } 
        else if(fnacmes > 2)
        {
        $('#error').html( 'El mes de nacimiento debe tener solo 2 digitos.' );
		$("#fnacmes").focus();
		$('#error').slideDown('fast').delay(2000).slideUp('fast');
        }
        else if(fnacanio > 4)
        {
        $('#error').html( 'El año de nacimiento debe tener solo 4 digitos.' );
		$("#fnacanio").focus();
		$('#error').slideDown('fast').delay(2000).slideUp('fast');
        } 
        */
		else { 
			$.ajax({
				type: 'post',
				url: 'controller/registro.php',
				data: {nom:nom, ape:ape, pass:pass, dni:dni, telf:telf, fnacdia:fnacdia, fnacmes:fnacmes, fnacanio:fnacanio, dep:dep, dist:dist, email:email, retonitos:retonitos, maestras:maestras, miss:miss, user:user, ndistribuidor:ndistribuidor},
				success: function(datos) {
				    if(datos == 1)
                    {
                    $('#error').html( "El DNI ya se encuentra registrado" );
					$('#error').slideDown('fast').delay(2000).slideUp('fast');
                    }
                    else if(datos == 2)
                    {
                    $('#error').html( "El Email ya se encuentra registrado" );
					$('#error').slideDown('fast').delay(2000).slideUp('fast');
                    }
                    else if(datos == 0)
                    {
                    $('#mensaje').html( "Los datos se ingresaron correctamente" );
					$('#mensaje').slideDown('fast').delay(2000).slideUp('fast');
                    $("#registro").fadeToggle(3000);
                    $('body,html').animate({
                            scrollTop: 0
                    }, 500);
                    $("#gracias").show("slow");
                    //$('#registro').hide('blind', { direction: 'horizontal' }, 1000); 
                    }

					
				
				}
			});
		}
	});

});



$(document).ready(function(){
	$('#frmLogin').submit(function(e){
		e.preventDefault();
       
        var dni = $('#dnilogin').val();
        var pass = $('#passlogin').val();
		
		if ( dni == "") {
			$('#errorlogin').html( 'Debe ingresar su DNI.' );
			$('#errorlogin').slideDown('fast').delay(2000).slideUp('fast');
		}

        else if ( pass == "") {
			$('#errorlogin').html( 'Debe ingresar su clave.' );
			$('#errorlogin').slideDown('fast').delay(2000).slideUp('fast');
		}
		else {
			$.ajax({
				type: 'post',
				url: 'controller/login.php',
				data: {dni:dni, pass:pass},
				success: function(datos) {
				$('#mensajelogin').html( datos ); 
			   				
				if(datos > 0)
                    {
                   // $("#errorlogin").addClass("custom-box-error");    
                    $('#errorlogin').html( "El DNI no esta habilitado o registrado" );
					$('#errorlogin').slideDown('fast').delay(2000).slideUp('fast');
                    }
                if(datos == 0)
                    {
                    //$("#mensajelogin").addClass("custom-box-success");    
                    $('#mensajelogin').html( "Acceso correcto" );
					$('#mensajelogin').slideDown('fast').delay(2000).slideUp('fast');
                    location.href = 'mi-cuenta.php';   
                    }
                 
				}
			});
		}
	});

});






$(document).ready(function(){
	$('#frmLogin2').submit(function(e){
		e.preventDefault();
       
        var dni = $('#dnilogin').val();
        var pass = $('#passlogin').val();
		
		if ( dni == "") {
			$('#errorlogin2').html( 'Debe ingresar su DNI.' );
			$('#errorlogin2').slideDown('fast').delay(2000).slideUp('fast');
		}

        else if ( pass == "") {
			$('#errorlogin2').html( 'Debe ingresar su clave.' );
			$('#errorlogin2').slideDown('fast').delay(2000).slideUp('fast');
		}
		else {
			$.ajax({
				type: 'post',
				url: 'controller/login.php',
				data: {dni:dni, pass:pass},
				success: function(datos) {
				$('#mensajelogin2').html( datos ); 
			   				
				if(datos > 0)
                    {
                   // $("#errorlogin").addClass("custom-box-error");    
                    $('#errorlogin2').html( "El DNI no esta habilitado o registrado" );
					$('#errorlogin2').slideDown('fast').delay(2000).slideUp('fast');
                    }
                if(datos == 0)
                    {
                    //$("#mensajelogin").addClass("custom-box-success");    
                    $('#mensajelogin2').html( "Acceso correcto" );
					$('#mensajelogin2').slideDown('fast').delay(2000).slideUp('fast');
                    location.href = 'mi-cuenta.php';   
                    }
                 
				}
			});
		}
	});

});
/*
\u00e1 = á
\u00e9 = é
\u00ed = í
\u00f3 = ó
\u00fa = ú
\u00c1 = Á
\u00c9 = É
\u00cd = Í
\u00d3 = Ó
\u00da = Ú
\u00f1 = ñ
\u00d1 = Ñ 
*/
$(document).ready(function(){
	$('#frmRecuperar').submit(function(e){
		e.preventDefault();
       
        var email = $('#email').val();
		
		if(email == "")
        {
          $('#error').html( 'Debe ingresar su email.' );
		  $('#error').slideDown('fast').delay(2000).slideUp('fast');
        }
        else if($("#email").val().indexOf('@', 0) == -1 || $("#email").val().indexOf('.', 0) == -1) {  
	    $('#error').html( 'El email es incorrecto.' );
		$("#email").focus();
		$('#error').slideDown('fast').delay(2000).slideUp('fast'); 
        }
		else {
			$.ajax({
				type: 'post',
				url: 'controller/recuperar.php',
				data: {email:email},
				success: function(datos) {
				$('#mensaje').html( datos ); 
			   				
				if(datos == 0)
                    {
                   // $("#errorlogin").addClass("custom-box-error");    
                    $('#error').html( "El Email no se encuentra registrado o tal vez su cuenta a\u00fan no est\u00e1 habilitada" );
					$('#error').slideDown('fast').delay(5000).slideUp('fast');
                    }
                else
                    {
                    //$("#mensajelogin").addClass("custom-box-success");    
                    //$('#mensaje').html( "Su contrase\u00f1a fue cambiada, revise su correo" );
					//$('#mensaje').slideDown('fast').delay(2000).slideUp('fast');
                    $("#recuperar").fadeToggle(3000);
                    $('body,html').animate({
                            scrollTop: 0
                    }, 500);
                    $("#gracias").show("slow"); 
                    }
                 
				}
			});
		}
	});

});


$(document).ready(function(){
	$('#frmcompra').click(function(e){
		e.preventDefault();
       
        var nom = $('#nom').val();
        var ape = $('#ape').val();
        var telf = $('#telf').val();
        var email = $('#email').val();
        var prod = $('#prod').val();
        
        if ( nom == "") {
		 	$('#errorlogin').html( 'Ingrese su Nombre.' );
			$('#errorlogin').slideDown('fast').delay(2000).slideUp('fast');
		}
        
        else if ( ape == "") {
			$('#errorlogin').html( 'Ingrese sus Apellidos.' );
			$('#errorlogin').slideDown('fast').delay(2000).slideUp('fast');
		}


		else {
			$.ajax({
				type: 'post',
				url: 'controller/suscribete.php',
				data: {nom:nom,ape:ape,email:email,prod:prod},
				success: function(datos) {
				$('#mensajelogin').html( datos ); 
			   				
				if(datos > 0)
                    {
                   // $("#errorlogin").addClass("custom-box-error");    
                    $('#errorlogin').html( "El Email ya se encuentra registrado" );
					$('#errorlogin').slideDown('fast').delay(2000).slideUp('fast');
                    }
                if(datos == 0)
                    {
                    //$("#mensajelogin").addClass("custom-box-success");    
                    $('#mensajelogin').html( "Gracias por suscriberse, lo mantendremos informado de nuestra novedades" );
					$('#mensajelogin').slideDown('fast').delay(2000).slideUp('fast'); 
                    }
                 
				}
			});
		}
	});

});


$(document).ready(function(){
	$('#frmsuscribete').submit(function(e){
		e.preventDefault();
       
        var email = $('#email').val();
		
		if ( email == "") {
			$('#error').html( 'Debe ingresar su Email.' );
			$('#error').slideDown('fast').delay(2000).slideUp('fast');
		}
        else if($("#email").val().indexOf('@', 0) == -1 || $("#email").val().indexOf('.', 0) == -1) {  
	    $('#error').html( 'El email es incorrecto. Por favor verifique' );
		$("#email").focus();
		$('#error').slideDown('fast').delay(2000).slideUp('fast'); 
        }

		else {
			$.ajax({
				type: 'post',
				url: 'controller/suscribete.php',
				data: {email:email},
				success: function(datos) {
				$('#mensajelogin').html( datos ); 
			   				
				if(datos > 0)
                    {
                   // $("#errorlogin").addClass("custom-box-error");    
                    $('#error').html( "El Email ya se encuentra registrado" );
					$('#error').slideDown('fast').delay(2000).slideUp('fast');
                    }
                if(datos == 0)
                    {
                    //$("#mensajelogin").addClass("custom-box-success");    
                    $('#mensaje').html( "Gracias por suscriberse, lo mantendremos informado de nuestra novedades" );
					$('#mensaje').slideDown('fast').delay(2000).slideUp('fast'); 
                    }
                 
				}
			});
		}
	});

});



$(document).ready(function(){
	$('#contactForm').submit(function(e){
		e.preventDefault();
       
        var nom = $('#nom').val();
        var email = $('#email').val();
        var msj = $('#msj').val();
        
        if ( nom == "") {
			$('#error').html( 'Debe ingresar su nombre.' );
			$('#error').slideDown('fast').delay(2000).slideUp('fast');
		}
		
		else if ( email == "") {
			$('#error').html( 'Debe ingresar su Email.' );
			$('#error').slideDown('fast').delay(2000).slideUp('fast');
		}
        else if($("#email").val().indexOf('@', 0) == -1 || $("#email").val().indexOf('.', 0) == -1) {  
	    $('#error').html( 'El email es incorrecto. Por favor verifique' );
		$("#email").focus();
		$('#error').slideDown('fast').delay(2000).slideUp('fast'); 
        }
        
        else if ( msj == "") {
			$('#error').html( 'Debe ingresar su mensaje.' );
			$('#error').slideDown('fast').delay(2000).slideUp('fast');
		}
        

		else {
			$.ajax({
				type: 'post',
				url: 'controller/contacto-mail.php',
				data: {nom:nom,email:email,msj:msj},
				success: function(datos) {
				$('#mensaje').html( datos );
  				$('#mensaje').slideDown('fast').delay(2000).slideUp('fast');
                $("#contactomail").fadeToggle(3000);
                $('body,html').animate({
                            scrollTop: 0
                    }, 500);
                    $("#gracias").show("slow");
			
                 
				}
			});
		}
	});

});





$(document).ready(function(){
	$('#frmcuenta').submit(function(e){
		e.preventDefault();
       
        var nom = $('#nom').val();
        var ape = $('#ape').val();
        var dni = $('#dni').val();
        var email = $('#email').val();
        var telf = $('#telf').val();
        var msj = $('#msj').val();
        
        if ( nom == "") {
			$('#error').html( 'Debe ingresar su nombre.' );
			$('#error').slideDown('fast').delay(2000).slideUp('fast');
		}
		else if ( ape == "") {
			$('#error').html( 'Debe ingresar su apellido.' );
			$('#error').slideDown('fast').delay(2000).slideUp('fast');
		}
        else if ( dni == "") {
			$('#error').html( 'Debe ingresar su DNI.' );
			$('#error').slideDown('fast').delay(2000).slideUp('fast');
		}
		else if ( email == "") {
			$('#error').html( 'Debe ingresar su Email.' );
			$('#error').slideDown('fast').delay(2000).slideUp('fast');
		}
        else if($("#email").val().indexOf('@', 0) == -1 || $("#email").val().indexOf('.', 0) == -1) {  
	    $('#error').html( 'El email es incorrecto. Por favor verifique' );
		$("#email").focus();
		$('#error').slideDown('fast').delay(2000).slideUp('fast'); 
        }
        
        else if ( telf == "") {
			$('#error').html( 'Debe ingresar su telefono.' );
			$('#error').slideDown('fast').delay(2000).slideUp('fast');
		}
        
        else if ( msj == "") {
			$('#error').html( 'Debe ingresar su mensaje.' );
			$('#error').slideDown('fast').delay(2000).slideUp('fast');
		}
        

		else {
			$.ajax({
				type: 'post',
				url: 'controller/estado-cuenta-mail.php',
				data: {nom:nom,ape:ape,dni:dni,email:email,telf:telf,msj:msj},
				success: function(datos) {
				$('#mensaje').html( datos );
  				$('#mensaje').slideDown('fast').delay(2000).slideUp('fast');
                $("#frmcuenta").fadeToggle(3000);
                $('body,html').animate({
                            scrollTop: 0
                    }, 500);
                    $("#gracias").show("slow");
			
                 
				}
			});
		}
	});

});



$(document).ready(function(){
	$('#frmrenovacion').submit(function(e){
		e.preventDefault();
       
        if($("#retonitos").is(':checked')) {  
           var retonitos = $("#retonitos").val();  
        } else {  
           var retonitos = '';  
        }
        
        if($("#maestras").is(':checked')) {  
           var maestras = $("#maestras").val();  
        } else {  
           var maestras = '';  
        }
        
        if($("#miss").is(':checked')) {  
           var miss = $("#miss").val();  
        } else {  
           var miss = '';  
        } 
       
        var nom = $('#nom').val();
        var ape = $('#ape').val();
        var dni = $('#dni').val();
        var email = $('#email').val();
        var telf = $('#telf').val();
        var msj = $('#msj').val();

        
        if ( nom == "") {
			$('#error').html( 'Debe ingresar su nombre.' );
			$('#error').slideDown('fast').delay(2000).slideUp('fast');
		}
		else if ( ape == "") {
			$('#error').html( 'Debe ingresar su apellido.' );
			$('#error').slideDown('fast').delay(2000).slideUp('fast');
		}
        else if ( dni == "") {
			$('#error').html( 'Debe ingresar su DNI.' );
			$('#error').slideDown('fast').delay(2000).slideUp('fast');
		}
		else if ( email == "") {
			$('#error').html( 'Debe ingresar su Email.' );
			$('#error').slideDown('fast').delay(2000).slideUp('fast');
		}
        else if($("#email").val().indexOf('@', 0) == -1 || $("#email").val().indexOf('.', 0) == -1) {  
	    $('#error').html( 'El email es incorrecto. Por favor verifique' );
		$("#email").focus();
		$('#error').slideDown('fast').delay(2000).slideUp('fast'); 
        }
        
        else if ( telf == "") {
			$('#error').html( 'Debe ingresar su telefono.' );
			$('#error').slideDown('fast').delay(2000).slideUp('fast');
		}
        

        
        else if ( msj == "") {
			$('#error').html( 'Debe ingresar su mensaje.' );
			$('#error').slideDown('fast').delay(2000).slideUp('fast');
		}
        
        
		else {
			$.ajax({
				type: 'post',
				url: 'controller/renovacion-mail.php',
				data: {nom:nom,ape:ape,dni:dni,email:email,telf:telf,msj:msj,retonitos:retonitos,maestras:maestras,miss:miss},
				success: function(datos) {
				$('#mensaje').html( datos );
  				$('#mensaje').slideDown('fast').delay(2000).slideUp('fast');
                $("#frmrenovacion").fadeToggle(3000);
                $('body,html').animate({
                            scrollTop: 0
                    }, 500);
                    $("#gracias").show("slow");
			
                 
				}
			});
		}
	});

});




$(document).ready(function(){
	$('#frmdistribuidor').submit(function(e){
		e.preventDefault();
       
        var nom = $('#nom').val();
        var ape = $('#ape').val();
        var dni = $('#dni').val();
        var email = $('#email').val();
        var telf = $('#telf').val();
        var msj = $('#msj').val();
        var dep = $('#dep').val();
        
        if ( nom == "") {
			$('#error').html( 'Debe ingresar su nombre.' );
			$('#error').slideDown('fast').delay(2000).slideUp('fast');
		}
		else if ( ape == "") {
			$('#error').html( 'Debe ingresar su apellido.' );
			$('#error').slideDown('fast').delay(2000).slideUp('fast');
		}
        else if ( dni == "") {
			$('#error').html( 'Debe ingresar su DNI.' );
			$('#error').slideDown('fast').delay(2000).slideUp('fast');
		}
		else if ( email == "") {
			$('#error').html( 'Debe ingresar su Email.' );
			$('#error').slideDown('fast').delay(2000).slideUp('fast');
		}
        else if($("#email").val().indexOf('@', 0) == -1 || $("#email").val().indexOf('.', 0) == -1) {  
	    $('#error').html( 'El email es incorrecto. Por favor verifique' );
		$("#email").focus();
		$('#error').slideDown('fast').delay(2000).slideUp('fast'); 
        }
        
        else if ( telf == "") {
			$('#error').html( 'Debe ingresar su telefono.' );
			$('#error').slideDown('fast').delay(2000).slideUp('fast');
		}
        
        else if ( msj == "") {
			$('#error').html( 'Debe ingresar su mensaje.' );
			$('#error').slideDown('fast').delay(2000).slideUp('fast');
		}
        
        else if ( dep == "") {
			$('#error').html( 'Debe ingresar su Departamento.' );
			$('#error').slideDown('fast').delay(2000).slideUp('fast');
		}
        

		else {
			$.ajax({
				type: 'post',
				url: 'controller/distribuidor-mail.php',
				data: {nom:nom,ape:ape,dni:dni,email:email,telf:telf,msj:msj,dep:dep},
				success: function(datos) {
				$('#mensaje').html( datos );
  				$('#mensaje').slideDown('fast').delay(2000).slideUp('fast');
                $("#frmdistribuidor").fadeToggle(3000);
                $('body,html').animate({
                            scrollTop: 0
                    }, 500);
                    $("#gracias").show("slow");
			
                 
				}
			});
		}
	});

});




$(document).ready(function(){
	$('#frmRenovacion').submit(function(e){
		e.preventDefault();     
        var dni = $('#dni').val();
        var email = $('#email').val();
        
        
        if ( dni == "") {
			$('#error').html( 'Debe ingresar su DNI.' );
			$('#error').slideDown('fast').delay(2000).slideUp('fast');
		}
		else if ( email == "") {
			$('#error').html( 'Debe ingresar su Email.' );
			$('#error').slideDown('fast').delay(2000).slideUp('fast');
		}
        else if($("#email").val().indexOf('@', 0) == -1 || $("#email").val().indexOf('.', 0) == -1) {  
	    $('#error').html( 'El email es incorrecto. Por favor verifique' );
		$("#email").focus();
		$('#error').slideDown('fast').delay(2000).slideUp('fast'); 
        }

		else {
			$.ajax({
				type: 'post',
				url: '../controller/renovacion-mail.php',
				data: {dni:dni,email:email},
				success: function(datos) {
				$('#mensaje').html( datos );
  				$('#mensaje').slideDown('fast').delay(2000).slideUp('fast');
                $("#contactomail").fadeToggle(3000);
                $('body,html').animate({
                            scrollTop: 0
                    }, 500);
                    $("#gracias").show("slow");
			
                 
				}
			});
		}
	});

});


	var nav4 = window.Event ? true : false;			
	function acceptNum(evt)
	{ 	// NOTA: Backspace = 8, Enter = 13, '0' = 48, '9' = 57                 
		//var key = nav4 ? evt.which : evt.keyCode; 
		/*if(nav4){
		  var key =evt.keyCode;
		}else{
		  var key =evt.which;
		}
		return (key <= 13 || (key >= 48 && key <= 57));*/
		var nav4 = window.Event ? true : false;
		var key = nav4 ? evt.which : evt.keyCode;
		return (key <= 13 || (key >= 48 && key <= 57) || key == 44);
	}
	function acceptLet(evt)
	{ 
		// NOTA: Backspace = 8, Enter = 13, '0' = 48, '9' = 57 
		var key = nav4 ? evt.which : evt.keyCode; 
		return (key <= 32 || (key >= 65 && key <= 90) || (key >= 97) );
	}