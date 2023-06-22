import { Link } from "react-router-dom";
import "../styles/Dances.scss"

function Dances() {
    return (
      <div className="dances">
        <div className="sections">
        
        <div className="section">
          <img src="https://plus.unsplash.com/premium_photo-1661776548273-21ade2bf06d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="ballet-section" />
          <div className="text-bottom">
            <h3>Балет</h3>
            <p>Обучение по технике А.Я.Вагановой, индивидуальные и групповые занятия. </p>
            <Link to={"/dances/ballet"}><button>Детали</button></Link>
          </div>
        </div>

        <div className="section">
        <img src="https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="hip-hop-section" />
          <div className="text-bottom">
            <h3>Хип-Хоп</h3>
            <p>Свобода движений и обучение от участников международных конкурсов.</p>
            <br />
            <Link to={"/dances/hip-hop"}><button>Детали</button></Link>
          </div>
    </div>
    
        <div className="section">
          <img src="https://ulyanovsk.recordfit.ru/wp-content/uploads/2022/02/k-pop.webp" alt="k-pop" />
          <div className="text-bottom">
            <h3>К-Поп</h3>
            <p>Обучение от участников танцевальных конкурсов по К-Поп.</p>
            <br />
            <Link to={"/dances/k-pop"}><button>Детали</button></Link>
          </div>
        </div>


        <div className="section">
        <img src="https://assets.protv.md/articles/files/thumbs/750x/2021/11/29/29343383856041152048600x08000544581ec113088057ec3a0c31ef1ab9e-1638175503dq5lmhl.jpeg" alt="national-section" />
  <div className="text-bottom">
            <h3>Национальный танец</h3>
            <p>Познаём молдавскую культуру с выпускниками Национального Колледжа Хореографии.</p>
            <Link to={"/dances/national"}><button>Детали</button></Link>
          </div>
           </div>
        
        <div className="section">
          <img src="https://var-veka.ru/mt-content/uploads/2018/01/kids-dance-classes-tallaght-dance-school.jpg" alt="ballroom-dance" />
          <div className="text-bottom">
            <h3>Бальные танцы</h3>
            <p>Европейская и латиоамериканская программа.</p>
            <br />
            <Link to={"/dances/ballroom"}><button>Детали</button></Link>
          </div>
        </div>


        <div className="section">
        <img src="https://www.banffcentre.ca/sites/default/files/styles/content_feature/public/Performing%20Arts/Dance/Dance%20Feb%202019%20Slider.jpg?itok=f-sSeU1N" alt="contemporary" />
          <div className="text-bottom">
            <h3>Контемп</h3>
            <p>Обучение от выпускников Национального Коледжа Хореографии.</p>
            <br />
            <Link to={"/dances/contemporary"}><button>Детали</button></Link>
          </div>
         
        </div>
      </div>
      </div>
    )
};

export default Dances;