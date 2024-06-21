//This is the base javascript filefunction billme()
function SF(x) {
  return x.toPrecision(3);
}

function billme()
{
        var v1= document.order.W.value;
        var v4= document.order.WL.value;
		var v7= document.order.H.value;

        //These lines define the variables.
        
         var   W= parseFloat(v1);
         var   WL= parseFloat(v4);
		 var  H=parseFloat(v7);
		 var GP=0.389*H;
         var GH=0.46*GP;
        var   LAWAH= GH;// In html, it is LAAH ??
        var LAWL = GP;
        var es = 15*Math.PI/180  // for 15 degree
        var LAES = 0.25*GP * Math.sin(es);
        var THETAES=15;
        

        

        //These lines make sure that variables 1, 2, and 3 are numbers.
			order.WAH.value=SF(W*0.048)
            order.subtotalBox.value= SF((W*0.048*LAWAH+WL*LAWL)/LAES) //Fdeltoid

            var JRFH=SF(order.subtotalBox.value*Math.cos(es));
            var JRFV=SF(order.subtotalBox.value*Math.sin(es)-W*0.048-WL);
			order.JRFV.value=JRFV
			order.JRFH.value=JRFH

			order.LAWAH.value=LAWAH.toPrecision(3);
			order.LAWL.value=LAWL.toPrecision(3);
            order.LAES.value=LAES.toPrecision(3);
            order.JRF.value=SF(Math.sqrt(JRFH*JRFH+JRFV*JRFV));
			document.order.WAH.value=document.order.WAH.value.toPrecision(3)
			document.order.subtotalBox.value=document.order.subtotalBox.value.toPrecision(3)
            document.order.JRF.value=document.order.JRF.value.toPrecision(3)
            document.order.JRFH.value=document.order.JRFH.value.toPrecision(3)
            document.order.JRFV.value=document.order.JRFV.value.toPrecision(3)

        }
