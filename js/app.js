$(document).foundation();

function formatDate(date) {
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
}

// implementation of disabled form fields
var nowTemp = new Date();
var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);
var checkin = $('#dpd1').fdatepicker({
  onRender: function (date) {
    return date.valueOf() < now.valueOf() ? 'disabled' : '';
  }
}).on('changeDate', function (ev) {
  if (ev.date.valueOf() > checkout.date.valueOf()) {
    var newDate = new Date(ev.date)
    newDate.setDate(newDate.getDate() + 1);
    checkout.update(newDate);
  }
  checkin.hide();
  $('#dpd2')[0].focus();
}).data('datepicker');
var checkout = $('#dpd2').fdatepicker({
  onRender: function (date) {
    return date.valueOf() <= checkin.date.valueOf() ? 'disabled' : '';
  }
}).on('changeDate', function (ev) {
  checkout.hide();
}).data('datepicker');


// output date information to the spans in the overlay window
$('.submit').click(function(e){
	$('.reveal h2 .dpd1').text($('#dpd1').val());
	$('.reveal h2 .dpd2').text($('#dpd2').val());
})

const header = document.querySelector('header');
const headerMenu = header.querySelector('.menu');
const btnMenu = header.querySelector('button.show-for-small-only');

// toggle menu on/off
btnMenu.addEventListener('click',function(){
  // show menu by removing 'show-for-medium' class
  headerMenu.classList.toggle('show-for-medium');
  // add toggle state indicator
  this.classList.toggle('btnToggle');
  // change button text for toggled state
  changeBtnText();
})

// change button text for toggled state
// if your buttons are image-based, this will be different (get in touch)
function changeBtnText(){
  if(btnMenu.classList.contains('btnToggle')){
    btnMenu.textContent = 'X';
  } else {
    btnMenu.textContent = 'Menu'
  }
}