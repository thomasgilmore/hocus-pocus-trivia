let numberOfCorrectAnswers = 0;
let numberOfWrongAnswers = 0;
let percentage = 0;

const wrongAnswer = (classOfButtonClicked, classOfOtherButton) => {
    $(classOfButtonClicked).css('background-color', '#FF0000');
    $(classOfButtonClicked).attr("disabled","disabled");
    $(classOfOtherButton).attr("disabled","disabled");
    $(classOfButtonClicked).removeClass("hover");
    $(classOfOtherButton).removeClass("hover");
    numberOfWrongAnswers++;
    if (numberOfCorrectAnswers + numberOfWrongAnswers == 10) {
        $('.playersPercentageCorrect').removeClass("hide");
    }
};
const rightAnswer = (classOfButtonClicked, classOfOtherButton) => {
    $(classOfButtonClicked).css('background-color', '#00FF0A');
    $(classOfButtonClicked).attr("disabled","disabled");
    $(classOfOtherButton).attr("disabled","disabled");
    $(classOfButtonClicked).removeClass("hover");
    $(classOfOtherButton).removeClass("hover");
    numberOfCorrectAnswers++;
    percentage = (numberOfCorrectAnswers / 10 ) * 100;
    $('.percentage').html(percentage.toString());
    if (numberOfCorrectAnswers + numberOfWrongAnswers == 10) {
        $('.playersPercentageCorrect').removeClass("hide");
    }
};

$('.Salem-Massachusetts').on('click', function() { rightAnswer('.Salem-Massachusetts', '.Salem-Oregon'); });
$('.Salem-Oregon').on('click', function() { wrongAnswer('.Salem-Oregon', '.Salem-Massachusetts'); });
$('.Maxie').on('click', function() { wrongAnswer('.Maxie', '.Hollywood'); });
$('.Hollywood').on('click', function() { rightAnswer('.Hollywood', '.Maxie'); });
$('.Go-trick-or-treating-as-Peter-Pan-and-Wendy').on('click', function() { rightAnswer('.Go-trick-or-treating-as-Peter-Pan-and-Wendy', '.Drive-her-to-school-every-day'); });
$('.Drive-her-to-school-every-day').on('click', function() { wrongAnswer('.Drive-her-to-school-every-day', '.Go-trick-or-treating-as-Peter-Pan-and-Wendy'); });
$('.1994').on('click', function() { wrongAnswer('.1994', '.1993'); });
$('.1993').on('click', function() { rightAnswer('.1993', '.1994'); });
$('.Bette-Midler').on('click', function() { rightAnswer('.Bette-Midler', '.Sarah-Jessica-Parker'); });
$('.Sarah-Jessica-Parker').on('click', function() { wrongAnswer('.Sarah-Jessica-Parker', '.Bette-Midler'); });
$('.Car-headlights').on('click', function() { rightAnswer('.Car-headlights', '.Flashlights'); });
$('.Flashlights').on('click', function() { wrongAnswer('.Flashlights', '.Car-headlights'); });
$('.Dog').on('click', function() { wrongAnswer('.Dog', '.Cat'); });
$('.Cat').on('click', function() { rightAnswer('.Cat', '.Dog'); });
$('.A-vampire').on('click', function() { wrongAnswer('.A-vampire', '.A-skeleton'); });
$('.A-skeleton').on('click', function() { rightAnswer('.A-skeleton', '.A-vampire'); });
$('.Kenny-Ortega').on('click', function() { rightAnswer('.Kenny-Ortega', '.Mark-Rosman'); });
$('.Mark-Rosman').on('click', function() { wrongAnswer('.Mark-Rosman', '.Kenny-Ortega'); });
$('.Cynthia-Fee').on('click', function() { wrongAnswer('.Cynthia-Fee', '.The-Rembrandts'); });
$('.The-Rembrandts').on('click', function() { rightAnswer('.The-Rembrandts', '.Cynthia-Fee'); });