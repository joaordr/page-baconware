<?php

include_once '../model/Email.php';

header('Content-type: application/json');

$nome = filter_input(INPUT_POST, 'nome_contato', FILTER_SANITIZE_STRING);
$email = filter_input(INPUT_POST, 'email_contato', FILTER_SANITIZE_STRING);
$telefone = filter_input(INPUT_POST, 'telefone_contato', FILTER_SANITIZE_STRING);
$mensagem = filter_input(INPUT_POST, 'mensagem_contato', FILTER_SANITIZE_STRING);

try {
    $corpoEmail = '<p><b>Nome:</b> ' . $nome . '</p>'
        . '<p><b>Email:</b> ' . $email . '</p>'
        . '<p><b>Telefone:</b> ' . $telefone . '</p>'
        . '<p><b>Mensagem:</b> ' . $mensagem . '</p>';

    Email::Enviar('contato@baconware.com.br', $corpoEmail, '(Page) Mensagem de contato');

    http_response_code(200);
    echo json_encode('Sua mensagem foi enviada com sucesso!');
    die();
} catch (Exception $ex) {
    http_response_code(500);
    echo json_encode($ex);
    die();
}

