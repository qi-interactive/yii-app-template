<script>
	QUnit.log(function(response) {
		if (response.result != true) {
			console.warn(response.name, response.message, response.source)
			$("#stylesheet-errors").show().append($("<li />").html("<b>" + response.name + "</b> "
				+ response.message));
		}
	})
</script>

<div style="display: none;border: solid 2px darkred; background: red; padding: 10px; margin: 20px 120px" id="stylesheet-errors">
</div>

<h3 style="color: #FFF; display: block; background: #555; padding: 10px;">TYPOGRAPHY</h3>

<h1>Heading 1</h1>
<p class="h1">Heading 1</p>

<h2>Heading 2</h2>
<p class="h2">Heading 2</p>

<h3>Heading 3</h3>
<p class="h3">Heading 3</p>

<h4>Heading 4</h4>
<p class="h4">Heading 4</p>

<h5>Heading 5</h5>
<p class="h5">Heading 5</p>

<h6>Heading 6</h6>	
<p class="h6">Heading 6</p>
<br/>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, provident, unde officiis consectetur assumenda et ducimus sit possimus velit vero nihil quibusdam aliquid minus reiciendis hic exercitationem id ad. Dolores!</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, amet nemo explicabo vitae voluptate sunt voluptatum qui ex ad quae! Quos, autem error praesentium eius. Quo quidem quae placeat repellat.</p>


<script>
	test( "test button and .button size is the same", function() {
		equal( $("h1").css("font-size"), $(".h1").css("font-size"), "h1 and .h1 font size is not the same");
		equal( $("h2").css("font-size"), $(".h2").css("font-size"), "h2 and .h2 font size is not the same");
		equal( $("h3").css("font-size"), $(".h3").css("font-size"), "h3 and .h3 font size is not the same");
		equal( $("h4").css("font-size"), $(".h4").css("font-size"), "h4 and .h4 font size is not the same");
		equal( $("h5").css("font-size"), $(".h5").css("font-size"), "h5 and .h5 font size is not the same");
		equal( $("h6").css("font-size"), $(".h6").css("font-size"), "h6 and .h6 font size is not the same");
	});
</script>


<h3 style="color: #FFF; display: block; background: #555; padding: 10px; margin-top: 60px;">LINKS</h3>
<a href='#'>Active link</a>



<h3 style="color: #FFF; display: block; background: #555; padding: 10px; margin-top: 60px;">BUTTONS</h3>

<button id="button1">Button</button>

<a id="button2" class="btn">Button</a>

<a id="button2" class="btn btn-success">Button</a>
<a id="button2" class="btn btn-danger">Button</a>

<script>
	test( "test button and .button size is the same", function() {
		equal( $("#button1").width(), $("#button2").width(), "Button width inconsistent");
		equal( $("#button1").outerHeight(), $("#button2").outerHeight(), "Button height inconsistent");
	});

	test( "test button and .button size is the same", function() {
		notEqual( $(".btn-success").css("background-color"), $(".btn-danger").css("background-color"), "Button success and danger are the same color");
	});

</script>