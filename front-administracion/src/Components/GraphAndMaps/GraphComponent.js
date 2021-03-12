import React from 'react';
import { Container, Grid} from '@material-ui/core';
import ChartistGraph from 'react-chartist';
import '../../css/Graph.css';
import {
    barChart,
    pieChart,
    emailsSubscriptionChart,
    completedTasksChart
  } from "./charts";

class GraphComponent extends React.Component {
  
  render() {

   
    return (
        <>
        

        <Container maxWidth="lg" className="mt-5">
            <Grid container direction="row" justify="flex-end" spacing={10}>
          <Container id="content" maxWidth="lg">
          <div className="row justify-content-left">            
            
            <div className="glove col-12">
              
              <div className= "col-sm-12 col-12 cont_graphs">
                
                <div className= "col-sm-6 col-12">
                <ChartistGraph
                    className="ct-chart"
                    data={emailsSubscriptionChart.data}
                    type="Bar"
                    options={emailsSubscriptionChart.options}
                    responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                    listener={emailsSubscriptionChart.animation}
                  />
                </div>
                <br></br>
                <div className= "col-sm-6 col-12">
                <ChartistGraph
                    className="ct-chart"
                    data={completedTasksChart.data}
                    type="Line"
                    options={completedTasksChart.options}
                    listener={completedTasksChart.animation}
                  />
                </div>
              
              </div>
                <div className="title_graph">
                    <h3> Ganancias Mensuales </h3>
                </div>
              </div> 

              <div className="glove col-12">
                <div className= "col-sm-12 col-12 cont_graphs">
                 
                <div >
                    <ChartistGraph
                    className="ct-chart"
                    data={pieChart.data}
                    type="Pie"
                    options={pieChart.options}
                    responsiveOptions={pieChart.responsiveOptions}
                    animation = {pieChart.animation}
                    />
                </div>
                <div className= "col-sm-6 col-12">
                    <ChartistGraph data={barChart.data} options={barChart.options} type={barChart.type} listener={barChart.animation} />
                </div>        
              </div>
              
                <div className= "title_graph">
                  
                  <h3> Ganancias por Categorias </h3>
                </div> 
              </div>  
              
          </div>
          </Container>

            </Grid>
        </Container>

    </>
    );
  
  }
}

export default GraphComponent;