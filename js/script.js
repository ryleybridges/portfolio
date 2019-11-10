const workCardInfo = [
    {
        id: 1,
        title: `BookIt Accommodation`,
        description: `Application worked on for class summative. Involved creating an application that would present relevant accommodation to a users input. All put together one index page.`,
        longDescription: `Brief for project was to create a one page site for either a transport application or an accommodation application for Tourism New Zealand. Pre-coding involved the UX Process (research, target audience, personas, concept sketches, wireframes, user testing). Full documentation explains the process of how it all came together to the final design. Using data in the brief and finding information on local accommodation in the area, I was able to put together an application that filters out relevant accommodation judging by the users input of how many nights, arrival date, how many people and where you are wanting to go.`,
        githublink: `https://github.com/ryleybridges/accommodationApp`,
        googledrivelink: `https://drive.google.com/file/d/1CgHYu3lOLPXdYNna1upWybdPzOGGmf7D/view?usp=sharing`,
        image_one: `images/accommodationapp-sketches.jpg`,
        image_one_caption: `Initial sketches - helped establish the initial layout for the different parts of the application.`,
        image_two: `images/accommodationapp-sketches2.jpg`,
        image_two_caption: `Further development on sketches - used layout established in first sketches and carried it through in these sketches`,
        image_three: `images/accommodationapp-prototype.png`,
        image_three_caption: `Development of sketch into prototype on UXPin upon finalising layout`,
        image_four: `images/accommodationapp.png`,
        image_four_caption: `Final accommodation app homepage`
    },
    {
        id: 2,
        title: `Geek Culture Store`,
        description: `Speciality customer to customer store created for a group project. Has a front end and a back end done separately. Has ability to register account, log in and add, edit and delete items.`,
        longDescription: `Brief involved working as a group to create a customer to customer speciality store. Our group of three consisted of myself, Brayden Gray and Simon Watson. Together, we chose pop culture merchandise as the theme as we all have an interest in it. Followed the UX Process and worked agile in three different sprints.`,
        githublink: `https://github.com/CyborgSemon/summative-3-front`,
        googledrivelink: `https://drive.google.com/file/d/1zMQH6ugOZhmdXgBoRqLOxYjDfiEp3blX/view?usp=sharing`,
        image_one: `images/geekculture-sketches.jpg`,
        image_one_caption: `Beginning of the sketches for layout options`,
        image_two: `images/geekculture-sketches2.jpg`,
        image_two_caption: `Further sketch work once chatting with group members`,
        image_three: `images/geekculture-prototype.png`,
        image_three_caption: `Prototype created through UXPin with ideas from other group members`,
        image_four: `images/geekculturestore.png`,
        image_four_caption: `Final website layout`
    },
    {
        id: 3,
        title: `Tawa Taekwondo Website`,
        description: `To give the Tawa Taekwondo Club an online prescence, I created a website for them as a personal project. A simplistic layout with a contact section for users to get in contact with the club.`,
        longDescription: `As a member of the Tawa Taekwondo Club, I wanted to give the club an online prescence as there is hardly any information out there on the club and no way to get properly in contact with them. The main intention of this site is to inform potential members on the club's history, what Taekwondo is and a contact form to send a message via email to a club email address.`,
        githublink: `https://github.com/ryleybridges/tawatkdwebsite`,
        googledrivelink: ``,
        image_one: ``,
        image_one_caption: ``,
        image_two: ``,
        image_two_caption: ``,
        image_three: ``,
        image_three_caption: ``,
        image_four: `images/tawatkd.png`,
        image_four_caption: `Final website layout`
    }
];

const otherProjects = [
        {
            id: 1,
            title: `Harcourts Adverts`,
            description: `Created various advertisements for Harcourts Tawa. These have been created through InDesign and Photoshop. Adverts have been featured in the Kapi-Mana newspaper and in the windows of the Harcourts Tawa office.`,
            image: ` `
        }
];

function cardThumbnails(){
    let workCardDisplay = ``;
    for (var i = 0; i < workCardInfo.length; i++) {
        workCardDisplay += `<div class="card ml-2 h-100 col-md-4" style="width: 30rem;">
                                <img src="${workCardInfo[i].image_four}" class="card-img-top" alt="${workCardInfo[i].title}">
                                    <div class="card-body">
                                        <h5 class="card-title">${workCardInfo[i].title}</h5>
                                        <p class="card-text">${workCardInfo[i].description}</p>
                                        <a href="#" class="btn btn-danger workCards" data-id="${workCardInfo[i].id}">Read More</a>
                                        <a href="${workCardInfo[i].githublink}" class="btn btn-dark" >Github</a>
                                    </div>
                                </div>`;
    }

    document.getElementById('workCards').innerHTML = workCardDisplay;

    var popUp = document.getElementsByClassName('workCards');
    for (var b = 0; b < popUp.length; b++) {
        popUp[b].onclick = function(){
            var id = parseInt(this.dataset.id);
			workCardPopUp(id);
        };
    }

}

cardThumbnails();

function workCardPopUp(workId){
    var singleWork;
    for (var y = 0; y < workCardInfo.length; y++){
		if(workCardInfo[y].id === workId){
			singleWork = workCardInfo[y];
			break;
		}
    }

    $('#workCards').click(function(){
        $('#workPopUp').modal('show');
        document.getElementById('workTitle').innerText = singleWork.title;
        document.getElementById('workImageOne').src = singleWork.image_one;
        document.getElementById('workImageTwo').src = singleWork.image_two;
        document.getElementById('workImageThree').src = singleWork.image_three;
        document.getElementById('workImageFour').src = singleWork.image_four;
        document.getElementById('workImageCaptionOne').innerText = singleWork.image_one_caption;
        document.getElementById('workImageCaptionTwo').innerText = singleWork.image_two_caption;
        document.getElementById('workImageCaptionThree').innerText = singleWork.image_three_caption;
        document.getElementById('workImageCaptionFour').innerText = singleWork.image_four_caption;
        document.getElementById('workLongDescription').innerText = singleWork.longDescription;
        document.getElementById('buttonLinks').innerHTML = (`<a href="${singleWork.googledrivelink}"><button id="doc" class="btn btn-danger">Documentation</button></a> <a href="${singleWork.githublink}"><button id="github" class="btn btn-dark">Github</button></a>`);
        if(!singleWork.googledrivelink === ``){
            $('#doc').click(function(){
                event.preventDefault();
                Swal.fire({
                    position: 'top-end',
                    text: 'There is no documentation for this project'
                });
            });
        }
    });



}
