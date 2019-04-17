$( document ).ready(function() {
    // $('input#ptax').val(12343);
    let propertyDetailsObj = {
    };

    let propertyValueObj = {

    };

    let propertyFinancingObj = {

    };

    let propertyHoldingCostObj = {
    };

    let propertyBuyingCostObj = {
    };

    let propertySellingCostObj = {
    };

    let propertyBurrObj = {

    };

    let propertyRentalObj = {
    };

    // let getInputKeyVal = () => {
    //     $("#propertydemographics").find('input').on('click', ()=> {
    //         console.log($(this).val());
    //     })
    // }

    let printConsole = (stringVal, valToPrint, printTrue) => {
        if(printTrue)
            console.log(stringVal, valToPrint);
    };

    $("#propertydemographics").find('input').on('input', (el) => {
        propertyDetailsObj[el.currentTarget.attributes.id.value] = el.currentTarget.value;
        printConsole("property demographics obj", propertyDetailsObj, false);
    });

    $("#propertynumbers").find('input').on('input', (el) => {
        propertyValueObj[el.currentTarget.attributes.id.value] = el.currentTarget.value;
        printConsole("property valy obj", propertyValueObj, false);
    });

    $("#financingnumbers").find('input').on('input', (el) => {
        propertyFinancingObj[el.currentTarget.attributes.id.value] = el.currentTarget.value;
        printConsole("financing cost obj", propertyFinancingObj, false);
    });

    $("#holdincostnumbers").find('input').on('input', (el) => {
        propertyHoldingCostObj[el.currentTarget.attributes.id.value] = el.currentTarget.value;
        printConsole("holding cost obj", propertyHoldingCostObj, false);
    });

    $("#buyingcostnumbers").find('input').on('input', (el) => {
        propertyBuyingCostObj[el.currentTarget.attributes.id.value] = el.currentTarget.value;
        printConsole("buying obj", propertyBuyingCostObj, false);
    });

    $("#sellingcostnumbers").find('input').on('input', (el) => {
        propertySellingCostObj[el.currentTarget.attributes.id.value] = el.currentTarget.value;
        printConsole("selling obj", propertySellingCostObj, false);
    });

    $("#burrrnumbers").find('input').on('input', (el) => {
        propertyBurrObj[el.currentTarget.attributes.id.value] = el.currentTarget.value;
        printConsole("burr obj", propertyBurrObj);
    });

    $("#rentalnumbers").find('input').on('input', (el) => {
        propertyRentalObj[el.currentTarget.attributes.id.value] = el.currentTarget.value;
        printConsole("rental obj", propertyRentalObj, false);
    });

    /**
     * Calculating the total financing cost.
     */

    let totalFinancingCost = () => {
        if($('input#fm_monthly_inter').val() && $('input#fm_points').val() && $('input#hold_period').val())
        {

            let firstPointVal = $('input#fm_points').val();
            let holdingMonths = $('input#hold_period').val();
            let monthlyPay = $('input#fm_monthly_inter').val();

            firstPointVal = parseInt(firstPointVal.replace(/\D/g,'')) ;
            holdingMonths = parseInt(holdingMonths.replace(/\D/g,'')) ;
            monthlyPay = parseInt(monthlyPay.replace(/\D/g,'')) ;

            let totalCost = (monthlyPay*holdingMonths)+firstPointVal;
            printConsole("all cost got; ",totalCost, false);

            $('input#finance_cost').val(totalCost);
            $('input.finance_cost').val(totalCost);
            // $('span.finance_cost').text(totalCost);
        }
    };



    $('input#fm_monthly_inter').on('input',function(e){
        printConsole("Changed monthly input!", this.value, false);
        totalFinancingCost();
    });

    $('input#fm_points').on('input',function(e){
        printConsole("Changed points input!", this.value, false);
        totalFinancingCost();
    });

    $('input#hold_period').on('input',function(e){
        printConsole("Changed holding input!", this.value, false);
        totalFinancingCost();
    });

    /**
     * Copy property pricing to the snapshot.
     */

    $('input#listed_price').on('input',function(e){
        $('input.listed_price').val(this.value);
    });
    $('input#purchase_price').on('input',function(e){
        $('input.purchase_price').val(this.value);
    });
    $('input#repair_price').on('input',function(e){
        $('input.repair_price').val(this.value);
    });
    $('input#after_repair_price').on('input',function(e){
        $('input.after_repair_price').val(this.value);
    });

    /**
     * Calculating the total Holding  cost.
     */

    let totalHoldingCost = () => {

        let ptax = parseInt($('input#property_tax').val().replace(/\D/g,''));
        let piti = parseInt($('input#piti_price').val().replace(/\D/g,''));
        let hoa = parseInt($('input#hoa_fees').val().replace(/\D/g,''));
        let ic = parseInt($('input#insurance_cost').val().replace(/\D/g,''));
        let uc = parseInt($('input#utility_cost').val().replace(/\D/g,''));
        let gas = parseInt($('input#gas_cost').val().replace(/\D/g,''));
        let water = parseInt($('input#water_cost').val().replace(/\D/g,''));
        let ec = parseInt($('input#electricity_cost').val().replace(/\D/g,''));
        let misc = parseInt($('input#misc_cost').val().replace(/\D/g,''));

        ptax = (ptax) ? ptax : 0;
        piti = (piti) ? piti : 0;
        hoa = (hoa) ? hoa : 0;
        ic = (ic) ? ic : 0;
        uc = (uc) ? uc : 0;
        gas = (gas) ? gas : 0;
        water = (water) ? water : 0;
        ec = (ec) ? ec : 0;
        misc = (misc) ? misc : 0;

        let holdingMonths = $('input#hold_period').val();
        holdingMonths = parseInt(holdingMonths.replace(/\D/g,'')) ;

        let totalHoldingCost = (ptax + piti + hoa + ic + uc + gas + water + ec + misc)*holdingMonths;

        printConsole("all holding  got; ",totalHoldingCost, true);

        // $('input#finance_cost').val(totalCost);
        $('input.t_holding_cost').val(totalHoldingCost);
        // $('span.finance_cost').text(totalHoldingCost);
    };

    /**
     * Copy holding tab values to calculations.
     */

    $('input#property_tax').on('input',function(e){
        printConsole("Changed monthly input!", this.value, false);
        totalHoldingCost();
    });
    $('input#piti_price').on('input',function(e){
        printConsole("Changed points input!", this.value, false);
        totalHoldingCost();
    });
    $('input#hoa_fees').on('input',function(e){
        printConsole("Changed holding input!", this.value, false);
        totalHoldingCost();
    });
    $('input#insurance_cost').on('input',function(e){
        printConsole("Changed monthly input!", this.value, false);
        totalHoldingCost();
    });
    $('input#utility_cost').on('input',function(e){
        printConsole("Changed points input!", this.value, false);
        totalHoldingCost();
    });
    $('input#gas_cost').on('input',function(e){
        printConsole("Changed holding input!", this.value, false);
        totalHoldingCost();
    });
    $('input#water_cost').on('input',function(e){
        printConsole("Changed monthly input!", this.value, false);
        totalHoldingCost();
    });
    $('input#electricity_cost').on('input',function(e){
        printConsole("Changed points input!", this.value, false);
        totalHoldingCost();
    });
    $('input#misc_cost').on('input',function(e){
        printConsole("Changed holding input!", this.value, false);
        totalHoldingCost();
    });


    /**
     * Calculating the total Buying  cost.
     */

    let totalbuyingCost = () => {

        let ep = parseInt($('input#escrew_price').val().replace(/\D/g,''));
        let tip = parseInt($('input#title_ins_price').val().replace(/\D/g,''));
        let srp = parseInt($('input#selling_record_price').val().replace(/\D/g,''));
        let wp = parseInt($('input#warrenty_price').val().replace(/\D/g,''));
        let rp = parseInt($('input#realter_price').val().replace(/\D/g,''));
        let mp = parseInt($('input#misc_price').val().replace(/\D/g,''));

        ep = (ep) ? ep : 0;
        tip = (tip) ? tip : 0;
        srp = (srp) ? srp : 0;
        wp = (wp) ? wp : 0;
        rp = (rp) ? rp : 0;
        mp = (mp) ? mp : 0;


        let totalbuyingCost = ep + tip + srp + wp + rp + mp;
        printConsole("all buying  got; ",totalbuyingCost, false);

        // $('input#finance_cost').val(totalCost);
        $('input.t_buying_cost').val(totalbuyingCost);
        // $('span.finance_cost').text(totalHoldingCost);

    };

    $('input#escrew_price').on('input',function(e){
        totalbuyingCost();
    });
    $('input#title_ins_price').on('input',function(e){
        totalbuyingCost();
    });
    $('input#selling_record_price').on('input',function(e){
        totalbuyingCost();
    });
    $('input#warrenty_price').on('input',function(e){
        totalbuyingCost();
    });
    $('input#realter_price').on('input',function(e){
        totalbuyingCost();
    });
    $('input#misc_price').on('input',function(e){
        totalbuyingCost();
    });

    /**
     * Selling cost calculation.
     */

    let totalsellingCost = () => {

        let ep = parseInt($('input#s_escrew_price').val().replace(/\D/g,''));
        let tip = parseInt($('input#s_title_ins_price').val().replace(/\D/g,''));
        let srp = parseInt($('input#s_selling_record_price').val().replace(/\D/g,''));
        let wp = parseInt($('input#s_warrenty_price').val().replace(/\D/g,''));
        let rp = parseInt($('input#s_realter_price').val().replace(/\D/g,''));
        let mp = parseInt($('input#s_misc_price').val().replace(/\D/g,''));

        ep = (ep) ? ep : 0;
        tip = (tip) ? tip : 0;
        srp = (srp) ? srp : 0;
        wp = (wp) ? wp : 0;
        rp = (rp) ? rp : 0;
        mp = (mp) ? mp : 0;


        let totalsellingCost = ep + tip + srp + wp + rp + mp;
        printConsole("all seling  got; ",totalsellingCost, false);

        // $('input#finance_cost').val(totalCost);
        $('input.t_selling_cost').val(totalsellingCost);
        // $('span.finance_cost').text(totalHoldingCost);

    };

    $('input#s_escrew_price').on('input',function(e){
        totalsellingCost();
    });
    $('input#s_title_ins_price').on('input',function(e){
        totalsellingCost();
    });
    $('input#s_selling_record_price').on('input',function(e){
        totalsellingCost();
    });
    $('input#s_warrenty_price').on('input',function(e){
        totalsellingCost();
    });
    $('input#s_realter_price').on('input',function(e){
        totalsellingCost();
    });
    $('input#s_misc_price').on('input',function(e){
        totalsellingCost();
    });


    let burrrCost = () => {

        let dp = parseInt($('input#downpayment').val().replace(/\D/g,''));
        let pp = parseInt($('input#purchaseprice').val().replace(/\D/g,''));
        let rehabc = parseInt($('input#rehabcost').val().replace(/\D/g,''));
        let arv = parseInt($('input#arv_val').val().replace(/\D/g,''));
        let rental = parseInt($('input#rent').val().replace(/\D/g,''));
        let pitim = parseInt($('input#rpiti').val().replace(/\D/g,''));

        let ptaxa = parseInt($('input#ptax').val().replace(/\D/g,''));
        let hins = parseInt($('input#hinsurance').val().replace(/\D/g,''));
        let rhoa = parseInt($('input#rhoa').val().replace(/\D/g,''));
        let mhins = parseInt($('input#mhinsurance').val().replace(/\D/g,''));
        let mcost = parseInt($('input#mcost').val().replace(/\D/g,''));

        dp = (dp) ? dp : 0;
        pp = (pp) ? pp : 0;
        rehabc = (rehabc) ? rehabc : 0;
        arv = (arv) ? arv : 0;
        rental = (rental) ? rental : 0;
        pitim = (pitim) ? pitim : 0;
        ptaxa = (ptaxa) ? ptaxa : 0;
        hins = (hins) ? hins : 0;
        rhoa = (rhoa) ? rhoa : 0;
        mhins = (mhins) ? mhins : 0;
        mcost = (mcost) ? mcost : 0;

        // Equity calculations
        let new_eqity = arv - (pp + rehabc + dp);
        printConsole("new_eqity; ",new_eqity, true);


        // Monthly cash flow
        let cashflow_m = rental - (pitim + ptaxa + hins + rhoa + mhins + mcost);
        printConsole("monthly cash flow; ", cashflow_m, true);

        // Yearly cash flow
        let cashflow_y = cashflow_m * 12;
        printConsole("yearly cash flow; ", cashflow_y, true);

        // $('input#finance_cost').val(totalCost);
        $('input.eqity').val(new_eqity);
        $('input.cashflow_m').val(cashflow_m);
        $('input.cashflow_y').val(cashflow_y);

        // $('span.finance_cost').text(totalHoldingCost);
    };


    $('input#downpayment').on('input',function(e){
        burrrCost();
    });
    $('input#purchaseprice').on('input',function(e){
        burrrCost();
    });
    $('input#rehabcost').on('input',function(e){
        burrrCost();
    });
    $('input#arv_val').on('input',function(e){
        burrrCost();
    });
    $('input#rent').on('input',function(e){
        burrrCost();
    });
    $('input#rpiti').on('input',function(e){
        burrrCost();
    });

    $('input#ptax').on('input',function(e){
        burrrCost();
    });
    $('input#hinsurance').on('input',function(e){
        burrrCost();
    });
    $('input#rhoa').on('input',function(e){
        burrrCost();
    });
    $('input#mhinsurance').on('input',function(e){
        burrrCost();
    });
    $('input#mcost').on('input',function(e){
        burrrCost();
    });

});

