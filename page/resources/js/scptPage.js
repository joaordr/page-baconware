var link_atual;
var loader = $(".loader");

function goTo(link) {
    if (link === "sobre" && link_atual !== link) {
        $('#conteudo').load('page/view/sobreView.php', function () {
            $("header").removeClass("navbar-scroll-top").addClass("navbar-scroll-bottom");
            scroolToDiv(link);
        });
    } else if (link !== "sobre" && link_atual === "sobre" && link_atual !== link) {
        $('#conteudo').load('page/view/mainConteudoView.php', function () {
            control_navbar();
            $("#inicio").css("height", $(window).height() + "px");
            $("#inicio .carousel-item").css("height", $(window).height() - 100 + "px");
            form_contato();
            funcao_slides();
            scroolToDiv(link);
        });
    } else {
        if (link === "produtos") {
            $('#produto_sistema_cortinas').carousel(0);
            $('#produto_sistema_gestao').carousel(0);
        }
        scroolToDiv(link);
        control_navbar();
    }

    if ($(window).width() <= 768 && $("#navbarCollapse").hasClass("show")) {
        $("#BotaoMenuCollapse").click();
        $(".hamburger").toggleClass("is-active");
    }

    link_atual = link;
}

function scroolToDiv(div) {
    let offsetTop = $('#' + div).offset().top - 10;

    if (offsetTop) {
        $('html,body').animate({
            scrollTop: offsetTop
        }, 400);

        return false;
    }
}

var blockButton = false;

$(document).ready(function () {
    $("#loading_inicialize #loading_fields img").fadeIn(500);

    control_navbar();

    carregar_conteudo();

    $('#navbarCollapse').on('shown.bs.collapse', function () {
        blockButton = false;
    }).on('hidden.bs.collapse', function () {
        blockButton = false;
    });

    $(".hamburger").click(function () {
        if (!blockButton) {
            $(this).toggleClass("is-active");
            blockButton = true;
        }
    });
});

function form_contato() {
    $("#form_contato").submit(function (e) {
        loader.fadeIn(150);
        var dados = $(this).serialize();
        $.ajax({
            type: "POST",
            url: "page/view/pageFuncao.php",
            data: dados,
            dataType: "json",
            success: function (response) {
                sucess_handle(response);
                $("#nome_contato").val("");
                $("#email_contato").val("");
                $("#telefone_contato").val("");
                $("#mensagem_contato").val("");
                loader.fadeOut(150);
            },
            error: function (xhr) {
                loader.fadeOut(150);
                if (xhr.status === 500) {
                    error_handle(xhr.responseJSON);
                }
                if (xhr.status === 501) {
                    validation_error_handle(xhr.responseJSON);
                }
            }
        });
        e.preventDefault();
    });
}

$(window).resize(function () {
    control_navbar();
    $("#inicio").css("height", $(window).height() + "px");
    $("#inicio .carousel-item").css("height", $(window).height() - 100 + "px");
});

$(window).scroll(function () {
    if ($(window).width() > 768) {
        control_navbar();
    }
});

function control_navbar() {
    if (link_atual === "sobre") {
        return;
    }

    if ($(window).scrollTop() > 100) {
        $("header").removeClass("navbar-scroll-top").addClass("navbar-scroll-bottom");
    } else {
        $("header").addClass("navbar-scroll-top").removeClass("navbar-scroll-bottom");
    }
}

function acesso_gestao() {
    location.replace("sistema/view/login/loginView.php");
}

function carregar_conteudo() {
    $('#conteudo').load('page/view/mainConteudoView.php', function () {
        $("#inicio").css("height", $(window).height() + "px");
        $("#inicio .carousel-item").css("height", $(window).height() - 100 + "px");
        $("#bottom").css("display", "block");
        setTimeout(function () {
            $("#loading_inicialize").fadeOut(500, function () {
            });
            $("#page-base").css('visibility', 'visible');

        }, 600);
        funcao_slides();
        form_contato();
    });
}

function funcao_slides() {
    $('#produto_sistema_cortinas').on('slide.bs.carousel', function (e) {
        if (e.to === 0) {
            $('#produto_sistema_cortinas').css("background", "url(page/resources/imagens/sistema_cortinas/img1.jpg) no-repeat center").css("background-size", "cover");
        } else if (e.to === 1) {
            $('#produto_sistema_cortinas').css("background", "url(page/resources/imagens/sistema_cortinas/img2.jpg) no-repeat center").css("background-size", "cover");
        } else if (e.to === 2) {
            $('#produto_sistema_cortinas').css("background", "url(page/resources/imagens/sistema_cortinas/img3.jpg) no-repeat center").css("background-size", "cover");
        }
    });

    $('#produto_sistema_gestao').on('slide.bs.carousel', function (e) {
        if (e.to === 0) {
            $('#produto_sistema_gestao').css("background", "url(page/resources/imagens/sistema_gestao/img1.png) no-repeat center top").css("background-size", "cover");
        } else if (e.to === 1) {
            $('#produto_sistema_gestao').css("background", "url(page/resources/imagens/sistema_gestao/img2.jpg) no-repeat center top").css("background-size", "cover");
        } else if (e.to === 2) {
            $('#produto_sistema_gestao').css("background", "url(page/resources/imagens/sistema_gestao/img3.png) no-repeat center top").css("background-size", "cover");
        }
    });

    $('#inicio').on('slide.bs.carousel', function (e) {
        if (e.to === 0) {
            $('#inicio').css("background", "url(page/resources/imagens/inicio/img1.jpg) no-repeat center top").css("background-size", "cover");
        } else if (e.to === 1) {
            $('#inicio').css("background", "url(page/resources/imagens/inicio/img2.jpg) no-repeat center top").css("background-size", "cover");
        } else if (e.to === 2) {
            $('#inicio').css("background", "url(page/resources/imagens/inicio/img3.jpg) no-repeat center top").css("background-size", "cover");
        }
    });
}