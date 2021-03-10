import React, { Component } from 'react';
import { Input } from 'reactstrap';
import AddIcon from '@material-ui/icons/Add';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import CreateIcon from '@material-ui/icons/Create';
import '../../css/PanelEtapas.css';


export default function PanelEtapasV(props){
    return(
        
        <div className="cont_panel">
            <div id="search">
                <Input className="col-md-12 input_busq" placeholder="Buscar..." />
            </div>

            <TableContainer component={Paper}>
            <Toolbar className="header_table" >
                <Typography variant="h6" id="tableTitle" component="div">
                    Etapas Villa bonita
                </Typography>
                <div id="button_Add" onClick={props.handleModal}>
                 <AddIcon/>
                </div>
                
            </Toolbar >
                <Table  size="small" aria-label="a dense table">
                    
                    <TableBody>
                        <TableRow >
                        <TableCell component="th" scope="row">
                            <div className="contenido_cel">
                                <img className="img_cond" src="https://e7.pngegg.com/pngimages/1008/786/png-clipart-drawing-building-building-condominium.png"/> 
                                <div className="info">
                                                
                                    Etapa 1<br/>
                                    Administrador: Lola Suarez
                                </div>
                            </div>
                        </TableCell>
                        <TableCell align="right">
                            <div className="controles" >
                                <CreateIcon />
                                <DeleteOutlineIcon/>
                            </div>
                        </TableCell>
                        
                        
                        </TableRow>

                        <TableRow >
                        <TableCell component="th" scope="row">
                            <div className="contenido_cel">
                                <img className="img_cond" src="https://e7.pngegg.com/pngimages/1008/786/png-clipart-drawing-building-building-condominium.png"/> 
                                <div className="info">
                                                
                                    Etapa 1<br/>
                                    Administrador: Lola Suarez
                                </div>
                            </div>
                        </TableCell>
                        <TableCell align="right">
                            <div className="controles" >
                                <CreateIcon />
                                <DeleteOutlineIcon/>
                            </div>
                        </TableCell>
                        
                        
                        </TableRow>

                        <TableRow >
                        <TableCell component="th" scope="row">
                            <div className="contenido_cel">
                                <img className="img_cond" src="https://e7.pngegg.com/pngimages/1008/786/png-clipart-drawing-building-building-condominium.png"/> 
                                <div className="info">
                                                
                                    Etapa 1<br/>
                                    Administrador: Lola Suarez
                                </div>
                            </div>
                        </TableCell>
                        <TableCell align="right">
                            <div className="controles" >
                                <CreateIcon />
                                <DeleteOutlineIcon/>
                            </div>
                        </TableCell>
                        
                        
                        </TableRow>

                        <TableRow >
                        <TableCell component="th" scope="row">
                            <div className="contenido_cel">
                                <img className="img_cond" src="https://e7.pngegg.com/pngimages/1008/786/png-clipart-drawing-building-building-condominium.png"/> 
                                <div className="info">
                                                
                                    Etapa 1<br/>
                                    Administrador: Lola Suarez
                                </div>
                            </div>
                        </TableCell>
                        <TableCell align="right">
                            <div className="controles" >
                                <CreateIcon />
                                <DeleteOutlineIcon/>
                            </div>
                        </TableCell>
                        
                        
                        </TableRow>

                        <TableRow >
                        <TableCell component="th" scope="row">
                            <div className="contenido_cel">
                                <img className="img_cond" src="https://e7.pngegg.com/pngimages/1008/786/png-clipart-drawing-building-building-condominium.png"/> 
                                <div className="info">
                                                
                                    Etapa 1<br/>
                                    Administrador: Lola Suarez
                                </div>
                            </div>
                        </TableCell>
                        <TableCell align="right">
                            <div className="controles" >
                                <CreateIcon />
                                <DeleteOutlineIcon/>
                            </div>
                        </TableCell>
                        
                        
                        </TableRow>

                        <TableRow >
                        <TableCell component="th" scope="row">
                            <div className="contenido_cel">
                                <img className="img_cond" src="https://e7.pngegg.com/pngimages/1008/786/png-clipart-drawing-building-building-condominium.png"/> 
                                <div className="info">
                                                
                                    Etapa 1<br/>
                                    Administrador: Lola Suarez
                                </div>
                            </div>
                        </TableCell>
                        <TableCell align="right">
                            <div className="controles" >
                                <CreateIcon />
                                <DeleteOutlineIcon/>
                            </div>
                        </TableCell>
                        
                        
                        </TableRow>


                
                    </TableBody>
                </Table>
            </TableContainer>
            </div>
        

    );



}