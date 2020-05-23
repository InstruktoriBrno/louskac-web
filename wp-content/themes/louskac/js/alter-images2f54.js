

jQuery(document).ready(function(){
    //create a hidden div:
    var hiddenDiv = document.createElement('div');
    jQuery(hiddenDiv).css('display', 'none');
    jQuery('body').append(hiddenDiv);
    
    var i = 0;
    jQuery('.alter-images').each(function() {
        var img = this;
        var src = jQuery(img).attr('src');
        var pathEnd = src.lastIndexOf('/')+1;
        
        var newSrcPath = src.substr(0, pathEnd);
        var newSrcFileName = src.substr(pathEnd, src.length);
        
        var mainNameEnd = newSrcFileName.indexOf('-');
        if (mainNameEnd !== -1) {
            newSrcFileName = newSrcFileName.substr(0, mainNameEnd) + '-2' + newSrcFileName.substr(mainNameEnd, newSrcFileName.length);
        }
        var newSrc = newSrcPath + newSrcFileName;
        
        var newImg = document.createElement('img');//new element for preloading
        jQuery(newImg).attr('src', newSrc);
        jQuery(img).data('alternative-src', newSrc);
        jQuery(img).data('orig-src', src);
        jQuery(img).data('current-image', 'orig');
        
        jQuery(img).on('mouseenter', function () {
            jQuery(img).attr('src', newSrc);
            jQuery(img).data('current-image', 'alter');
        });
        jQuery(img).on('mouseout', function () {
            jQuery(img).attr('src', src);
            jQuery(img).data('current-image', 'orig');
        });
        jQuery(img).on('click', function () {
            var currentImage;
            currentImage = jQuery(img).data('current-image');
            if (currentImage === 'orig') {
                jQuery(img).attr('src', newSrc);
                jQuery(img).data('current-image', 'alter');
            } else {
                jQuery(img).attr('src', src);
                jQuery(img).data('current-image', 'orig');
            }
        });
         
        jQuery(hiddenDiv).append(newImg);
        i += 1;
    });
});
