var colorPalette=['#FEC900','#595779','#9BAD01','#FF6D00','#C0116E','#4A6AB5','#B51A1E'];
var timeHeader={header:"MY CAREER",subHeader:"Step by step"};
var timePoint=
[
	{
		date:'2013',
		title:'Title 1',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
	},
	{
		date:'2014',
		title:'Title 2',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
	},
	{
		date:'2015',
		title:'Title 3',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
	},
	{
		date:'2016',
		title:'Title 4',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
	}
];

initTimedulines(colorPalette,timePoint,timeHeader);

$(document).ready(function(){
	

    $('.smooth-scroll').click(function(e){
      e.preventDefault();
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 800);
});
});