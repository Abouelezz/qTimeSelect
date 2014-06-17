(function ($) {
    $.fn.qTimeSelect = function (update_only) {
        var elem_name = $(this).attr('name');
        var elem = this;
        var rand_num = Math.floor(Math.random() * 11);
        var curent_val = $(this).val();
        if (!update_only) {
            $(this).after('<input data-newelem="' + rand_num + '" name="' + $(this).attr('name') + '"  id="' + $(this).attr('id') + '"  class="' + $(this).attr('class') + '" value="' + curent_val + '" type="hidden" />');
            $(this).remove();
            elem = $('input[data-newelem*="' + rand_num + '"]');
            $(elem).before('<select class="time_select hour" style="width:50px" id="' + elem_name + '_hour"><option></option><option>01</option><option>02</option><option>03</option><option>04</option><option>05</option><option>06</option><option>07</option><option>08</option><option>09</option><option>10</option><option>11</option><option>12</option></select> : ' + '<select class="time_select mints" style="width:50px" id="' + elem_name + '_mints"><option></option><option>00</option><option>15</option><option>30</option><option>45</option></select> ' + '<select class="time_select pmam" style="width:50px" id="' + elem_name + '_pmam"><option></option><option>AM</option><option>PM</option></select> ');

            $(elem).parent().children('select').change(function () {
                if ($(elem).parent().children('.hour').val() && $(elem).parent().children('.hour').val() && $(elem).parent().children('.pmam').val()) {
                    $(elem).val(

                        $(elem).parent().children('.hour').val() + ':' +
                        $(elem).parent().children('.mints').val() + ' ' +
                        $(elem).parent().children('.pmam').val()
                    );

                } else {
                    $(elem).val('');
                }
            });
        }
        if (curent_val) {
            time_split = curent_val.split(':');
            hour = time_split[0];

            time_split = time_split[1].split(' ');
            mint = time_split[0];
            pmam = time_split[1];
            $(elem).parent().children('.hour').val(hour);
            $(elem).parent().children('.mints').val(mint);
            $(elem).parent().children('.pmam').val(pmam);
        }

    };

    function read_curent_val() {
        var curent_val = $(this).val();
        var elem = this;
        if (curent_val) {
            time_split = curent_val.split(':');
            hour = time_split[0];

            time_split = time_split[1].split(' ');
            mint = time_split[0];
            pmam = time_split[1];
            $(elem).parent().children('.hour').val(hour);
            $(elem).parent().children('.mints').val(mint);
            $(elem).parent().children('.pmam').val(pmam);
        }
    }

})(jQuery);