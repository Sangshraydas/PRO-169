AFRAME.registerComponent("markerhandler",{
    init: async function(){
        this.el.addEventListener("marker-found",()=>{
            this.handleMarkerFound()
        })
        
        

        this.el.addEventListener("marker-lost",()=>{
            this.handleMarkerLost()
        });
        
    },




    handleMarkerFound:function(){
        var buttonDiv=document.getElementById("button-div")
        buttonDiv.style.flex()
    
        var orderButtton = document.getElementById("order-button");
        var orderSummaryButtton = document.getElementById("order-summary-button");

        orderButtton.addEventListener("click",()=>{
            swal({
                icon:"https://i.imgur.com/4NZ6uLY.jpg",
                title:"Thanks for Order",
                text:" ",
                enterButtons:false
            })
        })
    
        
        orderSummaryButtton.addEventListener("click", () => {
            swal({
              icon: "warning",
              title: "Order Summary",
              text: "Work In Progress"
            });
          });
    },

    handleMarkerLost: function() {
        // Changing button div visibility
        var buttonDiv = document.getElementById("button-div");
        buttonDiv.style.display = "none";
      }

})