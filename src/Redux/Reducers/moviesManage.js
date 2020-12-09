const initialState = [
    {
    img: 'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    name: 'Криминальное чтиво',
    time: '20:00-22:56',
    date: '2 December - 17 December',
    description: 
         '«Кримина́льное чти́во» (англ. Pulp Fiction) — кинофильм режиссёра Квентина Тарантино. Сюжет фильма нелинеен, как и почти во всех остальных работах Тарантино. Этот приём стал чрезвычайно популярен, породив множество подражаний во второй половине 1990-х. В фильме рассказывается несколько историй, в которых показаны ограбление кафе, философские дискуссии двух гангстеров, спасение девушки от передозировки героином и боксёр, которого задели за живое. Название является отсылкой к популярным в середине XX века в США pulp-журналам. Именно в стиле таких журналов были оформлены афиши, а позднее саундтрек, видеокассеты и DVD с фильмом.',
    id: 0
},
{
    img: 'https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg',
    name: 'Титаник',
    time: '16:30-19:55',
    date: '3 December - 18 December',
    description: 
        '«Тита́ник» (англ. Titanic) — американский фильм-катастрофа 1997 года, снятый режиссёром Джеймсом Кэмероном, в котором показана гибель легендарного лайнера «Титаник». Герои фильма, будучи представителями различных социальных слоёв, влюбились друг в друга на борту лайнера, совершавшего свой первый и последний рейс через Атлантический океан в 1912 году. Главные роли исполнили Леонардо Ди Каприо и Кейт Уинслет. Премьера фильма в США состоялась 19 декабря 1997 года. Дистрибьютором фильма в Северной Америке выступила компания «Paramount Pictures», а во всём остальном мире — «20th Century Fox». Бюджет составил 200 млн долларов США — рекордный для своего времени. «Титаник» установил рекорд, став первой картиной, преодолевшей рубеж в 1 млрд $, второй — в 2 млрд $, и самым кассовым фильмом за всю историю кинематографа, собрав в прокате во всём мире свыше 1,8 миллиардов долларов, и удерживал это достижение на протяжении 12 лет, пока оно не было побито фильмом того же режиссёра «Аватар». Помимо этого он возглавлял американский бокс-офис 15 недель, что сделало его вторым фильмом после «Инопланетянина» (1982), находившегося на этой позиции дольше всех — 16 недель.',
    id: 1
},
{
    img: 'https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_SX300.jpg',
    name: 'Зеленая миля',
    time: '13:40-16:25',
    date: '4 December - 19 December',
    description: 
         '«Зелёная ми́ля» (англ. The Green Mile) — мистическая драма по одноимённому роману Стивена Кинга. Премьера состоялась 9 декабря 1999 года. Имеет 4 номинации на «Оскар», 3 премии «Сатурн», ещё 10 наград и 23 номинации. Автор сценария и режиссёр Фрэнк Дарабонт. Съёмки фильма стартовали в июле 1998 года и продлились до декабря того же года в США, в штатах Северная Каролина и Теннесси, а также в Калифорнии — на киностудиях «Warner Brothers Studios» в Голливуде и «Warner Brothers Burbank Studios» в Бербанке. Важной составляющей фильма были костюмы персонажей, и Карин Вагнер, костюмер, с которой Дарабонт работал прежде над телевизионным фильмом Black Cat Run, выяснила, что в 1935 году в тюрьмах США, за исключением Синг-Синга, у тюремщиков не было униформы. Тем не менее, по замыслу режиссёра, зритель должен был чётко понимать, что охранники — это власть, а заключённые — узники, и Вагнер пришлось разработать униформу, основываясь частично на армейских моделях, частично на форме тюрьмы Синг-Синг.',
    id: 2,
}]
export const moviesManage = (state = initialState, action) =>{
    switch(action.type){
        case "ADD_MOVIE":
            return [...state,{
                img: action.img,
                name: action.name,
                time: action.time,
                date: action.date,
                description: action.description,
                id: action.id
            },]

        case "DELETE_ITEM":
            return state.filter((user) => user.id !==action.id)   
        default:
            return state;
            
    }
}