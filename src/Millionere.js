import { Component } from 'react';


class Millionere extends Component{
    constructor(){
        super();

        this.json = '[{"question":"Как заканчивается присказка: «Мы и сами с…»","answers":["с волосами","с усами","с часами","с долгами"],"level":1,"rightAnswer":2},{"question":"Как в обиходе называют растение, которое часто дарят женщинам к празднику 8 марта?","answers":["оливье","винегрет","мимоза","селёдка под шубой"],"level":2,"rightAnswer":3},{"question":"С помощью чего пасссажиры часто попадают в самолет?","answers":["рукава","воротника","лацкана","манжеты"],"level":3,"rightAnswer":1},{"question":"Как называлась песня, которую исполнял Лев Лещенко?","answers":["«Воробьиная стая»","«Соловьиная роща»","«Ласточкино гнездо»","«Воронья слободка»"],"level":4,"rightAnswer":2},{"question":"Какой клетки нет на шахматной доске?","answers":["h8","b7","k6","g5"],"level":5,"rightAnswer":3},{"question":"Что не собирают?","answers":["коллекцию","коррупцию","конструкцию","информацию"],"level":1,"rightAnswer":2},{"question":"Какая бывает лопата?","answers":["совковая","граблевая","тяпковая","мотыжная"],"level":2,"rightAnswer":1},{"question":"Как называется фильм, снятый по мотивам «Повести временных лет»?","answers":["«Варяг»","«Кореец»","«Викинг»","«Чухонец»"],"level":3,"rightAnswer":3},{"question":"На что надевают брекеты?","answers":["на пальцы","на уши","на волосы","на зубы"],"level":4,"rightAnswer":4},{"question":"Кто такой ара?","answers":["дельфин","медведь","попугай","крокодил"],"level":5,"rightAnswer":3},{"question":"На каком курсе школы Хогвартс учился Гарри Поттер, когда раскрыл секрет Тайной комнаты?","answers":["на первом","на втором","на третьем","на четвёртом"],"level":6,"rightAnswer":2},{"question":"Какой обряд перед свадьбой назывался рукобитьем?","answers":["выяснение, кто сильнее","праздник друзей жениха","одевание невесты","скрепление договора"],"level":7,"rightAnswer":4},{"question":"Какой город группа «Кар-Мэн» называла «полным риска»?","answers":["Нью-Йорк","Сан-Франциско","Лос-Анджелес","Детройт"],"level":6,"rightAnswer":2},{"question":"Из чего плели лапти, которые называли «волосяники»?","answers":["из травы","из полос кожи","из конского волоса","из льна"],"level":7,"rightAnswer":3},{"question":"Кто автор строк «Ленин — жил, Ленин — жив, Ленин — будет жить»?","answers":["Есенин","Маяковский","Сталин","Ленин"],"level":8,"rightAnswer":2},{"question":"С кем воевал заглавный герой «Слова о полку Игореве»?","answers":["с половцами","с сарматами","со скифами","с печенегами"],"level":9,"rightAnswer":1},{"question":"Чему фанаты Виктора Цоя дали прозвище «Камчатка»?","answers":["котельной","рок-клубу","коммунальной квартире","стене на Арбате"],"level":8,"rightAnswer":1},{"question":"Какой вид физических упражений получил название по имени изобретателя?","answers":["стретчинг","кроссфит","тай-бо","пилатес"],"level":9,"rightAnswer":4},{"question":"Кого можно увидеть на картине Левитана «Март»?","answers":["собаку","корову","лошадь","кошку"],"level":10,"rightAnswer":3},{"question":"Какой московский магазин некогда носил название Верхние торговые ряды?","answers":["ЦУМ","Петровский пассаж","Гостинный Двор","ГУМ"],"level":11,"rightAnswer":4},{"question":"Каким словом художник Василий Кандинский назвал несколько своих работ?","answers":["абстракция","композиция","галлюцинация","конструкция"],"level":10,"rightAnswer":2},{"question":"Какому виду спорта посвящена опера чешского композитора Мартина Смолки «Нагано»?","answers":["прыжкам с трамплина","хоккею с шайбой","биатлону","шорт-треку"],"level":11,"rightAnswer":2},{"question":"День рождения какого персонажа в Риге отмечают на улице Яуниела?","answers":["Джона Сильвера","Шерлока Холмса","Глеба Жиглова","графа Дракула"],"level":12,"rightAnswer":2},{"question":"Какая буква исчезла из русского алфавита в результате реформы Петра I?","answers":["«фита»","«ять»","«омега»","«и» десятеричное"],"level":13,"rightAnswer":3},{"question":"Какая медаль была вручена Юрию Гагарину первой после полета в космос?","answers":["«Золотая Звезда»","«За трудовую доблесть»","«За отвагу»","«За освоение целинных земель»"],"level":12,"rightAnswer":4},{"question":"Куда подевалась горошина, лежавшая под тюфяками и пуховиками принцессы, в сказке Андерсена?","answers":["сварили в супе","скормили канарейке","отдали в кунсткамеру","вставили в корону"],"level":13,"rightAnswer":3},{"question":"Как называют водителя, совершающего поездки на большие расстояния?","answers":["стрелок","бомбардир","дальнобойщик","снайпер"],"level":1,"rightAnswer":3},{"question":"Какой эффект, как говорят, производит покупка дорогой вещи?","answers":["щёлкает по барсетке","бьёт по карману","стреляет по кошельку","шлёпает по кредитке"],"level":2,"rightAnswer":2},{"question":"Как зовут поросёнка, героя популярного мультфильма?","answers":["Франтик","Финтик","Фантик","Фунтик"],"level":3,"rightAnswer":4},{"question":"Как заканчивался лозунг эпохи социализма: «Нынешнее поколение советских людей будет жить…»?","answers":["не тужить","долго и счастливо","при коммунизме","на Марсе"],"level":4,"rightAnswer":3},{"question":"На что, согласно законам физики, действует подъёмная сила?","answers":["крюк башенного крана","крыло самолёта","звонок будильника","рост производства"],"level":5,"rightAnswer":2},{"question":"Как называется склад имущества в воинской части?","answers":["жаровня","парилка","каптёрка","сушилка"],"level":6,"rightAnswer":3},{"question":"Какую часть имбиря чаще всего используют в кулинарии?","answers":["корень","листья","стебель","цветок"],"level":7,"rightAnswer":1},{"question":"Сколько миллиметров в километре?","answers":["десять тысяч","сто тысяч","миллион","десять миллионов"],"level":8,"rightAnswer":3},{"question":"Что «разгорелось» в куплетах из фильма «Весёлые ребята»?","answers":["утюг","фонарь","фитиль","папироса"],"level":9,"rightAnswer":1},{"question":"Где покоится прах американского астронома Юджина Шумейкера?","answers":["на Марсе","на Юпитере","на Луне","на Земле"],"level":10,"rightAnswer":3},{"question":"С какой болью сравнил любовь поэт Герих Гейне?","answers":["с головной","с поясничной","с зубной","с фантомной"],"level":11,"rightAnswer":3},{"question":"Какую должность при дворе царицы Тамары занимал Шота Руставели","answers":["казначей","придворный поэт","главный визирь","посол"],"level":12,"rightAnswer":1},{"question":"Куда во время чаепития обычно кладут варенье?","answers":["в розетку","в штепсель","в удлинитель","в тройник"],"level":1,"rightAnswer":1},{"question":"О чём говорят: «Ни свет ни заря»?","answers":["о потухшем костре","о раннем утре","о закончившемся фейерверке","о перегоревших пробках"],"level":2,"rightAnswer":2},{"question":"Какую карточную масть часто называют «сердечками»?","answers":["пики","трефы","червы","бубны"],"level":3,"rightAnswer":3},{"question":"Какими бывают хранилища данных в Интернете?","answers":["облачными","тучными","дождевыми","радужными"],"level":4,"rightAnswer":1},{"question":"Что стало жилищем героев известной песни «Битлз»?","answers":["синий троллейбус","жёлтая подводная лодка","зелёный поезд","последняя электричка"],"level":5,"rightAnswer":2},{"question":"Что в прошлом не использовалось для письма?","answers":["папирус","бумазея","пергамент","глиняные таблички"],"level":6,"rightAnswer":2},{"question":"Чем паук-серебрянка наполняет своё подводное гнездо?","answers":["крыльями мух","водорослями","пузырьками воздуха","жемчужинками"],"level":7,"rightAnswer":3},{"question":"Во что жидкость обычно не наливают?","answers":["в реторту","в бурдюк","в анкерок","в тубус"],"level":8,"rightAnswer":4},{"question":"Что умел делать плащ доктора Стрэнджа — героя кино и комиксов?","answers":["разговаривать","стрелять","делать хозяина невидимым","летать"],"level":9,"rightAnswer":4},{"question":"Какая из этих стихотворных форм наименьшая по количеству строк?","answers":["танка","катрен","сонет","онегинская строфа"],"level":10,"rightAnswer":2},{"question":"Кто не изображён на гербе Исландии?","answers":["гриф","дракон","бык","белый медведь"],"level":11,"rightAnswer":4},{"question":"На что надо перековывать мечи, если верить крылатому выражению?","answers":["на орала","на забрала","на лекала","на мочала"],"level":1,"rightAnswer":1},{"question":"Кто оказался засланным в фильме «Неуловимые мстители»?","answers":["пастушок","казачок","старичок","голубок"],"level":2,"rightAnswer":2},{"question":"Что можно съесть на обед?","answers":["консоме","папье-маше","пенсне","дефиле"],"level":3,"rightAnswer":1},{"question":"Как называют копию предмета старины, выполненную из современных материалов?","answers":["новобранец","новосёл","новодел","беспредел"],"level":4,"rightAnswer":3},{"question":"Как называется основополагающий труд Евклида по геометрии?","answers":["«Начала»","«Середины»","«Концы»","«Бесконечности»"],"level":5,"rightAnswer":1},{"question":"Что помогло сказочному Нильсу уничтожить серых крыс Глиммингенского замка?","answers":["скрипочка","дудочка","барабанчик","волшебная палочка"],"level":6,"rightAnswer":2},{"question":"Какие животные попали на герб Новосибирска?","answers":["волки","лоси","белки","соболя"],"level":7,"rightAnswer":4},{"question":"Что можно обнаружить у каждого зеркала-псише?","answers":["шарниры","резную позолоченную раму","светильники","гравировку на стекле"],"level":8,"rightAnswer":1},{"question":"Кто упоминается в песне Булата Окуджавы «Последний троллейбус»?","answers":["лётчики","танкисты","кавалеристы","матросы"],"level":9,"rightAnswer":4},{"question":"Кто ввёл понятие «лошадиная сила»?","answers":["Майкл Фарадей","Алессандро Вольта","Джеймс Уатт","Бенджамин Франклин"],"level":10,"rightAnswer":3},{"question":"О какой битве рассказывает памятник древнерусской литературы «Задонщина»?","answers":["Невская","Куликовская","на Калке","Ледовое побоище"],"level":11,"rightAnswer":2},{"question":"Что делает девушка у открытого окна на знаменитой картине Яна Вермеера?","answers":["машет платком","разговаривает с соседкой","читает письмо","надевает шляпку"],"level":12,"rightAnswer":3},{"question":"В каком море Нил Армстронг сделал первые шаги по лунной поверхности?","answers":["Море Изобилия","Море Ясности","Море Спокойствия","Море Влажности"],"level":13,"rightAnswer":3},{"question":"Сколько чёрных точек на надкрыльях самого многочисленного вида божьих коровок?","answers":["5","6","7","8"],"level":14,"rightAnswer":3},{"question":"Как называются линзы, которые люди надевают, чтобы лучше видеть?","answers":["дружелюбные","контактные","общительные","коммуникабельные"],"level":1,"rightAnswer":2},{"question":"Что помогает детям определить водящего в игре?","answers":["читалка","писалка","считалка","решалка"],"level":2,"rightAnswer":3},{"question":"Что, как говорят, делают финансы, когда их нет?","answers":["поют романсы","читают стансы","впадают в трансы","считают шансы"],"level":3,"rightAnswer":1},{"question":"Какая певица написала и исполнила песню «Примадонна»?","answers":["Тамара Гвердцители","Ирина Аллегрова","Алла Пугачёва","София Ротару"],"level":4,"rightAnswer":3},{"question":"Что не относится к кисломолочным продуктам?","answers":["кумыс","хаш","айран","тан"],"level":5,"rightAnswer":2},{"question":"Какой предмет считался непременным атрибутом скандинавского бога Тора?","answers":["серп","молот","топор","пила"],"level":6,"rightAnswer":2},{"question":"Куда в повести «Собачье сердце» предпочитал ходить Шариков?","answers":["в кино","в театр","в оперу","в цирк"],"level":7,"rightAnswer":4},{"question":"Кто не участвовал в экспедициях к полюсам Земли?","answers":["Роберт Скотт","Руаль Амундсен","Давид Ливингстон","Роберт Пири"],"level":8,"rightAnswer":3},{"question":"а территории какого государства находится посёлок Брич-Мулла, о котором спели Татьяна и Сергей Никитины?","answers":["Туркменистан","Грузия","Азербайджан","Узбекистан"],"level":9,"rightAnswer":4},{"question":"Какое прозвище физик Эрнест Резерфорд получил благодаря тому, что ученики издалека узнавали его по шагам и голосу?","answers":["«слон»","«динамит»","«крокодил»","«будильник»"],"level":10,"rightAnswer":3},{"question":"Где находилась фамилия Пушкина в списке 29 лицеистов, расставленных по успеваемости?","answers":["в первом десятке","во втором десятке","в третьем десятке","его в списке не было"],"level":11,"rightAnswer":3},{"question":"Какую женскую работу на Руси имели ввиду, когда говорили: «Мужу — соха, а жене — кросна»?","answers":["прядение","ткачество","трепание льна","беление полотна"],"level":12,"rightAnswer":2},{"question":"Чья звезда на голливудской Аллее Славы не вмонтирована в тротуар, а размещена на стене театра «Долби»?","answers":["Рональда Рейгана","Микки Мауса","Стивена Спилберга","Мухаммеда Али"],"level":13,"rightAnswer":4}]';
        this.game = this.getArrayGame();
        this.currentNumQuestion = 0;
        this.currentQuestion = {};
    }

