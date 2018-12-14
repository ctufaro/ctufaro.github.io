var Exchange = function(){
    var book1tb;
    var book2tb;
    //var webSocketAddr = "ws://localhost:5000/trades";
    var webSocketAddr = "ws://mercer.sytes.net:5001/trades";
    var orderDict = {};
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

        $('#ctBook1').click(function(){
            console.log(orderDict);
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
                
                for(var i = 0; i < orders.length; i++) {
                    var order = orders[i];
                    ProcessTrade(order)
                }

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

    var ProcessTrade = function(order){
        //in this method we will show trades that are NOT in the dictionary, we will then
        //save the wager amount and status in the dictionary

        var bk = (order.Side == 1) ? book1tb : book2tb;

        if (!(order.OrderId in orderDict)){
            orderDict[order.OrderId] = order.Status;
            bk.row.add([order.Spread, order.WagerAmount, order.OrderPlaceOnTxt, order.StatusTxt]).node().id = order.OrderId;
            bk.draw(false);
            //immediately FILLED OR PARTIAL
            if(order.Status > 0){
                ShowToast(order.Status);
            }

        }
        else{
            var statChange = (order.Status == orderDict[order.OrderId]);
            if(statChange == false){
                //update that row, and show a popup notification                
                bk.row("#"+order.OrderId).data([order.Spread, order.WagerAmount, order.OrderPlaceOnTxt, order.StatusTxt]).draw();
                orderDict[order.OrderId] = order.Status;
                ShowToast(order.Status);
            }
            //console.log(orderDict);
            //if false, don't do shit
        }
        
    }

    var ShowToast = function(status){
        if(status===2){
            toastr.options = {"positionClass": "toast-bottom-right","closeButton": true};           
            toastr.success("Your trade has been filled");                    
        }

        if(status===1){
            toastr.options = {"positionClass": "toast-bottom-right","closeButton": true};           
            toastr.info("Your trade has been partially filled");               
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