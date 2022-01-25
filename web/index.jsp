

<%-- 
Document   : index
Created on : 22/08/2014, 11:39:42 AM
Author     : DESARROLLO
--%>


<%@page import="javax.swing.JOptionPane"%>
<%@ page session="true" %>
<%@ page import="java.util.Vector" %>
<%@page import="java.sql.*" %>
<%@ page session="true" %>
<%@page import="servelt.directorio"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
    
    <head>
        <!--<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">-->
        <meta content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' name='viewport'>

        <title>Libro de Reclamaciones</title>
        <!-- bootstrap 3.0.2 -->
        <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" />
        <!-- font Awesome -->
        <link href="css/font-awesome.min.css" rel="stylesheet" type="text/css" />
        <!-- Ionicons -->
        <link href="css/ionicons.min.css" rel="stylesheet" type="text/css" />
        <!-- Theme style -->
        <link href="css/AdminLTE.css" rel="stylesheet" type="text/css" />
        <style>


        </style>
     
    </head>
    <body>
        <header>


            <div class="box box-primary" >

                <!-- form start -->
                
                    <div align="center" >
                        <table width="600" border="0">
                            <tr>
                                <td>
                                    <h2 align="left"><strong>Anexo I: Formato de Hoja de Reclamaci&oacute;n del Libro de Reclamaciones</strong></h2>
                                      
                                    </td>
                                <td align="center">
                                    <Img id = "img1"  SRC="img/LOGO_SENASA.JPG"  /><!-- WIDTH="434" HEIGHT="95"  /> -->
                                    <!-- <div style = "width: 60%;" ></div> -->
                                    <!--<  <IMG SRC="img/LOGO_SENASA.JPG" alt="" WIDTH="434" HEIGHT="95" id = "img1" >--></td>
                            </tr>

                        </table>
                    </div>
            </div><!-- /.box -->
            <div class="box box-primary" >

                <!-- form start -->
                
                    <div align="center" >
                        <table width="700" border="0">
                            <tr>
                                <td> <label><h4 align="left"><strong>Fecha:</strong></h4></label> 
                                    <label aling="left">
                                    <script>
                                    var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
                                    var diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
                                    var f=new Date();
                                    document.write(diasSemana[f.getDay()] + ", " + f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear());
                                    </script>
                                    </label> 
                                 </td>
                                
                                
                                <td> <label><h4 align="left"><strong> N° <%
                            
                                            directorio al = new directorio();
 
                                            out.print(al.maximo());
                                %></strong></h4></label>  
                               
                               
                                </td>
                            </tr>
                             <tr>
                                 <td> <label><h4 align="left"><strong>SERVICIO NACIONAL DE SANIDAD AGRARIA</strong></h4></label></td>
                                <td> <label><h5 align="left"><strong>RUC N° 20131373075</strong></h5></label></td>
                            </tr>
                            <tr> 
                                <td> <h5 align="left"> Sede Central: Av. La Molina Nº 1915 - Lima 12 - La Molina, Lima-Perú </h5> </td>
                                <td align="left"> Código: </td>
                            </tr>

                        </table>
                    </div>
            </div><!-- /.box -->

        </header>


    <body class="skin-blue" width="70%" >


        <!-- <img src="LOGO_SENASA.JPG" alt="Smiley face" height="42" width="42">-->

        <!-- header logo: style can be found in header.less -->
        
        <div>

         
                <!-- Content Header (Page header) -->

                <section class="content-header" >
                    <!--<div style="position:absolute;right:268px;top:50px;"> <h2><span>Anexo I: Formato de Hoja de Reclamaci&oacute;n del Libro de Reclamaciones</span></h2></div>
                    </section>-->

