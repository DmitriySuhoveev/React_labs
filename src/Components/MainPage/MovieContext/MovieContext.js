import React, {useState, createContext} from 'react'    

 export const MovieContext = createContext();

 export  const MovieProvider = (props) =>{
    const [movies, setMovies] = useState([
        {
            name: 'Криминальное чтиво',
            price: '1000',
            rank: 2,
            description: {
                text: '«Кримина́льное чти́во» (англ. Pulp Fiction) — кинофильм режиссёра Квентина Тарантино. Сюжет фильма нелинеен, как и почти во всех остальных работах Тарантино. Этот приём стал чрезвычайно популярен, породив множество подражаний во второй половине 1990-х. В фильме рассказывается несколько историй, в которых показаны ограбление кафе, философские дискуссии двух гангстеров, спасение девушки от передозировки героином и боксёр, которого задели за живое. Название является отсылкой к популярным в середине XX века в США pulp-журналам. Именно в стиле таких журналов были оформлены афиши, а позднее саундтрек, видеокассеты и DVD с фильмом.',
                descriptionId: 0
            },
            id: 0,
        },
        {
            name: 'Титаник',
            price: '2000',
            rank: 3,
            description: {
                text: '«Тита́ник» (англ. Titanic) — американский фильм-катастрофа 1997 года, снятый режиссёром Джеймсом Кэмероном, в котором показана гибель легендарного лайнера «Титаник». Герои фильма, будучи представителями различных социальных слоёв, влюбились друг в друга на борту лайнера, совершавшего свой первый и последний рейс через Атлантический океан в 1912 году. Главные роли исполнили Леонардо Ди Каприо и Кейт Уинслет. Премьера фильма в США состоялась 19 декабря 1997 года. Дистрибьютором фильма в Северной Америке выступила компания «Paramount Pictures», а во всём остальном мире — «20th Century Fox». Бюджет составил 200 млн долларов США — рекордный для своего времени. «Титаник» установил рекорд, став первой картиной, преодолевшей рубеж в 1 млрд $, второй — в 2 млрд $, и самым кассовым фильмом за всю историю кинематографа, собрав в прокате во всём мире свыше 1,8 миллиардов долларов, и удерживал это достижение на протяжении 12 лет, пока оно не было побито фильмом того же режиссёра «Аватар». Помимо этого он возглавлял американский бокс-офис 15 недель, что сделало его вторым фильмом после «Инопланетянина» (1982), находившегося на этой позиции дольше всех — 16 недель.',
                descriptionId: 1
            },
            id: 1,
        },
        {
            name: 'Зеленая миля',
            price: '3000',
            rank: 4,
            description: {
                text: '«Зелёная ми́ля» (англ. The Green Mile) — мистическая драма по одноимённому роману Стивена Кинга. Премьера состоялась 9 декабря 1999 года. Имеет 4 номинации на «Оскар», 3 премии «Сатурн», ещё 10 наград и 23 номинации. Автор сценария и режиссёр Фрэнк Дарабонт. Съёмки фильма стартовали в июле 1998 года и продлились до декабря того же года в США, в штатах Северная Каролина и Теннесси, а также в Калифорнии — на киностудиях «Warner Brothers Studios» в Голливуде и «Warner Brothers Burbank Studios» в Бербанке. Важной составляющей фильма были костюмы персонажей, и Карин Вагнер, костюмер, с которой Дарабонт работал прежде над телевизионным фильмом Black Cat Run, выяснила, что в 1935 году в тюрьмах США, за исключением Синг-Синга, у тюремщиков не было униформы. Тем не менее, по замыслу режиссёра, зритель должен был чётко понимать, что охранники — это власть, а заключённые — узники, и Вагнер пришлось разработать униформу, основываясь частично на армейских моделях, частично на форме тюрьмы Синг-Синг.',
                descriptionId: 2
            },
            id: 2,
        }
    ]);
    

    
    return (
        <div >
            <MovieContext.Provider value ={[movies, setMovies]}>
                {props.children}
            </MovieContext.Provider>
        </div>
    )
}