    getArrayGame(){
        return JSON.parse(this.json);
    }

    rand(from, to) {
        return Math.floor(Math.random() * (to - from + 1)) + from;
    }

    getQuestion(){
        const questions = this.game.filter((item) => {
            return item.level === this.currentNumQuestion;
        })
        return questions[this.rand(0, questions.length-1)];

    }

    start(){
        this.currentNumQuestion = 0;

        document.getElementById("start").style.display="none";
        document.getElementById("hint").style.display="none";
        document.getElementById("answer1").style.display = "block";
        document.getElementById("answer2").style.display = "block";
        document.getElementById("answer3").style.display = "block";
        document.getElementById("answer4").style.display = "block";
        document.getElementById("fifty").style.display = "inline-block";
        document.getElementById("call").style.display = "inline-block";
        document.getElementById("hall").style.display = "inline-block";
        this.showNewtQuestion();

    }

    answer(answer){
        if (this.currentQuestion.rightAnswer === answer){
            this.showNewtQuestion();
        }
        else{
            document.getElementById("quest").innerHTML= "Вы неправильно ответили на вопрос!";
            document.getElementById("answer1").style.display = "none";
            document.getElementById("answer2").style.display = "none";
            document.getElementById("answer3").style.display = "none";
            document.getElementById("answer4").style.display = "none";
            document.getElementById("start").style.display="inline-block";
            document.getElementById(this.currentNumQuestion).style.backgroundColor = "#fff";
        }
    }

