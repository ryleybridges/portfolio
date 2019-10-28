const workCardInfo = [
    {
        id: 1,
        title: `BookIt Accommodation`,
        description: `Application worked on for class summative. Involved creating an application that would present relevant accommodation to a users input.`,
        githublink: `https://github.com/ryleybridges/accommodationApp`,
        image: `images/accommodationapp.png`
    },
    {
        id: 2,
        title: `Goldie Milk Bar & Eatery`,
        description: `Table ordering system for class project. Created for the Wellington restaurant Goldie Milk Bar & Eatery.`,
        githublink: `https://github.com/ryleybridges/summativeux`,
        image: `images/goldie.png`
    },
    {
        id: 3,
        title: `Geek Culture Store`,
        description: `Speciality costumer to costumer store created for a group project. Has a front end and a back end done separately. Has ability to register account, log in and add, edit and delete items.`,
        githublink: `https://github.com/CyborgSemon/summative-3-front`,
        image: `images/geekculturestore.png`
    },
    {
        id: 4,
        title: `Tawa Taekwondo Website`,
        description: `Website created for the Tawa Taekwondo Club to give them an online prescence. Allows for users to get in contact with the club. Work in progress.`,
        githublink: `https://github.com/ryleybridges/tawatkdwebsite`,
        image: `images/tawatkd.png`
    }
];

let workCardDisplay;
for (var i = 0; i < workCardInfo.length; i++) {

    workCardDisplay += `<div class="card ml-2" style="width: 25rem;">
                            <img src="${workCardInfo[i].image}" class="card-img-top" alt="${workCardInfo[i].title}">
                                <div class="card-body">
                                    <h5 class="card-title">${workCardInfo[i].title}</h5>
                                    <p class="card-text">${workCardInfo[i].description}</p>
                                    <a href="${workCardInfo[i].githublink}" class="btn btn-dark">Github Repository</a>
                                </div>
                            </div>`;


}

document.getElementById('workCards').innerHTML = workCardDisplay;
