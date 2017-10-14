/*
* @version 1.0.0
* @author Petrov Alexander
* @company LessonWeb
*/


(function( $ ) {
  $.fn.formsLw = function(options) {

    var settings = $.extend( {
      'color-error'           : 'tomato',
      'color-error-default'   : 'white',
      'number-of-parents'     : 0,
      'post-file' : 'post.php',
      'yandex-metric' : false,
      'from' : 'email@email.com',
    }, options);

    this.each(function(){
      var form=$(this);
      form.find('.form-lw-thanks').hide();
      form.submit(function(e){
        e.preventDefault();
        var send_form=true;

        $('.form-lw-check-field').keyup(function(){
          $(this).css('background-color', settings['color-error-default']);
        });

        var input_result=[];
        form.find('.form-lw-check-field').each(function(){
          var input=$(this);
          var type=$(this).attr('type');
          var title=$(this).data('title');
          var value=$(this).val();

          if(type=='text' || type==undefined){
            if(value.length==0){
              send_form=false;
              for(var i=0;i<settings['number-of-parents'];i++){
                input=input.parent();
              }
              input.css('background-color',settings['color-error']);
            }
          }

          if(type=='email'){
            var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
            if(!pattern.test(value)){
              send_form=false;
              for(var i=0;i<settings['number-of-parents'];i++){
                input=input.parent();
              }
              input.css('background-color',settings['color-error']);
            }
          }

          input_result.push({
            'title': title,
            'value': value,
          });

        });


        input_result=JSON.stringify(input_result);

        if(send_form==true){
          var title=form.find('.form-lw-title-form').val();
          var emails=settings['emails'];
          var from=settings['from'];
          $.post(
            settings['post-file'],
            {
              title: title,
              emails: emails,
              from: from,
              input_result: input_result,
            },function(result){
              form.find('.form-lw-thanks').show();
              form.find('.form-lw-content').hide();
            }
          );

        }

      });
    });



  };
})(jQuery);
