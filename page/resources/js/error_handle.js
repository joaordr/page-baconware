function error_handle(error) {
    console.log(error);
    $.alert({
        title: '<i class="fas fa-exclamation-triangle"></i>  Erro ao realizar operação!',
        content: "Tente novamente, se o problema persistir informe o suporte técnico.",
        useBootstrap: true,
        theme: 'supervan',
        draggable: false,
        columnClass: 'col-sm-8 col-12',
        watchInterval: 100,
        autoClose: false,
        onDestroy: function () {
            error_state = false;
        },
        buttons: {
            suport_report: {
                text: '<i class="fas fa-comment-alt"></i> Enviar mensagem ao suporte',
                btnClass: 'btn btn-raised',
                isDisabled: true, // initially not disabled
                action: function () {
                    alert('Não implementado');
                }
            },
            close: {
                text: 'Ok',
                btnClass: 'btn-raised btn-red btn-warning',
                keys: ['enter'],
                action: function () {
                    $(".modal").modal("hide");
                }
            }

        }
    });


}

function validation_error_handle(msg) {
    $.alert({
        title: 'Erro de validação!',
        content: msg,
        useBootstrap: true,
        animation: 'scale',
        closeAnimation: 'scale',
        autoClose: 'close|8000',
        theme: 'material',
        type: 'orange',
        draggable: false,
        columnClass: 'col-sm-6 col-12',
        watchInterval: 100,
        typeAnimated: true,
        buttons: {
            close: {
                text: 'Ok',
                btnClass: 'btn-warning btn-raised',
                keys: ['enter'],
            }
        }
    });
}

function sucess_handle(msg) {
    $(".loader").fadeOut("slow");
    $.alert({
        useBootstrap: true,
        animation: 'scale',
        closeAnimation: 'scale',
        theme: 'material',
        title: '',
        content: msg,
        type: 'green',
        draggable: false,
        columnClass: 'col-sm-6 col-12',
        watchInterval: 100,
        typeAnimated: true,
        autoClose: 'close|8000',
        buttons: {
            close: {
                text: 'Ok',
                btnClass: 'btn-primary btn-raised',
                keys: ['enter'],
            }
        }
    });
}

function user_on_alert(tipo_user, redirect) {
    $.alert({
        title: 'Já existe um usuário logado no sistema!',
        content: "Você sera direcionado a ele!",
        useBootstrap: true,
        animation: 'scale',
        closeAnimation: 'scale',
        theme: 'material',
        type: 'orange',
        draggable: false,
        columnClass: 'col-sm-8 col-lg-6 col-12',
        watchInterval: 100,
        typeAnimated: true,
        autoClose: 'confirm|8000',
        buttons: {
            cancel: {
                text: 'Cancelar',
                btnClass: 'btn-raised btn-orange',
                disable: true,
                action: function () {
                    // window.location.replace(url);
                }
            },
            confirm: {
                text: 'Ok',
                btnClass: 'btn-raised btn-primary',
                keys: ['enter'],
                action: function () {
                    if (tipo_user === "admin") {
                        window.location.replace(redirect);
                    } else if (tipo_user === "veterinario") {
                        window.location.replace(redirect);
                    } else if (tipo_user === "produtor") {
                        redirecionar_acesso_produtor(redirect);
                    }

                }
            }
        }
    });
}

function simple_alert(mesage) {
    loader.fadeOut("fast");
    alertify.dismissAll();
    alertify.set('notifier', 'position', 'bottom-right');
    alertify.error(mesage);
}