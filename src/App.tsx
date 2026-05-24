import "./Styles.css";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";

const services = [
  {
    title: "Стеклянные перегородки",
    text: "Премиальные перегородки для офисов, ресторанов, переговорных и частных интерьеров.",
    image: "/images/lider-glass/office-glass-partitions.jpg",
    path: "/glass-partitions",
  },
  {
    title: "Стеклянные двери",
    text: "Распашные, раздвижные и маятниковые двери из закалённого стекла.",
    image: "/images/lider-glass/glass-doors-premium.jpg",
    path: "/glass-doors",
  },
  {
    title: "Панорамное остекление",
    text: "Стеклянные системы для вилл, террас, ресторанов и объектов в Сочи.",
    image: "/images/lider-glass/panoramic-glazing-sochi.jpg",
    path: "/panoramic-glazing",
  },
  {
    title: "Перила из стекла",
    text: "Безопасные стеклянные ограждения для лестниц, балконов, террас и панорамных зон.",
    image: "/images/lider-glass/sochi-villa-glass.jpg",
    path: "/glass-railings",
  },
  {
    title: "Зеркала, которые расширяют пространство",
    text: "Зеркальные панно, интерьерные зеркала и декоративные решения для премиальных помещений.",
    image: "/images/lider-glass/luxury-office-lobby.jpg",
    path: "/mirror-solutions",
  },
];

const pages = {
  "/glass-partitions": services[0],
  "/glass-doors": services[1],
  "/panoramic-glazing": services[2],
  "/glass-railings": services[3],
  "/mirror-solutions": services[4],
};

const productPrices = {
  "Стеклянная перегородка": 18000,
  "Стеклянная дверь": 28000,
  "Панорамное остекление": 26000,
  "Перила из стекла": 22000,
  "Зеркальное панно": 16000,
};

const glassPrices = {
  "Прозрачное закалённое": 1,
  "Матовое": 1.18,
  "Графитовое": 1.28,
  "Бронзовое": 1.28,
  "Smart Glass": 2.4,
};

const profilePrices = {
  "Чёрный матовый": 1.15,
  "Серебристый": 1,
  "Скрытый профиль": 1.35,
  "Безрамная система": 1.45,
};

const montagePrices = {
  "С монтажом": 25000,
  "Без монтажа": 0,
};

const deliveryPrices = {
  "Екатеринбург → Сочи": 35000,
  "Самовывоз": 0,
  "Другой город": 45000,
};

function formatPrice(value: number) {
  return new Intl.NumberFormat("ru-RU").format(Math.round(value));
}

function Header() {
  return (
    <header className="header">
      <Link to="/" className="brandLink">
        <div className="logo">LIDER GLASS</div>
        <div className="subtitle">premium glass interiors</div>
      </Link>

      <nav className="nav">
        <Link to="/">Главная</Link>
        <a href="/#services">Услуги</a>
        <Link to="/constructor">Конструктор</Link>
        <a href="/#turnkey">Под ключ</a>
        <Link to="/contacts">Контакты</Link>
      </nav>

      <Link className="whiteBtn smallBtn" to="/contacts">
        Оставить заявку
      </Link>
    </header>
  );
}

function FinalCta() {
  return (
    <section className="section finalCta">
      <div className="container finalCtaBox">
        <span className="miniLabel">START PROJECT</span>
        <h2>Хотите увидеть решение на своём объекте?</h2>
        <p>
          Пришлите фото, размеры или описание задачи. Мы подготовим консультацию,
          предварительный расчёт и предложим вариант визуализации.
        </p>
        <Link className="whiteBtn" to="/contacts">
          Обсудить проект
        </Link>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <strong>LIDER GLASS · SOCHI</strong>
        <p>Премиальные стеклянные решения</p>
      </div>

      <div className="footerLinks">
        <a href="tel:+79000370094">+7 (900) 037-00-94</a>
        <a href="mailto:liderglass@bk.ru">liderglass@bk.ru</a>
        <a href="https://wa.me/79000370094" target="_blank" rel="noreferrer">
          WhatsApp
        </a>
      </div>
    </footer>
  );
}

