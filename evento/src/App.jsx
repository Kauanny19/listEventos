import { useState, useEffect } from 'react'
// Imports para criação de tabela
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
// TableHead é onde colocamos os titulos
import TableHead from '@mui/material/TableHead';
// TableBody é onde colocamos o conteúdo
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import api from './axios/axios'

function App() {
  const[events, setEvents] = useState ([]);
  
  async function getEvents(){
    // Chamada da Api
    await api.getEvents().then(
      (response)=>{
        console.log(response.data.events)
        setEvents(response.data.events)
      }, (error)=>{
        console.log("Erro ", error)
      }
    )
  }

  const listEvents = events.map((evento)=>{
    return(
      <TableRow key={evento.id_evento}>
        <TableCell align="center">{evento.nome}</TableCell>
        <TableCell align="center">{evento.descricao}</TableCell>
        <TableCell align="center">{evento.data_hora}</TableCell>
        <TableCell align="center">{evento.local}</TableCell>
      </TableRow>
    )
  })

  useEffect(()=>{
    getEvents();
  },[]);

  return (
    <div>
      <h5>Lista de eventos</h5>
      <TableContainer component={Paper} style={{margin:"2px"}}>
        <Table size="small">
          <TableHead style={{backgroundColor:"lightseagreen", borderStyle:"solid"}}>
            <TableRow>
              <TableCell align="center">
                Nome
              </TableCell>
              <TableCell align="center">
                Descrição
              </TableCell>
              <TableCell align="center">
                Data/Hora
              </TableCell>
              <TableCell align="center">
                Local
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{listEvents}</TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default App
