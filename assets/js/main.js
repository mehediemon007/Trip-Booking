;(function($){

    // WOW Animation
    
    $(document).ready(function () {
        new WOW().init();
    });

    // Offer Slider

    
    $(".offers-slider").owlCarousel({
        items:2.5,
        loop:true,
        autoplay:false,
        slideBy: 2,
        nav:true,
        navText: ["<i class='icofont-thin-left'></i>","<i class='icofont-thin-right'></i>"],
        dots:false,
        responsive:{
            // 0:{
            //     items: 2,
            //     center:false
            // },
            // 575:{
            //     items: 5,
            //     center:true,
            // },
        }
    })

    // Trip Slider

    
    $(".trips-slider").owlCarousel({
        items:5.5,
        loop:true,
        autoplay:false,
        slideBy: 1,
        nav:true,
        navText: ["<i class='icofont-thin-left'></i>","<i class='icofont-thin-right'></i>"],
        dots:false,
        margin: 16,
        responsive:{
            // 0:{
            //     items: 2,
            //     center:false
            // },
            // 575:{
            //     items: 5,
            //     center:true,
            // },
        }
    })

    // Quick Links Slider

    $(".quick-links-slider").owlCarousel({
        items:3,
        loop:true,
        autoplay:false,
        slideBy: 1,
        nav:true,
        navText: ["<i class='icofont-thin-left'></i>","<i class='icofont-thin-right'></i>"],
        dots:false,
        margin: 16,
        responsive:{
            // 0:{
            //     items: 2,
            //     center:false
            // },
            // 575:{
            //     items: 5,
            //     center:true,
            // },
        }
    })

    // Hotel Image Slider

    $(".hotel-image-slides").owlCarousel({
        items:1,
        loop:true,
        autoplay:false,
        nav:true,
        navText: ["<i class='icofont-thin-left'></i>","<i class='icofont-thin-right'></i>"],
        dots:false,
        margin:8,
    })

    $('.owl-nav button').attr('aria-label', 'owl-navigation');

    // Ticket Options

    $(".option-select-btn").on("click",function(){
        $(this).next(".travel-options").addClass("show")
        // $(".travel-options").addClass("show");
    })

    $(".travel-options .opts-apply").on("click",function(){
        $(".travel-options").removeClass("show");
    })

    // Room Options
    
    $(".option-select-btn").on("click",function(){
        $(this).next(".room-options").addClass("show")
        // $(".travel-options").addClass("show");
    })

    $(".room-options .opts-apply").on("click",function(){
        $(".room-options").removeClass("show");
    })

    $(window).click(function(){
        if($(".room-options").hasClass("show")){
            
        }
    })

    // Nice Select

    $("select").niceSelect();

    // Toggle Price Range

    $(".flight-category .nav-link").on("click",function(){
        if($("#short-tab").hasClass("active")){
            $(".price-filter").css("display", "none")
        }else{
            $(".price-filter").css("display", "block");
        }
    })

    // toggle Flight Info

    $(".info-toggle").on("click",function(){
        if($(this).text() == 'Show Flight Details'){
            $(this).text("Hide Flight Details")
        }else{
            $(this).text("Show Flight Details")
        }
        $(this).parent().siblings('.flight-info-details').slideToggle("300")
    })

    // Toggle Visa Info

    $(".require-info-toggle").on("click",function(){
        if($(this).text() == 'View Required Documents'){
            $(this).text("Hide Required Documents")
        }else{
            $(this).text("View Required Documents")
        }
        $(this).parent().parent().siblings('.visa-requirement-details').slideToggle("300")
    })

    // Card Content Toggle

    $(".content-toggle").on("click",function(){
        $("i", this).toggleClass("icofont-circled-up icofont-circled-down");
        $(this).siblings(".card-body").slideToggle("300")
    })

    // Range Date Picker

    $(function() {
        $('input[name="datetimes"]').daterangepicker({
          timePicker: false,
          startDate: moment().startOf('hour'),
          endDate: moment().startOf('hour').add(32, 'hour'),
          locale: {
            format: 'MM/DD/YYYY'
          }
        });

        $(".datetimes").each(function(i,elem){
            $(elem).on("change",function(){

                const selecDates = $(this).val().split("-");
                const depDate = selecDates[0];
                const reDate = selecDates[1];

                // const selectDate = $(this).val();
                // const lastDate = selectDate.split("-")[1];
    
                // const lastDateStr = new Date(lastDate);

                const depDateStr = new Date(depDate);
                const reDateStr = new Date(reDate);
    
                const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };

                let formateDepDate = depDateStr.toLocaleDateString('en-DE', options);
                let depDateValue = formateDepDate.split(/,| /);
                depDateValue.splice(1,1);

                let formateReDate = reDateStr.toLocaleDateString('en-DE', options);
                let reDateValue = formateReDate.split(/,| /);
                reDateValue.splice(1,1);
    
                // var dateEle =  '<h2>'+ dateValue[1] +'<sub>'+ dateValue[2] +'\''+ dateValue[3].slice(-2) +'</sub></h2> <p>'+ dateValue[0] +'</p>';

                let depDateEle =  `<h2>${depDateValue[1]} <sub>${depDateValue[2]}'${depDateValue[3].slice(-2)}</sub></h2> <p>${depDateValue[0]}</p>`;
                let reDateEle =  `<h2>${reDateValue[1]} <sub>${reDateValue[2]}'${reDateValue[3].slice(-2)}</sub></h2> <p>${reDateValue[0]}</p>`;

                $("#dep-date").siblings(".option-select-btn").html(depDateEle)
                $(this).siblings('.option-select-btn').html(reDateEle)
    
            })
        })
    });

    // Date Picker

    if($(".datePicker").length){
        $(".datePicker").datepicker({
            format:'mm/dd/yyyy',
            autoclose:true,
            offset: 10,
        }).datepicker("setDate",'now');

        $(function() {

            $(".option-select-btn").siblings('.datePicker').each(function(i,elem){
                const currentDate = $(elem).datepicker( "getDate" );
                const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
                let formateDate = currentDate.toLocaleDateString('en-DE', options);
                let dateValue = formateDate.split(/,| /);
                dateValue.splice(1,1);

                let dateEle =  `<h2>${dateValue[1]} <sub>${dateValue[2]}'${dateValue[3].slice(-2)}</sub></h2> <p>${dateValue[0]}</p>`;

                $(this).siblings('.option-select-btn').html(dateEle);
                
            })

        });

        $(".datePicker").on("focus",function(){
            var dim = $(this).offset();

            if($(this).parent(".option-select-wrapper")){
                $(".datepicker.dropdown-menu").offset({
                    top     :   dim.top + 60,
                    left    :   dim.left - 20
                });
            }
        })

        $('.datePicker').on('change', function(){
            // const selectDate = new Date(this.value);
            // const selectDate = new Date($(this).val());
            const selectDate = $(this).datepicker("getDate");
            const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
            let formateDate = selectDate.toLocaleDateString('en-DE', options);
            let dateValue = formateDate.split(/,| /);
            dateValue.splice(1,1);


            // var dateEle =  '<h2>'+ dateValue[1] +'<sub>'+ dateValue[2] +'\''+ dateValue[3].slice(-2) +'</sub></h2> <p>'+ dateValue[0] +'</p>';
            let dateEle =  `<h2>${dateValue[1]} <sub>${dateValue[2]}'${dateValue[3].slice(-2)}</sub></h2> <p>${dateValue[0]}</p>`;

            $(this).siblings('.option-select-btn').html(dateEle);
        });
        
    }

    // Filter Date

    $(".option-select-btn").on("click",function(){
        let datePickerInput = $(this).siblings(".datePicker");
        let dateTimeInput = $(this).siblings('input[name="datetimes"]');
        datePickerInput.focus();
        dateTimeInput.focus()
    })

    // Toggle Traveler Data

    $(".continue-btn").on("click",function(){
        $(".traveler-details-card").toggleClass("hide");
        $(this).css("display","none");
        $(".traveler-data-wpr").css("display","block")
    })

    // Confirm Message

    $(".booking-btn").on("click",function(){
        $(this).parent().css("display","none");
        $(this).parent().siblings(".terms").css("display","none")
        $(".booking-confirm-msg").css("display","block")
    })

    // Sign Modal

    $(".login-btn").on("click",function(e){
        e.preventDefault();
        $(".sign-modal-wpr").addClass("show")
    })

    $(".modal-close").on("click",function(){
        $(".sign-modal-wpr").removeClass("show")
    })

    // Sign Form Toggle

    $(".sign-up-link").on("click",function(e){
        e.preventDefault();
        $(".sign-in-content").css("display","none");
        $(".sign-up-content").css("display","block")
    })

    $(".sign-in-link").on("click",function(e){
        e.preventDefault();
        $(".sign-up-content").css("display","none");
        $(".sign-in-content").css("display","block")
    })

    // Password Type Toggle

    $(".pass-input > i").click(function(){
        $(this).toggleClass("icofont-eye-blocked icofont-eye-alt");
        if($(this).parents().siblings("input").attr("type") == "text"){
           $(this).parents().siblings("input").attr("type","password")
        }
        else{
         $(this).parents().siblings("input").attr("type","text")
        }
    })

     // Dropdown

    $(".faq-label").on("click", function () {
        var $this = $(this);
        $("i", this).toggleClass("icofont-rounded-down icofont-rounded-up");
        $($this).next().slideToggle("1000");
    });

})(jQuery);