function HomePage() {
  return (
    <main>
      <section className="hero">
        <Header />

        <div className="heroContent">
          <div className="heroText">
            <div className="tag">Сочи · Красная Поляна · Краснодарский край</div>

            <h1>Архитектурное стекло для премиальных помещений</h1>

            <p>
              Стеклянные перегородки, двери, ограждения, зеркала и панорамные
              системы для вилл, ресторанов, офисов и современных интерьеров.
            </p>

            <div className="buttons">
              <Link className="whiteBtn" to="/constructor">
                Собрать изделие
              </Link>

              <a className="darkBtn" href="#services">
                Смотреть услуги
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section white" id="services">
        <div className="container">
          <div className="sectionTitle">
            <span>SERVICES</span>
            <h2>Услуги Lider Glass</h2>
          </div>

          <div className="cards">
            {services.map((item) => (
              <Link className="card lightCard serviceLink" to={item.path} key={item.title}>
                <img src={item.image} alt={item.title} />
                <div className="cardBody">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <div className="moreLink">Подробнее →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark" id="constructor">
        <div className="container">
          <div className="sectionTitle">
            <span>CONSTRUCTOR</span>
            <h2>Онлайн-конструктор стеклянных изделий</h2>
          </div>

          <div className="ctaBox">
            <p>
              Выберите тип изделия, стекло, профиль, размеры, монтаж и доставку.
              Сайт рассчитает предварительную стоимость, а затем вы сможете
              отправить заявку менеджеру.
            </p>

            <Link className="whiteBtn" to="/constructor">
              Открыть конструктор
            </Link>
          </div>
        </div>
      </section>

      <section className="section white" id="turnkey">
        <div className="container">
          <div className="sectionTitle">
            <span>TURNKEY</span>
            <h2>Изготовление, доставка и монтаж под ключ</h2>
          </div>

          <div className="cards">
            <article className="card lightCard">
              <img src="/images/lider-glass/glass-production-factory.jpg" alt="Производство" />
              <div className="cardBody">
                <h3>Технология изготовления</h3>
                <p>Проектируем и изготавливаем конструкции по индивидуальным размерам.</p>
              </div>
            </article>

            <article className="card lightCard">
              <img src="/images/lider-glass/delivery-ekaterinburg-sochi.jpg" alt="Доставка" />
              <div className="cardBody">
                <h3>Доставка Екатеринбург → Сочи</h3>
                <p>Организуем безопасную доставку стеклянных изделий транспортной компанией.</p>
              </div>
            </article>

            <article className="card lightCard">
              <img src="/images/lider-glass/glass-installation-premium.jpg" alt="Монтаж" />
              <div className="cardBody">
                <h3>Монтаж под ключ</h3>
                <p>Выполняем аккуратный монтаж с контролем геометрии и финального вида.</p>
              </div>
            </article>

            <article className="card lightCard">
              <img src="/images/lider-glass/3d-glass-visualization.jpg" alt="Визуализация" />
              <div className="cardBody">
                <h3>Визуализация проекта</h3>
                <p>Показываем будущий результат ещё до начала производства.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <FinalCta />
      <Footer />
    </main>
  );
}

function ConstructorPage() {
  const [product, setProduct] = useState("Стеклянная перегородка");
  const [glass, setGlass] = useState("Прозрачное закалённое");
  const [profile, setProfile] = useState("Чёрный матовый");
  const [width, setWidth] = useState("3000");
  const [height, setHeight] = useState("2500");
  const [montage, setMontage] = useState("С монтажом");
  const [delivery, setDelivery] = useState("Екатеринбург → Сочи");

  const price = useMemo(() => {
    const widthMeters = Number(width) / 1000 || 0;
    const heightMeters = Number(height) / 1000 || 0;
    const area = Math.max(widthMeters * heightMeters, 1);

    const base =
      productPrices[product as keyof typeof productPrices] * area;

    const glassMultiplier =
      glassPrices[glass as keyof typeof glassPrices];

    const profileMultiplier =
      profilePrices[profile as keyof typeof profilePrices];

    const montageCost =
      montagePrices[montage as keyof typeof montagePrices];

    const deliveryCost =
      deliveryPrices[delivery as keyof typeof deliveryPrices];

    return base * glassMultiplier * profileMultiplier + montageCost + deliveryCost;
  }, [product, glass, profile, width, height, montage, delivery]);

  return (
    <main>
      <section className="pageHero constructorHero">
        <Header />

        <div className="pageHeroContent">
          <div className="tag">ONLINE CONSTRUCTOR</div>
          <h1>Соберите стеклянное изделие под заказ</h1>
          <p>Выберите параметры изделия и получите предварительный расчёт стоимости.</p>
        </div>
      </section>

      <section className="section white">
        <div className="container constructorGrid">
          <div className="constructorPanel">
            <h2>Параметры изделия</h2>

            <label>
              Тип изделия
              <select value={product} onChange={(e) => setProduct(e.target.value)}>
                <option>Стеклянная перегородка</option>
                <option>Стеклянная дверь</option>
                <option>Панорамное остекление</option>
                <option>Перила из стекла</option>
                <option>Зеркальное панно</option>
              </select>
            </label>

            <label>
              Тип стекла
              <select value={glass} onChange={(e) => setGlass(e.target.value)}>
                <option>Прозрачное закалённое</option>
                <option>Матовое</option>
                <option>Графитовое</option>
                <option>Бронзовое</option>
                <option>Smart Glass</option>
              </select>
            </label>

            <label>
              Профиль
              <select value={profile} onChange={(e) => setProfile(e.target.value)}>
                <option>Чёрный матовый</option>
                <option>Серебристый</option>
                <option>Скрытый профиль</option>
                <option>Безрамная система</option>
              </select>
            </label>

            <label>
              Ширина, мм
              <input
                type="number"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                placeholder="Например: 3000"
              />
            </label>

            <label>
              Высота, мм
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="Например: 2500"
              />
            </label>

            <label>
              Монтаж
              <select value={montage} onChange={(e) => setMontage(e.target.value)}>
                <option>С монтажом</option>
                <option>Без монтажа</option>
              </select>
            </label>

            <label>
              Доставка
              <select value={delivery} onChange={(e) => setDelivery(e.target.value)}>
                <option>Екатеринбург → Сочи</option>
                <option>Самовывоз</option>
                <option>Другой город</option>
              </select>
            </label>
          </div>

          <div className="constructorSummary">
            <span className="miniLabel darkLabel">PRELIMINARY PRICE</span>
            <h2>Предварительный расчёт</h2>

            <div className="priceBox">от {formatPrice(price)} ₽</div>

            <p>
              Стоимость является ориентировочной. Финальный расчёт зависит от
              точных размеров, типа стекла, фурнитуры, сложности монтажа и логистики.
            </p>

            <div className="detailList">
              <div className="detailItem">Изделие: {product}</div>
              <div className="detailItem">Стекло: {glass}</div>
              <div className="detailItem">Профиль: {profile}</div>
              <div className="detailItem">Размер: {width || 0} × {height || 0} мм</div>
              <div className="detailItem">Монтаж: {montage}</div>
              <div className="detailItem">Доставка: {delivery}</div>
            </div>

            <Link className="whiteBtn" to="/constructor/client">
              Отправить менеджеру
            </Link>
          </div>
        </div>
      </section>

      <FinalCta />
      <Footer />
    </main>
  );
}

function ConstructorClientPage() {
  return (
    <main>
      <section className="pageHero contactPageHero">
        <Header />

        <div className="pageHeroContent">
          <div className="tag">CLIENT DATA</div>
          <h1>Контактные данные</h1>
          <p>Оставьте имя и телефон, чтобы менеджер связался с вами и уточнил детали.</p>
        </div>
      </section>

      <section className="section contact">
        <div className="container contactBox">
          <div>
            <span className="miniLabel">REQUEST</span>
            <h2 className="contactTitle">Отправить расчёт менеджеру</h2>
            <p className="contactText">
              После отправки заявки менеджер сможет уточнить размеры, тип стекла,
              фурнитуру, сроки изготовления, доставку и монтаж.
            </p>
          </div>

          <form className="form">
            <input placeholder="Ваше имя" />
            <input placeholder="Телефон" />
            <textarea placeholder="Комментарий к заказу" />
            <button className="whiteBtn" type="button">
              Отправить заявку
            </button>
          </form>
        </div>
      </section>

      <FinalCta />
      <Footer />
    </main>
  );
}

function ServicePage({ type }: { type: keyof typeof pages }) {
  const data = pages[type];
  const navigate = useNavigate();

  return (
    <main>
      <section
        className="pageHero"
        style={{
          backgroundImage: `linear-gradient(90deg,rgba(0,0,0,.9),rgba(0,0,0,.45)), url(${data.image})`,
        }}
      >
        <Header />

        <div className="pageHeroContent">
          <button className="backBtn" onClick={() => navigate("/")}>
            ← На главную
          </button>

          <div className="tag">LIDER GLASS SOCHI</div>
          <h1>{data.title}</h1>
          <p>{data.text}</p>
        </div>
      </section>

      <section className="section white">
        <div className="container">
          <div className="sectionTitle">
            <span>DETAILS</span>
            <h2>Подробнее об услуге</h2>
          </div>

          <p className="detailText">
            Мы подбираем стеклянное решение под объект, интерьер, сценарий
            использования и визуальный стиль пространства. Каждая конструкция
            проектируется индивидуально.
          </p>

          <Link className="whiteBtn" to="/contacts">
            Получить расчёт
          </Link>
        </div>
      </section>

      <FinalCta />
      <Footer />
    </main>
  );
}

function ContactsPage() {
  return (
    <main>
      <section className="pageHero contactPageHero">
        <Header />

        <div className="pageHeroContent">
          <div className="tag">CONTACT</div>
          <h1>Обсудим ваш проект?</h1>
          <p>Оставьте заявку, и мы подготовим консультацию и расчёт.</p>
        </div>
      </section>

      <section className="section contact" id="contacts">
        <div className="container contactBox">
          <div>
            <span className="miniLabel">CONTACT</span>
            <h2 className="contactTitle">Связаться с LIDER GLASS</h2>

            <p className="contactText">
              Работаем с объектами в Сочи, Красной Поляне и Краснодарском крае.
            </p>

            <div className="contactLinks">
              <a href="tel:+79000370094">+7 (900) 037-00-94</a>
              <a href="mailto:liderglass@bk.ru">liderglass@bk.ru</a>
              <a href="https://wa.me/79000370094" target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </div>
          </div>

          <form className="form">
            <input placeholder="Ваше имя" />
            <input placeholder="Телефон" />
            <textarea placeholder="Кратко опишите задачу" />
            <button className="whiteBtn" type="button">
              Получить расчёт
            </button>
          </form>
        </div>
      </section>

      <FinalCta />
      <Footer />
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/constructor" element={<ConstructorPage />} />
        <Route path="/constructor/client" element={<ConstructorClientPage />} />
        <Route path="/glass-partitions" element={<ServicePage type="/glass-partitions" />} />
        <Route path="/glass-doors" element={<ServicePage type="/glass-doors" />} />
        <Route path="/panoramic-glazing" element={<ServicePage type="/panoramic-glazing" />} />
        <Route path="/glass-railings" element={<ServicePage type="/glass-railings" />} />
        <Route path="/mirror-solutions" element={<ServicePage type="/mirror-solutions" />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
