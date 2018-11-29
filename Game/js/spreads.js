var Spreads = function(){

    var WireEvents = function(){
        $('#simulate').click(function(){
            var state = $('#simulate').html();
            
            if(state === 'Stop'){
                location.reload();
            }
            else{
                $('#simulate').html('Stop');
                window.setInterval(function(){
                    var random1 = (Math.floor(Math.random() * 30) + 1) *-1;
                    var random2 = Math.floor(Math.random() * 30) + 1;                    
                    PopulateTable('tbBroncos',random1);                    
                    PopulateTable('tbBengals',random2);                    
                }, 3000);           
            }
        });
        
        $('#exampleModalCenter').on('show.bs.modal', function (event) {
          var button = $(event.relatedTarget) // Button that triggered the modal
          var home = button.data('home') // Extract info from data-* attributes
          var away = button.data('away') // Extract info from data-* attributes
          var modal = $(this)
          modal.find('.modal-title').text(home + ' @ ' + away)
          $('#lblHome').html(home);
          $('#lblAway').html(away);
          //modal.find('.modal-body input').val(recipient)
        }) 

        $('#wager').focusout(function(){
            var amount = $(this).val();
            $.ajax({
                url : 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD',
                type : 'GET',
                dataType:'json',
                success : function(data) {              
                    var convertedAmount = parseFloat(amount) / parseFloat(data.USD);
                    $('#ethConvert').html(convertedAmount + ' ');
                },
                error : function(request,error)
                {
                    console.log("Request: "+JSON.stringify(request));
                }
            });     
            
        });
        
        $('#ctBroncos').click(function(){
            if($('.tm1').css('visibility') === 'hidden'){
                $('.tm1').css('visibility','visible');
                $('#ctBroncos').attr('class', 'fas fa-caret-down');
            } else {
                $('.tm1').css('visibility','hidden');
                $('#ctBroncos').attr('class', 'fas fa-caret-up');
            }
        });
        
        $('#ctBengals').click(function(){
            if($('.tm2').css('visibility') === 'hidden'){
                $('.tm2').css('visibility','visible');
                $('#ctBengals').attr('class', 'fas fa-caret-down');                
            } else {
                $('.tm2').css('visibility','hidden');
                $('#ctBengals').attr('class', 'fas fa-caret-up');                   
            }            
        });
    }
    
    var PopulateTable = function(tableId,spread){
        var sign = parseFloat(spread) < 0 ? spread : '+'+spread;
        var html = '<tr class="clicker"><td>'+sign+'</td><td><button type="button" class="btn btn-success btn-sm"><i class="fas fa-dollar-sign"></i></button></td></tr>'
        var tbl = $('#'+tableId);
        var count = tbl.children().length;
        
        if(count === 0){
            tbl.append(html);
            return;
        }
        
        for(var i = 0; i < count; i++)
        {
            var tr = tbl.children().eq(i);
            var trSpread = tr.children().eq(0).html();    
            
            var trNext = tbl.children().eq(i+1);
            var trNextSpread = trNext.children().eq(0).html();
            
            var trLast = tbl.children().eq(count-1);
            var trLastSpread = trLast.children().eq(0).html();          
            
            //check if the spread param is the smallest
            if(parseFloat(spread) <= parseFloat(trSpread) && i==0){
                $(html).insertBefore(tr);
                break;
            }
            //check if the spread param is the largest
            else if(parseFloat(spread) >= parseFloat(trLastSpread)){
                $(html).insertAfter(trLast);
                break;
            }
            //check if sandwiched
            else if((parseFloat(spread) >= parseFloat(trSpread)) && (parseFloat(spread) < parseFloat(trNextSpread))){
                $(html).insertBefore(trNext);
                break;
            }            
        }

        if(tableId==='tbBroncos'){
            $('#bdBroncos').html(tbl.children().eq(0).children().eq(0).html());
            $('#boardBroncos').html(tbl.children().eq(0).children().eq(0).html());
        }
        else{
            $('#bdBengals').html(tbl.children().eq(0).children().eq(0).html());
            $('#boardBengals').html(tbl.children().eq(0).children().eq(0).html());
        }

    }

    var Init = function(){
        WireEvents();
        
    }();    
   
}();