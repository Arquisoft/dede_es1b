import { RestorePageOutlined } from '@mui/icons-material';
import { User, Producto, Prod } from '../shared/shareddtypes';
import ProductoPedido from "../components/pago/ProductoPedido";
import {ProductoParaPedido} from "../pages/pagoPage/VentanaPago";

export async function addUser(user:User):Promise<boolean>{
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000'
   
    let response = await fetch(apiEndPoint+'/usuarios/add', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({'nombre':user.name,'apellidos':user.surname,'usuario':user.usuario, 'contraseña':user.password, 'correo':user.correo})
      });
    if (response.status===200)
      return true;
    else
      return false;
}
export async function addPedido(products:ProductoParaPedido[] ,user_id:String|undefined,precioTot:number):Promise<boolean>{
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000'

    let response = await fetch(apiEndPoint+'/pedido/crear', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({'id_usuario':user_id,'productos':products,'precio':precioTot, 'direcc':"Oviedo"})
    });
    if (response.status===200)
        return true;
    else
        return false;
}


export async function getGastosEnvio():Promise<number>{
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000'

    let response = await fetch(apiEndPoint+'/pedido/gastosEnvio', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({"direcc":"Oviedo"})
    });
    if (response.status===200)
        return response.json();
    else
        return -1;
}

export async function addProduct(prod:Prod):Promise<boolean>{
  const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000'
  console.log("pruebaaaaaaaaaa: "+localStorage.getItem("nombreNuevoProd"));
  let response = await fetch(apiEndPoint+'/productos/add', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({'nombre':prod.name,'precio':prod.precio,'descripcion':prod.descripcion, 'tipo':prod.tipo, 'imagen':prod.imagen})
    });
  if (response.status===200){
    console.log("jason   "+response.json());
    return true;
  }
  else
    return false;
}

/*
Metodo que selecciona los productos por categoría
 */
/*export async function getProductByCategory(categoria:string):Promise<boolean>{
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000'
    let response = await fetch(apiEndPoint+'/products/catalogo', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({'categoria':categoria})
    });
    if (response.status===200)
        return true;
    else
        return false;
}*/

export async function getUsers():Promise<User[]>{
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000'
    let response = await fetch(apiEndPoint+'/usuarios/list');
    //The objects returned by the api are directly convertible to User objects
    return response.json()
}

export async function deleteUser(id:String):Promise<boolean>{
  
  const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000'
  let response = await fetch(apiEndPoint+'/usuarios/delete', {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({'id':id})
  });
    
  if(response.status==200){
    
    return true;}
  return false;
}
export async function deleteProduct(id:String):Promise<boolean>{
  
  const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000'
  let response = await fetch(apiEndPoint+'/productos/delete', {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({'id':id})
  });
    
  if(response.status==200){
    
    return true;}
  return false;
}
export async function getProductos(): Promise<Producto[]> {
  const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000'
  let response = await fetch(apiEndPoint+'/products/list');
  return response.json()
}

export async function getProductosPorCategoria(categoria:String): Promise<Producto[]> {
  const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000'
  let response = await fetch(apiEndPoint+'/products/catalogo', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({'categoria':categoria})
    });
    return response.json()

}

export async function checkUser(username:String,password:String):Promise<boolean>{
  const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000'
  let response = await fetch(apiEndPoint+'/usuarios/login', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({'usuario':username, 'contraseña':password})
    });
  if (response.status===200){
    let obj =JSON.parse(await response.json());
    localStorage.setItem("tipoUser",obj.tipoUser);
    localStorage.setItem("token",obj.tipoUser);
     return true;  
  }
  else
    return false;
} 