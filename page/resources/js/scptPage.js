var link_atual;

function goTo(link) {
    if (link === "sobre" && link_atual !== link) {
        $(".loader").show();
        $('#conteudo').load('page/view/sobreView.php', function () {
            scroolToDiv(link);
            $(".loader").fadeOut("fast");
        });
    } else if (link !== "sobre" && link_atual === "sobre" && link_atual !== link) {
        $(".loader").show();
        $('#conteudo').load('page/view/mainConteudoView.php', function () {
            $("#inicio").css("height", $(window).height() + "px");
            $("#inicio .carousel-item").css("height", $(window).height() - 100 + "px");
            form_contato();
            funcao_slides();
            scroolToDiv(link);
            $(".loader").fadeOut("fast");
        });
    } else {
        scroolToDiv(link);
    }

    if ($(window).width() <= 768 && $("#navbarCollapse").hasClass("show")) {
        $("#BotaoMenuCollapse").click();
        $(".hamburger").toggleClass("is-active");
    }

    link_atual = link;
}

function scroolToDiv(div) {
    var offsetTop = $('#' + div).offset().top - 10;

    if (offsetTop) {
        $('html,body').animate({
            scrollTop: offsetTop
        }, 400);

        return false;
    }
}

var blockButton = false;

$(document).ready(function () {
    carregar_conteudo();

    $("#inicio").css("height", $(window).height() + "px");
    $("#inicio .carousel-item").css("height", $(window).height() - 100 + "px");
    $('#inicio').css("background", "url(page/resources/imagens/page/img1.jpg) no-repeat center top").css("background-size", "cover");

    control_navbar();

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
        $(".loader").show();
        var dados = $(this).serialize();
        $.ajax({
            type: "POST",
            url: "page/view/pageFuncao.php",
            data: dados + "&saveMessage",
            dataType: "json",
            success: function (response) {
                $(".loader").fadeOut("fast");
            },
            error: function (xhr) {
                $(".loader").fadeOut("slow");
                if (xhr.status === 500) {
                    error_handle(xhr.responseJSON);
                }
                if (xhr.status === 501) {
                    validation_error_handle(xhr.responseJSON);
                }
                if (xhr.status === 502) {
                    sucess_handle(xhr.responseJSON);
                    $("#nome_contato").val("");
                    $("#email_contato").val("");
                    $("#telefone_contato").val("");
                    $("#mensagem_contato").val("");
                }
            }
        });
        e.preventDefault();
        return false;
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
    if ($(window).width() <= 1024 && $(window).width() > 768) {
        if ($(window).width() >= 860) {
            $(".navbar-brand").css("font-size", "16pt");
            $("#logoBacon").css("width", "60px");
        } else {
            $(".navbar-brand").css("font-size", "14pt");
            $("#logoBacon").css("width", "57px");
        }

        if ($(window).scrollTop() > 100) {
            $(".navbar").css("padding-top", "1px").css("padding-bottom", "1px");
        } else {
            $(".navbar").css("padding-top", "5px").css("padding-bottom", "5px");
        }

        return;
    }
    if ($(window).width() <= 768) {
        $(".navbar").css("padding-top", "1px").css("padding-bottom", "1px");
        $(".navbar-brand").css("font-size", "11pt");
        $("#logoBacon").css("width", "50px");
        return;
    }

    if ($(window).scrollTop() > 100) {
        $(".navbar").css("padding-top", "1px").css("padding-bottom", "1px");
        $(".navbar-brand").css("font-size", "16pt");
        $("#logoBacon").css("width", "58px");
    } else {
        $(".navbar").css("padding-top", "5px").css("padding-bottom", "5px");
        $(".navbar-brand").css("font-size", "18pt");
        $("#logoBacon").css("width", "75px");
    }


}

function acesso_gestao() {
    $(".loader").show();
    location.replace("sistema/view/login/loginView.php");
}

function carregar_conteudo() {
    $('#conteudo').load('page/view/mainConteudoView.php', function () {
        $("#inicio").css("height", $(window).height() + "px");
        $("#inicio .carousel-item").css("height", $(window).height() - 100 + "px");
        $("#bottom").css("display", "block");
        funcao_slides();
        form_contato();
        $(".loader").fadeOut("fast");
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