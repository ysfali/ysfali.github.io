var bio = {
    "name":"Mohammad Yusuf Ali",
    "role":"Front-end Ninja",
    "age":"21 years",
    "welcomeMessage":"Inspired by technology , I am an individual who is keen to innovate and learn different technologies to contribute to a fluidic user experience and optimised applications that cater to the needs of people on a large scale.",
    "picture":"images/yusuf.jpg",
    "location":"New Delhi,India"
}

var contacts={
    "mobile":"+91-8800977296",
    "email":"myusufali2015@gmail.com",
    "github":"ysfali",
    "twitter":"Yusuf Ali"
}


var abilities={
    "skills":[
        {
            "name":"C",
            "knowledge":5
        },
        {
            "name":"C++",
            "knowledge":3
        },
        {
            "name":"Python",
            "knowledge":2
        },
        {
            "name":"CSS(3)",
            "knowledge":4
        },
        {
            "name":"HTML(5)",
            "knowledge":4
        },
        {
            "name":"Command Line",
            "knowledge":4
        },
        {
            "name":"JSON",
            "knowledge":3
        },
        {
            "name":"PHP",
            "knowledge":4
        },
        {
            "name":"Bootstrap Framework",
            "knowledge":5
        },
        {
            "name":"JavaScript",
            "knowledge":4
        },
        {
            "name":"jQuery",
            "knowledge":4
        },
        {
            "name":"Java",
            "knowledge":2
        },
        {
            "name":"MySQL",
            "knowledge":4
        }
    ],
    "tools":[
        {
            "name":"Mozilla Firefox",
            "knowledge":4
        },
        {
            "name":"Google Chrome",
            "knowledge":4
        },
        {
            "name":"Git",
            "knowledge":1
        },
        {
            "name":"WAMP",
            "knowledge":4
        },
        {
            "name":"Ubuntu",
            "knowledge":3
        },
        {
            "name":"Windows",
            "knowledge":5
        },
        {
            "name":"Sublime Text",
            "knowledge":4
        },
        {
            "name":"MS Office",
            "knowledge":4
        },
        {
            "name":"Mac",
            "knowledge":3
        },
        {
            "name":"Adobe Photoshop",
            "knowledge":3
        }
    ]
}

var education={
    "schools":[
        {
            "name":"Dr. Virendra Swarup Memorial Public School",
            "city":"Kanpur,India",
            "degree":"High School",
            "year":2010,
            "url":"http://example.com",
            "grade":"88%"
        },
        {
            "name":"Dr. Virendra Swarup Memorial Public School",
            "city":"Kanpur,India",
            "degree":"Intermediate",
            "year":2012,
            "url":"http://example.com",
            "grade":"93%"
        },
        {
            "name":"Jamia Millia Islamia",
            "city":"New Delhi,India",
            "degree":"Bachelor of Technology(Computer Engineering) 1st Semester",
            "year":2013,
            "url":"http://jmi.ac.in",
            "grade":"9.45"
        },
        {
            "name":"Jamia Millia Islamia",
            "city":"New Delhi,India",
            "degree":"Bachelor of Technology(Computer Engineering) 2nd Semester",
            "year":2014,
            "url":"http://jmi.ac.in",
            "grade":"9.27"
        },
        {
            "name":"Jamia Millia Islamia",
            "city":"New Delhi,India",
            "degree":"Bachelor of Technology(Computer Engineering) 3rd Semester",
            "year":2014,
            "url":"http://jmi.ac.in",
            "grade":"10"
        },
        {
            "name":"Jamia Millia Islamia",
            "city":"New Delhi,India",
            "degree":"Bachelor of Technology(Computer Engineering) 4rth Semester",
            "year":2015,
            "url":"http://jmi.ac.in",
            "grade":"9.63"
        }
    ]   ,
    "onlineCourses":[
        {
            "title":"JavaScript",
            "school":"Udacity",
            "year":2015,
            "url":"http://udacity.com"
        },
        {
            "title":"JavaScript",
            "school":"Udacity",
            "year":2015,
            "url":"http://udacity.com"
        }
    ]
}
var work={
    "jobs":[
        {
            "employer":"HCL",
            "title":"Software Engg",
            "dates":"Mar 2010-Aug 2012",
            "location":"Paris",       
            "description":"Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum "
        },
        {
            "employer":"Infosys",
            "title":"Senior Engg",
            "dates":"Aug 2012-Oct 2014",
            "location":"Bangalore,India",
            "description":"Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum "
        },
        {
            "employer":"Sapient",
            "title":"Manager",
            "dates":"Oct 2014-Present",
            "location":"California",
            "description":"Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum "
        }
    ]
}

