function Contact () {

    return (
<div className="contact">
<div className="left-side">
              <div className="medias">
                <img src="./images/instagram.png" className="media" alt="insta" />
                <img src="./images/Facebook.png" className="media" alt="facebook" />
                <img src="./images/youtube.png" className="youtube" alt="youtube" />
              </div>
              <div className="hours">
                <h4>График работы:</h4>
                <p>Пн: выходной</p>
                <p>Вт: 11:00-20:00</p>
                <p>Ср: 11:00-20:00</p>
                <p>Чт: 11:00-20:00</p>
                <p>Пят: 11:00-20:00</p>
                <p>Суб: 11:00-20:00</p>
                <p>Вос: 14:00-18:00</p>
              </div>
            </div>
            <div className="center-side">
              <div className="address">
                <h4>DANCE EXPERIENCE STUDIO</h4>
                <div className="email"><p>Email: danceexpstudio@gmail.com</p></div>
                <div className="phones">
                <img src="./images/phone-icon.png" className="phone" alt="phone-icon" /><p>+37322293745</p>
                <img src="./images/phone-icon.png" className="phone" alt="phone-icon" /><p>079546738</p>
                </div>
              </div>
            </div>
              <div className="right-side">
                <p>Адрес: мун. Кишинёв, ул. Букурешть 21/2</p>
                <br />
                <img src="./images/map.jpg" alt="map" />
              </div>
</div>
    )
};

export default Contact;