<%
                        HttpSession s = request.getSession();
                        Class.forName("oracle.jdbc.OracleDriver");
                        Connection con = DriverManager.getConnection("jdbc:oracle:thin:@10.0.0.172:1521:sig2", "SIGSA", "zoosanitario");
                       // String cod =request.getParameter("codigoper");
                        //String nomape = request.getParameter("nombres");
                        //PreparedStatement ps = con.prepareStatement("select max(registro_id)+1 as maximo from libro_reclamaciones");
                        //ResultSet rs = ps.executeQuery();
                      //  while (rs.next() == false) {


                        if (request.getParameter("btninsertar") != null) {
                            directorio gb = new directorio();
                            // gb.setRegistro_id(Integer.parseInt(request.getParameter("registro_id")));
                            gb.setNombre(request.getParameter("nombre"));
                            gb.setDomicilio(request.getParameter("domicilio"));
                            gb.setReferencia(request.getParameter("referencia"));
                            gb.setDni(request.getParameter("dni"));
                            gb.setTelefono(request.getParameter("telefono"));
                            gb.setEmail(request.getParameter("email"));
                            gb.setMenor(request.getParameter("menor"));
                            gb.setApoderado(request.getParameter("apoderado"));
                            gb.setIdent_servicio(request.getParameter("ident_servicio"));
                            gb.setMonto(request.getParameter("monto"));
                            gb.setDescripcion(request.getParameter("descripcion"));
                            gb.setDetalle_reclamo(request.getParameter("detalle_reclamo"));
                            gb.setReclamo(request.getParameter("reclamo"));
                            gb.setPedido(request.getParameter("pedido"));

                            gb.EnviarConfir();
                            gb.GrabarAnexo();

                            //JOptionPane.showMessageDialog(null, "Reclamo registrado satisfactoriamente");
                            // out.print("Se envio el reclamo");
                            //response.sendRedirect("index.jsp");

                            String mensaje = "<script language='javascript'>alert('Reclamo registrado satisfactoriamente');</script>";

                            out.println(mensaje);
                            
                            
                            

                        
                        }
                    %>
                   



                    <form action="index.jsp" method="post" name="form1" >
                        <!-- Main content -->

                        <section class="content">

                            <div>
                                
                           
                                    <!-- <div class="col-md-8" style="position:absolute;left:240px;top:150px;"> -->

                                    <!-- general form elements -->
                                    <div class="box box-primary">
                                        <div class="box-header">
                                            <h4 class="box-title"><strong>1. IDENTIFICACI&Oacute;N DEL CONSUMIDOR RECLAMANTE</strong></h4>
                                        </div><!-- /.box-header -->
                                        <!-- form start -->

                                        <div>

                                            <div class="col-xs-10">
                                                <input type="hidden" class="form-control" id="exampleInputPassword1" >
                                            </div>
                                            <div class="col-xs-2">
                                                <!--   <input type="text" class="form-control" disabled="true"  >
                                               name="registro_id" -->
                                            </div>
                                        </div>
                                        <div class="box-body" >
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Nombres:</label>
                                                <input type="text" class="form-control" id="exampleInputEmail1" required name="nombre">
                                            </div>
                                            <div class="form-group">
                                                <label for="exampleInputPassword1">Domicilio:</label>
                                                <input type="text" class="form-control" id="exampleInputPassword1" required name="domicilio" >
                                            </div>
                                            <div class="col-xs-4">
                                                <label for="exampleInputPassword1">DNI/CE:</label>
                                                <input type="text" class="form-control" name="dni" required  title="DNI 8 dígitos, CE 12 dígitos" maxlength="12" >
                                            </div>
                                            <div class="col-xs-8">
                                                <!--<label  for="exampleInputPassword1">Referencia:</label>-->
                                                <input  type="hidden" class="form-control" id="exampleInputPassword1" required name="referencia" >
                                            </div>
                                            

                                            <div class="col-xs-4">
                                                <label for="exampleInputPassword1">Tel&eacute;fono:</label>
                                                <input type="text" class="form-control" name="telefono"  required title="9 dígitos"  maxlength="9">
                                            </div>
                                            <div class="col-xs-4">
                                                <label for="exampleInputPassword1">Email:</label>
                                                <input type="email" class="form-control" id="exampleInputPassword1" name="email" required>
                                            </div>
                                            


                                            <div class="form-group">

                                                <label for="exampleInputPassword1"> ¿Eres Menor de edad?:</label>
                                                


                                                <input type="radio" name="menor"  value="SI" required onclick="habilita(this.form1)">SI
                                                <input type="radio" name="menor" value="NO" required onclick="deshabilita(this.form1)">NO

                                                <!--<B>PADRE O MADRE:</B>
                                                <input type="text"  class="form-control"  name="apoderado" disabled="disabled" >-->



                                            </div>




                                            <div class="form-group">
                                                <label for="exampleInputPassword1">PADRE O MADRE:</label>
                                                <input type="text" class="form-control" name="apoderado"  >
                                            </div>

                                        </div><!-- /.box-body -->
                                    </div>


                                    <div class="box box-primary">
                                        <div class="box-header">
                                            <h6 class="box-title"><strong>2. IDENTIFICACI&Oacute;N DEL BIEN CONTRATADO</strong></h6>
                                        </div><!-- /.box-header -->
                                        <!-- form start -->
                                        <form >
                                            <div class="box-body">
                                                <table width="100%" border="0">
                                                <tr>
                                                <td rowspan="2">
                                                <div class="radio"> 
                                                
                                                <input type="radio" name="ident_servicio" id="optionsRadios1" value="Producto" required >
                                               &nbsp;Producto
                                                <br>
                                                <br>
                                                <br>
                                                <br>
                                               
                                                <input type="radio" name="ident_servicio" id="optionsRadios2" value="Servicio" required>
                                                &nbsp;Servicio &nbsp; 
                                                </div>
                                                </td> 
                                                <td >
                                                
                                               
                                                <label >Monto Reclamado:</label>

                                                
                                                </td>
                                                <td>
                                               
                                                <input type="text" class="form-control" id="exampleInputEmail1" name="monto" required maxlength="30">

                                               
                                                </td>
                                                </tr>
                                                <tr>
                                                <td>
                                                    <br>
                                                    <br>
                                                <label for="exampleInputPassword1">Descripci&oacute;n:</label>
                                                </td>

                                                <td>
                                                <textarea class="form-control" rows="2" name="descripcion"placeholder="" required maxlength="500"></textarea></td>

                                                </tr>

                                                </table>
                                               <!-- <div class="col-xs-4">
                                                <label for="exampleInputPassword1">Tel&eacute;fono</label>
                                                <input type="text" class="form-control" name="telefono"  required title="9 dígitos"  maxlength="9">
                                            </div>-->  
                                                 
                                                  
                                               <!-- <label >Monto Reclamado:</label>
                                                    <div class="form-group">
                                                   <!-- <label for="exampleInputEmail1">Monto Reclamado:</label>
                                                    <input type="text" class="form-control .col-xs-2" id="exampleInputEmail1" name="monto" required maxlength="30">
                                                </div>-->
                                               <!-- <div class="form-group">
                                                    <label for="exampleInputPassword1">Descripci&oacute;n:</label>
                                                    <textarea class="form-control" rows="3" name="descripcion"placeholder="" required maxlength="500"></textarea>
                                                </div>-->

                                            </div><!-- /.box-body -->
                                        </form>
                                    </div><!-- /.box -->

                                    <div class="box box-primary">
                                        <div class="box-header">
                                            <h6 class="box-title"><strong>3. DETALLE DE LA RECLAMACI&Oacute;N Y PEDIDO DEL CONSUMIDOR</strong></h6>
                                       <div class="radio">                     
                                                <input type="radio" name="detalle_reclamo" id="optionsRadios1" value="Reclamo" required>
                                                Reclamo<sup>1</sup>							
                                                <input type="radio" name="detalle_reclamo" id="optionsRadios2" value="Queja" required>
                                                Queja<sup>2</sup>
                                            </div> 
                                        
                                        
                                        </div><!-- /.box-header -->
                                        <!-- form start -->

                                        <div class="box-body">
                                            

                                            <div class="form-group">
                                                <label for="exampleInputPassword1">Detalle:</label>
                                                <textarea class="form-control" rows="3" name="reclamo" placeholder="" required maxlength="500"></textarea>
                                            </div>
                                            <div class="form-group">
                                                <label for="exampleInputPassword1">Pedido:</label>
                                                <textarea class="form-control" rows="3" name="pedido" placeholder="" required maxlength="500"></textarea>
                                            </div>
                                        </div><!-- /.box-body -->

                                       


                                    </div>
                                    
                                    <div class="box box-primary">
                                        <div class="box-header">
                                            <h6 class="box-title"><strong>4. OBSERVACIONES Y ACCIONES ADOPTADAS POR EL PROVEEDOR</strong></h6>
                                       
                                        
                                        
                                        </div><!-- /.box-header -->
                                        <!-- form start -->

                                        <div class="box-body">
                                          <div align="center" >                                        
