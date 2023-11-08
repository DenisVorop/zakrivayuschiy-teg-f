
const cardsContainer = document.querySelector('.cards__list');
const cardTmp = document.querySelector('.cards-list-item-template');

const list = [
    {
        label: 'Фритрек и нулевой спринт: Подготовка к работе',
        tag: '</HTML>',
        image: {
            src: 'https://plus.unsplash.com/premium_photo-1699372281371-72909c172533?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'бутерброды с арахисовой пастой. вид сверху',
        },
        content: [
          'Это было самое начало пути. На этом этапе важно было проникнуться основами и настроиться на учёбу. И, возможно, подумать, как новые знания могут повлиять на ваше будущее.', 
          'Не знал об этом спринте, поэтому, собственно, и не проходил его. Только после начала обучения потыкался немного, а вскоре узнал, что он не обязателен, чему я был безмерно рад.',
        ],
        filterClass: 'filter-grayscale'
    },
    {
      label: '1 спринт: Я — чистый лист',
      tag: '</HTML>',
      image: {
        src: 'https://images.unsplash.com/photo-1699355484587-b5018a07b73e?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'ущелье, в котором течет вода',
      },
      content: [
        'На первых этапах мы работали со страхами и сомнениями, которые часто испытывают новички. Один из них — страх перед чистым листом. Это, конечно же, намного сложнее, чем боязнь куска бумаги. Часто за этим ощущением скрываются более глубокие вопросы: с чего начать? а вдруг будет слишком сложно? что, если я не справлюсь?', 
        'Прошел 5 стадий принятия пиксель перфекта. Поначалу был очень недоволен им (сейчас тоже, но уже меньше С:).',
      ],
      filterClass: 'filter-hue-rotate'
    },
    {
      label: '1 спринт: А если не получится?',
      tag: '<CSS>',
      image: {
        src: 'https://images.unsplash.com/photo-1699198489130-2e02f3726612?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'кроссовок фирмы nike, подвешенный на шнурках',
      },
      content: [
        'Первый проект — позади! Но это всё ещё самое начало пути. Радость могла быстро померкнуть и смениться ожиданием провала. Или вы, наоборот, могли вдохновиться успехами и поверить в себя.', 
        'Вот туточки я уже начал замечать, что несмотря на то, что у меня есть опыт в разработке, примитивная верстка здесь не сказать что ничего не дает. Многое освежил в памяти, что-то новое даже узнал. В общем остался доволен, но верстка подходила к горлу.',
      ],
      filterClass: 'filter-invert'
    },
    {
      label: '2 спринт: Погоня за идеалом',
      tag: '<desigions>',
      image: {
        src: 'https://images.unsplash.com/photo-1699111259969-5b4c94447c38?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'молодой олененочек. прям ути бозе мой',
      },
      content: [
        'На этом этапе вы уже достаточно разбирались в основах вёрстки, чтобы понять, как много ещё впереди. Вы могли попытаться погнаться за идеалом и понять, что он недостижим. А, может, вы вовсе и не подвержены перфекционизму и вместо того, чтобы сделать идеально, старались просто сделать.', 
        'Это было так давно и не правда, что уже позабылось, шо делалось. Но в целом, как и любой другой спринт на версточку, начинался он с Буруновским таким "сча поверстаем".',
      ],
      filterClass: 'filter-opacity'
    },
    {
      label: '2 спринт: О тех, кто рядом',
      tag: 'care',
      image: {
        src: 'https://plus.unsplash.com/premium_photo-1694714103696-25e10d1b907e?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'вьетнамский суп фо',
      },
      content: [
        'Всё это время вы были не одиноки (хотя, возможно, иногда и чувствовали, что одни против целого мира). Вас окружали одногруппники, команда сопровождения и просто близкие люди, которым можно пожаловаться, если очередной макет просто так не поддавался. Осваивать что-то новое легче, когда рядом есть единомышленники, не правда ли?', 
        'Посмотрите на красивый супчик :).',
      ],
      filterClass: 'filter-saturate'
    },
    {
      label: '3 спринт: Обходные стратегии',
      tag: '<support>',
      image: {
        src: 'https://plus.unsplash.com/premium_photo-1673422507248-9d4164c39d64?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'ракушки. вид сверху',
      },
      content: [
        'На этом курсе вы постоянно решали разные задачи. В какой-то момент вам могло показаться, что решения просто иссякли. Значит, пришло время посмотреть на задачу под другим углом.', 
        'Вот тут я начал чуть-чуть переживать, что кроме практикума больше ничего не делаю.',
      ],
      filterClass: 'filter-sepia'
    },
    {
      label: '3 спринт: Когда опускаются руки',
      tag: '<lifes-style: none;>',
      image: {
        src: 'https://images.unsplash.com/photo-1694188119956-e28ffd3cf785?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'девушка, сидящая на корточках, которую скрючило',
      },
      content: [
        'Во время учёбы часто возникает чувство, когда не знаешь, за что хвататься. Вроде и проектную пора сдавать, и задачи хочется порешать, и в теории получше разобраться, и жизнь не забыть пожить. В такие моменты очень нужна концентрация. Вспомните, откуда вы её черпали.', 
        'А здесь все переживания уже отбросил. Что толку переживать, что меня не было на паре, если есть запись.',
      ],
      filterClass: 'filter-contrast-grayscale'
    },
    {
      label: '«Сейчас я здесь»',
      tag: '<experience>',
      image: {
        src: 'https://images.unsplash.com/photo-1699014446393-a1e0f2e15336?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'мордочка песеля',
      },
      content: [
        'Сейчас вы уже очень много знаете о вёрстке. Но это только начало. Во-первых, впереди ещё много материала про «красотищу». Во-вторых, с окончанием курса учёба не заканчивается. Вёрстка — это целый мир. И этот мир постоянно меняется. Познать его полностью не получится, но это тот случай, когда важен сам процесс познания. Ведь часто путь — и есть результат.', 
        'Я уже выпил всю мартишку пока придумывал эти текста, загрузили прям.',
      ],
      filterClass: 'filter-saturate-sepia'
    },
]

function appendCards() {
  list.forEach(({ label, filterClass, tag, content: [text1, text2], image: { src, alt } }) => {
    const node = cardTmp.content.cloneNode(true);
    node.querySelector('.card__label').textContent = label;

    const image = node.querySelector('.image');
    image.setAttribute('src', `${src}`);
    image.setAttribute('alt', `${alt}`);
    image.classList.add(filterClass)

    node.querySelector('.card__tag').textContent = tag;

    const [p1, p2] = node.querySelector('.card__content').querySelectorAll('p');
    p1.textContent = text1;
    p2.textContent = text2;

    cardsContainer.append(node);
  });
}

appendCards()