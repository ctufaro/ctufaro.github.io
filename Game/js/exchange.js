var Exchange = function(){
    var book1tb;
    var book2tb;
    var webSocketAddr = "ws://localhost:5000/trades";
    var ws;

    var WireEvents = function(){
        $('#place-bet-book1').click(function () {
            var newOrder = { Spread: $('#book1-spread').val(), Amount: $('#book1-amount').val(), Side:1, OrderPlacedOn: $('#book1-date').val() };
            ws.send(JSON.stringify(newOrder));
        });

        $('#place-bet-book2').click(function () {
            var newOrder = { Spread: $('#book2-spread').val(), Amount: $('#book2-amount').val(), Side:2, OrderPlacedOn: $('#book2-date').val()};
            ws.send(JSON.stringify(newOrder));
        });

        $('#restart').click(function (e) {     
            e.preventDefault();       
            ws.send(JSON.stringify("restart"));
            book1tb.clear().draw();
            book2tb.clear().draw();
        });
    }

    var ConvertETHUSD = function(amount,spanTag){
        $.ajax({
            url : 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD',
            type : 'GET',
            dataType:'json',
            success : function(data) {              
                var convertedAmount = parseFloat(amount) / parseFloat(data.USD);
                $('#'+spanTag).html(convertedAmount + ' ');
            },
            error : function(request,error)
            {
                console.log("Request: "+JSON.stringify(request));
            }
        });     
    }

    var InitDataTables = function(){
        book1tb = $('#book1').DataTable({searching: false, paging: false, info: false});
        book2tb = $('#book2').DataTable({searching: false, paging: false, info: false});
    }
    
    var InitWebsocket = function(){

        if ("WebSocket" in window) {
            //alert("WebSocket is supported by your Browser!");

            // Let us open a web socket
            ws = new WebSocket(webSocketAddr);

            ws.onopen = function () {
                console.log("Websocket opened");
            };

            ws.onmessage = function (evt) {
                var received_msg = evt.data;
                var orders = JSON.parse(evt.data);
                
                //CLEAR OUT TABLES
                book1tb.clear().draw();
                book2tb.clear().draw();
                
                for(var i = 0; i < orders.length; i++) {
                    var order = orders[i];
                    if(order.Side == 1){
                        book1tb.row.add([order.Spread, order.WagerAmount, order.OrderPlaceOnTxt, order.StatusTxt]).node().id = order.OrderId;
                        book1tb.draw(false);
                    }
                    else{
                        book2tb.row.add([order.Spread, order.WagerAmount, order.OrderPlaceOnTxt, order.StatusTxt]).node().id = order.OrderId;
                        book2tb.draw(false);
                    }
    
                    if(order.StatusTxt==='FILLED'){
                        toastr.options = {"positionClass": "toast-bottom-right","closeButton": true,
                        "preventDuplicates": true,
                        "preventOpenDuplicates": true};           
                        toastr.success("Your trade has been filled");                    
                    }
    
                    if(order.StatusTxt==='PARTIAL'){
                        toastr.options = {"positionClass": "toast-bottom-right","closeButton": true, 
                        "preventDuplicates": true,
                        "preventOpenDuplicates": true};           
                        toastr.info("Your trade has been partially filled");               
                    }
                }
                //console.log(order);

            };

            ws.onclose = function () {
                console.log("Websocket closed");
            };           

        }
        else {
            // The browser doesn't support WebSocket
            alert("WebSocket NOT supported by your Browser!");
        }        
    }

    var Init = function(){
        InitDataTables();
        InitWebsocket();
        WireEvents();
        //Contracts.GetContractAddr();
        //Contracts.GetMyAddress();
    }();
}();