/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package conexion;

import java.sql.*;

/**
 *
 * @author DESARROLLO
 */
public class newConexion {
     Connection cn;
     
    public newConexion() {
        try{
            
           // Class.forName("oracle.jdbc.OracleDriver");
        //JOptionPane.showMessageDialog(null, "Regoracle.jdbc.driver.OracleDrivi");
        //Connection con=DriverManager.getConnection("jdbc:oracle:thin:@10.0.0.172:1521:sig2","SIGSA","zoosanitario");
            Class.forName("oracle.jdbc.OracleDriver");
            cn=DriverManager.getConnection("jdbc:oracle:thin:@10.0.0.172:1521:sig2","SIGSA","zoosanitario");
        }catch(Exception e){

        }
    }
    
     public ResultSet Listar(String Cad){
        try{
            PreparedStatement da = cn.prepareStatement(Cad);
            ResultSet tbl = da.executeQuery();
            return tbl;
        }catch(Exception e){
            return null;
        }
    }

    public String Ejecutar(String Cad){
        try{
            PreparedStatement da = cn.prepareStatement(Cad);
            int r;
            String resul="";
            r=da.executeUpdate();
            if(r==1){
                resul = "Operacion completada con exito";
            }else{
                resul = "No se pudo completar operacion";
            }
            return resul;
        }catch(Exception e){
            return "Error "+e;
        }
    }
}
