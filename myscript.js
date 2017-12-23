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
					age: 25,
					myPhoto: 'img/image2.jpg',
					likes: 2
				},
				{
					name: 'Max',
					surname: 'Mustermann',
					favoritePerformers: ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
					age: 25,
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
				}
		];


		for (var i = 0; i < Persons.length; i++) {
			
			// create profile div

			var persdiv = document.createElement("div");
			persdiv.setAttribute("class", "profile");
			persdiv.setAttribute("id", ("person" + i));
			document.getElementById("content").appendChild(persdiv);


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

			var likecount = document.createElement("span");
			likecount.setAttribute("id", "likecount" + (i));

			var likecountinhalt = document.createTextNode((Persons[i].likes));
			likecount.appendChild(likecountinhalt);

			likes.appendChild(likecount);


			

		}


			var likebtn1 = document.getElementById("likebtn0");
			likebtn1.addEventListener('click', function(){updateLikes(0)});
			
			var likebtn2 = document.getElementById("likebtn1");
			likebtn2.addEventListener('click', function(){updateLikes(1)});
			
			var likebtn3 = document.getElementById("likebtn2");
			likebtn3.addEventListener('click', function(){updateLikes(2)});
			
			var likebtn4 = document.getElementById("likebtn3");
			likebtn4.addEventListener('click', function(){updateLikes(3)});


			function updateLikes(x) {
				Persons[x].likes += 1;
				var counterupdate = document.getElementById("likecount" + x).innerHTML = Persons[x].likes;
			}