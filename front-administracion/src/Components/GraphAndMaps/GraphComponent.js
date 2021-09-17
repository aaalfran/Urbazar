import React from "react";
import { Card, Container, Grid, Typography, CardContent } from '@material-ui/core';
import ChartistGraph from "react-chartist";
import "../../css/Graph.css";
import CardHeader from "./CardHeader";
import {
  faChartArea,
  faUsers,
  faShoppingBag,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  barChart,
  pieChart,
  emailsSubscriptionChart,
  completedTasksChart,
} from "./charts";
import { Redirect } from "react-router-dom";
import '../../css/reports.css'

class GraphComponent extends React.Component {
  render() {
    const auth = parseInt(localStorage.getItem("auth"), 10);
    const role = localStorage.getItem("role");

    if (auth && role === "3") {
      return (
        <div style={{paddingLeft:"5px"}}>
          <Grid container spacing={3} className="contenedor_reportes">
            <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
              <CardHeader
                icono={<FontAwesomeIcon icon={faGlobe} />}
                titulo="1263"
                texto="Etapas"
                color="#fff"
                font="#000"
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
              <CardHeader
                icono={<FontAwesomeIcon icon={faUsers} />}
                titulo="12563"
                texto="Familias"
                color="#fff"
                font="#000"
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
              <CardHeader
                icono={<FontAwesomeIcon icon={faShoppingBag} />}
                titulo="1256"
                texto="Productos Comercializados"
                color="#fff"
                font="#000"
              />
            </Grid>

            </Grid>
            <Grid container spacing={2} className="chartsGraphsContainer">
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className="chartmd-6">
                <Card style={{textAlign:"center"}}>
                  <CardContent>
                    <Typography style={{fontWeight: 'bold', fontSize: 22, marginBottom:"45px"}}>
                        Ganancias mensuales
                    </Typography>
                    <ChartistGraph
                      className="ct-chart"
                      data={emailsSubscriptionChart.data}
                      type="Bar"
                      options={emailsSubscriptionChart.options}
                      responsiveOptions={
                        emailsSubscriptionChart.responsiveOptions
                      }
                      listener={emailsSubscriptionChart.animation}
                    />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}  className="chartmd-6">
                <Card style={{textAlign:"center"}}>
                  <CardContent>
                  <Typography style={{fontWeight: 'bold', fontSize: 22, marginBottom:"45px"}}>
                        Ganancias por categorías
                    </Typography>
                    <ChartistGraph
                      className="ct-chart"
                      data={pieChart.data}
                      type="Pie"
                      options={pieChart.options}
                      responsiveOptions={pieChart.responsiveOptions}
                      animation={pieChart.animation}
                    />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

            <Grid container spacing={3} className="chartmd12">
              <Grid item  lg={12} xl={12} >
              <Card style={{textAlign: "center"}}>
                <CardContent>
                    <Typography style={{fontSize: 28,}}>
                        15
                    </Typography>

                    <Typography style={{ fontWeight: 'bold',fontSize: 22,}}>
                        Transacciones intraUrbanización
                    </Typography>
                </CardContent>
            </Card>
              </Grid>
            </Grid>
          
        </div>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}

export default GraphComponent;
