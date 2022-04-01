import { User, Producto } from '../shared/shareddtypes';

export async function addUser(user:User):Promise<boolean>{
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000'
    let response = await fetch(apiEndPoint+'/usuarios/add', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({'nombre':user.name,'apellidos':user.surname,'usuario':user.username, 'contraseña':user.password, 'correo':user.email})
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
    localStorage.setItem("token",await response.json());
    return true;
  }
  else
    return false;
} 