Circle = function (param) {
    var _$element = param.$element;
    var _data = param.data;
    var _zoom = param.zoom;
    var _R = 20 * Math.pow(2, _zoom - 12);

    var _onMouseoverCircle  = function (e) {
        $('text[data-name="'+$(e.target).attr('data-name')+'"]').attr('class','show');
        Template.Map._activeLocationId.set({_id:$(e.target).attr('data-name')});
    }
    var _onMouseleaveCircle  = function (e) {
        $('text[data-name="'+$(e.target).attr('data-name')+'"]').attr('class','hide');
        Template.Map._activeLocationId.set({_id:''});
    }

    this.init = function () {
        var r =_R * _data.Frequency;
        if(r > 2 && r < 200) {
            var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');

            $(_$element).attr('r', r);
            $(text).text(_data.LocationName +' (Frequency:'+ _data.Frequency +')');
            $(text).attr('transform', $(_$element).attr('transform'));

            // Avoid overflow circle via parent element
            $(_$element).parent().attr('clip-path','url(#org.polymaps.0)');
            $(_$element).attr('clip-path','url(#org.polymaps.99)');

            // Add class
            $(text).attr("class", 'circle-label');
            $(text).attr("class", 'hide');
            $(_$element).attr("class", 'circle');
            $(_$element).attr("data-name", _data.id);
            $(text).attr("data-name", _data.id);

            // Append events
            $(_$element).mouseover(_onMouseoverCircle);
            $(_$element).mouseleave(_onMouseleaveCircle);

            // append element to parent
            $(_$element).parent().append($(_$element));
            //$(_$element).parent().append(text);

        }else{
            $(_$element).remove()
        }
    }
}