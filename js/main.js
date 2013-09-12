(function($){
    var cc = $('#colcount'),
        ws = $('#wsave');
    
    $( ".widget" ).draggable({
        handle: ".handler",
        connectToSortable: ".placeholder",
        revert: "invalid",
        helper: "clone"
    });
    $(".placeholder").sortable({
        placeholder: "ui-state-highlight",
        connectWith: ".placeholder",
        forcePlaceholderSize: true,
        revert: true
    }).disableSelection();
    
    
    $(document).on('click', '.remove', function(){
        $(this).closest('.widget').remove();
    });
    $(document).on('click', '.edit', function(){
        var w = $(this).closest('.widget'),
            isCol = w.is('[class*="col-md-"]')
            col = '';
        
        if(isCol){
            
            col = parseInt(w.attr('class').split('col-md-')[1]);
            cc.val(col);
        }
        ws.on('click', function(){
            if(isCol){
                console.log(isCol, col)
                w.removeClass('col col-md-' + col);
            }
            w.addClass('col col-md-' + cc.val());
        });
    });
    
})(jQuery);
