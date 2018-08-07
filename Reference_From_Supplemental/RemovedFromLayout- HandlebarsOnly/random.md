  // $(".keypad").prepend(
  //   `<div class="columns">
  //   <form class="column">
  //     <div class="input-field">
  //       <textarea id="textarea1" class="materialize-textarea"><i class="material-icons" id="suffix-X">close</i></textarea>
  //     </div>
  //   </form>
  // </div><br>`
  // );

  //<i class="material-icons mdl-textfield__label__icon" id="closeIcon" tabindex="0" role="button">close</i>

  var resetField = `<button><i class="material-icons mdl-textfield__label__icon" id="closeIcon">close</i></button>`;

$("#phoneNumField").placeholder = resetField;
console.log($("#phoneNumField").placeholder);
console.log(resetField);
// $(".mdl-textfield").focusin(function() {
//   $(".mdl-textfield__label").css("padding-top", "30px");
// });<a href="#" class="icon fa-envelope">

// <!-- Numeric Textfield with Floating Label -->
// <form action="#">
//   <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
//     <input class="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="phoneNumField">
//     <label class="mdl-textfield__label" for="phoneNumField"><i class="material-icons mdl-textfield__label__icon">close</i></label>
//     <span class="mdl-textfield__error">Input is not a number!</span>
//   </div>
// </form>

// `<div class=
//     "mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-text-field--with-leading-icon is-upgraded"
//     data-upgraded=",MaterialTextfield">
//         <input class="mdl-textfield__input" id="textfield-EmailAddress" type=
//         "email">
//         <label class="mdl-textfield__label" for=
//         "textfield-EmailAddress"><i class="material-icons mdl-textfield__label__icon">mail</i></label>
//         <i class="material-icons mdl-text-field__icon" tabindex="0" role="button">event</i>
//   </div>` 

// $( "li" ).hover(function() {
//     $( this ).append( $( "<span> ***</span>" ) );
//   }, function() {
//     $( this ).find( "span:last" ).remove();
//   }
// );

<!-- <div class="columns">
						<form class="column">
							<div class="input-field">
								<textarea id="textarea1" class="materialize-textarea"><i class="material-icons" id="suffix-X">close</i></textarea>
							</div>
						</form>
					</div> -->
					<!-- <div class="mdc-text-field mdc-text-field--box mdc-text-field--with-leading-icon">
							<i class="material-icons mdc-text-field__icon" tabindex="0" role="button">event</i>
							<input type="text" id="my-input" class="mdc-text-field__input">
							<label for="my-input" class="mdc-floating-label">Your Name</label>
							<div class="mdc-line-ripple"></div>
						</div> -->
					<!-- <textarea>
						<div class="input" align="right">
							<input type="text">
						</div>
						<div class="reset" align="left">
							<button><i class="material-icons">close</i></button>
						</div>
					</textarea> -->
					<!-- <br><hr><br>
					<div class="mdc-text-field mdc-text-field--outlined mdc-text-field--with-leading-icon">
							<i class="material-icons mdc-text-field__icon" tabindex="0" role="button">event</i>
							<input type="text" id="my-input" class="mdc-text-field__input">
							<label for="my-input" class="mdc-floating-label">Your Name</label>
							<div class="mdc-notched-outline">
								<svg>
									<path class="mdc-notched-outline__path"/>
								</svg>
							</div>
							<div class="mdc-notched-outline__idle"></div>
						</div> -->