const {Skill} = require("../models/Skill");

const programmingLanguages = [
    new Skill(
        "/img/skills/python.png",
        "https://python.org/",
        "Python",
    ),
    new Skill(
        "/img/skills/java.png",
        "https://www.java.com/en/",
        "Java",
    ),
    new Skill(
        "/img/skills/c-sharp.png",
        "https://learn.microsoft.com/en-us/dotnet/csharp/",
        "C Sharp",
    ),
    new Skill(
        "/img/skills/javascript.png",
        "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        "Javascript",
    ),
    new Skill(
        "/img/skills/kotlin.png",
        "https://kotlinlang.org/",
        "Kotlin",
    ),
    // new Skill(
    //     "/img/skills/dart.png",
    //     "https://dart.dev/",
    //     "Dart",
    // ),
];
const frameworks = [
    new Skill(
        "/img/skills/node-js.png",
        "https://nodejs.org/en/about/",
        "Node JS - Javascript",
    ),
    new Skill(
        "/img/skills/django.svg",
        "https://www.djangoproject.com/",
        "Django - Python",
    ),
    new Skill(
        "/img/skills/spring-boot.svg",
        "https://spring.io/projects/spring-boot",
        "Spring Boot - Java",
    ),
    new Skill(
        "/img/skills/xamarin.png",
        "https://dotnet.microsoft.com/en-us/apps/xamarin",
        "Xamarin - C#",
    ),
    new Skill(
        "/img/skills/flutter.png",
        "https://flutter.dev/",
        "Flutter - Dart",
    ),
];

const skillGroups = {
    "Programming <br> Languages": programmingLanguages,
    "Frameworks": frameworks,
}
module.exports.skillGroups = skillGroups;