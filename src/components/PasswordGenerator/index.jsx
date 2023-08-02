import { Fragment, useState } from 'react'
import Styles from './index.module.css'
import Input from '../Input'
import Alert from '../Alert'


export default function PasswordGenerator() {
    const [copyText, setCopyText] = useState('Copiar')
    const [password, setPassword] = useState('')
    const [passwordSize, setPasswordSize] = useState(12)
    const [display, setDisplay] = useState(false)
    const [alertColor, setAlertColor] = useState('#1dd3b0')
    const [alertText, setAlertText] = useState('')

    function copy () {
        if(password == '') {
            setAlertText('A senha ainda não foi gerada')
            setAlertColor('#ba181b')
            notificationAlert()
        } else {
            window.navigator.clipboard.writeText(password)
            setAlertColor('#1dd3b0')
            setAlertText('Copiada para a área de tranferência')
            setCopyText("Copiado")
            notificationAlert()
        }
            
    }

    function notificationAlert() {
        setDisplay(true)
    }
    
    function createPassword() {
        var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ!@#$%^&*()+?><:{}[]";
        var password = "";
    
        for (var i = 0; i < passwordSize; i++) {
          var randomNumber = Math.floor(Math.random() * chars.length);
          password += chars.substring(randomNumber, randomNumber + 1);
        }
        setPassword(password)
        setCopyText("Copiar")
        setDisplay(false)
    }

    return(
        <Fragment>
            
            <div className={Styles.container}>
                <div className={Styles.main}>
                    <div className={Styles.content}>
                        <h1>Gerador de Senhas</h1>
                        <Input passwordSize={+passwordSize} setPasswordSize={setPasswordSize}/>
                        <div className={Styles.buttons}>
                            <button onClick={createPassword} className={Styles.button}>Gerar</button>
                            <button onClick={copy} className={Styles.button}>{copyText}</button>
                        </div>
                        <p>{password}</p>
                    </div>
                </div>

                {display && (
                    <Alert display={display} setDisplay={setDisplay} color={alertColor} alertText={alertText}/> 
                )}
                
            </div>
            
        </Fragment>
        
    )
}