    showNewtQuestion(){
        for (let i = 1; i <= 4; i++){
            if (document.getElementById("answer" + i).style.display === "none"){
                document.getElementById("answer" + i).style.display = "block";
            }
        }
        document.getElementById("hint").style.display="none";
        this.currentNumQuestion++;
        this.currentQuestion = this.getQuestion();
        if (this.currentNumQuestion > 1){
            document.getElementById(this.currentNumQuestion - 1).style.backgroundColor = "#fff";
        }
        document.getElementById(this.currentNumQuestion).style.backgroundColor = "#f28a62";
        document.getElementById("quest").innerHTML= this.currentQuestion.question;
        document.getElementById("answer1").innerHTML = this.currentQuestion.answers[0];
        document.getElementById("answer2").innerHTML = this.currentQuestion.answers[1];
        document.getElementById("answer3").innerHTML = this.currentQuestion.answers[2];
        document.getElementById("answer4").innerHTML = this.currentQuestion.answers[3];
    }

    getRandomAnswer(elem){
        while(true){
            const num = this.rand(1, this.currentQuestion.answers.length);
            if (num !== this.currentQuestion.rightAnswer && num !== elem){
                return num;
            }
        }
    }

    fifty(){
        const firstElem = this.getRandomAnswer();
        document.getElementById("answer" + firstElem).style.display = "none";
        const secondElem = this.getRandomAnswer(firstElem);
        document.getElementById("answer" + secondElem).style.display = "none";
        document.getElementById("fifty").style.display = "none";
    }

