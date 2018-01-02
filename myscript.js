	// objekte für personen profil erstellen

		var Persons = [

				{
					name: 'John',
					surname: 'Doe',
					favoritePerformers: ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
					age: 25,
					myPhoto: 'img/image1.jpg',
					likes: 1
				},
				{
					name: 'Jane',
					surname: 'Doe',
					favoritePerformers: ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
					age: 23,
					myPhoto: 'img/image2.jpg',
					likes: 2
				},
				{
					name: 'Max',
					surname: 'Mustermann',
					favoritePerformers: ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
					age: 28,
					myPhoto: 'img/image3.jpg',
					likes: 4
				},
				{
					name: 'Maxina',
					surname: 'Mustermann',
					favoritePerformers: ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
					age: 25,
					myPhoto: 'img/image4.jpg',
					likes: 3
				},

				{
					name: 'Andrea',
					surname: 'Mustermann',
					favoritePerformers: ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
					age: 25,
					myPhoto: 'img/image4.jpg',
					likes: 3
				}
	
		];

		function createProfiles(){

			likebtns = [];

			for (var i = 0; i < Persons.length; i++) {
				
				// create profile div
				cont = document.getElementById("content");
				var persdiv = document.createElement("div");
				persdiv.setAttribute("class", "profile");
				persdiv.setAttribute("id", ("person" + i));
				cont.appendChild(persdiv);
				
				




				var left = document.createElement("div");
				left.setAttribute("class", ("left"));
				persdiv.appendChild(left);

				var right = document.createElement("div");
				right.setAttribute("class", ("right"));
				persdiv.appendChild(right);

				var likes = document.createElement("div");
				likes.setAttribute("class", ("likes"));
				persdiv.appendChild(likes);
				
				


				// add image to profile

				var prfpc = document.createElement("img");
				prfpc.setAttribute("src", Persons[i].myPhoto);
				prfpc.setAttribute("class", "persimg");
				left.appendChild(prfpc)

				// add description

				// add firstname
				
				var firstname = document.createElement("span");
				firstname.setAttribute("class", "name");

				var firstnameinhalt = document.createTextNode("Name: " + (Persons[i].name));
				firstname.appendChild(firstnameinhalt);


				right.appendChild(firstname);

				// add surname

				var surname = document.createElement("span");
				surname.setAttribute("class", "surname")

				var surnameinhalt = document.createTextNode("Surname: " + (Persons[i].surname));
				surname.appendChild(surnameinhalt);

				right.appendChild(surname);

				// add age

				var age = document.createElement("span");
				age.setAttribute("class", "age");

				var ageinhalt = document.createTextNode("Age: " + (Persons[i].age));
				age.appendChild(ageinhalt);

				right.appendChild(age);

				// add likebutton + counter

				var like = document.createElement("button");
				var likeinhalt = document.createTextNode("Like");
				like.appendChild(likeinhalt);
				like.setAttribute("id", "likebtn" + i);
				like.setAttribute("class", "likebtn" );


				likes.appendChild(like)

				likebtns += like;

				var likecount = document.createElement("span");
				likecount.setAttribute("id", "likecount" + (i));

				var likecountinhalt = document.createTextNode((Persons[i].likes));
				likecount.appendChild(likecountinhalt);

				likes.appendChild(likecount);
			}

		}

		createProfiles();
		

		for (var i = 0; i < Persons.length; i++) {
			var elem = document.getElementById("likebtn" + i);
			elem.addEventListener('click', function(){updateLikes(Number(i))});
		}

		var parEv = document.querySelector("#content");


		parEv.addEventListener('click', updateLikes, false);




		
			// var likebtn1 = document.getElementById("likebtn0");
			// likebtn1.addEventListener('click', function(){updateLikes(0)});
			
			// var likebtn2 = document.getElementById("likebtn1");
			// likebtn2.addEventListener('click', function(){updateLikes(1)});
			
			// var likebtn3 = document.getElementById("likebtn2");
			// likebtn3.addEventListener('click', function(){updateLikes(2)});
			
			// var likebtn4 = document.getElementById("likebtn3");
			// likebtn4.addEventListener('click', function(){updateLikes(3)});


			function updateLikes(e) {
				if (e.target !== e.currentTarget) {

				var clickedItem = e.target.id
				var clickedIDNR = Number(e.target.id.slice(-1));
				console.log(e);

				Persons[clickedIDNR].likes += 1;
				
				var counterupdate = document.getElementById("likecount" + clickedIDNR).innerHTML = Persons[clickedIDNR].likes;
			}
			e.stopPropagation();
			}


			


	// sortierung

			var sortLikesBtn = document.createElement("button");
				sortLikesBtn.appendChild(document.createTextNode("likes!"));
				sortLikesBtn.setAttribute('id', 'sortlikebtn');
				sortLikesBtn.setAttribute('class', 'close');
				document.getElementById("sortnav").appendChild(sortLikesBtn);

				sortLikesBtn.addEventListener('click', sortLikes);

				function sortLikes() {

					Persons.sort(function(a, b) {return b.likes-a.likes});

					while (cont.firstChild) {
							cont.innerHTML = "";}
				
						createProfiles();

						console.log(Persons);

					// json ?? 
				}

			var sortNameBtn = document.createElement("button");
				sortNameBtn.appendChild(document.createTextNode("Name"));
				sortNameBtn.setAttribute('id', 'sortnamebtn');
				sortNameBtn.setAttribute('class', 'close');
				document.getElementById("sortnav").appendChild(sortNameBtn);

				sortNameBtn.addEventListener('click', sortName);

				function sortName() {
						console.log(Persons);

					Persons.sort(function(a, b) {
						return (a.name).localeCompare(b.name);
					})

					while (cont.firstChild) {
							cont.innerHTML = "";}
				
						createProfiles();

						console.log(Persons);
				}

			var sortSurnameBtn = document.createElement("button");
				sortSurnameBtn.appendChild(document.createTextNode("Surname"));
				sortSurnameBtn.setAttribute('id', 'sortsurnamebtn');
				sortSurnameBtn.setAttribute('class', 'close');
				document.getElementById("sortnav").appendChild(sortSurnameBtn);

				sortSurnameBtn.addEventListener('click', sortSurname);

				function sortSurname() {
						console.log(Persons);

					Persons.sort(function(a, b) {
						return (a.surname).localeCompare(b.surname);
					})

					while (cont.firstChild) {
							cont.innerHTML = "";}
				
						createProfiles();

						console.log(Persons);
			}
			var sortAgeBtn = document.createElement("button");
				sortAgeBtn.appendChild(document.createTextNode("Age"));
				sortAgeBtn.setAttribute('id', 'sortagebtn');
				sortAgeBtn.setAttribute('class', 'close');
				document.getElementById("sortnav").appendChild(sortAgeBtn);

				sortAgeBtn.addEventListener('click', sortAge);

				function sortAge() {
						console.log(Persons);

					Persons.sort(function(a, b) {
						return a.age-b.age;
					})

					while (cont.firstChild) {
							cont.innerHTML = "";}
				
						createProfiles();

						console.log(Persons);
				}

	// link liste sortierung öffnen


			var arrow = document.getElementById("arrow");

			arrow.addEventListener('click', openSortlist)

				var navi = document.getElementById('sortnav');
				var navbtn = navi.getElementsByTagName('button');

				function openSortlist() {
						if (document.querySelector("#sortnav > button").className == 'open') {

							for (var i = 0; i < navbtn.length; i++) {

								navbtn[i].setAttribute("class", "close");
					 	
					 	} }

					 	else {
					 		for (var i = 0; i < navbtn.length; i++) {

								navbtn[i].setAttribute("class", "open");
					 	
					 		};
					 	};
					 }


			
	// registrierung öffnen onpage


		var reglink = document.querySelector("#register");

		reglink.addEventListener('click', regPage)


		function regPage() {

		cont.innerHTML = ""

	// add form

		var regform = document.createElement("form")

		cont.appendChild(regform);

		// sur namefield

		var surname = document.createElement("p")
		var sntxt = document.createTextNode("Surname")
		surname.appendChild(sntxt);
		regform.appendChild(surname);

		var surnamein = document.createElement("input");
		regform.appendChild(surnamein)

		// namefield

		var name = document.createElement("p")
		var nmtxt = document.createTextNode("Name")
		name.appendChild(nmtxt);
		regform.appendChild(name);

		var namein = document.createElement("input");
		regform.appendChild(namein)

		// agefield

		var age = document.createElement("p")
		var agetxt = document.createTextNode("Age")
		age.appendChild(agetxt);
		regform.appendChild(age);

		var agein = document.createElement("input");
		regform.appendChild(agein)

		// picture

		var pic = document.createElement("p")
		var pictxt = document.createTextNode("Upload Picture")
		pic.appendChild(pictxt);
		regform.appendChild(pic);

		var picturelink = document.createElement("input");
		regform.appendChild(picturelink);

		// submit button

		var submit = document.createElement("input");
		submit.setAttribute("type", "submit");

		regform.appendChild(submit);


	}