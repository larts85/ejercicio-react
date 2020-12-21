import React, { useState, useEffect } from 'react'
import '../styles/box.css'

const Box = () => {
  const [montoTotal, setMontoTotal] = useState(0)
  const [montoSlider, setMontoSlider] = useState(5000)
  const [montoInput, setMontoInput] = useState(5000)
  const [cuotas, setCuotas] = useState(0)
  const [cuotaInput, setCuotaInput] = useState(3)
  const [cuotaSlider, setCuotaSlider] = useState(3)

  const handleCuotas = (num) => {
    setCuotas(num)
  }

  useEffect(() => {
    setMontoTotal(montoInput)
  }, [montoInput])

  useEffect(() => {
    setMontoTotal(montoSlider)
  }, [montoSlider])

  useEffect(() => {
    setCuotas(cuotaInput)
  }, [cuotaInput])

  useEffect(() => {
    setCuotas(cuotaSlider)
  }, [cuotaSlider])

  return (
    <div className='box'>
      <h1>Simulá tu crédito</h1>
      <div className='first-slider'>
        <div className='firstLabel'>
          <span>MONTO TOTAL</span>
          <input
            min={5000}
            max={50000}
            step={1000}
            value={montoTotal}
            type='number'
            onChange={e => setMontoInput(e.target.value)}
          />
        </div>
        <br />
        <input
          min={5000}
          max={50000}
          step={1000}
          value={montoTotal}
          type="range"
          onChange={e => setMontoSlider(e.target.value)}
        />
        <br />
        <span id='first-start-range'>{`$ 5000`}</span>
        <span id='first-end-range'>{`$ 50000`}</span>
      </div>
      <div className='second-slider'>
        <div className='secondLabel'>
          <span>PLAZO</span>
          <input
            min={3}
            max={24}
            type='number'
            step={3}
            value={cuotas}
            onChange={e => setCuotaInput(e.target.value)}
          />
        </div>
        <br />
        <input
          min={3}
          max={24}
          step={3}
          value={cuotas}
          type="range"
          onChange={e => setCuotaSlider(e.target.value)}
        />
        <div className='textRange' style={{ flexDirection: 'row' }}>
          <span className='second-range'>{`3`}</span>
          <span className='second-range'>{`24`}</span>
        </div>
      </div>
      <div className='cuotasFijas'>
        <span id='cFijas'>CUOTAS FIJAS POR MES</span>
        <span id='cValor'>
          {
            parseFloat(Math.round((montoTotal / cuotas) * 100) / 100).toFixed(2)
          }
        </span>
      </div>
      <div className='buttons'>
        <button type='submit' id='btn1'>OBTENÉ CRÉDITO</button>
        <button type='submit' id='btn2'>VER DETALLES DE CUOTAS</button>
      </div>
    </div>
  )
}

export default Box;
