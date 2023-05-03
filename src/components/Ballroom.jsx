import React from "react";
import ballroomvideo from "../ballroomvideo.mp4";

function Ballroom() {

    return (
        <div className="ballroom">
            <video src={ballroomvideo} autoPlay loop muted />
            <div className="about-ballroom">
                
                <div className="text-ballroom">
                    <h2>Бальные танцы</h2>
                    <p>От классического вальса до зажигательной ча-ча-ча - бальные танцы объединили в себе культуры Европы и Латинской Америки. Каждый найдёт себе стиль по вкусу. Для детей танцы станут увлечением, а для взрослых, особенно пар, - незабываемый этап.</p>
                    <br />
                    <p>Бальные танцы превнесут в отношения</p>
                </div>
            </div>


            <div className="types">

                <div className="tango">
                    <img src="../images/tango.jpg" alt="" />
                </div>
                <div className="texts">
                    <p className="passion">страсть...</p>
                    <p className="slow">или нежность</p>
                </div>
                <div className="waltz">
                    <img src="../images/waltz.jpg" alt="" />
                </div>
            </div>

            <div className="lessons">
                <div className="group">
                    <img src="" alt="" />
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
                    <img src="" alt="" />
                    <h4>Индивидуальные/парные занятия</h4>
                    <ul>
                        <li>Юниоры: 12-15 лет</li>
                        <li>Молодежь: 16-20 лет</li>
                        <li>Взрослые: 21-35</li>
                        <li>Сеньоры: 40-60 лет</li>
                    </ul>
                </div>
            </div>
            <h3>Требования к униформе</h3>
            <div className="uniforms">
                
                <div className="forgirls">
                    <h5>Женская/для девочек</h5>
                    <ul>
                        <li>Шифоновое платье с длинным рукавом</li>
                        <li>Туфли (небольшой каблук)</li>
                        <li>Колготки капроновые (телесные)</li>
                        <li>Для причёски - невидимки, шпильки, резинки, сетка для волос</li>
                    </ul>

                </div>
                <div className="forboys">
                    <h5>Мужская/для мальчиков</h5>
                    <ul>
                        <li>Рубашка (белая)</li>
                        <li>Брюки (чёрные)</li>
                        <li>Туфли классические </li>
                        <li>Требования к причёске - длинные волосы завязать в хвост</li>
                    </ul>
                </div>
            </div>

        </div>
    )
};

export default Ballroom;