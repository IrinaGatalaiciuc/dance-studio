import React from "react";
import nationalvideo from "../nationalvideo.mp4";

function National () {

    return (
<div className="national">
   <video src={nationalvideo}  autoPlay loop muted />
   <div className="about-national">
                <img src="../images/national2.jpg" alt="" />
                <div className="text-national">
                    <h2>Национальный танец хора</h2>
                    <p>Хора - одна из визитных карточек молдавской культуры! С этим танцем связаны сельские гуляния, свадьбы, национальные праздники. Ни один молдавский праздник не обходится без хора, когда родные, друзья, знакомые и даже незнакомые друг с другом люди пускаются в дружный пляс. Для будущих профессиональных танцоров это большая часть - представлять свою страну.</p>
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
        <li>Сеньоры: 35-55 лет</li>
    </ul>
    </div>
    <div className="indiv">
    
    <h4>Индивидуальные/парные занятия</h4>
    <ul>
    <li>Дети: 6-11 лет</li>
        <li>Юниоры: 12-15 лет</li>
        <li>Молодежь: 16-20 лет</li>
        <li>Взрослые: 21-35</li>
        <li>Сеньоры: 35-55 лет</li>
    </ul>
    </div>
    </div>
    <h3>Требования к униформе</h3>
    <div className="uniforms">
                    
                    <div className="forgirls">
                        <h5>Женская/для девочек</h5>
                        <ul>
                            <li>Рубаха с вышевкой</li>
                            <li>Юбка</li>
                            <li>Пояс</li>
                            <li>Колготки (белые)</li>
                            <li>Балетки(чёрные)</li>
                            <li>Для причёски - традиционный платок</li>
                        </ul>

                    </div>
                    <div className="forboys">
                        <h5>Мужская/для мальчиков</h5>
                        <ul>
                            <li>Рубаха с вышивкой</li>
                            <li>Брюки традиционные (белые)</li>
                            <li>Пояс</li>
                            <li>Балетки (чёрные)</li>
                        </ul>
                    </div>
                </div>
</div>
    )
};

export default National;