var projects = {
    "projects":[
        {
            "title":"Weather Scraper",
            "dates":"2015",
            "description":"Weather forcasting",
            "image":"images/weather.jpg",
            "url":"http://217.199.187.199/claystick.com/php/weather/index.php"
        },
        {
            "title":"Secret Diary",
            "dates":"2015",
            "description":"An online Personal Diary that goes whereever you go",
            "image":"images/diary.jpg",
            "url":"http://217.199.187.199/claystick.com/secretdiary/index.php"
        },
        {
            "title":"Inventory Management System",
            "dates":"2015",
            "description":"An online Inventory Management System of an Enterprise",
            "image":"images/Inventory1.png",
            "url":""
        }
    ]
}

//Adding name to parallax image
var formattedStartName=HTMLstartName.replace("%data%",bio.name);
$("#start").prepend(HTMLstartMessage);
$("#start").prepend(formattedStartName);


//Adding Bio
bio.display=function(){
    if(bio.name!="" && bio.role!="" && bio.picture!="" && bio.location!="" && bio.welcomeMessage!="" && bio.age)
    {
        var formattedName=HTMLname.replace("%data%",bio.name);
        var formattedRole=HTMLheaderRole.replace("%data%",bio.role);
        var formattedPic=HTMLbioPic.replace("%data%",bio.picture);
        var formattedLocation=HTMLlocation.replace("%data%",bio.location);
        var formattedWelcomeMsg=HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
        var formattedAge=HTMLage.replace("%data%",bio.age);
        $("#profile").prepend(formattedRole);
        $("#details").append(formattedWelcomeMsg);
        $("#details").append(formattedPic);
        $("#details").append(HTMLdetails);
        $("#extra").append(formattedName);
        $("#extra").append(formattedAge);
        $("#extra").append(formattedLocation);
        $("#profile").prepend(HTMLheaderName);
        //$("#main").append(internationalizeButton);
    }
}

bio.display();

contacts.display=function(){
    if(contacts.mobile && contacts.email && contacts.github && contacts.twitter)
        {
        $("#profile").append(HTMLcontactsStart);
        if(contacts.mobile)
        {
            var formattedMobile=HTMLcontactsMobile.replace("%data%",contacts.mobile);
            $("#contact-entry").append(formattedMobile);
        }
        if(contacts.email)
        {
            var formattedEmail=HTMLcontactsEmail.replace("%data%",contacts.email);
            $("#contact-entry").append(formattedEmail);
        }
        if(contacts.github)
        {
            var formattedGithub=HTMLcontactsGithub.replace("%data%",contacts.github);
            $("#contact-entry").append(formattedGithub);
        }
        if(contacts.twitter)
        {
            var formattedTwitter=HTMLcontactsTwitter.replace("%data%",contacts.twitter);
            $("#contact-entry").append(formattedTwitter);
        }
    }
}

contacts.display();

//Adding Work Experience
work.display=function(){
    if(work.jobs.length>0)
    {
        for(job in work.jobs)
        {
            $("#workExperience").append(HTMLworkStart);
            var workemployer=HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
            var worktitle=HTMLworkTitle.replace("%data%",work.jobs[job].title);
            var workdate=HTMLworkDates.replace("%data%",work.jobs[job].dates);
            var workloc=HTMLworkLocation.replace("%data%",work.jobs[job].location);
            var workdesc=HTMLworkDescription.replace("%data%",work.jobs[job].description);
            var format=workemployer+workdate+workloc+worktitle+workdesc;
            $(".work-entry:last").append(format);
        }
    }
}
work.display();

function locationizer(work_obj)
{
    var locationArray=[];
    for(job in work_obj.jobs)
    {
        var newLocation=work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }
    return locationArray;
}

//console.log(locationizer(work));
$("#start").append(internationalizeButton);

function inName(name){
    name=name.trim().split(" ");
    //console.log(name);
    var x=name.length;
    var str="";
    name[x-1]=name[x-1].toUpperCase(0);
    for(var i=0;i<x-1;i++)
    {
        name[i]=name[i].slice(0,1).toUpperCase()+name[i].slice(1).toLowerCase();
        str=str+name[i]+" ";
    }
    str=str+name[x-1];
    return str;
}
//console.log(inName("Mohammad yusuf Ali"));

