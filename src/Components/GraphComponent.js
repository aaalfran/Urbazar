import React from 'react';
import {Container} from 'reactstrap';
import ChartistGraph from 'react-chartist';
import NavbarAdmins from "./navbarAdmins";
import ToggleMenuAdmins from './TogglemenuAdmins';
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
        <NavbarAdmins />
        <ToggleMenuAdmins/>
        <Container id="content">
         <div className="row justify-content-center">
            <div className= "col-sm-12 col-12">
            <br></br><br></br>
             <h3> Ganancias Mensuales </h3>
             </div>
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
            
            <div className= "col-sm-12 col-12">
            <br></br><br></br><br></br>
             <h3> Ganancias por Categorias </h3>
             </div>    
            <div className= "col-sm-6 col-12">
                <ChartistGraph
                className="ct-chart"
                data={pieChart.data}
                type="Pie"
                options={pieChart.options}
                responsiveOptions={pieChart.responsiveOptions}
                animation = {pieChart.animation}
                />
            </div>
            <br></br>
            <div className= "col-sm-6 col-12">
                <ChartistGraph data={barChart.data} options={barChart.options} type={barChart.type} listener={barChart.animation} />
            </div>        
            
        </div>
        </Container>
    </>
    )
  }
}

export default GraphComponent;