<table width="700" border="1">
  <tr>
    <td height="30" colspan="2"><label> FECHA DE COMUNICACI&Oacute;N DE LA RESPUESTA:</label></td>
    <td width="153"><input type="text" class="form-control" id="exampleInputPassword1" name="fecha_respuesta" disabled="true"></td>
    <td align="center" width="180" rowspan="2">
        <br>
        <br>
        <br>
        <br>
        
        <label>FIRMA DEL PROVEEDOR</label></td>
  </tr>
  <tr>
    <td height="98" colspan="3">
        <div class="form-group">
            <br>
         
            <textarea class="form-control" rows="2" name="descrip_respuesta" placeholder="" required maxlength="500" disabled="true"></textarea>
          </div>
        
    </td>
  </tr>
  <tr>
      <td colspan="2"><h6>RECLAMO<sup>1</sup> : Disconformidad relacionada a los productos o servicios.</h6></td>
    <td colspan="2"><h6>QUEJA<sup>2</sup> : Disconformidad no relacionada a los productos o servicios; 
    malestar o descontento respecto a la atenci&oacute;n al p&uacute;blico.</h6></td>
  </tr>
  <tr>
    <td height="71" colspan="4">
        <h6>
            <ul>
          <li>La Formulaci&oacute;n del reclamo no impide acudir a otras v&iacute;as de soluci&oacute;n
             de controversias ni es requisito previo para interponder una denuncia ante INDECOPI.
          </li>
             <li>
             El provedor deber&aacute; dar el reclamo en un plazo no mayor a treinta (30) d&iacute;as calendario, pudiendo ampliar el plazo hasta treinta(30)
             d&iacute;as m&aacute;s, previa comunicaci&oacute;nn al consumidor.</p>
             </li>
            </ul>
      </h6>
    </td>
  </tr>
</table>
                                              <br>
                                              <br>
                                              
                                              <div align="right" style="position:right">
                                            <button type="submit" name="btninsertar"class="btn btn-primary" id="button" style='width:120px; height:40px'><h4>Registrar</h4></button>
                                            
                                        </div>
                                             
                                              
                                                </div> 
                                            
                                            
                                            

                                          


                                    </div>
                                         
                                    <!-- Input addon -->


                               
                                <!-- right column -->

                            </div>   <!-- /.row -->

                        </section><!-- /.content -->

                    </form>
                    
        </div><!-- ./wrapper -->
        <!-- jQuery 2.0.2 -->
        <script src="js/jquery.min.js" type="text/javascript"></script>
        <!-- Bootstrap -->
        <script src="js/bootstrap.min.js" type="text/javascript"></script>
        <!-- AdminLTE App -->
        <script src="js/AdminLTE/app.js" type="text/javascript"></script>
        <!-- AdminLTE for demo purposes -->


    </body>
</html>
