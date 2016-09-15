var initTimedulines=function(mycolorPalette,mytimePoint,mytimeHeader)
{
	colorPalette=mycolorPalette;
	timePoint=mytimePoint;
	timeHeader=mytimeHeader;
	
var headerHtml=
'<div class="row">'+
'<div class="col-xs-offset-6 col-xs-1">'+
'<i class="time-header-icon fa fa-calendar fa-7x"></i></div>'+
'<div class="col-xs-4">'+
'<h2 class="time-header">'+timeHeader.header+'</h2>'+
'<h3 class="time-sub-header">'+timeHeader.subHeader+'</h3></div></div>';
var circleBaseHtml='<div class="row"><div class="col-xs-offset-6 col-xs-6 line"><div class="circle"></div>';


$(document).ready(function()
{
	$("#timedulines").append(headerHtml);
	for(i=0;i<timePoint.length;i++)
	$("#timedulines").append(circleBaseHtml);
});

$(window).load(function()
{
	$('.circle').each(function(i,v)
	{
		var myPlacement=(i%2==0?'left':'right');
		
		$(this).css('border-color',colorPalette[i]);
		$(this).text(timePoint[i].date)
		$(this).popover
		({
			title:timePoint[i].title,
			content: timePoint[i].content,
			placement:myPlacement,
			animation:true,
			delay:{show:500,hide:500}
		}).popover('show');
		$('.popover').each(function(i,v)
		{
			this.style.setProperty('border-'+(i%2==0?'left':'right')+'-color',colorPalette[i],'important');
		});
	});
	if(document.URL.indexOf("#")==-1){
        // Set the URL to whatever it was plus "#".
        url = document.URL+"#";
        location = "#";

        //Reload the page
        location.reload(true);
    }
	
});

//Does something when user scrolls to it OR
//Does it when user has reached the bottom of the page and hasn't triggered the function yet
$(window).on('scroll', function() 
{
	$('.circle').each(function(i,v)
	{
		var element_position = $(this).offset().top;
		var y_scroll_pos = window.pageYOffset;
		var element_in_view = Math.abs(y_scroll_pos - element_position);
		console.log('i= '+i+' y_scroll_pos= '+y_scroll_pos+' element_position= '+element_position+' element_in_view='+element_in_view);
		if(element_in_view<=400)
		{
			$(this).addClass("shadowed animated pulse");
			$('#timedulines .popover:eq('+i+')').addClass("animated shake once");	
			$('#timedulines .circle').not(':eq('+i+')').removeClass("shadowed animated pulse");	
			$('#timedulines .popover').not(':eq('+i+')').removeClass("animated shake once");	
		}
	});
});
}