projects.display=function()
{
    if(projects.projects.length>0)
    {
        for(project in projects.projects)
        {
            //console.log(project);
            //alert(projects.projects[project]);
            $("#projects").append(HTMLprojectStart);
            var formattedimages=HTMLprojectImage.replace("%data%",projects.projects[project].image);
            var format=formattedimages;
            var formattedTitle=HTMLprojectTitle.replace("%data%",projects.projects[project].title);
            var formattedURL=HTMLprojectURL.replace("%data%",projects.projects[project].url);
            var formattedDescription=HTMLprojectDescription.replace("%data%",projects.projects[project].description);
            format=format+formattedTitle+formattedDescription+formattedURL;      
            $("#prj").append(format);
        }
    }
}
projects.display();

education.display=function()
{
    if(education.schools.length>0)
    {
        $("#education").append(HTMLschoolStart);
        for(school in education.schools)
        {
            $("#school").append(HTMLschoolEntry);
            var formattedName=HTMLschoolName.replace("%data%",education.schools[school].name);
            var formattedURL=HTMLschoolURL.replace("%data%",education.schools[school].url);
            var formattedDegree=HTMLschoolDegree.replace("%data%",education.schools[school].degree);
            var formattedDates=HTMLschoolDates.replace("%data%",education.schools[school].year);
            var formattedLocation=HTMLschoolLocation.replace("%data%",education.schools[school].city);
            var formattedGrade=HTMLschoolGrade.replace("%data%",education.schools[school].grade);
            formattedName=formattedName+formattedDegree;
            var format=formattedDates+formattedGrade+formattedLocation+formattedURL;
            $(".school-entry:last").append(formattedName);
            $(".school-entry:last").append(format);
            //$(".education-entry:last").append(formattedDates);
            //$(".education-entry:last").append(formattedLocation);
        }
    }
    if(education.onlineCourses.length>0)
    {
        $("#education").append(HTMLonlineStart);
        for(onlineCourse in education.onlineCourses)
        {
            $("#online").append(HTMLonlineEntry);
            var formattedTitle=HTMLonlineTitle.replace("%data%",education.onlineCourses[onlineCourse].title);
            var formattedSchool=HTMLonlineSchool.replace("%data%",education.onlineCourses[onlineCourse].school);
            formattedTitle=formattedTitle+formattedSchool;
            $(".online-entry:last").append(formattedTitle);
            var formattedDates=HTMLonlineDates.replace("%data%",education.onlineCourses[onlineCourse].year);
            var formattedURL=HTMLonlineURL.replace("%data%",education.onlineCourses[onlineCourse].url);
            formattedURL=formattedURL.replace("#",education.onlineCourses[onlineCourse].url);
            formattedDates=formattedDates+formattedURL;
            $(".online-entry:last").append(formattedDates);
        }
    }
}
education.display();

abilities.display=function(){
    if(abilities.skills.length>0 || abilities.tools.length>0)
    {
        $("#abilities").append(HTMLabilitiesStart);
        if(abilities.skills.length>0)
        {
            $("#abilities").append(HTMLskillEntry);
            $(".skills-entry").append(HTMLskillHeader);
            $(".skills").append(HTMLskillList);
            for(skill in abilities.skills)
            {
                var formattedHeader=HTMLskill.replace("%data%",abilities.skills[skill].name);
                $(".skill").append(formattedHeader);
                var sf=abilities.skills[skill].knowledge;
                var s=5-sf;
                $(".hover:last").append(HTMLstars);
                for(var i=1;i<=sf;i++)
                {
                    $(".star:last").append(HTMLstarFilled);
                }
                for(var i=1;i<=s;i++)
                {
                    $(".star:last").append(HTMLstar);
                }
            }
        }
        if(abilities.tools.length>0)
        {
            $("#abilities").append(HTMLtoolsEntry);
            $(".tools-entry").append(HTMLtoolsHeader);
            $(".tools").append(HTMLtoolList);
            for(tool in abilities.tools)
            {
                var formattedHeader=HTMLtool.replace("%data%",abilities.tools[tool].name);
                $(".tool").append(formattedHeader);
                var sf=abilities.tools[tool].knowledge;
                var s=5-sf;
                $(".hover:last").append(HTMLstars);
                for(var i=1;i<=sf;i++)
                {
                    $(".star:last").append(HTMLstarFilled);
                }
                for(var i=1;i<=s;i++)
                {
                    $(".star:last").append(HTMLstar);
                }
            }
        }
    }
}

abilities.display();

//First check if any location exist or not
if(bio.location || work.jobs.length>0 || education.schools.length>0)
{
    $("#mapDiv").append(googleMap);
}