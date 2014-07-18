$(document).ready(function(){
  // Takes in an element, the number of rows, and the number of columns
  grid = (function(elm, height, width){
    this.elm = elm;
    this.cellHeight = 0;
    this.cellWidth = 0;

    init = (function(){
      setCellHeight();
      setCellWidth();
      createCells();
    });

    setCellHeight = function(){
      this.cellHeight = elm.height() / height;
    };

    setCellWidth = function(){
      this.cellWidth = elm.width() / width;
    };

    createCells = function(){
      for (var i=0; i < parseInt(height); i++){
        for (var j=0; j < parseInt(width); j++){
          var drop = $('<div class="drop"></div>');
          drop.css({
            'height':this.cellHeight+'px',
            'width':this.cellWidth+'px',
            'top':(i)*this.cellHeight+'px',
            'left':(j)*this.cellWidth+'px',
          });
          drop.attr('data-isOccupied', false);
          drop.attr('data-row', i);
          drop.attr('data-column', j);
          console.log(drop.attr('data-row'));
          drop.droppable({
            over: function(event, ui){
              $(this).css({'border': '2px solid #000000'});
            },
          });
          drop.click(function(){
            alert($(this).attr('data-row'));
          });
          elm.append(drop);
        }
      }
    }

    init();
  })
  grid($('#grid'), 4, 4);
})