;
$( document ).ready(function() {
    console.log( "ready!" );
    var doc = new jsPDF();
    var specialElementHandlers = {
        '#editor': function (element, renderer) {
            return true;
        }
    };
    $('#print-button').click(function () {
        doc.fromHTML($('#body-div').html(), 15, 15, {
            'width': 170,
            'elementHandlers': specialElementHandlers
        });
        doc.save('sample-file.pdf');
    });

    $('#snapshot-button').click(function () {
        $('html,body').animate({
            scrollTop: $(".ss-style").offset().top + 1500
        });
    });

    $('.top-btn').click(function () {
        $('html,body').animate({
            scrollTop: $("#navbar-div").offset().top
        });
    });


    $('input.numbervalidation').on('input',function(e){
        console.log('Changed!');
        this.value = this.value.replace(/[^0-9]/g, '');
    });

    let getzillowdata = (urlPram, _method) => {
        return new Promise( (resolve, reject) => {
            $.ajax({
                method: _method,
                url: urlPram,
                headers: {"Content-Type":"text/xml;charset=UTF-8"},
                xhrFields: {
                    withCredentials: true
                },
                crossDomain: true,
                success:  (data) => {
                    console.log("zillow api call success:", data);
                    resolve(data);
                }
            });
        });
    };


    // $("#formContent").submit(function(e){
    //     e.preventDefault();
    //
    //     var formdata = new FormData($(this));
    //     $.each($('#upload')[0].files, function(i, file) {
    //         formdata.append('file-'+i, file);
    //     });
    //
    //     console.log("Files uploaded: ", formdata);
    //
    //     // $.ajax({
    //     //     url: "ajax_upload_image.php",
    //     //     method: "POST",
    //     //     data: formdata,
    //     //     mimeTypes:"multipart/form-data",
    //     //     contentType: false,
    //     //     cache: false,
    //     //     processData: false,
    //     //     success: function(){
    //     //         console.log("file successfully submitted");
    //     //     },error: function(){
    //     //         console.log("okey");
    //     //     }
    //     // });
    // });

    const form = document.querySelector('form');

    form.addEventListener('submit', e => {
        e.preventDefault();

        const files = document.querySelector('[type=file]').files;
        const formData = new FormData();

        for (let i = 0; i < files.length; i++) {
            let file = files[i];

            formData.append('files[]', file)
        }
        console.log("Files uploaded: ", formData);
        // $.ajax({
        //         url: "ajax_upload_image.php",
        //         method: "POST",
        //         data: formdata,
        //         mimeTypes:"multipart/form-data",
        //         contentType: false,
        //         cache: false,
        //         processData: false,
        //         success: function(){
        //             console.log("file successfully submitted");
        //         },error: function(){
        //             console.log("okey");
        //         }
        //     });
    });

    let sampleUrl = 'http://www.zillow.com/webservice/GetSearchResults.htm?zws-id=X1-ZWz1h0eeic9823_18y6r&address=8215+Manhattan+Dr&citystatezip=95210';
    let callzillowAPI = () => {
        return getzillowdata(sampleUrl, 'GET')
            .then( (gotData) => {
                console.log("Got zillow api data",gotData);
            });
    };

    $('.collapsible').collapsible({
        accordion : false
    });
    $('.button-collapse').sideNav({
            menuWidth: 300, // Default is 240
            edge: 'left', // Choose the horizontal origin
            closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
        }
    );

});