(function(){

    // Sticky Nav

    const headerContainer = document.querySelector(".header-wpr");

    if(headerContainer != null){
        window.onscroll = ()=>{
            this.scrollY > 100 ? headerContainer.classList.add("sticky") : headerContainer.classList.remove("sticky");
        }
    }

    // Countdown Timer

    const startMinutes = 10;
    let time = startMinutes * 60;

    const CountdownEl = document.getElementById("countdown");

    if(CountdownEl != null){

        setInterval(updateCountdown,1000)

        function updateCountdown(){
            const min = Math.floor(time / 60);
            let sec = time % 60;

            sec = sec < 10 ? '0' + sec : sec ;

            CountdownEl.innerHTML = `<span>${min}</span> : <span>${sec}</span>`;
            time--;
        }
    }

    // Range Slider

   const slideValue = document.querySelector(".range-value .right");
   const inputSlider = document.querySelector(".range-field input");
   const rangeBg = document.querySelector(".range-bg");

   if(slideValue != null || inputSlider != null || rangeBg !=null){
        let minValue = 3000;
        let currentValue = inputSlider.value - minValue;
        let maxValue = 10000;
        let rangeValue = (maxValue - minValue);
 
        rangeBg.style.width = ((currentValue * 100 ) / rangeValue) + '%';
 
        inputSlider.oninput = (()=>{
            currentValue = inputSlider.value - minValue;
            slideValue.innerHTML = inputSlider.value + ' BDT';
            rangeBg.style.width = ((currentValue * 100 ) / rangeValue) + '%';
        });
    }

    // IntelPhoneInput

    var phoneInput = document.querySelectorAll(".phone");

    if(phoneInput != null){

        phoneInput.forEach(each => {

            window.intlTelInput(each, {
                separateDialCode: true,
                preferredCountries: ["bd", "sa"]
            });
        })
    }

    // Image Preview

    const hotelImgs = document.querySelectorAll(".hotel-images");

    if(hotelImgs != null){

        hotelImgs.forEach(each => {

        const previewImg = each.querySelector(".preview-img img");
        const thumbImgs = each.querySelectorAll(".thumbnail-images span");

            thumbImgs.forEach(each => {
                each.addEventListener("mouseover",function(){
                    const imgSrc = this.querySelector("img").getAttribute('src');
                    previewImg.setAttribute("src",imgSrc)
                })
            })

        });

    }


    // ScrollToWatch

    const stickyMenu = document.querySelector(".overview-navigation");

    if(stickyMenu != null){
        var spy = new Gumshoe('.overview-nav-menu a',{
            offset: function () {
                return headerContainer.getBoundingClientRect().height + 150;
            }
        });
    }

    // Increment Decrement Event

    const increBtn = document.querySelectorAll(".qun-up");
    const decreBtn = document.querySelectorAll(".qun-dwn");

    increBtn.forEach(each => {
        each.addEventListener("click",function(){
            const qtyInput = this.previousElementSibling;
            (qtyInput.value)++;
        })
    })

    decreBtn.forEach(each => {
        each.addEventListener("click",function(){
            const qtyInput = this.nextElementSibling;
            if(qtyInput.value == 1){
                return
            }else{
                (qtyInput.value)--;
            }
        })
    })

    // Room Selection

    const roomApply = document.querySelector(".room-apply");

    if(roomApply != null){
        roomApply.addEventListener("click",function(event){
            const qtyInputWpr = this.parentElement.parentElement;
            const qtyInputs = qtyInputWpr.querySelectorAll(".quantity-input")
            
            const optionValueEle = qtyInputWpr.previousElementSibling;

            optionValueEle.innerHTML = `<h2>${qtyInputs[0].value} <sub>Room</sub> ${qtyInputs[1].value} <sub>Adults</sub></h2>`
        })
    }

})()