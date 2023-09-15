let users =[]

let inputName = document.querySelector('.inputName')
let author = document.querySelector('.author')
let text = document.querySelector('.text')
let date = document.querySelector('.date')
let button = document.querySelector('.button')
let usersPlace = document.querySelector('.user')

function showUsers (){
    usersPlace.innerHTML = ''
        users.forEach(element =>{
            usersPlace.innerHTML+= `
            <div class="user">
            <h3 class = "name">${element.name}</h3>
            <p class ="subtitle">${element.author}</p>
            <p class ="text">${element.text}</p>
            <p>${element.date}</p>
            </div>
            <style>
            .user{
                .news_content{
                    border: 1px solid #c0c0c0;
                    border-radius: 15px;
                    width: 559px;
                    height: auto;
                    padding: 20px;
                }
            }
            </style>
            `
        })
}

function addUser(){
    let object = {
        name:inputName.value,
        author:author.value,
        text:text.value,
        date:date.value,
    }
    users.push(object)
    console.log(users)
    inputName.value = ''
    author.value = ''
    text.value = ''
    date.value = ''

    showUsers()
}

button.addEventListener('click', addUser)

// let users = [
//     {
//         id : 1,
//         name : 'Novost 1',
//         author : 'Hector',
//         date : '01.03.1909',
//         text : 'лорем ипсум чета там эщкеряяяяяяяяяяяяяяяяяяяяяяяяяяя'
//     },
//     {
//         id : 2,
//         name : 'Novost 2',
//         author : 'Victor',
//         date : '01.03.1909',
//         text : 'лорем ипсум чета там эщкеряяяяяяяяяяяяяяяяяяяяяяяяяяя'
//     },
//     {
//         id : 3,
//         name : 'Novost 3',
//         author : 'Dirka',
//         date : '01.03.1909',
//         text : 'лорем ипсум чета там эщкеряяяяяяяяяяяяяяяяяяяяяяяяяяя'
//     },
//     {
//         id : 4,
//         name : 'Novost 4',
//         author : 'Pipka',
//         date : '01.03.1909',
//         text : 'лорем ипсум чета там эщкеряяяяяяяяяяяяяяяяяяяяяяяяяяя'
//     },
//     {
//         id : 5,
//         name : 'Novost 5',
//         author : 'Siska',
//         date : '01.03.1909',
//         text : 'лорем ипсум чета там эщкеряяяяяяяяяяяяяяяяяяяяяяяяяяя'
//     },
// ]
// let box_content = '<div class = "news_content"></div>';
// let box = document.querySelector('.news-list');

// for (let i = 0; users.length; i++){
//     box.insertAdjacentHTML('beforeend',
//     '<div class="news_content"><div class="content-title"><h1 class="name">'+users[i]['name']+'</h1> <p class="text">'+users[i]['date']+'</p></div> <div class="content-text">'+users[i]['text']+'</div> <div class="content-footer"><p class="subtitle">'+users[i]['author']+'</p><p class="id"> Id:'+users[i]['id']+'</p></div></div>');
// }
