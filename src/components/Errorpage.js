import React, { useState,useEffect } from 'react';
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import { 
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Avatar,
    Grid,
    Typography,
    TablePagination,
    TableFooter
 } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    table: {
      minWidth: 650,
    },
    tableContainer: {
        borderRadius: 15,
        margin: '20px 50px',
        maxWidth: 950
    },
    tableHeaderCell: {
        fontWeight: 'bold',
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.getContrastText(theme.palette.primary.dark)
    },
    avatar: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.getContrastText(theme.palette.primary.light)
    },
    name: {
        fontWeight: 'bold',
        color: theme.palette.secondary.dark
    }
  }));

// let USERS = []
// for(let i=0;i<14;i++) {
//     USERS[i] = {
//         nom: "maliha oumer", 
//         email: "malihaoumer@gmail.com",
//         num_tel:"0556954596", 
//         date:"12-12-2020", 
//         heure: "15:10", 
//         motif: "Plombage"
        
//              }
// }

function Dashboard() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [list,setlist]=useState([])
  const [x,setx]=useState('gvhgvhg')
  
  
    useEffect(()=>{
   
      axios.get("http://localhost:3005/selectdata").then((Response)=>{
        setlist(Response.data)
        
      })
  },[])

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeaderCell}>Infos patient</TableCell>
            <TableCell className={classes.tableHeaderCell}>Date</TableCell>
            <TableCell className={classes.tableHeaderCell}>Heure</TableCell>
            <TableCell className={classes.tableHeaderCell}>Motif de consultation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <TableRow key={row.nom}>
              <TableCell>
                  <Grid container>
                      <Grid item lg={2}>
                          <Avatar alt={row.nom} src='.' className={classes.avatar}/>
                      </Grid>
                      <Grid item lg={10}>
                          <Typography className={classes.nom}>{row.nom}</Typography>
                          <Typography color="textSecondary" variant="body2">{row.email}</Typography>
                          <Typography color="textSecondary" variant="body2">{row.phone}</Typography>
                      </Grid>
                  </Grid>
                </TableCell>
              <TableCell>
                  <Typography color="primary" variant="subtitle2">{row.date}</Typography>
                </TableCell>
              <TableCell><Typography color="primary" variant="subtitle2">{row.time}</Typography></TableCell>
              <TableCell>
                  <Typography 
                  color="primary" variant="subtitle2">{row.motif}
                    </Typography>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
        <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={list.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
        />
        </TableFooter>
      </Table>
    </TableContainer>
  );
}

export default Dashboard;