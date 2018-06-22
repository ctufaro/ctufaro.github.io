var Gossip = function () {

    var nodes = [];
    var infectedIndex = [];
    var blue = "#0079FF";
    var crimson = "#DE514A";
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext('2d');
    var points;
    var fanout;
    var infectStart;
    var steps;
    var radius = 250;
    var recx = 9;
    var recy = 9;   

    var DrawCanvas = function () {        
        ctx.fillStyle = blue;         
        while (points) {
            var pt_angle = Math.random() * 2 * Math.PI;
            var pt_radius_sq = Math.random() * radius * radius;
            var pt_x = Math.sqrt(pt_radius_sq) * Math.cos(pt_angle);
            var pt_y = Math.sqrt(pt_radius_sq) * Math.sin(pt_angle);
            var plot_x = pt_x + canvas.width / 2;
            var plot_y = pt_y + canvas.width / 2;
            ctx.fillRect(plot_x, plot_y, recx, recy);
            nodes.push({ x: plot_x, y: plot_y });
            points--;
        }
    }

    var WireUpUIEvents = function () {
        $("#btnInfectStart").click(function () {
            StartInfection();
        });

        $("#btnInfectRun").click(function () {
            RunInfection();
        });        

        $("#btnReload").click(function () {
            Reload();
        });
        
        $('#nodecount').on('input',function(e){
            Reload();
        });

        $('#fanout').on('input',function(e){
            Reload();
        });

        $('#initinf').on('input',function(e){
            Reload();
        });

    }

    var GetRandNode = function(){
        var retval = Math.floor(Math.random() * nodes.length);
        if(jQuery.inArray(retval, infectedIndex) == -1){
            infectedIndex.push(retval);
            if(infectedIndex.length == nodes.length){
                AllInfected();
            }
        }
        return retval;
    }

    var ConnectInfect = function(origin, dest){
        ctx.beginPath();
        var shimX = recx/2;
        var shimY = recy/2;
        ctx.moveTo(origin.x + shimX, origin.y + shimY);
        ctx.lineTo(dest.x + shimX,dest.y + shimY);
        ctx.fillStyle="red";
        ctx.fillRect(dest.x,dest.y,recx,recy);
        ctx.strokeStyle="#FF0000";
        ctx.stroke();
        $('#steps').html(steps++);
    }

    var InitInfect = function(num){
        ctx.fillStyle="red";
        while(num){           
            var infectedNode = nodes[GetRandNode()];
            ctx.fillRect(infectedNode.x,infectedNode.y,recx,recy);
            num--;
        }
    }

    var Reload = function(){
        points = parseInt($("#nodecount").val());
        fanout = parseInt($("#fanout").val());
        infectStart = parseInt($("#initinf").val());
        steps = 0;
        $('#steps').html(steps);
        nodes = [];
        infectedIndex = [];
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        DrawCanvas();
        $("#btnInfectStart").prop('disabled', false);
        $("#btnInfectRun").prop('disabled', false);
    }

    var StartInfection = function(){        
        //randomly selecting first infected patients
        if(infectedIndex.length == 0){
            InitInfect(infectStart);
        }        
        for(var i = 0; i < infectedIndex.length; i++){
            //each infected node will fanout
            var infectedNode = nodes[infectedIndex[i]];
            for(var f = fanout; f > 0; f--)
            {                
                ConnectInfect(infectedNode, nodes[GetRandNode()]);
            }            
        }       
    }

    var RunInfection = function(){
        while(infectedIndex.length != nodes.length){
            StartInfection();
        }
    }

    var AllInfected = function(){
        $("#btnInfectStart").prop('disabled', true);
        $("#btnInfectRun").prop('disabled', true);
    }
    
    var Init = function () {
        points = parseInt($("#nodecount").val());
        fanout = parseInt($("#fanout").val());
        infectStart = parseInt($("#initinf").val());
        steps = parseInt($("#steps").html());
        DrawCanvas();
        WireUpUIEvents();
    }();    

}();

