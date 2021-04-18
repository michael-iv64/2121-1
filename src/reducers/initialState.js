export const initialState = {
person :[
    {
        id:1,
        size: 100,
        name: 'Good Boy',
        velocity :5,
        img:1,
        x:500,
        y: 600,
        selected: false,
        move: false,
        active: false,
        item : [{
            pants: null,
            jacket: null,
        }
        ],
        digitalKnowladge: [
            {
                security: 0,
                understanding : 0,
                using: 0,

            }
        ]
    },
    {
        id:2,
        size: 100,
        name: 'Gangster',
        velocity :10,
        img:2,
        x:100,
        y: 300,
        selected: false,
        move: false,
        active: false,
        item : [{
            pants: null,
            jacket: null,
        }
        ],
        digitalKnowladge: [
            {
                security: 0,
                understanding : 0,
                using: 0,

            }
        ]
    },
    {
        id:3,
        size: 100,
        name: 'Rob',
        velocity :4,
        img:3,
        x:900,
        y: 500,
        selected: false,
        move: false,
        active: false,
        item : [{
            pants: null,
            jacket: null,
        }
        ],
        digitalKnowladge: [
            {
                security: 0,
                understanding : 0,
                using: 0,

            }
        ]
    },
],
worldObjects :[
    {
        id:1,
        size: 200,
        name: 'Bankomat',
        velocity :0,
    },
    {
        id:2,
        size: 100,
        name: 'automobile',
        velocity :20,
    },
    {
        id:3,
        size: 100,
        name: 'Tree',
        velocity :0,
    },
],
knowledge :[
    {
        type: 'seсurity',
        id: 1,
        points: 0,
        questions: [
            {question:'Персональные данные это ?',id: 1,
            answers:[
             {data :'Данные паспорта', points : 0, id :1},
             {data :'ИНН', points : 0, id :2},
             {data :'СНИЛС', points : 0, id :3},
             {data :'Медицинский полис', points : 0, id :4},
             {data :'Св-во о заключении брака', points : 0, id :5},
             {data :'Все ответы верны', points : 1, id : 6},
            //  {data :' ', points : 0, id :1},
            //  {data :' ', points : 0},
            //  {data :' ', points : 0},
            //  {data :' ', points : 0},
            //  {data :' ', points : 0},
            //  {data :' ', points : 0},
            //  {data :' ', points : 0},
            //  {data :' ', points : 0},
            //  {data :' ', points : 0},
            //  {data :' ', points : 0},
            //  {data :' ', points : 0},
            ]},
            {question:'Что относится к биометрическим персональным данным?',id: 2,
            answers:[
                {data :'отпечатки пальцев', points : 0},
                {data :'отпечатки ладони', points : 0},
                {data :'образец голоса', points : 0},
                {data :'распознавание лица', points : 0},
                {data :'все ответы верны', points : 1},
            ]},
            {question:'Защиту авторских прав регулируют:',id: 3,
            answers:[
                {data :'ГК РФ', points : 0},
                {data :'ФЗ об информации', points : 0},
                {data :'Бернская конвенция', points : 0},
                {data :'Все ответы верны', points : 1},
            ]},
            {question:'CVV2/CVC2-код банковской карты нужен для:',id: 4,
            answers:[
                {data :'Онлайн покупки', points : 1},
                {data :'Смс банк', points : 0},
                {data :'Офлайн покупки', points : 0},
                {data :'Работа с техподдержкой', points : 0},
            ]},
            {question:'Что такое cookies (куки)?',id: 5,
            answers:[
                {data :'Отслеживание активности ', points : 1},
                {data :'Защита от вирусов', points : 0},
                {data :'Виртуальный помощник сайта', points : 0},
                {data :'Все ответы верны', points : 0},
            ]},
            {question:'Самый защищенный от чужих просмотров формат файлов',id: 5,
            answers:[
                {data :'.pdf', points : 0},
                {data :'.doc', points : 0},
                {data :'Zip-архив с паролем', points : 1},
                {data :'Все ответы верны', points : 0},
            ]},
            {question:'Универсальный формат текстового документа для цифровых сервисов?',id: 5,
            answers:[
                {data :'.txt', points : 1},
                {data :'.pages', points : 0},
                {data :'docx', points : 0},
                {data :'.pptx', points : 0},
            ]},
            {question:'Цифровая этика это',id: 5,
            answers:[
                {data :'Нормы общения в соц сетях ', points : 0},
                {data :'Взаимодействие с искусственным интеллектом', points : 0},
                {data :'Правила ведения цифровых профилей', points : 0},
                {data :'Все выше перечисленное', points : 1},
            ]},
            {question:'Способы защиты данных',id: 5,
            answers:[
                {data :'Резервное копирование ', points : 0},
                {data :'Установка надёжного ПО', points : 0},
                {data :'Аутентификация и идентификация', points : 0},
                {data :'Все ответы верны', points : 1},
            ]},
            {question:'Создать учетную запись на сайте gosuslugi.ru можно с',id: 5,
            answers:[
                {data :'14 лет ', points : 1},
                {data :'18 лет', points : 0},
                {data :'с рождения', points : 0},
                {data :'Все ответы верны', points : 0},
            ]},
        ]
    },
    {
        type: 'soft',
        id: 2,
        points: 0,
        questions: [
            {question:'сверху?',id: 1,
            answers:[
             {data :'небо', points : 1},
             {data :'земля', points : 0},
             {data :'вода', points : 0},
            ]},
            {question:'жидкая ?',id: 2,
            answers:[
                {data :'небо', points : 0},
                {data :'земля', points : 0},
                {daya :'вода', points : 1},
            ]},
            {question:'твердая ?',id: 3,
            answers:[
                {data :'небо', points : 0},
                {data :'земля', points : 1},
                {daya :'вода', points : 0},
            ]},
        ]
    },
    
]


}