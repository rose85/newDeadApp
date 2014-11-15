$(document).ready(function()
{

	var offsets; //initialize it so its available to all functions

	function offset_update() {
		// updating the array
		offsets = [
			$('#main').offset().top - 77,
			$('#sshop').offset().top - 77,
			$('#sstyles').offset().top - 77,
			$('#sabout').offset().top - 77,
			$('#scontact').offset().top - 77,
		];
		console.log(offsets);
	}

	offset_update(); //when page first loads
	$(window).resize(offset_update); //anytime the window gets resized



	$(window).scroll(function()
	{
		// how far from top
		var howFarFromTop = $(window).scrollTop();
		console.log(howFarFromTop);

		// managing the fixed navigation
		if (howFarFromTop > 77)
		{
			$('#mainmenu').addClass('pinned');
		}
		else
		{
			$('#mainmenu').removeClass('pinned');
		}

		// manage which link is selected
		if (howFarFromTop < offsets[1])
		{
			$('#mainmenu nav a').removeClass('theOne');
			$('#mainmenu nav a:eq(0)').addClass('theOne');
		}
		else if (howFarFromTop >= offsets[1] && howFarFromTop < offsets[2])
		{
			$('#mainmenu nav a').removeClass('theOne');
			$('#mainmenu nav a:eq(1)').addClass('theOne');
		}
		else if (howFarFromTop >= offsets[2] && howFarFromTop < offsets[3])
		{
			$('#mainmenu nav a').removeClass('theOne');
			$('#mainmenu nav a:eq(2)').addClass('theOne');
		}
		else if (howFarFromTop >= offsets[3] && howFarFromTop < offsets[4])
		{
			$('#mainmenu nav a').removeClass('theOne');
			$('#mainmenu nav a:eq(3)').addClass('theOne');
		}
		else if (howFarFromTop >= offsets[4])
		{
			$('#mainmenu nav a').removeClass('theOne');
			$('#mainmenu nav a:eq(4)').addClass('theOne');
		}
	}); /*ends the window scroll*/


	$('#mainmenu nav a').click(function(event){
		event.preventDefault(); /*kill default jump to */

		// manage chosen state
		$('#mainmenu nav a').removeClass('theOne');
		$(this).addClass('theOne');

		// manage the Scroll To


		var theHref = $(this).attr('href');
		console.log(theHref);

		var newLoc = $(theHref).offset().top - 70;

		$(window).scrollTo(newLoc, 1000);

	});/*click*/
