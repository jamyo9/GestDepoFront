$(function () {
    // Replace the <textarea id="editor1"> with a CKEditor
    // instance, using default configuration.
    CKEDITOR.replace('objective');
    //bootstrap WYSIHTML5 - text editor
    //$("#objective").wysihtml5();

    var board = new DrawingBoard.Board('board', {
        controls: [
            'Color',
            {
                Size: { 
                      type: 'dropdown'
                    } 
            },
            {
                DrawingMode: {
                      filler: false
                    }
            },
            'Navigation',
            'Download'
        ],
      size: 1,
      webStorage: false,
      enlargeYourContainer: true,
      background: '#008000'
    });

    $("#saveExerciseBtn").on('click',function(e) {
        var img = ($('.drawing-board-canvas')[0]).toDataURL("image/jpg");
        $("#designHidden").val(JSON.stringify(img));
	});
});