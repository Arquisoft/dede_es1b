import React,{useState} from "react";
import { Input } from "antd";
import { Divider, TextField } from "@mui/material";

function Step1(props:any) {

  const [userid, setUserId] = useState('');


  return (
    <div>
      <p>
      <h2>Nombre:</h2></p>
      <p>
      <TextField  className='textField'
            required
            name="userid"
            label="Id usuario" 
            variant="outlined"
            value={userid}
            onChange={e =>{ setUserId(e.target.value); localStorage.setItem("userIdBuscarPedido",userid);}}
            sx={{ my: 2 }}
          />
      </p>
      <Divider color='black' sx={{marginTop:'8%'}}></Divider><br></br>
      <button className="añadirProdButton" data-testid="prev" onClick={props.prev}>
				Prev
			</button>
			<button className="añadirProdButton" data-testid="next" onClick={props.next}>
				Next
			</button>

    </div>
  );
}

export default Step1;