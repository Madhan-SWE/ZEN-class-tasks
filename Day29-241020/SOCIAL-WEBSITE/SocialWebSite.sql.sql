create table user_profile (id int, name varchar (20), email varchar (40),
			   avatar varchar (20), age int, gender varchar (2));

insert into user_profile values(1, "Madhankumar", "rcmadhankumar@gmail.com", "http://sampleurl.com", 24, "M");
insert into user_profile values(2, "akshaykumar", "akshaykumar@gmail.com", "http://sampleurl.com", 28, "M");
insert into user_profile values(3, "Arunkumar", "arunkumar@gmail.com", "http://sampleurl.com", 29, "M");
insert into user_profile values(4, "Rajeshkumar", "rajeshkumar@gmail.com", "http://sampleurl.com", 22, "M");
insert into user_profile values(5, "Sharadhkumar", "sharadhkumar@gmail.com", "http://sampleurl.com", 28, "M");

create table user_login_details(user_id int, email varchar(40), password varchar(40));
insert into user_login_details values(1, "rcmadhankumar@gmail.com", "rcmadhankumar@gmail.com");
insert into user_login_details values(2, "akshaykumar@gmail.com", "akshaykumar@gmail.com");
insert into user_login_details values(3, "arunkumar@gmail.com", "arunkumar@gmail.com");
insert into user_login_details values(4, "rajeshkumar@gmail.com", "rajeshkumar@gmail.com");
insert into user_login_details values(5, "sharadhkumar@gmail.com", "sharadhkumar@gmail.com");

create table profile_status(user_id int, status varchar(20));
insert into profile_status values(1, "active");
insert into profile_status values(2, "inactive");
insert into profile_status values(3, "active");
insert into profile_status values(4, "inactive");
insert into profile_status values(5, "closed");


create table friendship(user_id int, friend_id int);
insert into friendship values(1, 2);
insert into friendship values(2, 1);
insert into friendship values(1, 3);
insert into friendship values(3, 1);
insert into friendship values(2, 5);
insert into friendship values(5, 2);
insert into friendship values(1, 5);
insert into friendship values(5, 1);

create table posts(post_id int, user_id int, caption varchar(30), image_url varchar(20));
insert into posts values(1, 1, "Good morning", "http://morning.jpg");
insert into posts values(2, 1, "Chill out", "http://chillout.jpg");
insert into posts values(3, 1, "Trip to bangalore", "http://trip.jpg");
insert into posts values(4, 3, "happy ending", "http://happy.jpg");
insert into posts values(5, 5, "jolly day", "http://jolly.jpg");

create table likes(like_id int, post_id int, user_id int);
insert into likes values(1, 1, 4);
insert into likes values(2, 1, 2);
insert into likes values(3, 1, 3);
insert into likes values(4, 2, 3);
insert into likes values(5, 2, 2);

create table comments(comment_id int, post_id int, user_id int, comment varchar(50));
insert into comments values(1, 1, 2, "Awesome");
insert into comments values(2, 1, 3, "Awesome Machi");
insert into comments values(3, 1, 4, "How are you da!");
insert into comments values(4, 1, 5, "Goodmorning");
insert into comments values(5, 1, 1, "Nalla iruken");





select user_profile.name, test.name as friends_with  from user_profile inner join 
  (select * from friendship inner join 
     user_profile on 
     friendship.friend_id = user_profile.id)
     as test
  on user_profile.id=test.user_id;
  
select * from posts where user_id=5;

select * from user_profile where email like "%gmail.com%";

select * from comments where user_id=3 limit 5;

 select * from user_profile inner join user_login_details 
   on user_profile.id = user_login_details.user_id
   inner join (select * from profile_status) as status
     on status.user_id = user_profile.id;
