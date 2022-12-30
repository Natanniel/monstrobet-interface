import React, { useState, useEffect } from 'react';

import RoulettePro from 'react-roulette-pro';
import 'react-roulette-pro/dist/index.css';

import socketIO from 'socket.io-client';
import api from '../services/api';
import "./index.css"

function Slotmachine() {


    let [winPrizeIndex1, setWinPrizeIndex1] = useState(0)
    let [winPrizeIndex2, setWinPrizeIndex2] = useState(0)
    let [winPrizeIndex3, setWinPrizeIndex3] = useState(0)
    let [stopCenter, setStopCenter] = useState(true)
    let [roletando, setRoletando] = useState(true)
    let [status, setStatus] = useState("")

    let [selecionado, setSelecionado] = useState("Copas")
    let [valorCopas, setValorCopas] = useState(0)
    let [valorOuros, setValorOuros] = useState(0)
    let [valorEspadas, setValorEspadas] = useState(0)
    let [valorPaus, setValorPaus] = useState(0)

    const id = ""

    let [saldo, setSaldo] = useState(100)
    let [apostando, setApostando] = useState(false)
    let [travado, setTravado] = useState(false)

    let [valorApostando, setValorApostando] = useState(0)

    let [start, setStart] = useState(true);
    let [tempoReportado, setTempoReportado] = useState(0)

    useEffect(() => {
        const socket = socketIO.connect('http://159.89.188.245:3005');
        //const socket = socketIO.connect('http://localhost:3005');
        //  console.log(socket)

        socket.on("reportarTempo", (res) => {
            setTempoReportado(res)
        })

        socket.on("girarRoleta", (res) => {
            setStopCenter(false)
            setWinPrizeIndex1(res[0])
            setWinPrizeIndex2(res[1])
            setWinPrizeIndex3(res[2])

        })

        socket.on("limparJogo", (res) => {
            setStopCenter(true)
            setWinPrizeIndex1(0)
            setWinPrizeIndex2(0)
            setWinPrizeIndex3(0)
            setTimeout(function () {
                setApostando(0)
                setTempoReportado(0)
                setValorApostando(0)
            }, 2000)

        })

        socket.on("encerrarApostas", (res) => {
            setApostando(1)
        })

        //socket.emit("mensagem","ola")

    }, [])






    // Copas 37
    // espadas 38
    // Paus 39
    // Ouros 40
    // Joker 41
    // Pot 42

    const prizes = [
        {
            image: require('../assets/joker.png'),
            id: 0
        },
        {
            image: require('../assets/copas.png'),
            id: 1
        },
        {
            image: require('../assets/espadas.png'),
            id: 2
        },
        {
            image: require('../assets/paus.png'),
            id: 3
        },
        {
            image: require('../assets/ouros.png'),
            id: 4
        },
        {
            image: require('../assets/copas.png'),
            id: 1
        },
        {
            image: require('../assets/espadas.png'),
            id: 2
        },
        {
            image: require('../assets/paus.png'),
            id: 3
        },
        {
            image: require('../assets/ouros.png'),
            id: 4
        },
        {
            image: require('../assets/copas.png'),
            id: 1
        },
        {
            image: require('../assets/espadas.png'),
            id: 2
        },
        {
            image: require('../assets/paus.png'),
            id: 3
        },
        {
            image: require('../assets/ouros.png'),
            id: 4
        },
        {
            image: require('../assets/copas.png'),
            id: 1
        },
        {
            image: require('../assets/espadas.png'),
            id: 2
        },
        {
            image: require('../assets/paus.png'),
            id: 3
        },
        {
            image: require('../assets/ouros.png'),
            id: 4
        },
        {
            image: require('../assets/copas.png'),
            id: 1
        },
        {
            image: require('../assets/espadas.png'),
            id: 2
        },
        {
            image: require('../assets/paus.png'),
            id: 3
        },
        {
            image: require('../assets/ouros.png'),
            id: 4
        },
        {
            image: require('../assets/copas.png'),
            id: 1
        },
        {
            image: require('../assets/espadas.png'),
            id: 2
        },
        {
            image: require('../assets/paus.png'),
            id: 3
        },
        {
            image: require('../assets/ouros.png'),
            id: 4
        },
        {
            image: require('../assets/copas.png'),
            id: 1
        },
        {
            image: require('../assets/espadas.png'),
            id: 2
        },
        {
            image: require('../assets/paus.png'),
            id: 3
        },
        {
            image: require('../assets/ouros.png'),
            id: 4
        },
        {
            image: require('../assets/copas.png'),
            id: 1
        },
        {
            image: require('../assets/espadas.png'),
            id: 2
        },
        {
            image: require('../assets/paus.png'),
            id: 3
        },
        {
            image: require('../assets/ouros.png'),
            id: 4
        },
        {
            image: require('../assets/copas.png'),
            id: 1
        },
        {
            image: require('../assets/espadas.png'),
            id: 2
        },
        {
            image: require('../assets/paus.png'),
            id: 3
        },
        {
            image: require('../assets/ouros.png'),
            id: 4
        },


        {
            image: require('../assets/copas.png'),
            id: 10
        },
        {
            image: require('../assets/espadas.png'),
            id: 11
        },
        {
            image: require('../assets/paus.png'),
            id: 12
        },
        {
            image: require('../assets/ouros.png'),
            id: 13
        },
        {
            image: require('../assets/joker.png'),
            id: 14
        },
        {
            image: require('../assets/jackpot.png'),
            id: 15
        },
    ];

    const prizeList = [
        ...prizes,
        ...prizes,
        ...prizes,
        ...prizes,
        ...prizes,
        ...prizes,
        ...prizes,
        ...prizes,
    ];

    const prizeIndex1 = prizes.length * 4 + winPrizeIndex1;
    const prizeIndex2 = prizes.length * 4 + winPrizeIndex2;
    const prizeIndex3 = prizes.length * 4 + winPrizeIndex3;

    const handlePrizeDefined = () => {

    };

    const apostar = (valor) => {
        if (selecionado == "Copas")
            setValorCopas(valorCopas + valor)

        if (selecionado == "Ouros")
            setValorOuros(valorOuros + valor)

        if (selecionado == "Espadas")
            setValorEspadas(valorEspadas + valor)

        if (selecionado == "Paus")
            setValorPaus(valorPaus + valor)
    }

    const limpar = () => {
        setValorCopas(0)
        setValorOuros(0)
        setValorEspadas(0)
        setValorPaus(0)
    }

    const confirmarAposta = () => {
        //  let total = (valorCopas + valorOuros + valorEspadas + valorPaus)
        setApostando(1)
        api.post("joker/apostar", {
            valorCopas,
            valorOuros,
            valorEspadas,
            valorPaus
        }).then(function (e) {
            setApostando(1)
            setValorApostando(valorCopas + valorOuros + valorEspadas + valorPaus)

        }).catch(function (e) {
            alert(e.response.data.message)
            setApostando(0)
        })
        //setApostando(total)
        // setSaldo(saldo - total)
    }

    const dobrarAposta = () => {
        setValorCopas(valorCopas + valorCopas)
        setValorOuros(valorOuros + valorOuros)
        setValorEspadas(valorEspadas + valorEspadas)
        setValorPaus(valorPaus + valorPaus)
    }

    return (
        <>
            <div className="container mt-3" style={{ height: 330 }}>
                <div className="row" style={{ height: 300 }}>
                    <div className="col-4" style={{ height: 300, padding: 0 }}>
                        <RoulettePro
                            prizes={prizeList}
                            prizeIndex={prizeIndex1}
                            start={start}
                            onPrizeDefined={handlePrizeDefined}
                            type={"vertical"}
                            spinningTime={7}
                            options={{
                                stopInCenter: stopCenter
                            }}
                            style={{ width: '100%' }}
                        />
                        <div className='text-center' style={{ height: 50 }}>
                            <strong style={{ color: '#e74c3c' }}>3X</strong>
                        </div>
                    </div>
                    <div class="col-4" style={{ height: 300, padding: 0 }}>
                        <RoulettePro
                            prizes={prizeList}
                            prizeIndex={prizeIndex2}
                            start={start}
                            onPrizeDefined={handlePrizeDefined}
                            type={"vertical"}
                            spinningTime={5}
                            options={{
                                stopInCenter: stopCenter
                            }}
                            style={{ width: '100%' }}
                        />

                        <div className='text-center'>
                            <small style={{ color: '#fff' }}>1.5X</small>
                        </div>
                    </div>
                    <div class="col-4" style={{ height: 300, padding: 0 }}>
                        <RoulettePro
                            prizes={prizeList}
                            prizeIndex={prizeIndex3}
                            start={start}
                            onPrizeDefined={handlePrizeDefined}
                            type={"vertical"}
                            spinningTime={3}
                            options={{
                                stopInCenter: stopCenter,
                                withoutAnimation: false
                            }}
                            style={{ width: '100%' }}
                        />
                        <div className='text-center'>
                            <small style={{ color: '#fff' }}>1.5X</small>
                        </div>
                    </div>
                </div>
            </div>

            {apostando == 1 ? (
                <>
                    <div className="progress mt-1 mb-1" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-danger" style={{ width: tempoReportado + "0%" }}></div>
                    </div>

                    <div className="row">

                        <div className="container">

                            <p className="text-white mt-3 mb-1"><em>Nipe</em></p>
                            <div className="row">
                                <div className={"col-3  backgroundSecondary rounded " + (selecionado == "Copas" ? "prizeSelected" : "")} onClick={() => setSelecionado("Copas")} style={{ border: '3px solid #0f1923' }} >
                                    <div className='d-flex justify-content-center mt-2'>
                                        <img src={require('../assets/copas.png')} style={{ height: 32, width: 32 }} />
                                    </div>
                                    <small className='text-white text-center d-block mb-2'>R$ {valorCopas}</small>
                                </div>
                                <div className={"col-3  backgroundSecondary rounded " + (selecionado == "Ouros" ? "prizeSelected" : "")} onClick={() => setSelecionado("Ouros")} style={{ border: '3px solid #0f1923' }}>
                                    <div className='d-flex justify-content-center mt-1'>
                                        <img src={require('../assets/ouros.png')} style={{ height: 32, width: 32 }} />
                                    </div>
                                    <small className='text-white text-center d-block'>R$ {valorOuros}</small>
                                </div>
                                <div className={"col-3  backgroundSecondary rounded " + (selecionado == "Espadas" ? "prizeSelected" : "")} onClick={() => setSelecionado("Espadas")} style={{ border: '3px solid #0f1923' }}>
                                    <div className='d-flex justify-content-center mt-1'>
                                        <img src={require('../assets/espadas.png')} style={{ height: 32, width: 32 }} />
                                    </div>
                                    <small className='text-white text-center d-block'>R$ {valorEspadas}</small>
                                </div>
                                <div className={"col-3  backgroundSecondary rounded " + (selecionado == "Paus" ? "prizeSelected" : "")} onClick={() => setSelecionado("Paus")} style={{ border: '3px solid #0f1923' }}>
                                    <div className='d-flex justify-content-center mt-1'>
                                        <img src={require('../assets/paus.png')} style={{ height: 32, width: 32 }} />
                                    </div>
                                    <small className='text-white text-center d-block'>R$ {valorPaus}</small>
                                </div>
                            </div>
                        </div >
                    </div >

                    <h1 className="display-6 text-white text-center mt-3">Apostando R$ {valorApostando}</h1>
                </>
            ) : (
                <>
                    <div className="progress mt-1 mb-1" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-danger" style={{ width: tempoReportado + "0%" }}></div>
                    </div>


                    <div className="row">

                        <div className="container">

                            <p className="text-white mt-3 mb-1"><em>Nipe</em></p>
                            <div className="row">
                                <div className={"col-3  backgroundSecondary rounded " + (selecionado == "Copas" ? "prizeSelected" : "")} onClick={() => setSelecionado("Copas")} style={{ border: '3px solid #0f1923' }} >
                                    <div className='d-flex justify-content-center mt-2'>
                                        <img src={require('../assets/copas.png')} style={{ height: 32, width: 32 }} />
                                    </div>
                                    <small className='text-white text-center d-block mb-2'>R$ {valorCopas}</small>
                                </div>
                                <div className={"col-3  backgroundSecondary rounded " + (selecionado == "Ouros" ? "prizeSelected" : "")} onClick={() => setSelecionado("Ouros")} style={{ border: '3px solid #0f1923' }}>
                                    <div className='d-flex justify-content-center mt-1'>
                                        <img src={require('../assets/ouros.png')} style={{ height: 32, width: 32 }} />
                                    </div>
                                    <small className='text-white text-center d-block'>R$ {valorOuros}</small>
                                </div>
                                <div className={"col-3  backgroundSecondary rounded " + (selecionado == "Espadas" ? "prizeSelected" : "")} onClick={() => setSelecionado("Espadas")} style={{ border: '3px solid #0f1923' }}>
                                    <div className='d-flex justify-content-center mt-1'>
                                        <img src={require('../assets/espadas.png')} style={{ height: 32, width: 32 }} />
                                    </div>
                                    <small className='text-white text-center d-block'>R$ {valorEspadas}</small>
                                </div>
                                <div className={"col-3  backgroundSecondary rounded " + (selecionado == "Paus" ? "prizeSelected" : "")} onClick={() => setSelecionado("Paus")} style={{ border: '3px solid #0f1923' }}>
                                    <div className='d-flex justify-content-center mt-1'>
                                        <img src={require('../assets/paus.png')} style={{ height: 32, width: 32 }} />
                                    </div>
                                    <small className='text-white text-center d-block'>R$ {valorPaus}</small>
                                </div>
                            </div>
                        </div >
                    </div >

                    <div className="row">

                        <div className="container">

                            <p className="text-white mt-3 mb-1"><em>Valor</em></p>
                            <div className="row">
                                <div className={"col-3  backgroundSecondary rounded "} onClick={() => apostar(1)} style={{ border: '3px solid #0f1923' }} >
                                    <h1 class="display-6 text-center text-white">1</h1>
                                </div>
                                <div className={"col-3  backgroundSecondary rounded "} onClick={() => apostar(5)} style={{ border: '3px solid #0f1923' }} >
                                    <h1 class="display-6 text-center text-white">5</h1>
                                </div>
                                <div className={"col-3  backgroundSecondary rounded "} onClick={() => apostar(50)} style={{ border: '3px solid #0f1923' }} >
                                    <h1 class="display-6 text-center text-white">50</h1>
                                </div>
                                <div className={"col-3  backgroundSecondary rounded "} onClick={() => apostar(100)} style={{ border: '3px solid #0f1923' }} >
                                    <h1 class="display-6 text-center text-white">100</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className='col-4'>
                            <button type="button" class="btn btn-outline-light btn-block btn-lg" style={{ width: '100%' }} onClick={() => limpar()}>Limpar</button>
                        </div>
                        <div className='col-4'>
                            <button type="button" onClick={() => dobrarAposta()} class="btn btn-outline-light btn-lg btn-block" style={{ width: '100%' }}>2X</button>
                        </div>
                        <div className='col-4'>
                            <button type="button" onClick={() => confirmarAposta()} class="btn btn-success btn-lg btn-block" style={{ width: '100%' }}>Confirmar</button>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}


export default Slotmachine;