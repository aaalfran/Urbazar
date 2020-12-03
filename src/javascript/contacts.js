/*class contacts extends React.Component{
    componentDidMount(){
      introJs().start()
    }
    render(){
      return <div>
        <a href='http://google.com/' data-intro='Hello step one!'>one</a>
        <a href='http://google.com/' data-intro='Hello step two!'>two</a>
        <a href='http://google.com/' data-intro='Hello step three!'>three</a>
        <a href='http://google.com/' data-intro='Hello step four!'>four</a>
        </div>
    }
  }
  
  ReactDOM.render(<App/>, document.getElementById('app'))
*/
const intro = introJs();
intro.setOptions({
    steps: [
        {
            intro: "¡Bienvenido a Urbazapp! Tomemos un tour;)"
        },
        {
            element: '#step-one',
            intro: 'Please read this.'
        }
    ]
})

intro.start();

document.addEventListener('DOMContentLoaded', fintro.start());