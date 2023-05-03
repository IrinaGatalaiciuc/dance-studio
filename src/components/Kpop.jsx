
import kpopvideo from "../kpopvideo.mp4";

function Kpop () {

    return (
<div className="kpop">
    <video src={kpopvideo} autoPlay loop muted />
    <div className="about-kpop">
                <img src="../images/k-pop2.jpg" alt="" />
                <div className="text-kpop">
                    <h2>K-Pop</h2>
                    <p>К-Поп развился как отдельная музыкальная субкультура, с ритмичным исполнением под корейскую поп-музыку. Миллионы поклонников по всему миру обучались у айдолов, и многие танцевальные школы и студии подхватили волну. Стать профессиональным танцором к-попа теперь можно стать не только в Южной Корее. </p>
                </div>
            </div>
            <div className="lessons">
    <div className="group">
    <img src="" alt="" />
    <h4>Групповые занятия</h4>
    <ul>
        <li>Юниоры: 12-15 лет</li>
        <li>Молодежь: 16-20 лет</li>
        <li>Взрослые: 21-35</li>
    </ul>
    </div>
    <div className="indiv">
    <img src="" alt="" />
    <h4>Индивидуальные занятия</h4>
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
                            <li>Футболка свободного кроя</li>
                            <li>Топ облегающий</li>
                            <li>Штаны свободного кроя</li>
                            <li>Юбка-шорты</li>
                            <li>Кроссовки</li>
                        
                            
                        </ul>

                    </div>
                    <div className="forboys">
                        <h5>Мужская/для мальчиков</h5>
                        <ul>
                            <li>Футболка свободного кроя</li>
                            <li>Штаны свободного кроя</li>
                            <li>Кроссовки</li>
                            
                        </ul>
                    </div>
                </div>
</div>
    )
};

export default Kpop;