    call(){
        document.getElementById("hint").style.display="block";
        document.getElementById("hint").innerHTML= "Ваш друг сказал, что правильныq ответ <span>" + this.currentQuestion.answers[this.currentQuestion.rightAnswer-1] + "</span>";
        document.getElementById("call").style.display = "none";
    }

    hall(){

        let firstAnswer, secondAnswer, thirdAnswer, forthAnswer;
        switch(this.currentQuestion.rightAnswer){
            case 1:
                firstAnswer = this.rand(50, 80);
                secondAnswer = this.rand(0, 100 - firstAnswer);
                thirdAnswer = this.rand(0, 100 - firstAnswer - secondAnswer);
                forthAnswer = 100 - firstAnswer - secondAnswer - thirdAnswer;
                break;
            case 2:
                secondAnswer = this.rand(50, 80);
                firstAnswer = this.rand(0, 100 - secondAnswer);
                thirdAnswer = this.rand(0, 100 - firstAnswer - secondAnswer);
                forthAnswer = 100 - firstAnswer - secondAnswer - thirdAnswer;
                break;
            case 3:
                thirdAnswer = this.rand(50, 80);
                firstAnswer = this.rand(0, 100 - thirdAnswer);
                secondAnswer = this.rand(0, 100 - firstAnswer - thirdAnswer);
                forthAnswer = 100 - firstAnswer - secondAnswer - thirdAnswer;
                break;
            case 4:
                forthAnswer = this.rand(50, 80);
                firstAnswer = this.rand(0, 100 - forthAnswer);
                secondAnswer = this.rand(0, 100 - firstAnswer - forthAnswer);
                thirdAnswer = 100 - firstAnswer - secondAnswer - forthAnswer;
                break;
            default :

        }

        document.getElementById("hall").style.display = "none";
        document.getElementById("hint").style.display = "block";
        document.getElementById("hint").innerHTML = this.currentQuestion.answers[0] + " : " + firstAnswer + '%, ' + this.currentQuestion.answers[1] + ' : ' + secondAnswer + "%, " + this.currentQuestion.answers[2] + ' : ' + thirdAnswer + '%, ' + this.currentQuestion.answers[3] + ' : ' + forthAnswer + "%";

    }
}

export default Millionere;