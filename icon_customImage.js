ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [53.56969396504157,26.351881722333125],
            zoom: 16
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '',
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }),

        myPlacemark1 = new ymaps.Placemark([53.57053696183328,26.361215809704934], {
            hintContent: 'Стоянка № 1',
           
            balloonContent: 'Здесь были найдены различные приспособления труда первоначальных общин славян-индоевропейцев, который от кочующе-животноводческого типа жизни постепенно перешли к оседлому, к обработке земли, огородничеству и земледелию.  Данные археологические объекты внесены в охраняемые зоны историко-культурных ценностей',
            iconContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'ball.png',
            // Размеры метки.
            iconImageSize: [70, 100],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });
        myPlacemarkWithContent = new ymaps.Placemark([53.5687487667421,26.34666750800816], {
            hintContent: 'Бюст герою СССР Царюку В.З',
           
            balloonContent: 'Среди организаторов и руководителей антифашистского подполья и партизанского движения на территории Беларуси почетное место принадлежит нашему земляку Герою Советского Союза Владимиру Царюку. В память о славном земляке в агрогородке Еремичи установлен бюст Героя Советского Союза ',
            iconContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'bust.png',
            // Размеры метки.
            iconImageSize: [60, 100],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });
    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemark1)
        .add(myPlacemarkWithContent);
       
        
});
