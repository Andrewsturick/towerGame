'use strict';

$(document).ready(init);

function init () {
  $('.tower').on('click', boxClicked);
  $('.submit').on('click', createDivs)
}

function createDivs(){
  var divCount = $('.numberSelect').val();
  var divCountInt=parseInt(divCount);
  console.log(parseInt(divCount) + 1);
  for (var i=1; i< divCountInt+1; i++){

    var thisDiv = $('<div class="class'+i+'" id="'+i+'">');
    console.log(thisDiv);
    $('.first').append(thisDiv);
  }



}

function boxClicked(event){
  var $this = $(this);
  var $thisSelected = $('.selected');
  var $childrenInThisTower = $this[0].children;

  if ($this.children(':last-child').hasClass('selected')){
      $this.children(':last-child').removeClass('selected');
  } else{
    if($this.siblings().children(':last-child').hasClass('selected')) {
      for(var i = 0; i < $childrenInThisTower.length; i++) {

        if(parseInt($childrenInThisTower[i].id) > parseInt($thisSelected[0].id)) {
          return;
        }
      }

      var detached = $('.selected').removeClass('selected').detach();
      $this.append(detached);
    } else {
      $(this).children(':last-child').addClass('selected');
    }

  }
  if ($('.thirdTower')[0].children.length===3){
    alert('YOUR A UNICORN BLASTER!');
    console.log('youwin');

  }
}
