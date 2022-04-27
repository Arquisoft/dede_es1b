import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "./bienvenidaPage.css"
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import type { AlertColor } from '@mui/material/Alert';
import {addUser} from '../../api/api';
import Box from '@mui/material/Box';
import logo from '../../logo.svg'
import {useNavigate} from "react-router-dom";
import { Container } from '@mui/material';
import { Typography } from '@mui/material';
import { CardContent } from '@mui/material';
import { CardActionArea } from '@mui/material';
import { useSession } from '@inrupt/solid-ui-react';


function Bienvenida(): JSX.Element {

  const { session } = useSession();
  const { webId } = session.info;
  const navigate = useNavigate();
  localStorage.setItem("token","");

  return (
    <>

      {/* <Container fixed>
      <CombinedDataProvider datasetUrl={webId} thingUrl={webId}>
        <Card style={{ maxWidth: 480 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              <Text property={FOAF.name.iri.value} />
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" style={{ display: "flex", alignItems: "center" }}>
              <Text property={VCARD.organization_name.iri.value} />
            </Typography>
          </CardContent>

          <CardActionArea style={{ justifyContent: "center", display: "flex" }}>
            <Image property={VCARD.hasPhoto.iri.value} width={480} />
          </CardActionArea>
        </Card>
      </CombinedDataProvider> */}
     
    </>
  );
}

 export default Bienvenida;

