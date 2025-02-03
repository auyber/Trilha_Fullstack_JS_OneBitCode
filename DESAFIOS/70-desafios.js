let planets = [
    ['Terra', 510072, 0],
    ['Marte', 1448, 225],
    ['Júpiter', 61419, 588],
    ['Saturno', 42700, 1200],
    ['Planeta-X', 950, 3200]
  ]

  function filterPlanets(planets) {
    return planets.filter(function(planets){
        return planets[1] > 1000 && planets[2] < 3000
    }).map(function(planets){
        return planets[0]
    })
  }

console.log(filterPlanets(planets));