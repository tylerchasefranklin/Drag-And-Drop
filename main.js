var $ = jQuery;

$('.selection')
    .bind('dragstart', function (evt) {
        evt.dataTransfer.setData('text', this.id);
        $('h4').fadeIn('fast');
    })
    .hover(
        function () { $('div', this).fadeIn(); },
        function () { $('div', this).fadeOut(); }
    );

$('.circuit1')
    .bind('dragover', function (evt) {
        evt.preventDefault();
    })
    .bind('dragenter', function (evt) {
        evt.preventDefault();
    })
    .bind('drop', function (evt) {
      var id = evt.dataTransfer.getData('text'),
      item = $('#' + id),
      circuitBox = $(".circuit1 ul"),
      prevCircuitBoxItem = null,
      notInCircuitBox = (function () {
          var lis = $('li', circuitBox),
              len = lis.length,
              i;

          for (i = 0; i < len; i++ ) {
              var temp = $(lis[i]);
              if (temp.data("id") === id) {
                  prevCircuitBoxItem = temp;
                  return false;
              }
          }
          return true;
      } ()),
      quantLeftEl, quantLeft;
      $("h4").fadeOut('fast');

      if (notInCircuitBox) {
          prevCircuitBoxItem = $('<li />', {
              text : $('p:first', item).text(),
              data : { id : id }
          })
          .prepend($('<span />', {
              'class' : 'quantity',
              text : 'Choice'
          }))
          .appendTo(circuitBox);
          quantLeftEl = $('p:last span', item);
          quantLeft   = parseInt(quantLeftEl.text(), 10) - 1;

          if (quantLeft === 0) {
              item.fadeOut('fast').remove();
          }

          evt.stopPropagation();
          return false;
      }

    });

$('.circuit2')
    .bind('dragover', function (evt) {
        evt.preventDefault();
    })
    .bind('dragenter', function (evt) {
        evt.preventDefault();
    })
    .bind('drop', function (evt) {
      var id = evt.dataTransfer.getData('text'),
      item = $('#' + id),
      circuitBox = $(".circuit2 ul"),
      prevCircuitBoxItem = null,
      notInCircuitBox = (function () {
          var lis = $('li', circuitBox),
              len = lis.length,
              i;

          for (i = 0; i < len; i++ ) {
              var temp = $(lis[i]);
              if (temp.data("id") === id) {
                  prevCircuitBoxItem = temp;
                  return false;
              }
          }
          return true;
      } ()),
      quantLeftEl, quantLeft;
      $("h4").fadeOut('fast');

      if (notInCircuitBox) {
          prevCircuitBoxItem = $('<li />', {
              text : $('p:first', item).text(),
              data : { id : id }
          })
          .prepend($('<span />', {
              'class' : 'quantity',
              text : 'Choice'
          }))
          .appendTo(circuitBox);
          quantLeftEl = $('p:last span', item);
          quantLeft   = parseInt(quantLeftEl.text(), 10) - 1;

          if (quantLeft === 0) {
              item.fadeOut('fast').remove();
          }

          evt.stopPropagation();
          return false;
      }

    });

$('.circuit3')
    .bind('dragover', function (evt) {
        evt.preventDefault();
    })
    .bind('dragenter', function (evt) {
        evt.preventDefault();
    })
    .bind('drop', function (evt) {
      var id = evt.dataTransfer.getData('text'),
      item = $('#' + id),
      circuitBox = $(".circuit3 ul"),
      prevCircuitBoxItem = null,
      notInCircuitBox = (function () {
          var lis = $('li', circuitBox),
              len = lis.length,
              i;

          for (i = 0; i < len; i++ ) {
              var temp = $(lis[i]);
              if (temp.data("id") === id) {
                  prevCircuitBoxItem = temp;
                  return false;
              }
          }
          return true;
      } ()),
      quantLeftEl, quantLeft;
      $("h4").fadeOut('fast');

      if (notInCircuitBox) {
          prevCircuitBoxItem = $('<li />', {
              text : $('p:first', item).text(),
              data : { id : id }
          })
          .prepend($('<span />', {
              'class' : 'quantity',
              text : 'Choice'
          }))
          .appendTo(circuitBox);
          quantLeftEl = $('p:last span', item);
          quantLeft   = parseInt(quantLeftEl.text(), 10) - 1;

          if (quantLeft === 0) {
              item.fadeOut('fast').remove();
          }

          evt.stopPropagation();
          return false;
      }

    });
