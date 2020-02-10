<?php

require '../resources/libs/bibliotecasphp/phpmailer/Exception.php';
require '../resources/libs/bibliotecasphp/phpmailer/PHPMailer.php';
require '../resources/libs/bibliotecasphp/phpmailer/SMTP.php';

class Email {
    protected static $mail;

    private function __construct() {
        self::$mail = new \PHPMailer\PHPMailer\PHPMailer(true);  // Passing `true` enables exceptions

        //Server settings
        self::$mail->SMTPDebug = 0;
        self::$mail->isSMTP();                                      // Set mailer to use SMTP
        self::$mail->Host = 'smtp.umbler.com';                       // Specify main and backup SMTP servers
        self::$mail->SMTPAuth = true;                               // Enable SMTP authentication
        self::$mail->Username = 'contato@baconware.com.br';                 // SMTP username
        self::$mail->Password = 'joao@luciano*baconware';                           // SMTP password
        self::$mail->SMTPSecure = 'tsl';                            // Enable TLS encryption, `ssl` also accepted
        self::$mail->Port = 587;                                    // TCP port to connect to
        //Recipients
        self::$mail->setFrom('contato@baconware.com.br', 'Contato BaconWare');
        //Content
        self::$mail->isHTML(true);
    }

    /**
     * @param string $destinatario
     * @param string $conteudo
     * @param string $assunto
     *
     * @throws Exception
     */
    public static function Enviar($destinatario, $conteudo, $assunto) {
        try {
            if ( ! self::$mail) {
                new Email();
            }

            self::$mail->addAddress($destinatario); // destinatario

            self::$mail->Subject = $assunto;
            self::$mail->Body = $conteudo;
            self::$mail->send();

        } catch (Exception $ex) {
            throw new Exception(self::$mail->ErrorInfo);
        }
    }


}




