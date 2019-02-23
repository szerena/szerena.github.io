database = firebase.database();

$('.submit-button').on('click', function(){
    let content = $('.content').val();
    let title = $('.title').val();

    const dataToSave = {
        content, title
    };

    database.ref('posts').push(dataToSave);
});

database.ref('posts').on('value', function(data){
 let posts = data.val();
 Object.values(posts).forEach(post => {
   $('.posts').append(`<h2>${post.title}</h2><div>${post.content}</div>`);
 });
});