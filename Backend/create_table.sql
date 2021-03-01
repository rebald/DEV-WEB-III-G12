/*
	Foreign key à vérifier
	table des like et image non reliée
*/


create table USER ( userId 		Int		not null,
					NAME		varchar(25)		not null,
					SURNAME		varchar(25)		not null,
					MAIL 		varchar(50)	not null,
					PASSWORD 	varchar(50)	not null, 
				CONSTRAINT pk_user primary key (userId));

create table LIKE ( likeId 		Int		not null,
					imgId 		Int		not null,
					userId 		Int		not null,
				CONSTRAINT pk_like primary key (likeId));

create table COMMENT ( 	comId 		Int		not null,
						imgId 		Int		not null,
						userId 		Int		not null,
						content		varchar(500) 	not null,
					CONSTRAINT pk_comment primary key (comId));

create table TAG ( 	tagId 	Int			not null,
					tagName 	varchar(25)	not null,
				CONSTRAINT pk_tag primary key (tagId));

create table IMAGE ( 	imgId 		Int		not null,
						userId 		Int		not null,
						tagId 		Int		not null,
						likeNb		Int		not null,
						title		varchar(50)		not null,
						description	varchar(500)	not null,
						MAIL 		varchar(50)	not null,
						PASSWORD 	varchar(50)	not null, 
					CONSTRAINT pk_image primary key (imgId),
					CONSTRAINT fk_image_user FOREIGN KEY (userId) REFERENCES USER,
					CONSTRAINT fk_image_comment FOREIGN KEY (comId) REFERENCES COMMENT,
					CONSTRAINT fk_image_tag FOREIGN KEY (tagId) REFERENCES TAG);