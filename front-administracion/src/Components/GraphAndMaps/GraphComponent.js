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
        <>
          <Grid container spacing={3}>
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
              <Grid item xs={12} sm={12} md={12} lg={6} xl={6} className="chartmd-6">
                <Card>
                  <CardContent>
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
              <Grid item xs={12} sm={12} md={12} lg={6} xl={6}  className="chartmd-6">
                <Card >
                  <CardContent>
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
              <Card>
                <CardContent>
                  <FontAwesomeIcon icon={faShoppingBag} />
                    <Typography >
                        ghgh
                    </Typography>

                    <Typography >
                        fhgj
                    </Typography>
                </CardContent>
            </Card>
              </Grid>
            </Grid>
          
        </>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}

export default GraphComponent;
