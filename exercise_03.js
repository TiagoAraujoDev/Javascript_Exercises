function converterTemperature(temperature) {
  let conversion = 0
  let otherScale

  const celsiusExist = temperature.toLocaleUpperCase().includes('C')
  const fahrenheitExist = temperature.toLocaleUpperCase().includes('F')

  if (!celsiusExist && !fahrenheitExist) {
    throw new Error('Invalid scale')
  }

  const regExp = /[0-9]{1,}/ 
  const transformTemperatureCelsius = Number(regExp.exec(temperature))
  const transformTemperatureFahrenheit = Number(regExp.exec(temperature))

  if (celsiusExist) {
    otherScale = 'fahrenheit'
    conversion = (9 * transformTemperatureCelsius + 160) / 5
  } else if (fahrenheitExist) {
    otherScale = 'celsius'
    conversion = (9 * transformTemperatureFahrenheit - 288) / 5
  }
  console.log(`${temperature} is ${conversion} ${otherScale}`)
}

try {
  converterTemperature('33c')
  converterTemperature('100 celsius')
  converterTemperature('50 Fahrenheit')
} catch (Error) {
  console.log(Error.message)
}
