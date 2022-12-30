import React, { useState, useEffect } from 'react';
import api from '../services/api';
import "./menu.css"
import Cookies from 'js-cookie';

// import { Container } from './styles';

// 78.22

function Menu({ }) {

    let [jwt, setJwt] = useState("")

    let [email, setEmail] = useState("")
    let [senha, setSenha] = useState("")

    let [nome, setNome] = useState("")
    let [sobrenome, setSobrenome] = useState("")
    let [emailCadastro, setEmailCadastro] = useState("")
    let [senhaCadastro, setSenhaCadastro] = useState("")
    let [senhaCadastroConfirm, setSenhaCadastroConfirm] = useState("")
    let [cpf, setCpf] = useState("")

    let [saldo, setSaldo] = useState(0)

    useState(() => {
        let token = Cookies.get("login")
        if (token)
            setJwt(token)
    }, [])

    setInterval(async function () {

        if (jwt != "") {
            // console.log(jwt)
            let dados = await api.get('usuario/dados')
        //    console.log(dados.data)
            setSaldo(dados.data.saldo)
        }

    }, 5000)

    let cadastrar = () => {

        if (IsEmail(emailCadastro)) {

            if (senhaCadastro.length >= 6) {
                if (senhaCadastro == senhaCadastroConfirm) {
                    api.post("usuario/cadastrar", {
                        nome,
                        sobrenome,
                        email: emailCadastro,
                        senha: senhaCadastro,
                        cpf
                    }).then(function (e) {
                        alert("Cadastro realizado com sucesso !")
                    }).catch(function (e) {
                        alert(e.response.data.message)
                    })
                } else
                    alert("Senha e confirmacao de senha sao diferentes")
            } else
                alert("Sua senha deve conter pelo menos 6 digitos")
        } else
            alert("O email enviado nao e valido")

    }

    let IsEmail = (email) => {
        var reg = /^(\s?[^\s,]+@[^\s,]+\.[^\s,]+\s?,)*(\s?[^\s,]+@[^\s,]+\.[^\s,]+)$/;

        if (reg.test(email)) {
            return true;
        }
        else {
            return false;
        }
    }

    let entrar = () => {
        api.post("usuario/autenticacao", {
            email: email,
            senha: senha
        }).then(function (e) {
            Cookies.set("login", e.data.token)
            setTimeout(function () {
                window.location.reload();
            }, 2000)
        }).catch(function (e) {
            alert(e.response.data.message)
        })
    }

    return (
        <>
            <nav class="navbar navbar-dark bg-dark">
                <div class="container-fluid">
                    <a href='/' class="navbar-brand">MONSTRO</a>
                    <form class="d-flex" role="search">

                        {jwt == "" ? (
                            <>
                                <button className="btn btn-light ms-1" type="button" data-bs-toggle="modal" data-bs-target="#loginModal">Entrar</button>
                                <button className="btn btn-outline-light ms-1" type="button" data-bs-toggle="modal" data-bs-target="#registerModal">Cadastrar</button>
                            </>
                        ) : (
                            <>
                                <button className="btn btn-outline-light" type="button" style={{}}>R$ {parseFloat(saldo).toFixed(2)}</button>
                                <button className="btn btn-outline-light ms-1" type="button">  <i class="bi bi-person-fill"></i></button>
                            </>
                        )}

                    </form>
                </div>
            </nav>
            <div className="modal fade" id="registerModal" tabindex="-1" aria-labelledby="registerModal" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Seja bem-vindo(a)</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label col-form-label-sm p-0 m-0">Nome</label>
                                <input type="email" class="form-control form-control-sm " value={nome} onChange={(e) => setNome(e.target.value)} />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label col-form-label-sm p-0 m-0">Sobrenome</label>
                                <input type="email" class="form-control form-control-sm " value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label col-form-label-sm p-0 m-0">Email</label>
                                <input type="email" class="form-control form-control-sm " value={emailCadastro} onChange={(e) => setEmailCadastro(e.target.value)} />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label col-form-label-sm p-0 m-0">Senha</label>
                                <input type="password" class="form-control form-control-sm " value={senhaCadastro} onChange={(e) => setSenhaCadastro(e.target.value)} />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label col-form-label-sm p-0 m-0">Confirmar senha</label>
                                <input type="password" class="form-control form-control-sm " value={senhaCadastroConfirm} onChange={(e) => setSenhaCadastroConfirm(e.target.value)} />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label col-form-label-sm p-0 m-0">CPF</label>
                                <input type="email" class="form-control form-control-sm " value={cpf} onChange={(e) => setCpf(e.target.value)} />
                                <div id="emailHelp" class="form-text">Esta informacao e util na validacao de transacoes bancarias.</div>

                            </div>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" onClick={() => cadastrar()}>Cadastrar</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModal" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Seja bem-vindo(a)</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">

                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label col-form-label-sm p-0 m-0">Email</label>
                                <input type="email" class="form-control form-control-sm " value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label col-form-label-sm p-0 m-0">Senha</label>
                                <input type="password" class="form-control form-control-sm " value={senha} onChange={(e) => setSenha(e.target.value)} />
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" onClick={() => entrar()}>Entrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Menu;