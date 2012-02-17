test("when an input is changed, it should be marked dirty", function() {
	
	$form = $('<form action=""></form>');
	$input = $('<input id="newValue" type="text" value="500" />');
	$form.append($input);
	
	$form.dirtify();
	$input.val(600).trigger('change');
	
	ok($form.dirtify('isDirty'), 'form is dirty after changing value');
});

test("when an input is changed back to the default value, it should be unmarked dirty", function() {
	
	$form = $('<form action=""></form>');
	$input = $('<input id="newValue" type="text" value="500" />');
	$form.append($input);
	
	$form.dirtify();
	$input.val(600).trigger('change');
	$input.val(500).trigger('change');
	
	ok(!$form.dirtify('isDirty'), 'form is clean after changing to original value');
});

test("when an input is dirty and clean is called, it should reset to default value", function() {
	
	$form = $('<form action=""></form>');
	$input = $('<input id="newValue" type="text" value="500" />');
	$form.append($input);
	
	$form.dirtify();
	$input.val(600).trigger('change');
	$form.dirtify('clean');
	
	ok(!$form.dirtify('isDirty'), 'form is clean after calling clear');
	equal($input.val(), 500, 'should reset input value back to 500');
})