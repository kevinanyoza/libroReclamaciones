/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package servelt;

import conexion.newConexion;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

/*import conexion.accesodatos;
import java.sql.ResultSet;*/

/**
 *
 * @author DESARROLLO
 */
public class directorio {
    private Integer registro_id;
    private String nombre;
    private String domicilio;
    private String referencia;
    private String dni;
    private String telefono;
    private String email;
    private String menor;
    private String apoderado;
    private String ident_servicio;
    private String monto;
    private String descripcion;
    private String detalle_reclamo;
    private String reclamo;
    private String pedido;

    /**
     * @return the registro_id
     */
    public Integer getRegistro_id() {
        return registro_id;
    }

    /**
     * @param registro_id the registro_id to set
     */
    public void setRegistro_id(Integer registro_id) {
        this.registro_id = registro_id;
    }

    /**
     * @return the nombre
     */
    public String getNombre() {
        return nombre;
    }

    /**
     * @param nombre the nombre to set
     */
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    /**
     * @return the domicilio
     */
    public String getDomicilio() {
        return domicilio;
    }

    /**
     * @param domicilio the domicilio to set
     */
    public void setDomicilio(String domicilio) {
        this.domicilio = domicilio;
    }

    /**
     * @return the referencia
     */
    public String getReferencia() {
        return referencia;
    }

    /**
     * @param referencia the referencia to set
     */
    public void setReferencia(String referencia) {
        this.referencia = referencia;
    }

    /**
     * @return the dni
     */
    public String getDni() {
        return dni;
    }

    /**
     * @param dni the dni to set
     */
    public void setDni(String dni) {
        this.dni = dni;
    }

    /**
     * @return the telefono
     */
    public String getTelefono() {
        return telefono;
    }

    /**
     * @param telefono the telefono to set
     */
    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    /**
     * @return the email
     */
    public String getEmail() {
        return email;
    }

    /**
     * @param email the email to set
     */
    public void setEmail(String email) {
        this.email = email;
    }

    /**
     * @return the menor
     */
    public String getMenor() {
        return menor;
    }

    /**
     * @param menor the menor to set
     */
    public void setMenor(String menor) {
        this.menor = menor;
    }

    /**
     * @return the apoderado
     */
    public String getApoderado() {
        return apoderado;
    }

    /**
     * @param apoderado the apoderado to set
     */
    public void setApoderado(String apoderado) {
        this.apoderado = apoderado;
    }

    /**
     * @return the ident_servicio
     */
    public String getIdent_servicio() {
        return ident_servicio;
    }

    /**
     * @param ident_servicio the ident_servicio to set
     */
    public void setIdent_servicio(String ident_servicio) {
        this.ident_servicio = ident_servicio;
    }

    /**
     * @return the monto
     */
    public String getMonto() {
        return monto;
    }

    /**
     * @param monto the monto to set
     */
    public void setMonto(String monto) {
        this.monto = monto;
    }

    /**
     * @return the descripcion
     */
    public String getDescripcion() {
        return descripcion;
    }

    /**
     * @param descripcion the descripcion to set
     */
    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    /**
     * @return the detalle_reclamo
     */
    public String getDetalle_reclamo() {
        return detalle_reclamo;
    }

    /**
     * @param detalle_reclamo the detalle_reclamo to set
     */
    public void setDetalle_reclamo(String detalle_reclamo) {
        this.detalle_reclamo = detalle_reclamo;
    }

    /**
     * @return the reclamo
     */
    public String getReclamo() {
        return reclamo;
    }

    /**
     * @param reclamo the reclamo to set
     */
    public void setReclamo(String reclamo) {
        this.reclamo = reclamo;
    }

    /**
     * @return the pedido
     */
    public String getPedido() {
        return pedido;
    }

    /**
     * @param pedido the pedido to set
     */
    public void setPedido(String pedido) {
        this.pedido = pedido;
    }
    
    public String GrabarAnexo(){
        try{
          newConexion c = new newConexion();
         String cad="call usp_grabar_libro ('"+this.getNombre()+"','"+this.getDomicilio()+"','"+this.getReferencia()+"','"+this.getDni()+"','"+this.getTelefono()+"','"+this.getEmail()+"','"+this.getMenor()+"','"+this.getApoderado()+"','"+this.getIdent_servicio()+"','"+this.getMonto()+"','"+this.getDescripcion()+"','"+this.getDetalle_reclamo()+"','"+this.getReclamo()+"','"+this.getPedido()+"')";
           return c.Ejecutar(cad);
        }catch(Exception e){
            return " error "+e;
        }
    }
    
    public String EnviarConfir(){
        try{
          newConexion c = new newConexion();
         String cad="call SIGSA.PKG_LIBRO_RECLAMACIONES.notificacion_getenvioemail ('14840','"+this.getNombre()+"','"+this.getDni()+"','"+this.getEmail()+"','"+this.getTelefono()+"','"+this.getIdent_servicio()+"','"+this.getMonto()+"','"+this.getDescripcion()+"','"+this.getDetalle_reclamo()+"','"+this.getReclamo()+"','"+this.getPedido()+"')";
           return c.Ejecutar(cad);
        }catch(Exception e){
            return " error "+e;
        }
    }
    
     public String maximo(){
         
         try {
                newConexion c = new newConexion();
                String cad="select max(registro_id)+1||'-'||to_char (sysdate,'YYYY ') from libro_reclamaciones";
                ResultSet tbl=c.Listar(cad);
                
                tbl.next(); {
                directorio gb = new directorio();
               
               
              
          
         }
            
           return tbl.getString(1);
           
        }catch(Exception e){
            return " error "+e;
        }
    }
    
   
 
}

