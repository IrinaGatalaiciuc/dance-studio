import React from "react";
import hiphopvideo from "../hiphopvideo.mp4";

function Hiphop () {

    return (
<div className="hiphop">
    <video src={hiphopvideo} autoPlay loop muted />
    <div className="about-hiphop">
                <img src="../images/hip-hop1.jpg" alt="" />
                <div className="text-hiphop">
                    <h2>Hip-Hop</h2>
                    <p>Хип-Хоп - это о свободе движений, самовыражении и познании культуры Америки. С 1970-х годов популярность хип-хопа не угосает и находит поклонников по всему миру.  </p>
                </div>
            </div>
            <div className="lessons">
    <div className="group">
    
    <h4>Групповые занятия</h4>
    <ul>
        
        <li>Юниоры: 12-15 лет</li>
        <li>Молодежь: 16-20 лет</li>
        <li>Взрослые: 21-35</li>
    </ul>
    </div>
    <div className="indiv">
    
    <h4>Индивидуальные/парные занятия</h4>
    <ul>
        <li>Юниоры: 12-15 лет</li>
        <li>Молодежь: 16-20 лет</li>
        <li>Взрослые: 21-35</li>
       
    </ul>
    </div>
    </div>
    <h3>Требования к униформе</h3>
    <div className="uniforms">
                    
                    <div className="forgirls">
                        <h5>Женская/для девочек</h5>
                        <ul>
                            <li>Футболка свободного кроя</li>
                            <li>Облегающий топ</li>
                            <li>Штаны свободного кроя</li>
                            <li>Кроссовки на узкой подошве</li>
                            <li>Бандана/кепка</li>
                        </ul>

                    </div>
                    <div className="forboys">
                        <h5>Мужская/для мальчиков</h5>
                        <ul>
                        <li>Футболка свободного кроя</li>
                        <li>Майка (любого цвета)</li>
                            <li>Штаны свободного кроя</li>
                            <li>Кроссовки на узкой подошве</li>
                            <li>Бандана/кепка</li>
                        </ul>
                    </div>
                </div>
</div>
    )
};

export default Hiphop;