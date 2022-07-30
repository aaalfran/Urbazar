// ##############################
// // // javascript library for creating charts
// #############################
import { Interpolation, Svg } from 'chartist'
import data from '../../../enviroment'
// ##############################
// // // variables used to create animation on charts
// #############################
const delays = 80
const durations = 500
const delays2 = 80
const durations2 = 500

fetch(`${data.url}/productos`)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    barChart.data.labels = data.map(d => d.nombre)
    // barChart.data.series = data.map(d => d.precio)
  })

  .catch(error => console.log('Hubo un error ' + error))

// ##############################
// // // Daily Sales
// #############################

const barChart = {
  data: {
    labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
    series: [
      [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
    ]
  },

  options: {
    high: 100,
    low: 0,
    axisX: {
      labelInterpolationFnc: function(value, index) {
        return index % 2 === 0 ? value : null
      }
    }
  },
  animation: {
    draw: function(data) {
      if (data.type === 'bar') {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays2,
            dur: durations2,
            from: 0,
            to: 1,
            easing: 'ease'
          }
        })
      }
    }
  },

  type: 'Bar'
}

const pieChart = {
  data: {
    labels: ['Ropa', 'Tecnologia', 'Alimentos'],
    series: [20, 15, 50]
  },

  options: {
    labelInterpolationFnc: function(value) {
      return value[0]
    }
  },

  responsiveOptions: [
    ['screen and (min-width: 640px)', {
      chartPadding: 30,
      labelOffset: 100,
      labelDirection: 'explode',
      labelInterpolationFnc: function(value) {
        return value
      }
    }],
    ['screen and (min-width: 1024px)', {
      labelOffset: 40,
      chartPadding: 20
    }]
  ],
  animation: {
    draw: function(data) {
      if (data.type === 'slice') {
        // Get the total path length in order to use for dash array animation
        const pathLength = data.element._node.getTotalLength()

        // Set a dasharray that matches the path length as prerequisite to animate dashoffset
        data.element.attr({
          'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
        })

        // Create animation definition while also assigning an ID to the animation for later sync usage
        const animationDefinition = {
          'stroke-dashoffset': {
            id: 'anim' + data.index,
            dur: 500 * data.value / data.totalDataSum,
            from: -pathLength + 'px',
            to: '0px',
            // We need to use `fill: 'freeze'` otherwise our animation will fall back to initial (not visible)
            fill: 'freeze'
          }
        }

        // If this was not the first slice, we need to time the animation so that it uses the end sync event of the previous animation
        if (data.index !== 0) {
          animationDefinition['stroke-dashoffset'].begin = 'anim' + (data.index - 1) + '.end'
        }

        // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
        data.element.attr({
          'stroke-dashoffset': -pathLength + 'px'
        })

        // We can't use guided mode as the animations need to rely on setting begin manually
        // See http://gionkunz.github.io/chartist-js/api-documentation.html#chartistsvg-function-animate
        data.element.animate(animationDefinition, false)

        // add (naive) bounce
        if (data.endAngle === 360) {
          let index = data.index
          let dur = 1000 * data.value / data.totalDataSum / 2
          let from = 0
          let to = -pathLength / 3

          for (let i = 0; i < 4; i++) {
            data.element.animate({
              'stroke-dashoffset': {
                id: 'anim' + (index + 1),
                dur: dur,
                from: from + 'px',
                to: to + 'px',
                fill: 'freeze',
                begin: 'anim' + index + '.end'
              }
            }, false)

            index++
            dur /= 1.75

            const t = from
            from = to
            to = t / 2.5
          }
        }
      }
    }

  }
}

const dailySalesChart = {
  data: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    series: [[12, 17, 7, 17, 23, 18, 38]]
  },
  options: {
    lineSmooth: Interpolation.cardinal({
      tension: 0
    }),
    low: 0,
    high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
    chartPadding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  },
  // for animation
  animation: {
    draw: function(data) {
      if (data.type === 'line' || data.type === 'area') {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path
              .clone()
              .scale(1, 0)
              .translate(0, data.chartRect.height())
              .stringify(),
            to: data.path.clone().stringify(),
            easing: Svg.Easing.easeOutQuint
          }
        })
      } else if (data.type === 'point') {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: 'ease'
          }
        })
      }
    }
  }
}

// ##############################
// // // Email Subscriptions
// #############################

const emailsSubscriptionChart = {
  data: {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'Mai',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ],
    series: [[542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]]
  },
  options: {
    axisX: {
      showGrid: false
    },
    low: 0,
    high: 1000,
    chartPadding: {
      top: 0,
      right: 5,
      bottom: 0,
      left: 0
    }
  },
  responsiveOptions: [
    [
      'screen and (max-width: 640px)',
      {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function(value) {
            return value[0]
          }
        }
      }
    ]
  ],
  animation: {
    draw: function(data) {
      if (data.type === 'bar') {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays2,
            dur: durations2,
            from: 0,
            to: 1,
            easing: 'ease'
          }
        })
      }
    }
  }
}

// ##############################
// // // Completed Tasks
// #############################

const completedTasksChart = {
  data: {
    labels: ['12am', '3pm', '6pm', '9pm', '12pm', '3am', '6am', '9am'],
    series: [[230, 750, 450, 300, 280, 240, 200, 190]]
  },
  options: {
    lineSmooth: Interpolation.cardinal({
      tension: 0
    }),
    low: 0,
    high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
    chartPadding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  },
  animation: {
    draw: function(data) {
      if (data.type === 'line' || data.type === 'area') {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path
              .clone()
              .scale(1, 0)
              .translate(0, data.chartRect.height())
              .stringify(),
            to: data.path.clone().stringify(),
            easing: Svg.Easing.easeOutQuint
          }
        })
      } else if (data.type === 'point') {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: 'ease'
          }
        })
      }
    }
  }
}
export {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart,
  barChart,
  pieChart
}
