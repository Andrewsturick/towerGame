'use strict';

$(document).ready(init);

function init () {
  $('.tower').on('click', boxClicked);
  $('.submit').on('click', createDivs)

}
function createDivs(){
  var divCount = $('.numberSelect').val();
  var divCountInt=parseInt(divCount);
  for (var i=1; i< divCountInt+1; i++){
      var thisDiv = $('<div class="class'+i+'" id="'+i+'">');
      $('.first .contentContain').prepend(thisDiv);
      $('.numberSelect').attr('disabled',' disabled')
  }
}



function boxClicked(event){


  var $this = $(this);

  var $thisSelected = $('.selected');
  var $childrenInThisTower = $this.children('.contentContain').children('div');
  if ($childrenInThisTower.hasClass('selected')){
      $childrenInThisTower.removeClass('selected');
  } else{
    if($this.siblings().find('.contentContain').children(':first-child').hasClass('selected')) {
      for(var i = 0; i < $childrenInThisTower.length; i++) {

        if(parseInt($childrenInThisTower[i].id) > parseInt($thisSelected[0].id)) {
          return;
        }
      }
      var detached = $('.selected').removeClass('selected').detach();
      $this.children('.contentContain').prepend(detached);
    } else {
      $(this).children('div').children(':first-child').addClass('selected');
    }
  }

  if ( $('.thirdTower').find('.contentContain').children('div').length===parseInt($('.numberSelect').val())){
    alert('YOU WIN!!!');
    location.reload();
  }
}
//////////////////////////////////////////////////////////////////////////////////////
