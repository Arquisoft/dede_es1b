import { RestorePageOutlined } from '@mui/icons-material';
import { User, Producto, Prod } from '../shared/shareddtypes';

import {
  getSolidDataset,
  getThing,
  getStringNoLocale,
  getUrlAll,
  Thing,
  getUrl,
} from "@inrupt/solid-client";

import { FOAF, VCARD } from "@inrupt/vocab-common-rdf";


export async function addUser(webid:string):Promise<boolean>{
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000'
   
    let response = await fetch(apiEndPoint+'/usuarios/add', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({'webid':webid})
      });
    if (response.status===200)
      return true;
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

export async function addPedido(products:Producto[] ,user_id:String,precioTot:number):Promise<boolean>{
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


export async function getGastosEnvio(direccion: string):Promise<number>{
  const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000'

  let response = await fetch(apiEndPoint+'/pedido/gastosEnvio', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({"direcc":direccion})
  });
  if (response.status===200)
      return response.json();
  else
      return -1;
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



/* export async function checkUser(username:String,password:String):Promise<boolean>{
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

} */

export async function iniciarSesion(webid:String):Promise<string>{
  const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000'
  

  let response = await fetch(apiEndPoint+'/usuarios/inicioSesion', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({'webid':webid})
    });
  if (response.status===200){
   // let obj =JSON.parse(await response.json());
    return "";  
  }
  else
    return "";

}

// ------------------------- CONSULTAS PARA SOLID ----------------------------
async function getProfile(webId: string): Promise<Thing> {
  let profileDocumentURI = webId.split("#")[0]; // we remove the right hand side of the # for consistency
  let myDataset = await getSolidDataset(profileDocumentURI); // obtain the dataset from the URI
  return getThing(myDataset, webId) as Thing; // we obtain the thing we are looking for from the dataset
}

export async function getNameFromPod(webId: string) {
  if (webId === "" || webId === undefined) return "Name not found"; // we return the empty string
  return getStringNoLocale(await getProfile(webId), FOAF.name) as string;
}

export async function getRoleFromPod(webId: string) {
  if (webId === "" || webId === undefined) return "Role not found"; // we return the empty string
  return await getStringNoLocale(await getProfile(webId), VCARD.role) as string;
}

export async function getAddressesFromPod(webId: string) {
  console.log("webid: "+webId);
  let addressURLs = getUrlAll(await getProfile(webId), VCARD.hasAddress);
  let addresses: string[] = [];

  for (let addressURL of addressURLs) {
    let address = getStringNoLocale(
      await getProfile(addressURL),
      VCARD.street_address
    );
    let locality = getStringNoLocale(
      await getProfile(addressURL),
      VCARD.locality
    );
    let region = getStringNoLocale(await getProfile(addressURL), VCARD.region);
    let postal_code = getStringNoLocale(
      await getProfile(addressURL),
      VCARD.postal_code
    );

    if (address)
      addresses.push(`${address} - ${locality}, ${region} - ${postal_code}`);
  }
  return addresses;
  
}