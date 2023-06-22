import { useRef, useState } from "react";
import "../styles/Register.scss"

function Register() {
    const nameRef = useRef();
    const lastnameRef = useRef();
    const ageRef = useRef();
    const phoneRef = useRef();
    const emailRef = useRef();
    const danceRef = useRef();
    const notesRef = useRef();
    const [submit, setSubmit] = useState(false);

    const formSubmit = () => {
        console.log(nameRef.current.value);
        console.log(lastnameRef.current.value);
        console.log(ageRef.current.value);
        console.log(phoneRef.current.value);
        console.log(emailRef.current.value);
        console.log(danceRef.current.value);
        console.log(notesRef.current.value);
        setSubmit(true);
    }

    return (
        <div className="reg-form">
            <div className="register" style={{
                display: !submit ? "block" : "none"
            }}>
                <h1>Запись новых учеников на 2023-2024 г.</h1>
                <input placeholder="Имя" ref={nameRef} />
                <br />
                <input placeholder="Фамилия" ref={lastnameRef} />
                <br />
                <input placeholder="Возраст" ref={ageRef} />
                <br />
                <input placeholder="Телефон" ref={phoneRef} />
                <br />
                <input type="email" placeholder="Email" ref={emailRef} />
                <br />
                <select ref={danceRef}>
                    <option value="Балет">Балет</option>
                    <option value="Бальные танцы">Бальные танцы</option>
                    <option value="Contemporary">Contemporary</option>
                    <option value="Hip-Hop">Hip-Hop</option>
                    <option value="K-Pop">K-Pop</option>
                    <option value="Национальный танец">Национальный танец</option>
                </select>
                <br />
                
                <textarea placeholder="Место для вопроса и/или заметок..." ref={notesRef}></textarea>
                
                <br />
                <button onClick={() => formSubmit()}>Записаться</button>



            </div>
            <div className="result" style={{
                display: submit ? "block" : "none"
            }}>
                <h3>Поздравляем! Вы записались в нашу студию!</h3>
                <br />
                <p>На Ваш email придёт письмо с подтверждением. Мы свяжемся с Вами в ближайшие 30 минут.</p>

            </div>
        </div>
    )
};

export default Register;