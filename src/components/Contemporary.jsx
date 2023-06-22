import React from "react";
import contemporaryvideo from "../contemporaryvideo.mp4";
import "../styles/Contemporary.scss"

function Contemporary () {

    return (
<div className="contemporary">
    <video src={contemporaryvideo} autoPlay loop muted />
    <div className="about-contemporary">
                <img src="../images/contemporary2.jpg" alt="" />
                <div className="text-contemporary">
                    <h2>Контемп</h2>
                    <p>С изменением тенденций, появлениям новых жанров и стилей иногда не стоит забывать о классике. Именно контемп даёт второе дыхание балету, джазу и другим классическим танцам. Минимализм и свобода в одежде - одна из основ контемпа.</p>
                </div>
            </div>
            <div className="lessons">
    <div className="group">
    
    <h4>Групповые занятия</h4>
    <ul>
        <li>Дети: 6-11 лет</li>
        <li>Юниоры: 12-15 лет</li>
        <li>Молодежь: 16-20 лет</li>
        <li>Взрослые: 21-35</li>
        <li>Сеньоры: 35-45 лет</li>
    </ul>
    </div>
    <div className="indiv">
    
    <h4>Индивидуальные/парные занятия</h4>
    <ul>
        <li>Юниоры: 12-15 лет</li>
        <li>Молодежь: 16-20 лет</li>
        <li>Взрослые: 21-35</li>
        <li>Сеньоры: 35-45 лет</li>
    </ul>
    </div>
    </div>
    <h3>Требования к униформе</h3>
    <div className="uniforms">
                    
                    <div className="forgirls">
                        <h5>Женская/для девочек</h5>
                        <ul>
                            <li>Платье-купальник и юбка из тюля (бежевое, чёрное)</li>
                            <li>Трико</li>
                            <li>Балетки</li>
                            <li>Для причёски - невидимки, шпильки, резинки, сетка для волос</li>
                        </ul>

                    </div>
                    <div className="forboys">
                        <h5>Мужская/для мальчиков</h5>
                        <ul>
                            <li>Футболка (белая)</li>
                            <li>Трико (чёрное, бежевое)</li>
                            <li>Балетки (белые)</li>
                            <li>Требования к причёске - длинные волосы завязать в хвост</li>
                        </ul>
                    </div>
                </div>
</div>
    )
};

export default Contemporary;