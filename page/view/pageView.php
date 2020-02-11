<!DOCTYPE html>
<html lang="pt-br">
<head>
    <title>BaconWare</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="shortcut icon" href="page/resources/imagens/icones/aba.png" type="image/x-icon"/>

    <link rel="stylesheet" href="page/resources/libs/bootstrap/css/bootstrap-md-fonts.css"/>
    <link rel="stylesheet" href="page/resources/libs/bootstrap/css/bootstrap.md.css"/>
    <link rel="stylesheet" href="page/resources/libs/jquery/jquery-confirm.min.css"/>
    <link rel="stylesheet" href="page/resources/libs/fontawesome/css/font-awesome.min.css"/>
    <link rel="stylesheet" href="page/resources/libs/fontawesome/css/all.css"/>
    <link rel="stylesheet" href="page/resources/css/estiloPage.css"/>

    <script src="page/resources/libs/jquery/jquery.min.js"></script>
</head>
<body>

<div id="loading_inicialize">
    <div id="loading_fields">
        <img id="logo_loading" src="page/resources/imagens/logo.png"/>
        <div class="sk-circle">
            <div class="sk-circle1 sk-child"></div>
            <div class="sk-circle2 sk-child"></div>
            <div class="sk-circle3 sk-child"></div>
            <div class="sk-circle4 sk-child"></div>
            <div class="sk-circle5 sk-child"></div>
            <div class="sk-circle6 sk-child"></div>
            <div class="sk-circle7 sk-child"></div>
            <div class="sk-circle8 sk-child"></div>
            <div class="sk-circle9 sk-child"></div>
            <div class="sk-circle10 sk-child"></div>
            <div class="sk-circle11 sk-child"></div>
            <div class="sk-circle12 sk-child"></div>
        </div>
    </div>
</div>

<div class="loader back_loader">
    <div class="sk-chase">
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
    </div>
</div>

<div id="page-base">
    <header>
        <nav class="navbar navbar-expand-md navbar-light fixed-top">
            <a class="navbar-brand transition" href="#" onclick="goTo('inicio')">
                <img src="page/resources/imagens/logo.png" class="transition" alt="LOGO" id="logoBacon">
                A granja na palma de sua mão
            </a>

            <button class="navbar-toggler" id="BotaoMenuCollapse" type="button" data-toggle="collapse"
                    data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <div class="hamburger" id="hamburger-1">
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                </div>
            </button>

            <div class="collapse navbar-collapse justify-content-end" id="navbarCollapse">
                <div class="row">
                    <div class="col">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" href="#inicio" onclick="goTo('inicio')">Inicio</a>
                            </li>
                            <li class="nav-item active">
                                <a id="link_produtos" class="nav-link" href="#produtos" onclick="goTo('produtos')">
                                    Produtos
                                </a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="#contato" onclick="goTo('contato')">Contato</a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="#sobre" onclick="goTo('sobre')">Sobre</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col">
                        <div class="dropdown dropleft">
                            <button id="btn_acesso_gestao" class="btn btn-default" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false"><i class="fas fa-bars"></i></button>
                            <div class="dropdown-menu" aria-labelledby="btn_acesso_gestao">
                                <a class="dropdown-item" href="#" onclick="acesso_gestao()">Acessar sistema de gestão</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </nav>
    </header>


    <div id="conteudo">

    </div>

    <div id="bottom" style="display: none;">
        <!--rodape-->
        <div class="container-fluid" id="rodape">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <img src="page/resources/imagens/logo.png" alt="LOGO" id="logoBacon_rodape">
                    </div>
                    <div class="col-3 col-md-3 col-sm-4 col-lg-3">
                        <a href="#inicio" onclick="goTo('inicio')">Inicio</a><br>
                        <a href="#sobre" onclick="goTo('sobre')">Sobre</a><br>
                        <a href="#produtos" onclick="goTo('produtos')">Produtos</a><br>
                        <a href="#contato" onclick="goTo('contato')">Contato</a><br>
                    </div>
                    <div style="border-left: 1px solid rgba(255,255,255,0.3);" class="col-9 col-md-5 col-sm-7 col-lg-4 text-nowrap">
                        <h6><b>CONTATO</b></h6>
                        <p><i class="fas fa-envelope"></i>contato@baconware.com.br</p>
                        <p><i class="fas fa-phone"></i>(44) 99135-6115</p>
                        <p><i class="fas fa-phone"></i>(44) 99802-7379</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- FOOTER -->
        <footer>
            <p>BaconWare &copy; 2019</p>
        </footer>
    </div>
</div>

<script src="page/resources/libs/bootstrap/js/popper.min.js"></script>
<script src="page/resources/libs/bootstrap/js/bootstrap-material-design.js"></script>
<script src="page/resources/libs/jquery/jquery-confirm.min.js"></script>
<script src="page/resources/js/scptPage.js"></script>
<script src="page/resources/js/error_handle.js"></script>

</body>
</html>